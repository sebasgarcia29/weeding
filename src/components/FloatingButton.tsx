import React from 'react';
import { styled } from "@stitches/react";
import UseAnimations from 'react-useanimations';
import play from 'react-useanimations/lib/playPause';
import { useMusic } from '@/hooks/useMusic';

const ButtonMusic = styled("button", {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    padding: "15px 15px",
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    border: "none",
    borderRadius: "50px",
    cursor: "pointer",
    zIndex: 1000,
});

export const FloatingButton = () => {

    const { isAudioPlaying, toggleAudio } = useMusic()

    React.useEffect(() => {
        const audio = new Audio('./assets/media/audio.mp3');
        if (isAudioPlaying) {
            audio.loop = true; // Para que la música se repita en un bucle
            audio.play();
        } else {
            audio.pause();
        }
        return () => {
            audio.pause(); // Pausa la música cuando el componente se desmonta
        };
    }, [isAudioPlaying]); // Se ejecuta solo una vez al montar el componente


    return (
        <ButtonMusic>
            <UseAnimations
                onClick={toggleAudio}
                size={40}
                wrapperStyle={{ marginTop: '5px' }}
                animation={play}
                strokeColor='#B88474'
                reverse={isAudioPlaying}
            />
        </ButtonMusic>
    );
};
