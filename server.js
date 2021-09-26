const express = require( 'express' );
const app = express();

const host = 'localhost';
const port = 8000;

app.use( express.static('public') );

app.get( '/', (req, res) => {
	res.send( 'SUCCESS' );
});

app.listen( port, () => {
	console.log( `Server is running on http://${host}:${port}` );
});
