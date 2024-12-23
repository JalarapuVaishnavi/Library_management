// src/components/ResourceForm.js
import React, { useState } from 'react';

const ResourceForm = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publicationDate, setPublicationDate] = useState('');
    const [type, setType] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !author || !publicationDate || !type) {
            setError('All fields are required.');
            return;
        }

        // Here you would typically send the data to your backend or state management
        console.log('New Resource:', { title, author, publicationDate, type });

        // Clear the form
        setTitle('');
        setAuthor('');
        setPublicationDate('');
        setType('');
        setError('');
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <h4>Add New Resource</h4>
            {error && <div className="alert alert-danger">{error}</div>}
            <div className="form-group">
                <label>Title</label>
                <input
                    type="text"
                    className="form-control"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label>Author</label>
                <input
                    type="text"
                    className="form-control"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label>Publication Date</label>
                <input
                    type="date"
                    className="form-control"
                    value={publicationDate}
                    onChange={(e) => setPublicationDate(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label>Type</label>
                <select
                    className="form-control"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                >
                    <option value="">Select Type</option>
                    <option value="Book">Book</option>
                    <option value="Journal">Journal</option>
                    <option value="Digital Resource">Digital Resource</option>
                </select>
            </div>
            <button type="submit" className="btn btn-primary">Add Resource</button>
        </form>
    );
};

export default ResourceForm;