const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: 'You need to provide a username!',
      trim: true
     },
     email: {
      type: String,
      lowercase: true,
      unique: true,
      required: 'You need to provide an email!',
      // TODO: add in an email validator? To check documentation
      trim: true
     },
    thoughts: [],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ]
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  }
);


  // get total count of thoughts and friends on retrieval
  UserSchema.virtual('thoughtCount').get(function() {
    return this.thoughts.reduce((total, thought) => total + thought.replies.length + 1, 0);
  });

// create the User model using the UserSchema
const User = model('User', UserSchema);

// export the User model
module.exports = User;