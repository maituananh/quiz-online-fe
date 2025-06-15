import { faEdit, faEye, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function QuestionList() {
  return (
    <>
      {JSON.parse(localStorage.getItem("questions")).map((question) => (
        <div
          key={question.id}
          className="bg-white rounded-xl shadow-md overflow-hidden question-card"
        >
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {question.id}
            </h3>
            <p className="text-gray-600 mb-4">
              Basic arithmetic questions for beginners
            </p>
            <div className="flex justify-between items-center">
              <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                12 Questions
              </span>
              <span className="text-gray-500 text-sm">Created: 05/20/2023</span>
            </div>
          </div>
          <div className="bg-gray-50 px-6 py-3 flex justify-end gap-2 space-x-3">
            <FontAwesomeIcon icon={faEdit} className="text-blue-600" />
            <FontAwesomeIcon icon={faEye} className="text-green-600" />
            <FontAwesomeIcon icon={faTrash} className="text-red-600" />
          </div>
        </div>
      ))}
    </>
  );
}

export default QuestionList;
