const mongoose = require( 'mongoose' ),
    jwt = require( 'jsonwebtoken' ),
    Schema = mongoose.Schema;

const courseSchema = new Schema( { 
    department: {
        type: String,
        required: true
    } 
} ) 

const Course = mongoose.model( 'course', courseSchema );

module.exports = { Course }; 