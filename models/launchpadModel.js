const mongoose = require("mongoose")
const Schema = mongoose.Schema

const launchpadSchema = new Schema({
	launchpadId: { type:String, unique:true, required:true},
	name: { type:String },
	company: { type:String },
	active: { type:Boolean },
	location: {
		country: { type:String },
		state: { type:String },
		city: { type:String },
	},
	availablity: { 
		start: { type:Date },
		end: { type:Date }
	},
	createdDate: { type:Date, default:Date.now }
})

launchpadSchema.set("toJSON", {
  	virtuals: true,
	versionKey: false,
	transform: function (doc, ret) {
		delete ret._id;
	},
})

module.exports = mongoose.model("launchpad", launchpadSchema)