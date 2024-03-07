import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloundinary = async (filePath) => {
  try {
    if (!filePath) {
      return null;
    }
    const response = await cloudinary.uploader.upload(filePath, {
      resource_type: "auto",
      unique_filename: true,
    });

    fs.unlinkSync(filePath);
    return response;
  } catch (error) {
    fs.unlinkSync(filePath);
    throw error;
  }
};

const removeOnCloudinary = async (fileUrl) => {
  try {
    const defaultUrl =
      "https://res.cloudinary.com/drwab8zjd/image/upload/v1708247029/unnon_user_ry9kuw.jpg";
    if (fileUrl === defaultUrl) return true;

    // Extract publicId from the Cloudinary URL
    const publicId = fileUrl.split("/").pop().split(".")[0];
    console.log("publicId :: ", publicId);

    // Destroy the resource on Cloudinary
    const result = await cloudinary.uploader.destroy(publicId);

    // Check if the resource was successfully destroyed
    if (result.result === "ok") {
      return true;
    } else {
      throw new Error(
        `Failed to delete file with URL ${fileUrl}: ${result.result}`
      );
    }
  } catch (error) {
    throw new Error(
      500,
      `Failed to delete file with URL ${fileUrl}: ${error.message}`
    );
  }
};

const replaceFileOnCloudinary = async (filePath, existingFileUrl) => {
  try {
    if (!filePath) return null;
    const defaultUrl =
      "https://res.cloudinary.com/drwab8zjd/image/upload/v1708247029/unnon_user_ry9kuw.jpg";
    let response;

    if (existingFileUrl !== defaultUrl) {
      const publicId = existingFileUrl.split("/").pop().split(".")[0]; // Get the last part of the URL
      response = await cloudinary.uploader.upload(filePath, {
        public_id: publicId,
        resource_type: "auto",
      });
    } else {
      response = await cloudinary.uploader.upload(filePath, {
        resource_type: "auto",
        unique_filename: true,
      });
    }
    fs.unlinkSync(filePath);
    return response;
  } catch (error) {
    fs.unlinkSync(filePath);
    throw error;
  }
};

export { uploadOnCloundinary, removeOnCloudinary, replaceFileOnCloudinary };
