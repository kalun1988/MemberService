var express = require('express');
var router = express.Router();
var libs = process.cwd()+'/';
var db = require(libs + 'db/mongoose');
var User = require(libs + 'models/user');

User.register(router, '/');

module.exports = router;
