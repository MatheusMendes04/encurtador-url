const express = require('express');
const router = express.Router();

/* GET Login pagina */

router.get('/login', (req, res, next) => {
    res.render('login', { title: 'login', message: null });

})

module.exports = router;