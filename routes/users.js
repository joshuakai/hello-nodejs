var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/register', function(req, res, next) {
  res.send('{"code":200,"msg":"\u6210\u529f"}')
});

module.exports = router;

// TODO 加入cors做前後端分離
// const corsOptions = {
//     origin: [
//         'http://www.example.com',
//         'http://localhost:8080',
//     ],
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
//     allowedHeaders: ['Content-Type', 'Authorization'],
// };
// app.use(cors(corsOptions));