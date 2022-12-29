require('dotenv').config();
const methodOverride = require('method-override');
const express = require('express');
const articlesRoute = require('./routes/articles');

// migrations for creating table inside postgres database
const {runMigrations} = require('./config/helper');
runMigrations();

const app = express();

// Setting ejs engine for serving html page from view
app.set('view engine', 'ejs');

// Middleware for accepting form data from html form in query string format.
app.use(express.urlencoded({extended: false}));

// Middle ware for allowing client to send delete, put, patch etc, methods.
app.use(methodOverride('_method'));

// Routes
app.use('/',articlesRoute);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server listening on port ${port}`))