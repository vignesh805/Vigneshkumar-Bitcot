export default function EditContact({ contacts = [], onDelete, onEdit, onView }) {
  if (!contacts.length) return <p>No contacts</p>;

  return (
    <div>
      {contacts.map((c, i) => (
        <div className="item" key={c.id}>
          
          <div className="info">
            <strong>{i + 1}. {c.name}</strong>
            <div className="sub">{c.phone}</div>
          </div>

          <div className="actions">
            <button onClick={() => onView(c)}>👁</button>
            <button onClick={() => onEdit(c)}>✏️</button>
            <button onClick={() => onDelete(c.id)}>🗑</button>
          </div>

        </div>
      ))}
    </div>
  );
}