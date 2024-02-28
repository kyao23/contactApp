import React, { useState, useEffect } from 'react'

const api = "http://localhost:5051/contacts"
const sendToServer = async (name, email) => {
  const data = JSON.stringify({ name, email });
  const response = await fetch(api, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: data,
  });
  const responseData = await response.json();
  console.log(responseData);
}


const Create = () => {
  const [inputName, setName] = useState("");
  const [inputEmail, setEmail] = useState("");
  const [initial, setInitial] = useState("");

  const createInitial = (name) => {
    const words = name.split(' ');
    console.log(words.length)
    if (words.length >= 2) {
      setInitial(words[0][0].toUpperCase() + words[words.length - 1][0].toUpperCase());
    } else if (words.length != "" && words.length == 1) {
      setInitial(words[0][0].toUpperCase());
    }
  }

  return (
    <div className="contactpage">
      <div className="format">
        <div className = "initial"> 
        <div className="contactphoto">
            <h1 className = "initialtext">{initial}</h1>
          </div>
        </div>
      </div>
      <div className="input">
        <input
          className="enterValue"
          type="text"
          placeholder="Enter Name"
          onChange={(event) => { setName(event.target.value) }}
        />
        <input
          className="enterValue"
          type="text"
          placeholder="Email"
          onChange={(event) => { setEmail(event.target.value) }}
        />
        <button className="confirmContact"
          onClick={() => {
            sendToServer(inputName, inputEmail);
            if(inputName != ""){
              createInitial(inputName);
            }
          }}
        >
          <h3>Confirm Contact</h3>
        </button>
      </div>
    </div>

  )
}

export default Create