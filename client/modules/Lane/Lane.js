import React from 'react';
import NotesContainer from '../Note/NotesContainer';
import { PropTypes } from 'prop-types';
import styles from './Lane.css';
import Edit from '../../components/Edit';

class Lane extends React.Component {
  constructor(props) {
    super(props);

    this.props = props;
  }

  render() {
    const { lane, connectDropTarget, connectlane, laneNotes, updateLane, addNote, deleteLane, editLane } = this.props;
    const laneId = lane.id;

    return connectDropTarget(
      <div className={styles.Lane}>
        <div className={styles.LaneHeader}>
          <Edit
            className={styles.LaneName}
            editing={lane.editing}
            value={lane.name}
            onValueClick={() => editLane(lane.id)}
            onUpdate={name => updateLane({ ...lane, name, editing: false })}
          />
          <div className={styles.LaneControls}>
            <div className={styles.LaneAddNote}>
              <button className={styles.AddNote} onClick={() => addNote({ task: 'New Note' }, laneId)}>Add note</button>
            </div>
            <div className={styles.LaneDelete}>
              <button className={styles.RemoveNote} onClick={() => deleteLane(lane)}>Remove lane</button>
            </div>
          </div>
        </div>
        <NotesContainer
          notes={laneNotes}
          laneId={laneId}
        />
      </div>
    );
  }
}

//const Lane = (props) => {
//  const { lane, laneNotes, updateLane, addNote, deleteLane } = props;
//  const laneId = lane.id;

//  return (
//    <div className={styles.Lane}>
//      <div className={styles.LaneHeader}>
//        <div className={styles.LaneAddNote}>
//          <button onClick={() => addNote({ task: 'New Note'}, laneId)}>Add Note</button>
//        </div>
//        <Edit
//          className={styles.LaneName}
//          editing={lane.editing}
//          value={lane.name}
//          onValueClick={() => editLane(lane.id)}
//
//          onUpdate={name => updateLane({ ...lane, name, editing: false })}
//        />
//        <div className={styles.LaneDelete}>
//          <button onClick={() => deleteLane(laneId)}>Remove Lane</button>
//       </div>
//      </div>
//      <NotesContainer
//        notes={laneNotes}
//        laneId={laneId}
//      />
//    </div>
//  );
//};

//render() {
//  const { connectDropTarget, lane, laneNotes, editLane, addNote, updateLane, deleteLane } = props;

//  return connectDropTarget(
//    <div >
//      ...
//    </div>
//  );
//}

Lane.propTypes = {
  lane: PropTypes.object,
  laneNotes: PropTypes.array,
  addNote: PropTypes.func,
  updateLane: PropTypes.func,
  deleteLane: PropTypes.func,
  editLane: PropTypes.func,
};

export default Lane;