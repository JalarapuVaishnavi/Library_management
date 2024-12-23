import React, { useState } from 'react';
import LibraryCatalog from './LibraryCatalog';
import ResourceManagement from './ResourceManagement';

const LibraryManagementPage = () => {
    const [resources, setResources] = useState([]);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleAddResource = (resource) => {
        setResources([...resources, resource]);
    };

    const openPopup = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    return (
        <div>
            <h1>Library Management</h1>
            <LibraryCatalog resources={resources} />
            <button onClick={openPopup}>Add Resource</button>
            <ResourceManagement
                open={isPopupOpen}
                onClose={closePopup}
                onAddResource={handleAddResource}
            />
        </div>
    );
};

export default LibraryManagementPage;
