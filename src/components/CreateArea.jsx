import React, { useState } from "react";
import { Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    note: ""
  });
  const [isClicked, setIsClicked] = useState(false);
  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prev) => {
      return {
        ...prev,
        [name]: value
      };
    });
  }
  function handleExpand(event){
    setIsClicked(true)
  }
  return (
    <div>
      <form
        className="create-note"
        autoComplete="off"
        onSubmit={(e) => {
          e.preventDefault();
        }}
        onMouseLeave={()=>{
              setIsClicked(false)
        }}
      >
        <input
          onClick={handleExpand}
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          onClick={handleExpand}
          onChange={handleChange}
          name="note"
          placeholder="Take a note..."
          rows={isClicked? 3:1}
          value={note.note}
        />
        <Zoom in={isClicked}>
          <Fab
            onClick={() => {
              setIsClicked(false);
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
