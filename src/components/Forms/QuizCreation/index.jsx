function QuizCreationForm() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-8">
      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          for="topic-name"
        >
          Quiz Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="topic-name"
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
          placeholder="Enter quiz name"
        />
      </div>

      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          for="topic-description"
        >
          Description
        </label>
        <textarea
          id="topic-description"
          rows="3"
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
          placeholder="Enter topic description"
        ></textarea>
      </div>
    </div>
  );
}

export default QuizCreationForm;
