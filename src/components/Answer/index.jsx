import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

function Answer({
  answerType = "radio",
  handleDeleteClick,
  handleCorrectAnswerClick,
  handleChangeAnswer,
}) {
  return (
    <div className="flex items-center justify-around bg-slate-200 p-2 rounded-md">
      <input
        className="w-4 h-4"
        type={answerType}
        name="anwser"
        onClick={handleCorrectAnswerClick}
      />
      <input
        className="ml-2 h-7 w-11/12 outline-none rounded-md pl-2"
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

Answer.propTypes = {
  answerType: PropTypes.string,
  handleDeleteClick: PropTypes.func,
  handleCorrectAnswerClick: PropTypes.func,
  handleChangeAnswer: PropTypes.func,
};

export default Answer;
