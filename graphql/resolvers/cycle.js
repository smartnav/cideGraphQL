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

        deleteCycle : async function(parent, { _id }){
            console.log("Inside delete cycle", _id)
            const cycleExistInSchool = await schools.countDocuments({$or : [{"cycles.cycleId" : _id}, {"boardingSchool.cycles.cycleId" : _id}]});
            if(cycleExistInSchool) {
                const error = new Error('Sorry! you can not delete this, as at least one school is using this cycle');
                throw error;
            }else{
                const cycleData = await cycles.deleteOne({_id});
                return `Total records delete ${cycleData.deletedCount}`
            }
        },
 
        updateCycle: async function(parent, args){
            const saveObj = args.dataInput;
            console.log("saveObj", JSON.stringify(saveObj))
            const errors = [];

            const cycleExistInSchool = await schools.countDocuments({$or : [{"cycles.cycleId" : saveObj._id}, {"boardingSchool.cycles.cycleId" : saveObj._id}]});
            if(cycleExistInSchool) {
                const error = new Error('Sorry! you can not modify this, as at least one school is using this cycle');
                throw error;
            }else{

                const cycleExist = await cycles.countDocuments({"name" : saveObj.name, _id : {$ne : saveObj._id}});
                console.log("cycleExist",cycleExist);
                
                if(cycleExist){
                    const error = new Error('Cycle already exists!');
                    throw error;
                }else{
                    const cycleData = await cycles.findOneAndUpdate({_id : saveObj._id}, saveObj, {new : true});
                    return cycleData;
                }
            }
        },

        createSchool: async function(parent, args, context, info){
            const saveObj = args.dataInput;
            const errors = [];
            
            const schoolData = await schools.create(saveObj);
            return {...schoolData._doc, _id : schoolData._id.toString()};
        },

        updateSchool: async function(parent, args, context, info){
            const saveObj = args.dataInput;
            const errors = [];
            
            const cycleData = await cycles.findOneAndUpdate({_id : saveObj._id}, saveObj, {new : true});
            return cycleData;
        },

        deleteSchool : async function(parent, { _id }){
                const cycleData = await cycles.deleteOne({_id});
                return `Total records delete ${cycleData.deletedCount}`
        }
        //Validation is pending.

    }
    
}