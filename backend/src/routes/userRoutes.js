const express = require("express");

const router = express.Router();


const {
    getUserProfile,
    getUserAnalytics
} = require("../controllers/userController");


router.get(

    "/analytics/:handle",

    getUserAnalytics

);



router.get(

    "/:handle",

    getUserProfile

);


module.exports = router;