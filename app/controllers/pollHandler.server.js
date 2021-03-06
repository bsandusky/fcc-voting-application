'use strict'

var Polls = require('../models/polls.js');

function PollHandler () {
 
    this.getPoll = function(req, res) {
        
        Polls
            .findOne({"_id": req.params.id})
            .exec()
            .then(function(data) {
                res.json(data);
            })
            .catch(function(err) {
                throw err;
            });
    }
}

module.exports = PollHandler;