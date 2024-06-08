// src/components/AlbumDetails.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const AlbumDetails = () => {
    const { id } = useParams();
    const [album, setAlbum] = useState(null);

    useEffect(() => {
        axios.get(`http://yourapi/albums/${id}`)
            .then(response => {
                setAlbum(response.data);
            })
            .catch(error => console.error('Error fetching album details:', error));
    }, [id]);

    if (!album) return <div>Loading...</div>;

    return (
        <div>
            <img src={album.album_art} alt={album.name} style={{ width: 200, height: 200 }} />
            <h1>{album.name}</h1>
            <p>{album.artist.name}</p>
            <ul>
                {album.tracks.map(track => (
                    <li key={track.id}>{track.name} - {track.duration}</li>
                ))}
            </ul>
        </div>
    );
};

export default AlbumDetails;
