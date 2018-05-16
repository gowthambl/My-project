// var express = require('express');
// var http = require('http');
// var bodyparser = require('body-parser')

// var Router = require('./route');

// var app = express();

// var server = http.Server(app);
 
 
import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';

import Router  from './route';



const app=express();
const server=http.Server(app);


app.use(bodyParser())
app.use('/',Router());


//  app.get('/',function(req,res){
// 	res.send("hello world");
// });

// app.get('/api/:data',function(req,res){
// 	res.send("hello world params "+req.params.data);
// });

// app.get('/api',function(req,res){
// 	res.send("hello world query "+req.query.data);
// });

// app.post('/api',function(req,res){
// 	console.log(req.body);
// 	res.send("hello world query "+req.body.data);
// }); 


server.listen(8080,data=>{
	console.log("server started");
});