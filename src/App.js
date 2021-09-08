import { useState } from "react";
import "./App.css";
import data from "./contacts.json";

function App() {
  const [contacts, setContacts] = useState(data.slice(0, 5));
  const [outRemaining, setOutRemaining] = useState(data);

  const addRandom = () => {
    if (outRemaining && outRemaining.length > 0) {
      let index = Math.floor(Math.random() * (outRemaining.length - 0) + 0);
      setContacts(...contacts, outRemaining[index]);
      let filtered = outRemaining.filter((contact, i) => {
        return i != index;
      });
      setOutRemaining(filtered);
    }

    // const random = data[Math.floor(Math.random() * data.length)];
    // contacts.push(random);
    // setContacts(contacts);
  };

  // var item = items[Math.floor(Math.random() * items.length)];

  // onClick={addRandom()}

  return (
    <div className="App">
      <div>
        <button onClick={() => addRandom()}>Add Random Contact</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>
        <tbody>
          {contacts &&
            contacts.map((contact) => {
              return (
                <tr key={contact.id}>
                  <td>
                    <img src={contact.pictureUrl} />
                  </td>
                  <td>{contact.name}</td>
                  <td>
                    {(Math.floor(contact.popularity * 100) / 100).toFixed(2)}
                  </td>
                  <td>
                    {contact.wonOscar === true ? (
                      <span>🏆</span>
                    ) : (
                      <span></span>
                    )}
                  </td>
                  <td>
                    {contact.wonEmmy === true ? <span>🏆</span> : <span></span>}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
