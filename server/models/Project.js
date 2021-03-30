const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = mongoose.Schema({
    member:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    contributionDegree:{
        type:Number
    },
    contributionResult:{
        type:Array
    },
    kakaoFaile:{
        type:String
    },
    title:{
        type:String
    },
    members:{
        type:Array
    },
    getMedal:{
        type:Boolean
    }

}, {timestamps:true})




const Project = mongoose.model('Project', projectSchema);

module.exports = { Project }