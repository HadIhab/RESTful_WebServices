const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const db = mongoose.connect('mongodb://localhost/bookAPI', { useNewUrlParser: true,useUnifiedTopology: true });
const port = process.env.PORT || 3000;
const bookRouter = express.Router();
const Book = require('./models/bookModel');

app.use(bodyParser.urlencoded({extended: true}));

bookRouter.route('/books')
  .post('', ()=>{

  })	
  .get((req,res)=>{
  	const query = {};
  	if(req.query.genre){
  		query.genre = req.query.genre
  	}
  	Book.find(query,(err,books) => {
  		if (err){
  			return res.send(err);
  		}
  		return res.json(books);
  	});
  });
bookRouter.route('/books/:bookId')
  .get((req,res)=>{

  	Book.findById(req.params.bookId,(err,book) => {
  		if (err){
  			return res.send(err);
  		}
  		return res.json(book);
  	});
  });  
app.use('/api',bookRouter);

app.get('/',(req,res)=>{
	res.send('Home page Nodemon API.');
});


app.listen(port,()=>{
	console.log(`Running on port ${port}`);
});