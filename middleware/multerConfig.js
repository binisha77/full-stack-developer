const multer = require('multer')

 const storage = multer.diskStorage({
  destination : function(req,file,cb){
    cb(null,'./storage') //cb(error, sucess)
  },
  filename : function(ereq,file,cb){
cb(null,"Binisha-" + file.originalname)
  }
})

// module.exports = multer for only one
module.exports ={
  multer,
  storage
}
