const express = require ('express');
// Create an express server.
const app = express();
const port = 3000;

// Middleware to see requests reaching the server.
const morgan = require('morgan'); 
// Middleware to allow requests from other servers.
const cors = require('cors'); 


// Configurations.
app.set('port', process.env.PORT || port);
app.set('json spaces', 2)

// Middleware.
app.use(morgan('dev')); 
app.use(cors()); 
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); 
 

// Routes.
app.use(require('./routes/personRoutes.js'));


// Initializing the server.
app.listen(app.get('port'), () => {
    console.log(`Server listening on port ${app.get('port')}`); 
});