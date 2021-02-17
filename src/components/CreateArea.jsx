import React, { useState } from "react";
import { Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    note: ""
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prev) => {
      return {
        ...prev,
        [name]: value
      };
    });
  }
  return (
    <div>
      <form
        className="create-note"
        autoComplete="off"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          onChange={handleChange}
          name="note"
          placeholder="Take a note..."
          rows="3"
          value={note.note}
        />
        <Zoom in={true}>
          <Fab
            onClick={() => {
              props.onAdd(note);
              setNote(() => {
                return {
                  title: "",
                  note: ""
                };
              });
            }}
          >
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
