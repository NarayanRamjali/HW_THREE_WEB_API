/* Created by Narayan Ramjali */

'use strict';

var util = require('util');

module.exports = {
    github: github
};

function github(req, res) {
    var githubAPI = require("github");
    var gits = new githubAPI({
        version: '3.0.0'
    });
    var token = "aa55c2d33cab254a094129a4e3ab45fef323b0b3";
    gits.authenticate({
        type: 'oauth',
        token: token
    });
    gits.repos.getAll({username: "ramjali1991"}, function(err, value){
        if(err){
            res.json({Errror:"There was an error"})
        }
        else {
            res.json(value);
        }
    });
}