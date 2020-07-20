const express = require( 'express' ),
    router = express.Router(),
    departmentController = require( '../controllers/departmentController' );

router.get( '/', departmentController.displayDepartment );

module.exports = router;