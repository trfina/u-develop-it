const express = require('express');
const router = express.Router();

// import routes for each api endpoint
router.use(require('./candidateRoutes'));
router.use(require('./partyRoutes'));

module.exports = router;