let express = require ('express');
let mongoose = require ('mongoose');
let router = express.Router();
let Feed = mongoose.model('Feed');

router.post('./', (req,res) => {
  let newFeed = new Feed();
  newFeed.description = req.body.description;
  newFeed.owner = req.body.owner;
  newFeed.service = req.body.service;
  newFeed.comments = req.body.comments;
  newFeed.quote = req.body.quote;
  newFeed.save((err) => {
    if(err) {
      res.send(err) 
    } else {
      res.sendStatus(200)
    }
  })
})
  
router.get('./:id', (req,res) => {
    Feed.find({owner: req.params.id}).then((orders) => {
      res.json(orders)
    })

router.put('./:id', (req,res) => {
  Feed.findById(req.params.id, (err,Feed) => {
    if(err) {
      res.send(err)
    } else {
      feed.description = req.body.newFeed;
      feed.save((err) => {
        if(err) {
          res.send(err) 
        } else {
          res.sendStatus(200)
        }
      })
    }
  })
})
})
