const router = require('express').Router();
const {
    getUser, 
    getSingleUser, 
    createUser, 
    updateUser,
    deleteUser, 
    addFriend, 
    deleteFriend,
} = require('./../../controllers');

