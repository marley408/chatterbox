const mongoose = require('mongoose'),  
      Schema = mongoose.Schema;

const ConversationSchema = new Schema({  
  members: [{ 
    type: Schema.Types.ObjectId, 
    ref: 'User'
  }],
  messages: [{
    author: {type: Schema.Types.ObjectId, ref: 'User' }, 
    body:String, 
    created_at: {type:Date, default: Date.now}
  }]
});

module.exports = mongoose.model('Conversation', ConversationSchema); 