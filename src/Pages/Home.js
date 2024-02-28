import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../App.css";

const Home = () => {
  // Initialize data state as an empty array since we expect an array from the fetch call
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5051/contacts');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const serverData = await response.json();
        setData(serverData.response); // Directly set serverData to data
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <body>
      <div className="homepage">
        <div className = "format">
          <Link to="/Create">
            <button className="addcontact"> <h3>Add Contact</h3></button>
          </Link>
          <Link to="/Remove">
            <button className="removecontact"><h3>Remove Contact</h3></button>
          </Link>
        </div>

        <div>
          {/* Iterating over data to display each contact */}
          {data.map((contact, index) => {
            return (
              <div key={index}> {/* Using index as key; consider using a unique identifier if available */}
                <h3 className="namelist">{index+1}. ID: {contact.id}, Name: {contact.name}, Email: {contact.email}</h3>
              </div>
            );
          })}
        </div>

      </div>
    </body>
  );
};

export default Home;
