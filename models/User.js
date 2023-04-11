const { Schema, model } = require('mongoose');

//Schema to create User model
const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim:true,
          },
          email: {
            type: String,
            required: true,
            unique: true,
            match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, 'Please enter a valid email address',], //help from Stack Overflow 
          },
          thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: "Thought",
            },
          ],
          friends: [
            {
                type: Schema.Types.ObjectId,
                ref: "User",
            },
          ],
    },
    {
         toJSON: {
              virtuals: true,
            },
            id: false,
    }
);

//create virtual that retrieves the length of the user's friends array field on query
//help from Mongoose docs
userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
  });

const User = model('User', userSchema);
module.exports = User;