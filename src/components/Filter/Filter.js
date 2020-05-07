import React from "react";
import PropTypes from "prop-types";
import styles from './Filter.modules.css';

// const style = {
//   display: "block",
// };

const Filter = ({ onChange }) => {
  return (
    <label className={styles.search}>
      Find contacts by name
      <input
        type="text"
        onChange={onChange}
        name="filter"
        // style={style}
        id="filterInput"
      />
    </label>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};
export default Filter;