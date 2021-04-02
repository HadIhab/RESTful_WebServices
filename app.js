const express = require('express');
const mongoose = require('mongoose');

const app = express();
const db = mongoose.connect('mongodb://localhost/bookAPI', { useNewUrlParser: true,useUnifiedTopology: true });
const port = process.env.PORT || 3000;
const bookRouter = express.Router();
const Book = require('./models/bookModel')

bookRouter.route('/books')
  .get((req,res)=>{
  	const response = {hello:'This is my book'};
  	res.json(response);
  });
app.use('/api',bookRouter);

app.get('/',(req,res)=>{
	res.send('Home page Nodemon API.');
});


app.listen(port,()=>{
	console.log(`Running on port ${port}`);
});