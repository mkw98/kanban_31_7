import React from 'react';
import { connect } from 'react-redux';
import Note from './Note';
import * as noteActions from '../Note/NoteActions';
import Edit from '../../components/Edit';
import { PropTypes } from 'prop-types';
import styles from './Notes.css';


const Notes = ({ moveWithinLane, notes, laneId, noteId, editNote, updateNote, deleteNote }) => {
  return (<ul>{notes.map((note) =>
    <Note
      id={note.id}
      key={note.id}
      moveWithinLane={moveWithinLane}
      laneId={laneId}
      editing={note.editing}
    >
      <Edit
        editing={note.editing}
        value={note.task}
        onValueClick={() => editNote(note.id)}
        onUpdate={(task) => {updateNote({
            ...note,
            task,
            editing: false,
          }, laneId)
        }}
        onDelete={() => deleteNote(note.id, laneId)}
      />
    </Note>
  )}</ul>);
};

Notes.propTypes = {
  deleteNote: PropTypes.func,
  updateNote: PropTypes.func,
  laneId: PropTypes.string,
  editNote: PropTypes.func,
  notes: PropTypes.array,
};

export default Notes;
