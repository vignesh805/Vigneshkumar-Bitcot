import { useState, useEffect } from "react";

export default function AddContact({ initialData, onSubmit, onClose }) {
  const [form, setForm] = useState({ name: "", phone: "", email: "" });

  useEffect(() => {
    if (initialData) setForm(initialData);
  }, [initialData]);

  const change = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = () => {
    if (!form.name || !form.phone || !form.email) {
      alert("All fields required");
      return;
    }

    onSubmit({
      ...form,
      id: initialData?.id || Date.now()
    });

    onClose();
  };

  return (
    <div className="form-box">
      <h4>{initialData ? "Edit Contact" : "Add Contact"}</h4>

      <input name="name" value={form.name} onChange={change} placeholder="Name" />
      <input name="phone" value={form.phone} onChange={change} placeholder="Phone" />
      <input name="email" value={form.email} onChange={change} placeholder="Email" />

      <div className="form-actions">
        <button className="editsave" onClick={submit}>Save</button>
        <button className="editcancel" onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}