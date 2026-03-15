import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [status, setStatus] = useState("");

  const [people, setPeople] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const clearInputs = () => {
    setFullName("");
    setAge("");
    setAddress("");
    setStatus("");
    setEditIndex(null);
  };

  const addPerson = () => {
    const newPerson = {
      fullName,
      age,
      address,
      status,
    };

    setPeople([...people, newPerson]);
    clearInputs();
  };

  const deletePerson = (index) => {
    const updated = people.filter((_, i) => i !== index);
    setPeople(updated);
  };

  const editPerson = (index) => {
    const person = people[index];
    setFullName(person.fullName);
    setAge(person.age);
    setAddress(person.address);
    setStatus(person.status);
    setEditIndex(index);
  };

  const updatePerson = () => {
    const updated = [...people];
    updated[editIndex] = { fullName, age, address, status };
    setPeople(updated);
    clearInputs();
  };

  return (
    <div>
      <h2>Death Form</h2>

      <div>
        <label>Full Name</label><br />
        <input type="text" placeholder="Enter Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
      </div>

      <div>
        <label>Age</label><br />
        <input type="number" placeholder="Enter Age" value={age} onChange={(e) => setAge(e.target.value)} />
      </div>

      <div>
        <label>Address</label><br />
        <input type="text" placeholder="Enter Address" value={address} onChange={(e) => setAddress(e.target.value)} />
      </div>

      <div>
        <label>Relationship Status</label><br />
        <input type="text" placeholder="Single / Married" value={status} onChange={(e) => setStatus(e.target.value)} />
      </div>

      <br />

      {editIndex === null ? (
        <button onClick={addPerson}>Add</button>
      ) : (
        <button onClick={updatePerson}>Update</button>
      )}

      <button onClick={clearInputs}>Clear</button>

      <hr />

      <h3>People List</h3>

      {people.map((person, index) => (
        <div key={index}>
          <p>
            Name: {person.fullName} |
            Age: {person.age} |
            Address: {person.address} |
            Status: {person.status}
          </p>

          <button onClick={() => editPerson(index)}>Edit</button>
          <button onClick={() => deletePerson(index)}>Delete</button>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;