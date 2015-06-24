var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongo = require('mongojs');
var path = require('path')

var port = 9001;

var woof = "w00f"

var db = mongo('ecommerce', ['products'])

var app = express();

app.use(bodyParser.json(), cors());

app.use(express.static(__dirname + '/public'))

app.get('/api/products', function(req, res) {
	console.log(000, req.query);
	db.products.find(req.query, function(err, data) {
		console.log(err, data); 
		res.status(200).send(data)
	})
})

app.post('/api/products', function(req, res) {
	console.log(111, req.query, req.body);
	if (Object.keys(req.query).length !== 0) {
		db.products.save(req.query, function(err, data) {
			if (err) {
				res.status(404).send("You're stupid")
			} else {
				res.status(200).send(data)
			}
		})
	} else {
		db.products.save(req.body, function(err, data) {
			if (err) {
				res.status(404).send("You're stupid")
			} else {
				res.status(200).send(data)
			}
		})
	}
})

app.put('/api/products', function(req, res) {
	console.log(222, req.query, req.body);
	if (!req.query.id) {
		res.status(500).send('send a real ID, nerdbucket.')
	} else {
		db.products.findAndModify({
			query: {
				_id: mongo.ObjectId(req.query.id)
			},
			update: {
				$set: req.body
			}
		}, function(err, data) {
			if (err) {
				res.status(404).json(err)
			} else {
				res.json(data)
			}
		})
	}
})

app.delete('/api/products', function(req, res) {
	if (!req.query.id) {
		res.status(404).send("Donde esta el ID?")
	} else {
		db.products.remove({
			_id: mongo.ObjectId(req.query.id)
		}, function(err, data) {
			if (err) {
				res.status(200).json(err)
			} else {
				res.json(data + "yaaay" + woof)
			}
		})
	}
})

app.listen(port, function() {
	console.log(port + ' of entry')
})