import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    password: String,
})

export const UserModel = mongoose.model('User', userSchema);