const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ReactionSchema = new Schema(
  {
    // set custom id to avoid confusion with parent thought _id
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    },
    reactionBody: {
      // TODO: Add limit of 280 characters maximum
      type: String,
      trim: true,
      required: true
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: createdAtVal => dateFormat(createdAtVal)
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);

const ThoughtSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    thoughtText: {
      type: String,
      required: true,
      // TODO: must be between 1 and 280 characters
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: createdAtVal => dateFormat(createdAtVal)
    },
    // use ReactionSchema to validate data for a reaction
    reactions: [ReactionSchema]
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  }
);

const Thought = model('Thought', ThoughtSchema);
ThoughtSchema.virtual('thoughtCount').get(function() {
  return this.thoughts.length;
});

module.exports = Thought;