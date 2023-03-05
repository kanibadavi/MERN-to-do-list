const Input = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="shadow-lg bg-purple border border-purple-500 rounded-xl p-4">
          <label htmlFor="task">Add New Task</label>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded m-4 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="task"
            name="task"
          ></input>
          <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow focus:outline-none focus:bg-white focus:border-purple-500">
            Add
          </button>
        </div>
      </div>
    </>
  );
};

export default Input;
