import { CheckBox, InputText, RadioButton } from "@components/index";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

function AnswerInput({
  answer,
  isMultipleChoice,
  onTextChange,
  onDelete,
  onIsCorrectAnswer,
}) {
  return (
    <div className="flex items-center justify-between space-x-2">
      {isMultipleChoice ? (
        <CheckBox
          onClick={(e) => onIsCorrectAnswer(answer.id, e.target.checked)}
        />
      ) : (
        <RadioButton
          onClick={(e) => onIsCorrectAnswer(answer.id, e.target.checked)}
        />
      )}

      <InputText onChange={(e) => onTextChange(answer.id, e.target.value)} />

      <FontAwesomeIcon
        icon={faTrashCan}
        className="text-red-500 h-5"
        onClick={() => onDelete(answer.id)}
      />
    </div>
  );
}

AnswerInput.prototype = {
  answer: PropTypes.object,
  isMultipleChoice: PropTypes.bool,
  onTextChange: PropTypes.func,
  onDelete: PropTypes.func,
  onIsCorrectAnswer: PropTypes.func,
};

export default AnswerInput;
