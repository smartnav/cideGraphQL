# CIDE-BE-JUNE-2019
This is the new backend of CIDE

# POSTMAN collection link
https://www.getpostman.com/collections/2d2e25f51bd53f8a75bd



For add data in school

```mutation {
  createSchool(dataInput : {
    etablissement : {
        idval : {
            logo : "abc",
            establishmentName : "establisthmentname",
            nberofstudents : 23,
            baseLine : "baseline",
            etablishmentHead : "estmisd",
            yearOfCreation : "2019",
            uaiCode : "asdkfl",
            downloading :"dfasd",
            brochure: "dfa",
            visualHeader : "sdf"
        },
      address : {
        address: "asd",
        zipcode: "382007",
        city: "Gandhinagar",
        country: "India",
        academy: null,
        access: null,
        publicTransport: null,
        byTheRoad : null
      },
      contacts : {
        mailAddress1: "aaa@gmail.com",
        mailAddress2: null,
        phone: null,
        fax: null,
        website: null,
        facebookLink: null,
        instagramLink: null,
        twitterLink: null,
        linkedinLink: null
      },
      description : {
        generalPresentationYesNo: true,
        generalPresentationDesc: "General presentation Description",
        ourValuesYesNo: false,
        ourValuesDesc: null,
        freeField : [
          {
            freeFieldName: "SSS",
            yesNo: true,
            description: "sfsdf"
          },
          {
            freeFieldName: "BBBB",
            yesNo: true,
            description: "sdfsd"
          },
          {
            freeFieldName: null,
            yesNo: false,
            description: null
          }
        ]
      },
      internal : {
        civility: "mr",
        firstName: "Rahul",
        lastName: "Chaudhary",
        mail: null,
        countryCode: null,
        phone: null,
        mobile: null
      }
    },
    cycles : [
      {
        cycleId : "asdfaldkf",
        name : "sdfasd",
        yesNo : true,
        idval : {
            logo : "abc",
            establishmentName : "establisthmentname",
            nberofstudents : 23,
            baseLine : "baseline",
            etablishmentHead : "estmisd",
            yearOfCreation : "2019",
            uaiCode : "asdkfl",
            downloading :"dfasd",
            brochure: "dfa",
            visualHeader : "sdf"
        },
      	address : {
        address: "asd",
        zipcode: "382007",
        city: "Gandhinagar",
        country: "India",
        academy: null,
        access: null,
        publicTransport: null,
        byTheRoad : null
      },
      	contacts : {
        mailAddress1: "aaa@gmail.com",
        mailAddress2: null,
        phone: null,
        fax: null,
        website: null,
        facebookLink: null,
        instagramLink: null,
        twitterLink: null,
        linkedinLink: null
      },
      	internal : {
        civility: "mr",
        firstName: "Rahul",
        lastName: "Chaudhary",
        mail: null,
        countryCode: null,
        phone: null,
        mobile: null
        },
      	inShort : {
          boardingSchoolYesNo: false,
          boardingSchoolDesc: null,
          scolarshipYesNo: false,
          scolarshipDesc: null,
          cateringYesNo: false,
          cateringDesc: null,
          trainingProgramYesNo: false,
          trainingProgramDesc: null,
          lv1: null,
          lv2: null,
          lv3: null,
          lv4: null
        },
        specificities :{
          spe1YesNo: false,
          spe1Desc: null,
          spe2YesNo: false,
          spe2Desc: null,
          spe3YesNo: false,
          spe3Desc: null,
          spe4YesNo: false,
          spe4Desc: null,
          spe5YesNo: false,
          spe5Desc: null,
          spe6YesNo: false,
          spe6Desc: null,
          spe7YesNo: false,
          spe7Desc: null,
          spe8YesNo: false,
          spe8Desc: null,
          freeField: [
            {
              freeFieldName: "GGG",
              yesNo: true,
              description: "sadas"
            }
        	] 
        },
        subCycles : [
          {
            subCycleId : "5d20b9a27daa5012534b189f",
            name: "sub-cycle_1_1",
            yesNo: true,
            languagesYesNo: true,
            lv1: [
              "Allemand",
              "Anglais"
            ],
            lv2: [
              "Allemand"
            ],
            lv3: [
              "Catalan",
              "Breton"
            ],
            lv4: [
              "Latin"
            ],
            classes : [
              {
                classId : "5d20b9a27daa5012534b18a1",
                name: "class_1_1_1",
                yesNo: true,
                numberofstudents: 25,
                description: "Petite section class description"
              },
              {
                classId : "5d20b9a27daa5012534b18a0",
                name: "class_1_1_2",
                yesNo: true,
                numberofstudents: 50,
                description: "Moyenne section class description"
              }
            ]
          }
        ]
      }
    ],
    boardingSchool : {
      	idval : {
            logo : "abc",
            establishmentName : "establisthmentname",
            nberofstudents : 23,
            baseLine : "baseline",
            etablishmentHead : "estmisd",
            yearOfCreation : "2019",
            uaiCode : "asdkfl",
            downloading :"dfasd",
            brochure: "dfa",
            visualHeader : "sdf"
        },
      	address : {
        address: "asd",
        zipcode: "382007",
        city: "Gandhinagar",
        country: "India",
        academy: null,
        access: null,
        publicTransport: null,
        byTheRoad : null
      },
      	contacts : {
        mailAddress1: "aaa@gmail.com",
        mailAddress2: null,
        phone: null,
        fax: null,
        website: null,
        facebookLink: null,
        instagramLink: null,
        twitterLink: null,
        linkedinLink: null
      },
      	description : {
        generalPresentationYesNo: true,
        generalPresentationDesc: "General presentation Description",
        ourValuesYesNo: false,
        ourValuesDesc: null,
        freeField : [
          {
            freeFieldName: "SSS",
            yesNo: true,
            description: "sfsdf"
          },
          {
            freeFieldName: "BBBB",
            yesNo: true,
            description: "sdfsd"
          },
          {
            freeFieldName: null,
            yesNo: false,
            description: null
          }
        ]
      },
      	internal : {
            civility: "mr",
            firstName: "Rahul",
            lastName: "Chaudhary",
            mail: null,
            countryCode: null,
            phone: null,
            mobile: null
        },
      	cycles : [{
          cycleId : "5d20b9a27daa5012534b189b",
          name: "cycle_1",
          yesNo: false,
          description: null
        }]
    },
    agenda : {
      mainImage: null,
      autorisation: true,
      addEvent: true,
      eventName: "dsfdsf",
      dateFrom: "2019-07-01T18:30:00.000Z",
      dateTo: "2019-07-04T18:30:00.000Z",
      link: null,
      description: null,
      secondaryImages: [{
        file : "data:image/png;base64,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"
      }]
    }
  }),{
    _id
    etablissement {
      idval {
        baseLine
      }
    }
  }
}```
