const express = require('express');

const router = express.Router()

const ContractorController = require('./controller')

router.get("/loadtask", (req, res) => {
    ContractorController.loadTask().then(result => {
        return res.status(200).json({result: result, status: true})
    })
});

router.post("/loadworkaday", (req, res) => {
    ContractorController.loadWorkAday(req.body).then(result => {
        return res.status(200).json({result: result, status: true})
    })
});

router.post("/editwork", (req, res) => {
    ContractorController.editWork(req.body).then(result => {
        return res.status(200).json({result: result, status: true})
    })
});

router.post("/deletework", (req, res) => {
    ContractorController.deleteWork(req.body).then(result => {
        return res.status(200).json({result: result, status: true})
    })
});

router.post("/loadworkall", (req, res) => {
    ContractorController.loadWorkAll(req.body).then(result => {
        return res.status(200).json({result: result, status: true})
    })
});

router.post("/savetask", (req, res) => {
    ContractorController.saveTask(req.body).then(result => {
        return res.status(200).json({result: result, status: true})
    })
});

router.post("/savelunch", (req, res) => {
    ContractorController.saveLunch(req.body).then(result => {
        return res.status(200).json({result: result, status: true})
    })
});

router.post("/loaddoc", (req, res) => {
   ContractorController.createDocket(req.body).then(result => {
    //    result.pipe(res);
    if(!result)
        return res.status(400).json({status: false});
    return res.status(200).json({status: true});
   });
});

// router.post("/uploaddoc", (req, res) => {
//     ContractorController.uploadDocketWithSign(req.body).then(result => {
//         return res.status(200).json({status: true})
//     })
// });




module.exports = router;