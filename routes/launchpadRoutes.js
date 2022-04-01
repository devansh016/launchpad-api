var express = require("express")
const router = express.Router()
const launchpadContoller = require('../controllers/launchpadController')

router.get('/launchpad', getAllLaunchpad)
router.get('/launchpad/:launchpadId', getLaunchpad)
router.post('/launchpad/search', searchLaunchpad)
router.post('/addLaunchpad', addLaunchpad)


function getAllLaunchpad(req, res, next){
	launchpadContoller.getAllLaunchpad()
		.then(data => {
			res.send(data)
		})
}

function addLaunchpad(req, res, next){
	launchpadContoller.addLaunchpad(req.body)
		.then(data => {
			res.send(data)
		})
}


function getLaunchpad(req, res, next){
	launchpadContoller.getLaunchpad(req.params)
	.then(data => {
		res.send(data)
	})
}

function searchLaunchpad(req, res, next){
	//TO BE DONE
}

module.exports = router