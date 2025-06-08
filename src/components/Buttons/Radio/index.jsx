import PropTypes from "prop-types";

function RadioButton({ onClick }) {
  return (
    <input
      onClick={(e) => onClick(e)}
      name="default-radio"
      type="radio"
      class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300"
    />
  );
}

RadioButton.propTypes = {
  onClick: PropTypes.func,
};

export default RadioButton;
