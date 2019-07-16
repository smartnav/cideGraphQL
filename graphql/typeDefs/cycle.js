const { gql } = require('apollo-server-express');
const cycle = gql`
    type Classes {
        _id : ID!
        name : String
    }

    type subCycles {
        _id : ID!
        name : String
        classes : [Classes]
    }

    type Cycle {
        _id : ID
        name : String!
        subCycles : [subCycles]
        createdAt : String
        udpatedAt : String
    }

    input classInput {
        name : String
    }

    input subCyclesInput {
        name : String
        classes : [classInput]
    }

    input cycleInput {
        name : String!
        subCycles : [subCyclesInput]
    }

    input idVal {
        logo : String
        establishmentName : String
        nberofstudents : Int
        baseLine : String
        etablishmentHead : String
        yearOfCreation : String
        uaiCode : String
        downloading : String
        brochure : String
        visualHeader : String
    }

    input address {
        address : String
        zipcode : String
        city : String
        country : String
        academy : String
        access : String
        publicTransport : String
        byTheRoad : String
    }
    

    input contacts {
        mailAddress1 : String
        mailAddress2 : String
        phone : String
        fax : String
        website : String
        facebookLink : String
        instagramLink : String
        twitterLink : String
        linkedinLink : String
    }

    input freeField {
        freeFieldName : String
        yesNo : Boolean,
        description : String
    }

    input description {
        generalPresentationYesNo : Boolean
        generalPresentationDesc : String
        ourValuesYesNo : Boolean!
        ourValuesDesc : String
        freeField : [freeField]
    }

    input internal {
        civility :String
        firstName : String
        lastName : String
        mail : String
        countryCode : String
        phone : String
        mobile : String
    }
    
    
    input etablissement {
        idval : idVal
        address : address
        contacts : contacts
        description : description
        internal : internal
    }
    

    input specificities {
          spe1YesNo : Boolean
          spe1Desc : String
          spe2YesNo : Boolean
          spe2Desc : String
          spe3YesNo : Boolean
          spe3Desc : String
          spe4YesNo : Boolean
          spe4Desc : String
          spe5YesNo : Boolean
          spe5Desc : String
          spe6YesNo : Boolean
          spe6Desc : String
          spe7YesNo : Boolean
          spe7Desc : String
          spe8YesNo : Boolean
          spe8Desc : String
          freeField : [freeField]
    }

    input inShort {
        boardingSchoolYesNo : Boolean
        boardingSchoolDesc : String
        scolarshipYesNo : Boolean
        scolarshipDesc : String
        cateringYesNo : Boolean
        cateringDesc : String
        trainingProgramYesNo : Boolean
        trainingProgramDesc : String
        lv1 : String
        lv2 : String
        lv3 : String
        lv4 : String
    }

    input classForSubCycle {
        classId : String
        name : String
        yesNo : Boolean
        numberofstudents : Int
        description : String
    }

    input subCycleData {
        subCycleId : String,
        name : String
        yesNo : Boolean
        languagesYesNo : Boolean
        lv1 : [String]
        lv2 : [String]
        lv3 : [String]
        lv4 : [String]
        classes : [classForSubCycle]
    }

    input cyclesdata  {
        cycleId : String,
        name: String
        yesNo : Boolean
        idval : idVal
        address : address
        contacts : contacts
        internal : internal
        specificities : specificities
        subCycles : [subCycleData]
        inShort : inShort
    }

    input cycleBoarding {
        cycleId : String
        name : String
        yesNo : Boolean
        description : String
    }

    input boardingSchool {
        idval : idVal
        address : address
        contacts : contacts
        internal : internal
        description : description
        cycles : [cycleBoarding]
    }

    input secondaryImages {
        file : String
    }

    input agenda {
        mainImage : String
        autorisation : Boolean
        addEvent : Boolean
        eventName : String
        dateFrom : String
        dateTo : String
        link : String
        description : String
        secondaryImages : [secondaryImages]
    }

    


    input schoolInput {
        etablissement : etablissement!
        cycles : [cyclesdata]
        boardingSchool : boardingSchool
        agenda : agenda
    }



    type idValType {
        logo : String
        establishmentName : String
        nberofstudents : Int
        baseLine : String
        etablishmentHead : String
        yearOfCreation : String
        uaiCode : String
        downloading : String
        brochure : String
        visualHeader : String
    }

    type addressType {
        address : String
        zipcode : String
        city : String
        country : String
        academy : String
        access : String
        publicTransport : String
        byTheRoad : String
    }
    

    type contactsType {
        mailAddress1 : String
        mailAddress2 : String
        phone : String
        fax : String
        website : String
        facebookLink : String
        instagramLink : String
        twitterLink : String
        linkedinLink : String
    }

    type freeFieldType {
        freeFieldName : String
        yesNo : Boolean,
        description : String
    }

    type descriptionType {
        generalPresentationYesNo : Boolean
        generalPresentationDesc : String
        ourValuesYesNo : Boolean!
        ourValuesDesc : String
        freeField : [freeFieldType]
    }

    type internalType {
        civility :String
        firstName : String
        lastName : String
        mail : String
        countryCode : String
        phone : String
        mobile : String
    }
    
    
    type etablissementType {
        idval : idValType
        address : addressType
        contacts : contactsType
        description : descriptionType
        internal : internalType
    }
    

    type specificitiesType {
          spe1YesNo : Boolean
          spe1Desc : String
          spe2YesNo : Boolean
          spe2Desc : String
          spe3YesNo : Boolean
          spe3Desc : String
          spe4YesNo : Boolean
          spe4Desc : String
          spe5YesNo : Boolean
          spe5Desc : String
          spe6YesNo : Boolean
          spe6Desc : String
          spe7YesNo : Boolean
          spe7Desc : String
          spe8YesNo : Boolean
          spe8Desc : String
          freeField : [freeFieldType]
    }

    type inShortType {
        boardingSchoolYesNo : Boolean
        boardingSchoolDesc : String
        scolarshipYesNo : Boolean
        scolarshipDesc : String
        cateringYesNo : Boolean
        cateringDesc : String
        trainingProgramYesNo : Boolean
        trainingProgramDesc : String
        lv1 : String
        lv2 : String
        lv3 : String
        lv4 : String
    }

    type classForSubCycleType {
        classId : String
        name : String
        yesNo : Boolean
        numberofstudents : Int
        description : String
    }

    type subCycleDataType {
        subCycleId : String,
        name : String
        yesNo : Boolean
        languagesYesNo : Boolean
        lv1 : [String]
        lv2 : [String]
        lv3 : [String]
        lv4 : [String]
        classes : [classForSubCycleType]
    }

    type cyclesdataType  {
        cycleId : String,
        name: String
        yesNo : Boolean
        idval : idValType
        address : addressType
        contacts : contactsType
        internal : internalType
        specificities : specificitiesType
        subCycles : [subCycleDataType]
        inShort : inShortType
    }

    type cycleBoardingType {
        cycleId : String
        name : String
        yesNo : Boolean
        description : String
    }

    type boardingSchoolType {
        idval : idValType
        address : addressType
        contacts : contactsType
        internal : internalType
        description : descriptionType
        cycles : [cycleBoardingType]
    }

    type secondaryImagesType {
        file : String
    }

    type agendaType {
        mainImage : String
        autorisation : Boolean
        addEvent : Boolean
        eventName : String
        dateFrom : String
        dateTo : String
        link : String
        description : String
        secondaryImages : [secondaryImagesType]
    }

    type School {
        _id : ID
        etablissement : etablissementType
        cycles : [cyclesdataType]
        boardingSchool : boardingSchoolType
        agenda : agendaType
    } 

    type Query {
        getCycles : [Cycle]
        getCycle(_id : ID!) : Cycle
        getSchool(_id : ID!) : School
        getSchools : [School]
    }

    
    
    type Mutation {
        createCycle(dataInput : cycleInput): Cycle
        createSchool(dataInput : schoolInput) : School
    }`

    module.exports = cycle;