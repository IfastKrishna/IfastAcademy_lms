import React, { useState } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import axios from "axios"; // Import Axios library
import { Card, CardBody, CardFooter, Button } from "@material-tailwind/react";

function AvatarUploader({ avatar }) {
  const [crop, setCrop] = useState({
    drawImage: true,
    aspectRatio: 1,
    unit: "%",
    x: 0,
    y: 0,
    width: 100,
    height: 100,
  });

  const handleCancel = () => {
    console.log("Cancel clicked");
  };

  const handleUpload = async () => {
    if (!crop) {
      console.error("No crop detected!");
      return;
    }

    const croppedImageUrl = await getCroppedImg(avatar, crop);

    const formData = new FormData();
    formData.append("avatar", "avatar.jpg");
    console.log(formData);

    // try {
    //   const response = await axios.post("/upload", formData, {
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //     },
    //   });
    //   console.log("Upload successful:", response.data);
    // } catch (error) {
    //   console.error("Error uploading:", error);
    // }
  };

  const getCroppedImg = (imageSrc, crop) => {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.src = imageSrc;
      image.onload = () => {
        const canvas = document.createElement("canvas");
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;
        canvas.width = crop.width;
        canvas.height = crop.height;
        const ctx = canvas.getContext("2d");

        ctx.drawImage(
          image,
          crop.x * scaleX,
          crop.y * scaleY,
          crop.width * scaleX,
          crop.height * scaleY,
          0,
          0,
          crop.width,
          crop.height
        );

        canvas.toBlob((blob) => {
          resolve(blob);
        }, "image/jpeg");
      };
      image.onerror = (error) => {
        reject(error);
      };
    });
  };

  return (
    <Card>
      <CardBody>
        <ReactCrop
          crop={crop}
          onChange={(newCrop) => setCrop(newCrop)}
          circularCrop={true}
        >
          <img src={avatar} />
        </ReactCrop>
      </CardBody>
      <CardFooter>
        <Button onClick={handleCancel}>Cancel</Button>
        <Button onClick={handleUpload}>Upload</Button>
      </CardFooter>
    </Card>
  );
}

export default AvatarUploader;
