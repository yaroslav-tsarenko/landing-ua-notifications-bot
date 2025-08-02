const express = require('express');
const {notify} = require("../controller/notifications.controller");
const router = express.Router();

router.post('/:fullName/:phone/:typeOfDeal', notify);

module.exports = router;