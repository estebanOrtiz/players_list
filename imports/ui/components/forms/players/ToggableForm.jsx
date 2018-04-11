import React from "react";
import { PropTypes } from "prop-types";

const ToggableForm = ({ visible }) => {
  return visible && <h1>ToggableForm</h1>;
};

ToggableForm.propTypes = {
  visible: PropTypes.bool.isRequired
};

export default ToggableForm;