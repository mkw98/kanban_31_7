import React from 'react';
import Lane from './LaneContainer.js';
import { PropTypes } from 'prop-types';

const Lanes = ({ lanes }) => {
  return (
    <div className="lanes">
      {lanes.map((lane, id) =>
        <Lane className="Lane" key={id} lane={lane} />
      )}
    </div>
  );
};

Lanes.propTypes = {
  lanes: PropTypes.array,
};

export default Lanes;
