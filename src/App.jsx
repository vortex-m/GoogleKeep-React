import { useState } from "react";
import CreateNote from "./Components/CreateNote";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Note from "./Components/Note";

function App() {
  const [addItem, setAddItem] = useState([]);
  const addNote = (note) => {
    setAddItem((prev) => {
      return [...prev, note]
    })
  }

  const onDelete = (id) => {
    setAddItem((oldData) => {
      oldData.filter((currData, index) => {
        return index !== id;
      })
    })
  }


  return (
    <div >
      <Header />
      <CreateNote passNote={addNote} />
      {addItem.map((val, index) => {
        return (
          <Note key={index}
            id={index}
            title={val.title}
            content={val.textarea}
            deleteItem={onDelete}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;