var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/register', function(req, res, next) {
  res.send('{"code":200,"msg":"\u6210\u529f"}')
});

module.exports = router;
