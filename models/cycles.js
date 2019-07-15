'use strict';
/**
 * Cycle Model
 **/
 var mongoose = require('mongoose'),
 Schema = mongoose.Schema;
 // moment = require('moment');

 var classSchema = new Schema({name : String, rank : Number})
 var subCyclesSchema = new Schema({name : String, rank : Number, classes:[classSchema]})

 var cyclesSchema = new Schema({
  name   : String,
  subCycles    : [subCyclesSchema],
  createdAt   : {
      type      : Date,
      default   : Date.now()
  },
  updatedAt   :  {
      type      : Date,
      default   : Date.now()
  }
});

/**
* Set Global Virtual Attributes
**/
module.exports = mongoose.model('cycles', cyclesSchema);
