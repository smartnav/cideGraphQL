const cycles = require('./../../models').cycles;
const schools = require('./../../models').schools;
const validator = require('validator');
module.exports = {
    Query : {
        getCycles : async function(parent, args, context, info){
            const cycleData =  await cycles.find(); 
            console.log(cycleData)
            return cycleData;
        },
        getCycle : async function(parent, {_id}, context, info){
            return await cycles.findOne({_id});
        },
        getSchools : async function(parent, args, context, info){
            const schoolData = await schools.find();
            console.log(schoolData._id);
            return schoolData;
        },
        getSchool : async function(parent, {_id}, context, info){
            const schoolData = await schools.findOne({_id});
            console.log(schoolData._id);
            return schoolData;
        }
    },

    Mutation : {
        createCycle: async function(parent, args, context, info){
            const saveObj = args.dataInput;
            const errors = [];
            const cycleExist = await cycles.countDocuments({"name" : saveObj.name});
            if(validator.isEmpty(saveObj.name)){
                errors.push({message : "Class name is mandatory"});
            }
            if(cycleExist){
                const error = new Error('Cycle already exists!');
                throw error;
            }
            const cycleData = await cycles.create(saveObj);
            return {...cycleData._doc, _id : cycleData._id.toString()};
        },

        // updateCycle: async function(parent, args, context, info){
        //     const saveObj = args.dataInput;
        //     const errors = [];
        //     const cycleExist = await cycles.countDocuments({"name" : saveObj.name});
        //     if(validator.isEmpty(saveObj.id)){
        //         errors.push({message : "Class name is mandatory"});
        //     }
        //     if(validator.isEmpty(saveObj.name)){
        //         errors.push({message : "Class name is mandatory"});
        //     }
        //     if(!validator.isLength(saveObj.subCycles)){
        //         errors.push({message : "subCycles name is mandatory"});
        //     }
        //     const cycleData = await cycles.findOneAndUpdate({_id : id}, saveObj, {new : true});
        //     return {...cycleData._doc, _id : cycleData._id.toString()};
        // },

        // deleteCycle: async function(parent, args, context, info){
        //     const saveObj = args.dataInput;
        //     const errors = [];
        //     const cycleExist = await cycles.countDocuments({"name" : saveObj.name});
        //     if(validator.isEmpty(saveObj.name)){
        //         errors.push({message : "Class name is mandatory"});
        //     }
        //     if(cycleExist){
        //         throw new AuthenticationError('You must be logged in');
        //         // const error = new Error('Cycle already exists!');
        //         // throw error;
        //     }
        //     const cycleData = await cycles.create(saveObj);
        //     return {...cycleData._doc, _id : cycleData._id.toString()};
        // },


        createSchool: async function(parent, args, context, info){
            const saveObj = args.dataInput;
            const errors = [];
            
            const schoolData = await schools.create(saveObj);
            return {...schoolData._doc, _id : schoolData._id.toString()};
        }


    }
    
}