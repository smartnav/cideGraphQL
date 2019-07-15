const cycles = require('./../models').cycles;

/*insert query*/
exports.create = (objectToSave, callback) => {
    cycles.create(objectToSave, callback);
}

exports.find = (type, findObj, callback) => {
    if(type === 1){
      cycles.findOne(findObj, callback);
    }else {
      cycles.find(findObj, callback)
    }
}

exports.update = function(matchObj, updateObj, options, callback) {
    cycles.findOneAndUpdate(matchObj, { $set: updateObj }, options, callback);
}

exports.delete = function(matchObj, callback) {
    cycles.deleteOne(matchObj, callback);
}

exports.getCount = function(matchObj) {
  return new Promise(function(resolve, reject) {
    cycles.count(matchObj, function(err, counts) {
      if(err){
        resolve(0);
      }else {
        resolve(counts);
      }
    })
  });
}
