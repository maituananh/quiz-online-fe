import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Answer({
  answerType = "radio",
  handleDeleteClick,
  handleCorrectAnswerClick,
  handleChangeAnswer,
}) {
  return (
    <div className="flex items-center">
      <input
        className="w-4 h-4"
        type={answerType}
        name="anwser"
        onClick={handleCorrectAnswerClick}
      />
      <input
        className="ml-2 h-7 w-11/12 bg-slate-200 outline-none rounded-md p-2"
        onChange={handleChangeAnswer}
      />
      <FontAwesomeIcon
        icon={faTrash}
        className="w-4 h-4 ml-2 text-red-600 cursor-pointer"
        onClick={handleDeleteClick}
      />
    </div>
  );
}

export default Answer;
