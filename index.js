const express = require('express');
const port = 3000;

var userRouter = require('./routers/user.router');
var bookRouter = require('./routers/book.router')

const app = express();

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.set('view engine', 'pug');
app.set('views', './views');
// Set some defaults (required if your JSON file is empty)

app.use('/users', userRouter);
app.use('/books', bookRouter);

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
