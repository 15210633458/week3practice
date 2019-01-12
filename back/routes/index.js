var express = require('express');
var router = express.Router();
var mongodb = require('mymongo1610/utils/getCollection.js')

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/api/get/train_tickets', function(req, res, next) {
    //console.log(req.query.data)
    var data = req.query.data;
    console.log(data)
    mongodb('everyday', function(err, con, coll) {
        if (err) {
            return res.json({ code: 0, mes: err })
        }
        coll.find({ data: data }).toArray(function(error, result) {
            if (error) {
                return res.json({ code: 0, mes: error })
            } else {
                console.log(result)
                res.json({
                    code: 1,
                    data: result
                })
            }
        })
    })
});
module.exports = router;