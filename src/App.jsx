import React, { useState } from "react";
import { X } from "lucide-react";

const App = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("form submited");

    const copyTask = [...task];
    copyTask.push({ title, details });
    setTask(copyTask);

    setTitle("");
    setDetails("");
  };

  const deleteNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1);
    setTask(copyTask);
  };

  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [task, setTask] = useState([]);
  return (
    <div className="h-screen lg:flex bg-black text-white">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex lg:w-1/2 flex-col p-10 gap-4 items-start"
      >
        <h1 className="text-4xl font-bold">Add Notes</h1>

        {/* this is 1st input */}
        <input
          type="text"
          placeholder="Enter notes"
          className="px-5 py-2 w-full border-2 font-medium rounded"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        {/* this is detail input box  */}
        <textarea
          type="text"
          placeholder="enter the details"
          className=" px-4 flex h-20 w-full border-2 rounded font-medium"
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        />

        <button className="bg-white active:bg-gray-500 w-full text-black px-5 py-2 rounded font-medium">
          Add Notes
        </button>
      </form>
      <div className=" lg:w-1/2 lg:border-l p-10  gap-5">
        <h1 className="text-4xl font-bold">Recent Notes</h1>
        <div className="flex pb-5 items-start justify-start flex-wrap gap-5 mt-5 overflow-auto h-[90%] ">
          {task.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className=" h-52 w-52 relative rounded-2xl bg-cover text-black p-5 h-52 bg-[url('https://pngimg.com/d/sticky_note_PNG18928.png')]"
              >
                <h2
                  onClick={() => {
                    deleteNote(idx);
                  }}
                  className="absolute top-7 right-5 p-2 rounded-full text-xs"
                >
                  <X size={18} color="#fa0000" strokeWidth={4} />
                </h2>
                <h3 className="leading-tight text-xl font-bold pt-6 wrap-break-word w-[80%]">
                  {elem.title}
                </h3>
                <p className="mt-4 leading-tight font-medium wrap-break-word">
                  {elem.details}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
