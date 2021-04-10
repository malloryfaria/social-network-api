const router = require('express').Router();
const {
    addThought,
    removeThought,
    addReaction,
    removeReaction
  } = require('../../controllers/thought-controller');

// /api/thoughts/<userId>
router.route('/:userId').post(addThought);

// /api/thoughts/<userId>/<thoughtId>
router
  .route('/:pizzaId/:thoughtId')
  .put(addReaction)
  .delete(removeThought)

// delete /api/thoughts/<userId>/<thoughtId>/<reactionId>
router.route('/:userId/:thoughtId/:reactionId').delete(removeReaction);


module.exports = router;