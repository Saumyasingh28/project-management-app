import { useRef } from "react";

export default function ProjectContainer({ isEditorOpen, onCancel, onSave }) {
  const inputTitle = useRef();
  const inputDescription = useRef();

  function handleSaveClick() {
    let project = {
      title: inputTitle.current.value,
      description: inputDescription.current.value,
    };
    onSave(project);
  }

  return (
    <div className="w-3/4 h-screen">
      {isEditorOpen ? (
        <div className="p-5 justify-center">
          <p className="text-gray-800">
            <label>Title</label>
            <input type="text" ref={inputTitle} />
          </p>
          <p className="text-gray-800">
            <label className="text-gray-800">Description</label>
            <input type="text-area" ref={inputDescription} />
          </p>
          <p>
            <button onClick={onCancel}>Cancel</button>
            <button onClick={handleSaveClick}>Save</button>
          </p>
        </div>
      ) : (
        <div>
          <h2 className="text-black font-bold">Project Heading</h2>
        </div>
      )}
    </div>
  );
}
