import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import PropTypes from "prop-types";

function Button({
  css = "from-blue-500 via-blue-600 to-blue-700",
  label,
  type,
  icon,
  handleClick,
}) {
  return (
    <button
      onClick={handleClick}
      type={type}
      className={classNames(
        "text-white bg-gradient-to-r hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2",
        css
      )}
    >
      {icon && <FontAwesomeIcon icon={icon} className="mr-2" />}
      <p>{label}</p>
    </button>
  );
}

Button.propTypes = {
  css: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  icon: PropTypes.elementType,
  handleClick: PropTypes.func,
};

export default Button;
