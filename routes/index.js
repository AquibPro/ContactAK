var express = require('express');
var router = express.Router();
const app = express();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/submit', function(req, res, next) {
  res.render('submit');

  if(!req.body.username == "" || undefined || null && !req.body.message == "" || undefined || null) {

let mailTransporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'alpha7x24@gmail.com',
		pass: 'nrlxdqlnzrtixmrb'
	}
});

let mailDetails = {
	from: 'alpha7x24@gmail.com',
	to: 'masteraquibkhan@gmail.com',
	subject: `${req.body.username}, wants to contact you !`,
	html: `<h3>His message - </h3><b><pre>${req.body.message}</pre></b>`
};

new Promise((resolve, reject) => {
mailTransporter.sendMail(mailDetails, function(err, data) {
	if(err) {
		console.log('Error Occurred !');
	} else {
		console.log('Submitted successfully !');
	}
});
  }else{res.render('/')}
});
});

app.use(bodyParser.urlencoded({ extended: true }));

// handle POST request to /submit
app.post('/submit', (req, res) => {
  const username = req.body.username;
  const message = req.body.message;
  res.render('submit');
});

module.exports = router;
