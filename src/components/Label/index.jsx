import { faClipboardQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function LabelQuestion({ icon = faClipboardQuestion, name = "Question 1" }) {
  return (
    <div className="flex items-center">
      <FontAwesomeIcon icon={icon} className="w-4 h-4" />
      <label className="ml-2 bg-neutral-100">{name}</label>
    </div>
  );
}

export default LabelQuestion;
