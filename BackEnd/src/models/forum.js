const mongoose = require('mongoose');

const ForumSchema = new mongoose.Schema({})
/**
Q&A:
	-Under Project
	-Author
	-Time posted
	-Tags
	-Can contain Code Snippet
	-Will pay author & Top Answer

*QA: {
	Author: [ Name],
	Time Created:[time],
	Labels:[Strings],
	Chat history[Chat Blob],
	Upvotes: [#],
	User_stars:[],
	Top_answer[Chat Blob],
	bounty:[bool],
	bounty_paid: {
		paid: [bool],
		user_paid: [bool],
		time_paid:[time]
	}
}
**/
