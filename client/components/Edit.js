import React, { Component } from 'react';
import styles from './Edit.css';
import PropTypes from 'prop-types';

export default class Edit extends Component {
  checkEnter = (e) => {
    if (e.key === 'Enter') {
      this.finishEdit(e);
    }
  };
  finishEdit = (e) => {
    const value = e.target.value;

    if (this.props.onUpdate) {
      this.props.onUpdate(value.trim());
    }
  };
  renderDelete = () => {
    return (
      <div className={styles.NoteHeader}>
        <button className={styles.DeleteNote} onClick={this.props.onDelete}>x</button>
      </div>
    );
  };
  renderValue = () => {
    const { value, onDelete, onValueClick } = this.props;

    return (
      <div className={styles.DeleteBox}>
        <span onClick={onValueClick}>{value}</span>
        {onDelete ? this.renderDelete() : null}
      </div>
    );
  };
  renderEdit = () => {
    return (
      <input
        type="text"
        autoFocus
        defaultValue={this.props.value}
        onBlur={this.finishEdit}
        onKeyPress={this.checkEnter}
      />
    );
  };
  render() {
    return (
      <div className={styles.NameOfLane}>
        {this.props.editing ? this.renderEdit() : this.renderValue()}
      </div>
    );
  }
}

Edit.propTypes = {
  value: PropTypes.string,
  onUpdate: PropTypes.func,
  onValueClick: PropTypes.func,
  onDelete: PropTypes.func,
  editing: PropTypes.bool,
};
