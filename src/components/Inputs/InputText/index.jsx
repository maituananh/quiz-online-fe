import PropTypes from "prop-types";

function InputText({ onClick, onChange, value }) {
  return (
    <input
      type="text"
      class="bg-gray-50 border border-gray-300 text-sm rounded-lg w-full p-2.5"
      placeholder="New Answer"
      required
      value={value}
      onClick={onClick}
      onChange={onChange}
    />
  );
}

InputText.prototype = {
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default InputText;
