const { Schema, model } = require('mongoose');

//Schema to create Thought model
const thoughtSchema = new Schema (
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema],
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false,
    }
);

const reactionSchema = new Schema = (
    {
        reactionId : {
            type: Schema.Type.ObjectId,
            default: () => new Types.ObjectId(),
          },
        responseBody: {
            type: String,
            required: true,
            maxlength: 280,
          },
          username: {
            type: String,
            required: true,
          },
          createdAt: {
            type: Date,
            default: Date.now,
          },
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
          },
          id: false,
        }
);

// virtual that retrieves the length of the thought's reactions array field on query
thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
  });

const Thought = model('Thought', thoughtSchema);
module.exports = Thought;