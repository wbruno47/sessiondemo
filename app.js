const express = require('express');
const app = express();
const session = require('express-session');

const options = {
    secret: 'thisisnotagoodsecret',
    resave: false,
    saveUninitialized: false
}
app.use(session(options));

app.get('/viewcount', (req, res) => {
    if (req.session.count) {
        req.session.count += 1;
    } else {
        req.session.count = 1;
    }
    res.send(`You have viewed this page ${req.session.count} times`);
})

app.listen(3000, () => {
    console.log("PORT 3000");
})