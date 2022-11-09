const { getAllInformation, addNewInformation } = require("../models/Person.models");
const { cloudinary } = require("../cloudinary")



async function httpAddInformation(req, res){
    console.log("hit personpost");
    let details = req.body
    console.log(details);
    if (!details.name || !details.country || !details.dob
        || !req.file) {
          return res.status(400).json({
            error: 'Missing required person property',
          });
        }
    try {
        cloudinary.v2.uploader.upload(
            req.file.path,
            {
              folder: "hridoy",
              use_filename: true,
              resource_type: "raw",
            },
            async (err, result) => {
                console.log(result);
              if (err) {
                console.log(err);
                res.status(500).json({ message: "Something went wrong" });
              } else {
                details = {
                    name: req.body.name,
                    dob: req.body.dob,
                    country: req.body.country,
                    resumeUrl: result.url
                }
               let information =  await addNewInformation(details)
                
                res.status(200).send({
                  message: "Song added successfully",
                  success: true,
                  data: information,
                });
              }
            }
          );
        
    } catch (error) {
        
    }
    console.log(details);
}

async function httpGetAllInformation (req, res){
    return res.status(200).json(await getAllInformation()); 
}

module.exports = {httpGetAllInformation, httpAddInformation}