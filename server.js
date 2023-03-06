const express = require('express');
const dotenv = require('dotenv');
const logger = require('./middleware/logger');
const morgan = require('morgan')
const connectDB = require('./config/db')
const errorHandler = require('./middleware/error')
// Route file




// load env vars
dotenv.config({ path: './config/config.env' });

// Connect to database
connectDB();



const bootcamps = require('./routes/bootcamps');

const app = express();

// Body Parser
app.use(express.json());


// dev  logging middleware
if(process.env.NODE_ENV === 'development') {
   app.use(morgan('dev')); 
}

// Mount routers
app.use('/api/v1/bootcamps',bootcamps)

app.use(errorHandler);


const PORT = process.env.PORT || 3000;

const server = app.listen(
    PORT,
     console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

//Handle unhandled promise rejections 
process.on('unhandledRejection',(err,promise) => {
    console.log(`Error: ${err.message}`)

    server.close(() => process.exit(1));
});

//close server

