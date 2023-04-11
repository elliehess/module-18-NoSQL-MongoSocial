const router = require('express').Router();
const {
    getUsers, 
    getSingleUser, 
    createUser, 
    updateUser,
    deleteUser, 
    addFriend, 
    deleteFriend,
} = require('./../../controllers/userController');

//GET all users /CREATE user api/users
router.route('/').get(getUsers).post(createUser);

// GET a single user / UPDATE a user / DELETE a user api/users/:userId
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

//  CREATE friend and DELETE friend  api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);

module.exports = router;