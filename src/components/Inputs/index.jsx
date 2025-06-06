function Input({ onClick, onChange, value }) {
  return (
    <input
      type="text"
      class="bg-gray-50 border border-gray-300 text-sm rounded-lg w-full p-2.5"
      placeholder="New Answer"
      required
      value={value}
      onClick={onClick}
      onChange={onChange}
    />
  );
}

export default Input;
