const fileUpload = require('express-fileupload');
let upload = {};

var des=process.cwd()+"\\portfolios\\default"
upload.uploadimg = (file,id,name,upname) =>{
  
  var dir="..\\"+id+".growupinfo.com"
  if (!file || Object.keys(file).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }
  else{
    console.log("name of file")
  if(upname)
  {
    console.log(upname)
    upname.mv(dir+"\\images\\"+name, function(err){
    if(err)
    {
      console.log(err)
      return false
    }
    else{
          console.log("file uploaded")
        }
      })
    }
    else
    {
      console.log("no file sent")
    }
  }
  
}
  
module.exports = upload;
