import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

const verifyJwt = async (req, res, next) => {
  try {
    const token = req.cookies.accessToken || req.headers.Authorization;

    if (!token) {
      return handleUnauthorized(res);
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, decode) => {
      if (err) {
        return handleUnauthorized(res);
      }

      const user = await User.findOne({ _id: decode?._id }).select("-password");
      if (!user) {
        return handleUnauthorized(res);
      }

      req.user = user;
      next();
    });
  } catch (err) {
    return res.status(404).send({ message: err.message, status: false });
  }
};

export { verifyJwt };

const handleUnauthorized = (res) => {
  res
    .status(401)
    .cookie("accessToken", null, { expires: new Date(Date.now()) })
    .clearCookie("accessToken")
    .json({ success: false, message: "You are not authorized" });
};
