import { React, useState } from 'react';
import Button from '@mui/material/Button';
import axios from 'axios';

function Home() {
    const [imageSrc, setImageSrc] = useState('');

    const segmentImage = () => {
        axios.post('http://localhost:8888/api/segmentImage', {}, { responseType: 'arraybuffer' })
            .then((response) => {
                const blob = new Blob([response.data], { type: 'image/png' });
                const imageUrl = URL.createObjectURL(blob);
                setImageSrc(imageUrl);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    return (
        <>
            <h1>AI Spy</h1>
            <Button variant="contained" onClick={segmentImage}>Segment Image</Button>
            <div>
                {imageSrc && <img src={imageSrc} alt="Segmented Image" />}
            </div>
        </>
    )
}

export default Home