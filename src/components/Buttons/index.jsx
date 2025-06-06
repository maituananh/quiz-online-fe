import PropTypes from "prop-types";

function Button({ label, type, handleClick }) {
  return (
    <button
      onClick={handleClick}
      type={type}
      class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
    >
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  handleClick: PropTypes.func,
};

export default Button;
