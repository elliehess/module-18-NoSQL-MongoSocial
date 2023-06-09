const {User, Thought} = require ('../models'); 

module.exports = {
    //Get all Thoughts
    getThoughts(req, res) {
        Thought.find()
          .then((thought) => res.json(thought))
          .catch((err) => res.status(500).json(err));
      },
      //get a single Thought
      getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
          .select('-__v')
          .then((thought) =>
            !thought
              ? res.status(404).json({ message: 'No thought with that ID' })
              : res.json(thought)
          )
          .catch((err) => res.status(500).json(err));
      },
      //create a Thought
      createThought(req, res) {
        Thought.create(req.body)
        .then(({ _id }) => {
            return User.findOneAndUpdate( //push the created thought's _id to the associated user's thoughts //help from Stack Overflow
              { _id: req.body.userId },
              { $push: { thoughts: _id } },
              { new: true }
            );
          })
          .then((thought) => res.json(thought))
          .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
          });
      },
      //update a Thought
      updateThought(req, res) {
        Thought.findOneAndUpdate(
          { _id: req.params.thoughtId },
          { $set: req.body },
          { runValidators: true, new: true }
        )
          .then((thought) =>
            !thought
              ? res.status(404).json({ message: 'No thought found with this id!' })
              : res.json(thought)
          )
          .catch((err) => res.status(500).json(err));
      },
      //delete a Thought
      deleteThought(req, res) {
        Thought.findOneAndDelete({ _id: req.params.thoughtId })
          .then((thought) =>
            !thought
              ? res.status(404).json({ message: "Oops, no thought found with that ID!" })
              : User.findOneAndUpdate(
                  { thoughts: req.params.thoughtId },
                  { $pull: { thoughts: req.params.thoughtId } },
                  { new: true }
                )
          )
          .then((user) =>
            !user
              ? res.status(404).json({ message: 'Thought deleted, but no user found'})
              : res.json({ message: 'Thought successfully deleted' })
          )
          .catch((err) => res.status(500).json(err));
      },
      //create Reaction 
      createReaction(req, res) {
        console.log('You are adding a reaction!');
        Thought.findOneAndUpdate(
          { _id: req.params.thoughtId },
          { $addToSet: { reactions: req.body } },
          { runValidators: true, new: true }
        )
          .then((thought) =>
            !thought
              ? res
                  .status(404)
                  .json({ message: 'Oops, no thought found with that ID!' })
              : res.json(thought)
          )
          .catch((err) => res.status(500).json(err));
      },
      //delete a Reaction
      deleteReaction(req, res) {
        Thought.findOneAndUpdate(
          { _id: req.params.thoughtId },
          { $pull: { reactions: { reactionId: req.params.reactionId } } },
          { runValidators: true, new: true }
        )
          .then((thought) =>
            !thought
              ? res
                  .status(404)
                  .json({ message: 'Oops, no thought found with that ID!' })
              : res.json(thought)
          )
          .catch((err) => res.status(500).json(err));
      },
}
