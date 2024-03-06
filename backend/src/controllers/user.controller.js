import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import {
  removeOnCloudinary,
  replaceFileOnCloudinary,
  uploadOnCloundinary,
} from "../utils/cloudinary.js";
import { User } from "../models/user.model.js";
import { cookieOpt } from "../constants.js";

const registorUser = asyncHandler(async (req, res) => {
  // retrive user data from req
  const { name, email, phone, password } = req.body;

  // validate all requreid field
  if ([name, email, phone, password].some((v) => v.trim() === "")) {
    return res
      .status(400)
      .json({ success: false, message: "All field area required" });
  }

  // check email of user allready exist
  const existedUser = await User.findOne({ email });
  console.log(existedUser);
  if (existedUser) {
    return res
      .status(409)
      .json({ success: false, message: "User with email allready exists" });
  }

  // create user object - create entry in db
  const user = await User.create({
    name,
    email: email.toLowerCase(),
    phone,
    password,
    role: "user",
    username: `IFAST/${new Date().getFullYear()}/${
      (await User.countDocuments()) + 1
    }`,
  });

  // check user createtion on db and remove unwanted field
  const createdUser = await User.findById(user._id).select(
    "-password -courses -feedback"
  );

  if (!createdUser) {
    return res.status(200).json({
      success: false,
      message: "Something went wrong while registering",
    });
  }

  // send user resposive
  return res
    .status(200)
    .json(new ApiResponse(200, createdUser, "User created successfully."));
});

const loginUser = asyncHandler(async (req, res) => {
  // retrive data from body for login in need
  const { emailorusername, password } = req.body;

  // validate data
  if (!emailorusername) {
    return res
      .status(400)
      .json({ success: false, message: "username or email requried." });
  }

  const user = await User.findOne({
    $or: [{ email: emailorusername }, { username: emailorusername }],
  });

  // check user exits or not
  if (!user) {
    return res
      .status(404)
      .json({ success: false, message: "User do not exist" });
  }

  // compare password
  const isCurrectPassoword = await user.isPasswordCurrect(password);

  if (!isCurrectPassoword) {
    return res
      .status(401)
      .json({ success: false, message: "Invaild user credentials" });
  }

  // genrate access token
  const accessToken = await user.generateAccessToken();

  const loggedInUser = await User.findById(user._id).select(
    "-password -courses -feedback"
  );

  // send cookie and send in resposve
  return res
    .status(200)
    .cookie("accessToken", accessToken, cookieOpt)
    .json(
      new ApiResponse(
        200,
        { loggedInUser, accessToken },
        "User loggin successfully"
      )
    );
});

const logoutUser = asyncHandler(async (_, res) => {
  return res
    .status(200)
    .clearCookie("accessToken", cookieOpt)
    .json(new ApiResponse(200, {}, "User logout successfully"));
});

const updateCurrentPassword = asyncHandler(async (req, res) => {
  // get user of old password and new password
  const { oldPassword, newPssoword } = req.body;
  const user = await User.findById(req.user._id);

  // verify old password
  const isOldPassword = await user.isPasswordCurrect(oldPassword);
  if (!isOldPassword) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid old password" });
  }

  // update new password
  user.password = newPssoword;
  await user.save({ validateBeforeSave: false });

  //send response
  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Password updated successfully"));
});

const updateAccountDetails = asyncHandler(async (req, res) => {
  const {
    name,
    address = "",
    phone,
    aboutUs = "",
    socialLinks = [],
    dateOfBirth,
    gender,
  } = req.body;

  if (!name && !phone && !gender && !dateOfBirth) {
    return res.status(400).json({
      success: false,
      message: "Name or Phone or Dob or Gender are requried",
    });
  }

  const user = await User.findByIdAndUpdate(
    req.user?._id,
    {
      $set: {
        name,
        phone,
        gender,
        dateOfBirth: new Date(),
        address,
        aboutUs,
        socialLinks: socialLinks,
      },
    },
    { new: true }
  ).select("-password -courses -feedback");

  return res
    .status(200)
    .json(new ApiResponse(200, user, "User updated successfully"));
});

const updateUserAvatar = asyncHandler(async (req, res) => {
  // get user avatar local path from req
  const avatarLocalPath = req.file?.path;

  // check user avtar have or not
  if (!avatarLocalPath) {
    return req
      .status(400)
      .json({ success: false, message: "Avatar is missing" });
  }

  const priviousAvatarUrl = req.user?.avatar;

  // uplode avatar on cloudinary
  // const avatar = await uploadOnCloundinary(avatarLocalPath);
  const avatar = await replaceFileOnCloudinary(
    avatarLocalPath,
    priviousAvatarUrl
  );

  if (!avatar.url) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong while uploading avatar",
    });
  }

  // update user avatar
  const user = await User.findByIdAndUpdate(
    req.user?._id,
    {
      $set: {
        avatar: avatar?.url,
      },
    },
    { new: true }
  ).select("-password");

  // now delte priveus image on cloundinay
  // await removeOnCloudinary(priviousAvatarUrl);

  // return response
  return res
    .status(200)
    .json(new ApiResponse(200, user, "Avatar updated successfully"));
});

const getCurrentUser = asyncHandler(async (req, res) => {
  return res
    .status(200)
    .json(new ApiResponse(200, req.user, "Current user fetched successfully"));
});

const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user?._id).select("-password");

  if (!user) {
    return res
      .status(404)
      .json({ success: false, message: "User do not existed" });
  }

  return res
    .status(200)
    .json(new ApiResponse(200, user, "User profile fetched successfully"));
});

const deleteUser = asyncHandler(async (req, res) => {
  const password = req.body.password;
  if (!password) {
    return res
      .status(400)
      .json({ success: false, message: "Password is required" });
  }

  const user = await User.findById(req.user?._id);
  if (!user) {
    res.status(404).json({ success: false, message: "user do not exists" });
  }

  const isCurrectPassword = user.isPasswordCurrect(password);
  if (!isCurrectPassword) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid Password" });
  }

  await User.deleteOne({ email: user.email });
  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Account deleted successfully"));
});

export {
  registorUser,
  loginUser,
  logoutUser,
  updateCurrentPassword,
  updateAccountDetails,
  updateUserAvatar,
  getCurrentUser,
  getUserProfile,
  deleteUser,
};
