import { faClipboardQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

function Label({ icon = faClipboardQuestion, lable = "" }) {
  return (
    <div className="flex items-center">
      <FontAwesomeIcon icon={icon} className="w-4 h-4" />
      <label className="ml-2 bg-neutral-100">{lable}</label>
    </div>
  );
}

Label.prototype = {
  icon: PropTypes.element,
  lable: PropTypes.string,
};

export default Label;
