import { Button, QuizCreationForm, Table } from "@components/index";
import {
  faFolderPlus,
  faList,
  faSave,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function QuizCreator() {
  return (
    <>
      <h1 className="text-3xl font-bold text-blue-600 mb-6 flex items-center">
        <FontAwesomeIcon icon={faFolderPlus} className="mr-3" />
        <p>Create New Quiz</p>
      </h1>

      <QuizCreationForm />

      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
          <FontAwesomeIcon icon={faList} className="mr-2" />
          <p>Select Questions for this Quiz</p>
        </h2>

        <div className="relative mb-4">
          <input
            type="text"
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
            placeholder="Search quizzes..."
          />
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute left-3 top-3 text-gray-400"
          />
        </div>

        <div className="max-h-96 overflow-y-auto">
          <Table />
        </div>
      </div>
      <div class="mt-8 flex justify-end">
        <Button
          icon={faSave}
          label="Create Quiz"
          css="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg shadow-md transition duration-200 flex items-center"
        />
      </div>
    </>
  );
}

export default QuizCreator;
