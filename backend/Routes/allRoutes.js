const express = require("express");
const router = express.Router();
const {
  firstFromList,
  secondFromList,
  thirdFromList,
  fourthFromList,
  fifthFromList,
} = require("../controller/controller");

router.route("/first").get(firstFromList);
router.route("/second").get(secondFromList);
router.route("/third").get(thirdFromList);
router.route("/fourth").get(fourthFromList);
router.route("/fifth").get(fifthFromList);
module.exports = router;
