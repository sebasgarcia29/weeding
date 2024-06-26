import React from 'react';
import { useMusic } from '@/hooks/useMusic';

export const BackgroundMusic = () => {


    const { isAudioPlaying } = useMusic()


    React.useEffect(() => {
        console.log('BackgroundMusic', { isAudioPlaying })

        const audio = new Audio('./assets/media/audio.mp3');
        // audio.loop = true; // Para que la música se repita en un bucle
        // audio.play();

        return () => {
            audio.pause(); // Pausa la música cuando el componente se desmonta
        };
    }, [isAudioPlaying]); // Se ejecuta solo una vez al montar el componente

    return null; // No renderizamos nada, este componente es solo para reproducir la música en segundo plano
};

export default BackgroundMusic;
