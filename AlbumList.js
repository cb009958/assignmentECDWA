// src/components/AlbumList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AlbumList = () => {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        axios.get('http://yourapi/albums')
            .then(response => {
                setAlbums(response.data);
            })
            .catch(error => console.error('Error fetching albums:', error));
    }, []);

    return (
        <div>
            {albums.map(album => (
                <div key={album.id}>
                    <img src={album.album_art} alt={album.name} style={{ width: 100, height: 100 }} />
                    <h3>{album.name}</h3>
                    <p>{album.artist.name}</p>
                    <Link to={`/albums/${album.id}`}>View Details</Link>
                </div>
            ))}
        </div>
    );
};

export default AlbumList;
