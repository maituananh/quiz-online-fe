import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import PropTypes from 'prop-types';

function Button({
  type = "button",
  containerCss = "",
  buttonCss = "",
  iconCss = "",
  icon = faPlus,
  name = "",
  handleClickBtn,
}) {
  return (
    <div className={classNames(`flex items-center`, containerCss)}>
      <FontAwesomeIcon icon={icon} className={iconCss} />
      <button
        type={type}
        className={classNames(`w-full`, buttonCss)}
        onClick={handleClickBtn}
      >
        {name}
      </button>
    </div>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  containerCss: PropTypes.string,
  buttonCss: PropTypes.string,
  iconCss: PropTypes.string,
  icon: PropTypes.object,
  name: PropTypes.string,
  handleClickBtn: PropTypes.func
}

export default Button;
