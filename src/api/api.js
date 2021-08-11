const express = require("express");
const sendMail = require("./functions/mail");
const {
  addUser,
  getData,
  updateData,
  getToUpdate,
  deleteRecord,
  deleteAll,
  multipleDelete,
} = require("./functions/records");

const router = express.Router();

router.post("/api/add-user", addUser);
router.get("/api/get-data", getData);
router.post("/api/update-data", updateData);
router.get("/api/get-to-update/:email", getToUpdate);
router.get("/api/delete-data/:email", deleteRecord);
router.post("/api/multiple-delete",multipleDelete) ;
router.get("/api/delete-all-sure", deleteAll);
router.post("/api/send-email", sendMail)
module.exports = router;
