const express = require('express');
const router = express.Router();

// import routes for each api endpoint
router.use(require('./candidateRoutes'));
router.use(require('./partyRoutes'));
router.use(require('./voterRoutes'));

module.exports = router;