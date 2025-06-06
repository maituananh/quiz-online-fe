import { Input } from "@components/index";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AnswerInput({ answer, onTextChange, onDelete }) {
  return (
    <div className="flex items-center justify-between space-x-2">
      <input
        id="default-radio-1"
        type="radio"
        value=""
        name="default-radio"
        class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300"
      />

      <Input onChange={(e) => onTextChange(answer.id, e.target.value)} />

      <FontAwesomeIcon
        icon={faTrashCan}
        className="text-red-500 h-5"
        onClick={() => onDelete(answer.id)}
      />
    </div>
  );
}

export default AnswerInput;
