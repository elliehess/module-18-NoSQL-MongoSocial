const router = require('express').Router();
const {
    getThoughts, 
    getSingleThought, 
    createThought, 
    updateThought, 
    deleteThought, 
    createReaction, 
    deleteReaction,
} = require('../../controllers');

//GET all thoughts /CREATE thoughts api/thoughts
router.route('/').get(getThoughts).post(createThought);

// GET a single thought / UPDATE a thought / DELETE a thought api/thoughts/:thoughtId
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

//  CREATE reaction api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(createReaction);

//  DELETE reaction api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions').delete(deleteReaction);

module.exports = router;