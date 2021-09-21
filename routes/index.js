
const path= require('path')
var express = require('express');
var router = express.Router();
const publicDirectoryPath = path.join(__dirname, 'public')
var app = express();
app.use(express.static(publicDirectoryPath))

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Generator',name:'somu'});
});

module.exports = router;
