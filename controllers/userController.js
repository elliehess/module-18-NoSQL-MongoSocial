const { ObjectId } = require('mongoose').Types;
const {User, Thought} = require ('../models');

module.exports = {
    //Get all Users
    getUser(req, res) {
        User.find()
          .then((user) => res.json(user))
          .catch((err) => res.status(500).json(err));
      },
      //Get a single User
      getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
          .select('-__v')
          .populate('thoughts')
          .populate('friends')
          .then((user) =>
            !user
              ? res.status(404).json({ message: 'No user with that ID' })
              : res.json(user)
          )
          .catch((err) => res.status(500).json(err));
      },
      //create a new User
      createUser(req, res) {
        User.create(req.body)
          .then((user) => res.json(user))
          .catch((err) => res.status(500).json(err));
      },
      //update User
      updateUser(req, res) {
        User.findOneandUpdate(
            { _id: req.params.userId },
          { $set: req.body },
          { runValidators: true, new: true }
        )
        .then((user) =>
        !user
          ? res.status(404).json({ message: "No User with that ID!" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
      },
      //delete User
      deleteUser(req, res) {
        User.findOneAndRemove({ _id: req.params.userId })
          .then((user) =>
            !user
              ? res.status(404).json({ message: 'Oops, that user does not exist' })
              : Thought.findOneAndUpdate(
                  { users: req.params.userId },
                  { $pull: { users: req.params.userId } },
                  { new: true }
                )
          )
          .then((thought) => // delete associated thoughts with User
            !thought
              ? res.status(404).json({
                  message: 'User deleted, but no thoughts found',
                })
              : res.json({ message: 'User successfully deleted' })
          )
          .catch((err) => {
            console.log(err);
            res.status(500).json(err);
          });
      },
      //add Friend
      addFriend(req, res) {
        console.log('You are adding a friend');
        User.findOneAndUpdate(
          { _id: req.params.userId },
          { $addToSet: { friends: req.params.friendId } },
          { runValidators: true, new: true }
        )
          .then((user) =>
            !user
              ? res
                  .status(404)
                  .json({ message: 'No user found with that ID :(' })
              : res.json(user)
          )
          .catch((err) => res.status(500).json(err));
      },
      //delete Friend
      removeFriend(req, res) {
        User.findOneAndUpdate(
          { _id: req.params.userId },
          { $pull: { friends: req.params.friendId } },
          { runValidators: true, new: true }
        )
          .then((user) =>
            !user
              ? res
                  .status(404)
                  .json({ message: 'No user found with that ID :(' })
              : res.json(user)
          )
          .catch((err) => res.status(500).json(err));
      },
}
