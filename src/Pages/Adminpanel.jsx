import React, { useState } from 'react';
import { createContent, updateContent, deleteContent } from '../services/api';

const AdminPanel = () => {
  const [newContent, setNewContent] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createContent(newContent, image);
    alert('Content created successfully');
  };

  return (
    <div className="admin-panel">
      <h1>Admin Panel</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newContent}
          onChange={(e) => setNewContent(e.target.value)}
          placeholder="Enter new content"
        />
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <button type="submit">Create Content</button>
      </form>
    </div>
  );
};

export default AdminPanel;
