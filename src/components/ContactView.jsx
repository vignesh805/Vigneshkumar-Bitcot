import { useEffect, useState } from "react";
import AddContact from "../components/AddContact";
import EditContact from "../components/EditContact";
import ViewContactDetails from "../components/ViewContactDetails";
import SearchContact from "../components/SearchContact";
import "../App.css";

export default function ContactView() {
  const [contacts, setContacts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [mode, setMode] = useState("");
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/BitcotDev/fresher-machin-test/main/json/sample.json")
      .then(res => res.json())
      .then(data => {
        const list = (Array.isArray(data) ? data : []).map(c => ({
          id: c.id,
          name: c.name,
          phone: c.mobile,
          email: c.email || ""
        }));
        setContacts(list);
        setFiltered(list);
      });
  }, []);

  const updateList = (list) => {
    setContacts(list);
    setFiltered(list);
    setMode("");
  };

  const handleAdd = (c) => updateList([...contacts, c]);

  const handleEdit = (c) =>
    updateList(contacts.map(x => (x.id === c.id ? c : x)));

  const handleDelete = (id) =>
    updateList(contacts.filter(c => c.id !== id));

  const handleSearch = (q) => {
    const text = q.toLowerCase();
    setFiltered(
      contacts.filter(c =>
        c.name.toLowerCase().includes(text) ||
        c.phone.includes(text) ||
        c.email.toLowerCase().includes(text)
      )
    );
  };

  return (
    <div className="container">
     <header className="header">
  <h3>Contacts</h3>
  <button onClick={() => setMode("add")}>+</button>
</header>

{/*  SearchContact */ }
      <SearchContact onSearch={handleSearch} />


{/* Editcontact */}
      <EditContact
        contacts={filtered}
        onDelete={handleDelete}
        onEdit={(c) => { setSelected(c); setMode("edit"); }}
        onView={(c) => { setSelected(c); setMode("view"); }}
      />

{/* Addcontact */}
      {(mode === "add" || mode === "edit") && (
        <AddContact
          initialData={mode === "edit" ? selected : null}
          onSubmit={mode === "add" ? handleAdd : handleEdit}
          onClose={() => setMode("")}
        />
      )}
 
 {/* viewcontactdetails */}
      {mode === "view" && (
        <ViewContactDetails contact={selected} onClose={() => setMode("")} />
      )}
    </div>
  );
}