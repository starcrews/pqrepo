const cloudinary = require("cloudinary").v2,
  { CloudinaryStorage } = require("multer-storage-cloudinary"),
  config = require("./keys");

cloudinary.config({
  cloud_name: config.cloudinaryCloudName,
  api_key: config.cloudinaryApiKey,
  api_secret: config.cloudinaryApiSecret,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  folder: "pqrepo",
  allowedFormats: ["jpg", "png"],
  transformation: [{ width: 1000, height: 1000, crop: "limit" }],
});

module.exports = storage;
