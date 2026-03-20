export default function ViewContactDetails({ contact, onClose }) {
  if (!contact) return null;

  return (
    <div className="modal">
      <h4>Contact Details</h4>
      <p>Name: {contact.name}</p>
      <p>Phone: {contact.phone}</p>
      <p>Email: {contact.email}</p>
      <button className="detailsclose" onClick={onClose}>Close</button>
    </div>
  );
}