const mongoose = require( 'mongoose' ),
    jwt = require( 'jsonwebtoken' ),
    Schema = mongoose.Schema;

const uploadSchema = new Schema( { 
    url: {
        type: String,
        required: true
    }, 

    id: {
        type: String,
        required: true
    },

    upload_date: {
        type: String
    },

    department: {
        type: String
    },

    course_code: {
        type: String
    },

    course_name: {
        type: String
    }, 

    year: {
        type: String
    },

    page_number: {
        type: String
    }
} )

const Upload = mongoose.model( 'image', uploadSchema );

module.exports = { Upload }; 