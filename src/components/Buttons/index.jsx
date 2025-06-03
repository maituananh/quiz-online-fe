import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";

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
    <div className={classNames(containerCss, `w-full flex items-center`)}>
      <FontAwesomeIcon icon={icon} className={iconCss} />
      <button
        type={type}
        className={classNames(buttonCss, `w-full`)}
        onClick={handleClickBtn}
      >
        {name}
      </button>
    </div>
  );
}

export default Button;
