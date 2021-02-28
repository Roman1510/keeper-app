import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";


function App() {
  let localArr = JSON.parse(localStorage.getItem('arr'));
  const [arr, setArr] = useState(localArr? localArr : []);
  useEffect(()=>{
    localStorage.setItem('arr', JSON.stringify(arr))
  },[arr])
  function onAdd(e) {
    if (e.title !== "") {
      setArr(() => {
        return [...arr, e];
      });
    } else {
      alert("There must be a title");
    }
  }
  function onDelete(id) {
    setArr(() => {
      return arr.filter((_, i) => i !== id);
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={onAdd} />
      {arr.map((e, i) => {
        return (
          <Note
            key={i}
            id={i}
            title={e.title}
            content={e.note}
            onDelete={onDelete}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
