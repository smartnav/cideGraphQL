'use strict';
/**
 * School Model
 **/
 var mongoose = require('mongoose'),
 Schema = mongoose.Schema;
 // moment = require('moment');

 var idval = {
         "logo": {type : String, default: ""},
         "establishmentName": {type : String, default: ""},
         "nberofstudents": {type : Number, default: 0},
         "baseLine": {type : String, default: ""},
         "etablishmentHead": {type : String, default: ""},
         "yearOfCreation": {type : String, default: ""},
         "uaiCode": {type : String, default: ""},
         "downloading": {type : String, default: ""},
         "brochure": {type : String, default: ""},
         "visualHeader": {type : String, default: ""},
 }
 var address = {
         "address": {type : String, default: ""},
         "zipcode": {type : String, default: ""},
         "city": {type : String, default: ""},
         "country": {type : String, default: ""},
         "academy": {type : String, default: ""},
         "access": {type : String, default: ""},
         "publicTransport": {type : String, default: ""},
         "byTheRoad": {type : String, default: ""}
 }
 var contacts = {
        "mailAddress1": {type : String, default: ""},
        "mailAddress2": {type : String, default: ""},
        "phone": {type : String, default: ""},
        "fax": {type : String, default: ""},
        "website": {type : String, default: ""},
        "facebookLink": {type : String, default: ""},
        "instagramLink": {type : String, default: ""},
        "twitterLink": {type : String, default: ""},
        "linkedinLink": {type : String, default: ""}
 };
 var description = {
        "generalPresentationYesNo": {type : String, default: ""},
        "generalPresentationDesc": {type : String, default: ""},
        "ourValuesYesNo": {type : Boolean, default: false},
        "ourValuesDesc": {type : String, default: ""},
        "freeField": []
 };
 var internal = {
        "civility": {type : String, enum: ['mr','mrs']},
        "firstName": {type : String, default: ""},
        "lastName": {type : String, default: ""},
        "mail": {type : String, default: ""},
        "countryCode": {type : String, default: ""},
        "phone": {type : String, default: ""},
        "mobile": {type : String, default: ""}
 }
 var agenda = {
        "mainImage": {type : String, default: ""},
        "autorisation": {type : Boolean, default: false},
        "addEvent": {type : Boolean, default: false},
        "eventName": {type : String, default: ""},
        "dateFrom": {type : Date, default: Date.now()},
        "dateTo": {type : Date, default: Date.now()},
        "link": {type : String, default: ""},
        "description": {type : String, default: ""},
        "secondaryImages": [{}]
 }



 var schoolSchema = new Schema({
    etablissement   : {
        idval,
        address,
        contacts,
        description,
        internal
    },
    cycles          : [{
        name: String,
        yesNo : Boolean,
        idval,
        address,
        contacts,
        internal,
        specificities : {},
        subCycles : []
  }],
  boardingSchool    : {
        idval,
        address,
        contacts,
        internal,
        cycles : []
  },
  agenda,
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
module.exports = mongoose.model('schools', schoolSchema);
