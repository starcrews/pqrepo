const express = require("express"),
  router = express.Router(),
  departmentController = require("../controllers/departmentController");

router.get("/:department", departmentController.displayDepartmentPage);

module.exports = router;
