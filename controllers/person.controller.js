const { getAllInformation, addNewInformation, deleteInformation } = require("../models/Person.models");
const { cloudinary } = require("../cloudinary")

const streamifier = require('streamifier')

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
        let streamUpload = (req) => {
            return new Promise((resolve, reject) => {
                let stream = cloudinary.uploader.upload_stream(
                  (error, result) => {
                    if (result) {
                      resolve(result);
                    } else {
                      reject(error);
                    }
                  }
                );
    
              streamifier.createReadStream(req.file.buffer).pipe(stream);
            });
        };
    
        
    async function upload(req, res) {
        let result = await streamUpload(req);
       let details = {
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
        console.log(result);
    }

    upload(req, res);
}

async function httpGetAllInformation (req, res){
    return res.status(200).json(await getAllInformation()); 
}

async function httpDeleteInformation(req, res){
    let data = await deleteInformation(Number(req.params.id))
    return res.status(201).json(data)
}

module.exports = {httpGetAllInformation, httpAddInformation, httpDeleteInformation}