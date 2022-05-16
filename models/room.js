const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({

    numero : {type: String,required:true,unique:true},
    price:{ type: Number, required : true,min:0 },
    type:{ type : String, required: true,enum:["sweet","signle"] },
    isAvailable : {type : Boolean,required: true,default : true},
    description:{type:String,required:true},
    images:[{type: String,required:true}],
    client :{type:mongoose.Types.ObjectId,required:false}

})

module.exports = mongoose.model('room',RoomSchema);