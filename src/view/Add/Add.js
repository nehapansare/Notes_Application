import React, { useState } from 'react';
import './Add.css';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

function Add() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const addNote = () => {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    const noteObject = { title, description, category };
    notes.push(noteObject);
    localStorage.setItem("notes", JSON.stringify(notes));
    toast.success("Note added Successfully");
    
    setTitle("");
    setDescription("");
    setCategory("");
  };

  return (
    <div className="add-container">
      <Link to='/'>
        <h3 className="back-home"><i className="fa-solid fa-arrow-left"></i> Back To Home</h3>
      </Link>

      <div className="note-img-container">
        <img 
          src='https://cdn-icons-png.freepik.com/256/3837/3837450.png?semt=ais_hybrid' 
          alt='pic' 
          className='notes-img' 
        />
        <h1>Add Notes</h1>
      </div>

      <input 
        type='text' 
        placeholder='Title of Notes'
        value={title}  
        onChange={(e) => setTitle(e.target.value)}
      />
      
      <input 
        type='text' 
        placeholder='Description'
        value={description}  
        onChange={(e) => setDescription(e.target.value)}
      />
      
      <select value={category} onChange={(e) => setCategory(e.target.value)} className='category-container'>
        <option value="" disabled>Select a Category</option>
        <option value="work">Work</option>
        <option value="shopping">Shopping</option>
        <option value="personal">Personal</option>
        <option value="learning">Learning</option>
      </select>
      
      <button 
        type="button"
        onClick={() => {
          setTitle("");
          setDescription(""); 
          setCategory(""); 
        }}
      >
        Clear
      </button>
     
      <button type='button' onClick={addNote}>Add Notes</button>

    </div>
  );
}

export default Add;
