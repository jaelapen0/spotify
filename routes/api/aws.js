const AWS = require('aws-sdk')
const fs = require('fs')
const path =  require('path');
const express = require('express');
const router = express.Router();


const ACCESS_KEY_ID = "ENTER ACCESS KEY ID HERE"
const SECRET_ACCESS_KEY = "ENTER SECRET ACCESS KEY HERE"
const BUCKET_NAME = ""



router.get("/", (req, res) => {
  
   AWS.config.update({ region: 'us-east-1',
      "accessKeyId": "AKIAVOEKT5GJRSFD2XUI",
      "secretAccessKey": "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"
   });
   
   const s3 = new AWS.S3();
   const s3Params = {
      Bucket: 'jaejaespotify',
      Key: 'nasislike.mp3'
   };

   debugger;
   const filePath = "/"
   // s3.listBuckets(function (err, data) {
   //    if (err) {
   //       debugger
   //       console.log("Error", err);
         
   //    } else {
   //       debugger;
   //       console.log("Success", data.Buckets);
   //    }
   // })

   // const s3download = (bucketName, keyName, localDest) => {

      if (typeof localDest == 'undefined') {
         localDest = 'nasislike.mp3';
      }

      let params = {
         Bucket: 'jaejaespotify',
         Key: 'nasislike.mp3'
      };

      let file = fs.createWriteStream(localDest);

      // return new Promise((resolve, reject) => {
        let retrievedFile =  s3.getObject(params).createReadStream()
            // .on('end', () => {
            //    debugger;
            //    // return resolve();
            // })
            // .on('error', (error) => {
            //    debugger;
            //    return reject(error);
            // })
            retrievedFile.pipe(res);
      // });
   // };

   // s3download().pipe(res)
   // res.pipe(s3download())

//    let file = require('fs').createWriteStream('/tmp/nasislike.mp3');
//    let retrievedFile = 
//       s3.getObject(s3Params)
//          .createReadStream()
//          .on("error", error => {
//             debugger;
//        });
//       retrievedFile.pipe(res);
//  s3.
   
   debugger;
   
   // })
   // }
})

module.exports = router;