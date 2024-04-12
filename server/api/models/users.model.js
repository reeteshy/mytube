import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    username:{
        type: String,
        require : true,
        unique : true,
        match: /^[A-Za-z0-9\s]+$/
    },
    email : {
        type: String,
        require : true,
        unique : true
    },
    fullName : {
        type: String,
        require : true,
    },
    avatar : {
        type: String,
        require : true
    },
    coverImage : {
        type: String
    },
    watchHistory : {
        type : Number,
        default : 0
    }, 
    password : {
        type : String,
        require : true,
        maxlength: [15, 'the title must have less or equal than 50 characters'],
        minlength: [8, 'the username must have more or equal than 5 characters']
    },
    refreshToken : {
        type: String,
        default :null
    }
}, {
    timestamp : true
})

const userModel = mongoose.model("User", userSchema)

export default userModel;