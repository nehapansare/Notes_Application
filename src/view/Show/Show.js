import React, { useEffect, useState } from 'react';
import './Show.css';
import { Link } from 'react-router-dom';
import NoteCard from '../../compoent/NoteCard/NoteCard';

function Show() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const showNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(showNotes);
  }, []);

  // Define the deleteNote function
  const deleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  };

  return (
    <div className="add-container1">
      <Link to='/'>
        <h3 className="back-home"><i className="fa-solid fa-arrow-left"></i> Back To Home</h3>
      </Link>

      <div className="note-img-container1">
        <img 
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ45k8GTfZHqAcNRbHiuvnHnsTseEkyOZ6YDQ&s' 
          alt='pic' 
          className='notes-img' 
        />
        <h1 className="notes-title">Show Notes</h1>
      </div>

      <div className='note-container1'>
        {notes.map((note, index) => {
          const { title, description, category } = note;
          return (
            <NoteCard 
              key={index} 
              title={title} 
              description={description} 
              category={category} 
              onDelete={() => deleteNote(index)} // Pass deleteNote function
            />
          );
        })}
      </div>
    </div>
  );
}

export default Show;
