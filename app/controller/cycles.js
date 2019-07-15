var Cycles = require('./../../services/cycles');
var Common = require('./../config/common');

/****************************************************/
// Filename: cycles.js
// Created: Navish Kumar
// Change history:
// 29.06.2019 / Navish
/****************************************************/

exports.cycles = (req, res) => {
console.log("inside", req.method);
    var reqMethod = req.method;
    switch (reqMethod) {
      case 'POST':
          Cycles.create(req.body, (err, response) => {
              if(!err){
                  res.send(Common.createdResponse('Successfully saved!', response));
              }else {
                  res.send(Common.errorResponse('forbidden', err));
              }
          })
        break;
      case 'PUT':
          //let payload = req.body;
          Cycles.update({_id : req.query.cycleId}, req.body, {new : true, upsert : true}, (err, response) => {
              if(!err){
                  res.send(Common.createdResponse('Successfully saved!', response));
              }else {
                  res.send(Common.errorResponse('forbidden', err));
              }
          })
        break;
      // case 'PATCH':
      //     //let payload = req.body;
      //     let queryParams = req.query;
      //     Cycles.update(req.query.cycleId, req.body, {new : true, upsert : true}, (err, response) => {
      //         if(!err){
      //             res.send(Common.createdResponse('Successfully saved!', response));
      //         }else {
      //             res.send(Common.errorResponse('forbidden', err));
      //         }
      //     })
      //   break;
      case 'GET':
          if(req.query.cycleId){
            Cycles.find(1, {_id : req.query.cycleId}, (err, response) => {
                if(!err){
                    res.send(Common.successResponse('Successfully fetched!', response));
                }else {
                    res.send(Common.errorResponse('forbidden', err));
                }
            })
          }else {
            Cycles.find({}, (err, response) => {
                if(!err){
                    res.send(Common.successResponse('Successfully fetched!', response));
                }else {
                    res.send(Common.errorResponse('forbidden', err));
                }
            })
          }
        break;
      case 'DELETE':
          if(req.query.cycleId){
            Cycles.delete({_id : req.query.cycleId}, (err, response) => {
                if(!err){
                    res.send(Common.successResponse('Successfully deleted!', response));
                }else {
                    res.send(Common.errorResponse('forbidden', err));
                }
            })
          }
        break;
      default:

    }



}
