// src/components/AdminAlbums.js
import React from 'react';

const AdminAlbums = ({ albums, onEdit, onDelete }) => {
    return (
        <div>
            {albums.map(album => (
                <div key={album.id}>
                    <h3>{album.name}</h3>
                    <button onClick={() => onEdit(album.id)}>Edit</button>
                    <button onClick={() => onDelete(album.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default AdminAlbums;
