const express = require('express');
const db = require('./db/connection');
const apiRoutes = require('./routes/apiRoutes');
// const res = require('express/lib/response');
// const req = require('express/lib/request');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// api Routes
app.use('/api', apiRoutes);

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


