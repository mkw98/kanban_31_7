import React from 'react';
import { connect } from 'react-redux';
import Note from './Note';
import * as noteActions from '../Note/NoteActions';
import Edit from '../../components/Edit';
import { PropTypes } from 'prop-types';
import styles from './Notes.css';


const Notes = ({ notes, laneId, noteID, editNote, updateNote, deleteNote, moveWithinLane}) => (
<ul className={styles.Notes}>{notes.map((note) =>
  <Note
    id={note.id}
    key={note.id}
    moveWithinLane={moveWithinLane}
    laneId={laneId}
  >
    <Edit
      editing={note.editing}
      value={note.task}
      onValueClick={() => editNote(note.id)}
      onUpdate={task => updateNote({
        ...note,
        task,
        editing: false,
      })}
      onDelete={() => deleteNote(note.id, laneId)}
    />
  </Note>
)}</ul>
);

Notes.propTypes = {
  deleteNote: PropTypes.func,
  updateNote: PropTypes.func,
  laneId: PropTypes.string,
  editNote: PropTypes.func,
  notes: PropTypes.array,
};

export default Notes;