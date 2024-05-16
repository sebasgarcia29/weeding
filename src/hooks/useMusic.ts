import React from 'react'

export const useMusic = () => {

    const [isAudioPlaying, setIsAudioPlaying] = React.useState(false);

    const toggleAudio = () => {
        setIsAudioPlaying(!isAudioPlaying);
    };

    return {
        isAudioPlaying,
        toggleAudio,
        setIsAudioPlaying,
    }
}
