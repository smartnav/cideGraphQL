const schools = require('./../models').schools;

/*insert query*/
exports.create = (objectToSave, callback) => {
    schools.create(objectToSave, callback);
}

exports.find = (type, findObj, callback) => {
    if(type === 1){
      schools.findOne(findObj, callback);
    }else {
      schools.find(findObj, callback)
    }
}

exports.update = function(matchObj, updateObj, options, callback) {
    schools.findOneAndUpdate(matchObj, { $set: updateObj }, options, callback);
}

exports.delete = function(matchObj, callback) {
    schools.deleteOne(matchObj, callback);
}

exports.getCount = function(matchObj) {
  return new Promise(function(resolve, reject) {
    schools.count(matchObj, function(err, counts) {
      if(err){
        resolve(0);
      }else {
        resolve(counts);
      }
    })
  });
}
