import React, { useState } from 'react';
import './style/Styles.css';
import './style/ResourceManagement.css';
import axios from 'axios';

// Define the initial resources
const initialResources = [
  {
    id: 1,
    title: 'Python',
    author: 'Guido van Rossum',
    publicationDate: '2020-01-01',
    type: 'Book',
    image: 'C:/Users/jalar/Downloads/python.jpg',
  },
  {
    id: 2,
    title: 'Java',
    author: 'Author 2',
    publicationDate: '2021-02-01',
    type: 'Book',
    image: '/path/to/book2.jpg',
  },
];

function ResourceManagementPage() {
  const [resources, setResources] = useState(initialResources);
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    publicationDate: '',
    type: 'Book',
    image: null,
  });
  const [editing, setEditing] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle image upload
  const handleImageUpload = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      image: URL.createObjectURL(e.target.files[0]), // Preview image
    }));
  };

  // Add new resource
  const addResource = async () => {
    if (!formData.title || !formData.author || !formData.publicationDate || !formData.image) {
      alert("Please fill in all fields and upload an image");
      return;
    }
  
    try {
      const newResource = { 
        title: formData.title, 
        author: formData.author, 
        publicationDate: formData.publicationDate, 
        type: formData.type, 
        image: formData.image 
      };
  
      // Send POST request to backend API
      const response = await axios.post('http://localhost:5000/items', newResource);
      
      // Add the resource to the frontend state
      setResources([...resources, response.data]);
      setFormData({ title: '', author: '', publicationDate: '', type: 'Book', image: null });
      setShowModal(false); // Close the modal after adding
    } catch (error) {
      console.error("Error adding resource:", error);
      alert("Failed to add resource. Please try again.");
    }
  };

  // Delete resource
  const deleteResource = (id) => {
    setResources(resources.filter(resource => resource.id !== id));
  };

  // Edit resource
  const editResource = (resource) => {
    setEditing(resource.id);
    setFormData(resource);
    setShowModal(true); // Open modal for editing
  };

  // Update resource
  const updateResource = () => {
    if (!formData.title || !formData.author || !formData.publicationDate || !formData.image) {
      alert("Please fill in all fields and upload an image");
      return;
    }
    const updatedResources = resources.map((resource) =>
      resource.id === editing ? { ...formData, id: editing } : resource
    );
    setResources(updatedResources);
    setEditing(null);
    setFormData({ title: '', author: '', publicationDate: '', type: 'Book', image: null });
    setShowModal(false); // Close the modal after updating
  };

  return (
    <div className="resource-management">
      <h1>Resource Management</h1>

      {/* Add Resource Button */}
      <button className="add-resource-button" onClick={() => setShowModal(true)}>
        Add Resource
      </button>

      {/* Modal for Add or Edit Resource */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-container">
            <h2>{editing ? 'Update Resource' : 'Add New Resource'}</h2>
            <form onSubmit={(e) => e.preventDefault()}> {/* Prevent form submit to avoid page reload */}
              <input
                type="text"
                name="title"
                placeholder="Title"
                value={formData.title}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="author"
                placeholder="Author"
                value={formData.author}
                onChange={handleInputChange}
              />
              <input
                type="date"
                name="publicationDate"
                value={formData.publicationDate}
                onChange={handleInputChange}
              />
              <select
                name="type"
                value={formData.type}
                onChange={handleInputChange}
              >
                <option value="Book">Book</option>
                <option value="Journal">Journal</option>
                <option value="Article">Article</option>
              </select>

              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleImageUpload}
              />
              {formData.image && (
                <img src={formData.image} alt="Resource Preview" className="preview-image" />
              )}

              {/* Use onClick instead of onSubmit */}
              <button type="button" onClick={editing ? updateResource : addResource}>
                {editing ? 'Update Resource' : 'Add Resource'}
              </button>
            </form>

            {/* Close Modal Button */}
            <button className="close-modal-button" onClick={() => setShowModal(false)}>
              Close
            </button>
          </div>
        </div>
      )}

      <h2>Existing Resources</h2>
      <div className="resources-list">
        {resources.map((resource) => (
          <div key={resource.id} className="resource-item">
            <img src={resource.image} alt={resource.title} className="resource-image" />
            <div className="resource-details">
              <h3>{resource.title}</h3>
              <p>Author: {resource.author}</p>
              <p>Published on: {resource.publicationDate}</p>
              <p>Type: {resource.type}</p>
              <button onClick={() => editResource(resource)}>Edit</button>
              <button onClick={() => deleteResource(resource.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ResourceManagementPage;
