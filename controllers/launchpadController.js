const launchpadModel = require('../models/launchpadModel')

async function searchLaunchpad(searchQuery){
	console.log(searchQuery)
	return await launchpadModel.find(searchQuery)
}

async function getLaunchpad({launchpadId}){
	const launchpad =  await launchpadModel.findOne({launchpadId})
	if(launchpad)
		return launchpad
	else
		return {"message": "No Launchpad Found."}
}

async function addLaunchpad({launchpadId, name, company, active, location, availablity}){
	var launchpad = new launchpadModel ({
		launchpadId, name, company, active, location, availablity
	})
	await launchpad.save()
	return {'message': 'Launchpad Saved.'}
}

module.exports = {
	searchLaunchpad,
	addLaunchpad,
	getLaunchpad
}