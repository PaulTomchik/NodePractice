var mFLM = require('./makeItModularModule');

var dirPath   = process.argv[2],
    extension = process.argv[3];

mFLM(dirPath, extension, function(err, files) {
  
  if (err) console.log("Dharrr!!! ERROR");
  else files.forEach (function (file) {
    console.log(file);
  });
});
