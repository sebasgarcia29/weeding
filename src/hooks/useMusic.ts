import React from 'react'

export const useMusic = () => {

    const [isAudioPlaying, setIsAudioPlaying] = React.useState(false);

    const toggleAudio = () => {
        const newIsAudioPlaying = !isAudioPlaying;
        setIsAudioPlaying(newIsAudioPlaying);
    };

    return {
        isAudioPlaying,
        toggleAudio
    }
}
