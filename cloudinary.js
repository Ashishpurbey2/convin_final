const cloudinary = require('cloudinary');

// cloudinary.config({
//   cloud_name: "sathya195",
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

cloudinary.config({
  cloud_name: "dvaniudsy",
  api_key: "384143525133664",
  api_secret: "ZO3pGgXJqHQEh6HaIP8zdIvsp7s"
});



module.exports = {cloudinary};