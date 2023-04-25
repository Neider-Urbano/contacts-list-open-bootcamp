import { useEffect, useState } from "react";
import Contacts from "./components/Contacts";
import Save from "./components/Save";
import data from "./utils/contacts.json";

function App() {
  const [fetch, setFetch] = useState(false);
  const [contactsList, setContactsList] = useState(data);
  useEffect(() => {
    if (fetch === true) {
      setFetch(false);
    }
  }, [fetch]);

  return (
    <div className="app">
      <Save
        data={contactsList}
        onSetContactList={setContactsList}
        onSetFetch={setFetch}
      />
      <Contacts
        data={contactsList}
        onSetContactList={setContactsList}
        onSetFetch={setFetch}
      />
    </div>
  );
}

export default App;
