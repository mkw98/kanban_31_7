import Lane from '../models/lane';
import Note from '../models/note';
import uuid from 'uuid';
import mongoose from 'mongoose';

export function addLane(req, res) {
  if (!req.body.name) {
    res.status(403).end();
  }

  const newLane = new Lane(req.body);

  newLane.notes = [];

  newLane.id = uuid();
  newLane.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json(saved);
  });
}


export function getLanes(req, res) {
  Lane.find().exec((err, lanes) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ lanes });
  });
}
 
export function updateLane(req, res) {
  Lane.update({ id: req.params.laneId }, { $set: { name: req.body.name }}).exec((err, name) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ name });
  });
}

export function deleteLane(req, res) {
  let notesToRemove = [];

  Lane.findOne({ id: req.params.laneId }).exec((err, lane) => {
    if (err) {
      res.status(500).send(err);
    }

    if (lane.notes.length) {
      for (let i = 0; i < lane.notes.length; i++) {
        notesToRemove.push(mongoose.Types.ObjectId(lane.notes[i]._id));
      }

      Note.remove({ _id: { $in: notesToRemove} }).exec((err) => {
        if (err) {
          res.status(500).send(err);
        }

        lane.remove(() => {
          return res.status(200).end();
        });
      });
    } else {
      lane.remove(() => {
        return res.status(200).end();
      });
    }
  });
}