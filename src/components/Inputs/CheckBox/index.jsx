import PropTypes from "prop-types";

function CheckBox({ onClick }) {
  return (
    <input
      id="checkbox"
      type="checkbox"
      className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300"
      onClick={(e) => onClick(e)}
    />
  );
}

CheckBox.propTypes = {
  onClick: PropTypes.func,
};

export default CheckBox;
