let express = require('express');
let fs = require('fs');
let app = express();

app.get('/', (req, res) => {
  res.send("Please enter program number");
})

app.get('/1t', (req, res) => {
    fs.readFile('programs/p1.tcl', (err, contents) => {
				if(err)
					console.log(err)
				else{
					//console.log(contents.toString());
					res.send(contents.toString());
				}
    })
})

app.get('/1a', (req, res) => {
	fs.readFile('programs/p1.awk', (err, contents) => {
		if(err)
			console.log(err)
		else{
			//console.log(contents.toString());
			res.send(contents.toString());
		}
	})
})

app.get('/2t', (req, res) => {
	fs.readFile('programs/p2.txt', (err, contents) => {
		if(err)
			console.log(err)
		else{
			//console.log(contents.toString());
			res.send(contents.toString());
		}
	})
})

app.get('/2a', (req, res) => {
	fs.readFile('programs/p2awk.txt', (err, contents) => {
		if(err)
			console.log(err)
		else{
			//console.log(contents.toString());
			res.send(contents.toString());
		}
	})
})

app.get('/3t', (req, res) => {
	fs.readFile('programs/p3.txt', (err, contents) => {
		if(err)
			console.log(err)
		else{
			//console.log(contents.toString());
			res.send(contents.toString());
		}
	})
})

app.get('/3a', (req, res) => {
	fs.readFile('programs/p3awk.txt', (err, contents) => {
		if(err)
			console.log(err)
		else{
			//console.log(contents.toString());
			res.send(contents.toString());
		}
	})
})

app.get('/4t', (req, res) => {
	fs.readFile('programs/p4.txt', (err, contents) => {
		if(err)
			console.log(err)
		else{
			//console.log(contents.toString());
			res.send(contents.toString());
		}
	})
})

app.get('/4a', (req, res) => {
	fs.readFile('programs/p4awk.txt', (err, contents) => {
		if(err)
			console.log(err)
		else{
			//console.log(contents.toString());
			res.send(contents.toString());
		}
	})
})

app.get('/5', (req, res) => {
	fs.readFile('programs/p5.txt', (err, contents) => {
		if(err)
			console.log(err)
		else{
			//console.log(contents.toString());
			res.send(contents.toString());
		}
	})
})

app.get('/6', (req, res) => {
	fs.readFile('programs/p6.txt', (err, contents) => {
		if(err)
			console.log(err)
		else{
			//console.log(contents.toString());
			res.send(contents.toString());
		}
	})
})

app.get('/7', (req, res) => {
	fs.readFile('programs/7_crc', (err, contents) => {
		if(err)
			console.log(err)
		else{
			//console.log(contents.toString());
			res.send(contents.toString());
		}
	})
})

app.get('/8', (req, res) => {
	fs.readFile('programs/8_Bellman', (err, contents) => {
		if(err)
			console.log(err)
		else{
			//console.log(contents.toString());
			res.send(contents.toString());
		}
	})
})

app.get('/9s', (req, res) => {
	fs.readFile('programs/9_server017', (err, contents) => {
		if(err)
			console.log(err)
		else{
			//console.log(contents.toString());
			res.send(contents.toString());
		}
	})
})

app.get('/9c', (req, res) => {
	fs.readFile('programs/9_client017', (err, contents) => {
		if(err)
			console.log(err)
		else{
			//console.log(contents.toString());
			res.send(contents.toString());
		}
	})
})

app.get('/10s', (req, res) => {
	fs.readFile('programs/10_Server', (err, contents) => {
		if(err)
			console.log(err)
		else{
			//console.log(contents.toString());
			res.send(contents.toString());
		}
	})
})

app.get('/10c', (req, res) => {
	fs.readFile('programs/10_Client', (err, contents) => {
		if(err)
			console.log(err)
		else{
			//console.log(contents.toString());
			res.send(contents.toString());
		}
	})
})

app.get('/11k', (req, res) => {
	fs.readFile('programs/11_keygen', (err, contents) => {
		if(err)
			console.log(err)
		else{
			//console.log(contents.toString());
			res.send(contents.toString());
		}
	})
})

app.get('/11e', (req, res) => {
	fs.readFile('programs/11_rsaencdeca2', (err, contents) => {
		if(err)
			console.log(err)
		else{
			//console.log(contents.toString());
			res.send(contents.toString());
		}
	})
})

app.get('/12', (req, res) => {
	fs.readFile('programs/12_leaky', (err, contents) => {
		if(err)
			console.log(err)
		else{
			//console.log(contents.toString());
			res.send(contents.toString());
		}
	})
})

app.get('/*', (req, res) => {
	res.send('Oops.. Looks like.. You have entered the wrong program number...');
})


app.listen(3000, () => {
    console.log("Server is live");
})