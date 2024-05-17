import React from 'react';
import { styled } from "@stitches/react";
import UseAnimations from 'react-useanimations';
import play from 'react-useanimations/lib/playPause';
import { useMusic } from '@/hooks/useMusic';

const ButtonMusic = styled("button", {
    justifyContent: "center",
    position: "fixed",
    bottom: "20px",
    right: "20px",
    padding: "13px 13px",
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    border: "none",
    borderRadius: "60px",
    cursor: "pointer",
    zIndex: 1000,
});

export const FloatingButton = () => {

    const { isAudioPlaying, toggleAudio, setIsAudioPlaying } = useMusic()

    React.useEffect(() => {
        const audio = new Audio('./assets/media/audio2.mp3');
        if (isAudioPlaying) {
            audio.play();
        } else {
            audio.pause();
        }
        return () => {
            audio.pause(); // Pausa la música cuando el componente se desmonta
        };
    }, [isAudioPlaying]); // Se ejecuta solo una vez al montar el componente

    React.useEffect(() => {
        const handleVisibilityChange = () => {
            if (document.hidden) {
                // Pause audio when the tab is minimized
                setIsAudioPlaying(false);
            }
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);

        return () => {
            // Cleanup: remove event listener when component unmounts
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, []);


    return (
        <ButtonMusic>
            <UseAnimations
                onClick={toggleAudio}
                size={30}
                animation={play}
                strokeColor='#B88474'
                reverse={!isAudioPlaying}
            />
        </ButtonMusic>
    );
};

// import React from 'react';
// import { Player } from '@lordicon/react';
// import { styled } from "@stitches/react";
// import { useMusic } from '@/hooks/useMusic';
// import PlayIcon from '../../public/assets/play.json';
// import StopIcon from '../../public/assets/stop.json';


// const ButtonMusic = styled("button", {
//     position: "fixed",
//     bottom: "20px",
//     right: "20px",
//     padding: "15px 15px",
//     backgroundColor: "rgba(255, 255, 255, 0.6)",
//     border: "none",
//     borderRadius: "50px",
//     cursor: "pointer",
//     zIndex: 1000,
// });

// export const FloatingButton = () => {

//     const playRef = React.useRef<Player>(null);
//     const [direction, setDirection] = React.useState<1 | -1>(-1);

//     React.useEffect(() => {
//         playRef.current?.play();
//     }, [direction])


//     const { isAudioPlaying, toggleAudio, setIsAudioPlaying } = useMusic()

//     React.useEffect(() => {
//         const audio = new Audio('./assets/media/audio.mp3');
//         if (isAudioPlaying) {
//             audio.loop = true; // Para que la música se repita en un bucle
//             audio.play();
//         } else {
//             audio.pause();
//         }
//         return () => {
//             audio.pause(); // Pausa la música cuando el componente se desmonta
//         };
//     }, [isAudioPlaying]); // Se ejecuta solo una vez al montar el componente

//     React.useEffect(() => {
//         const handleVisibilityChange = () => {
//             if (document.hidden) {
//                 // Pause audio when the tab is minimized
//                 setIsAudioPlaying(false);
//             }
//         };

//         document.addEventListener('visibilitychange', handleVisibilityChange);

//         return () => {
//             // Cleanup: remove event listener when component unmounts
//             document.removeEventListener('visibilitychange', handleVisibilityChange);
//         };
//     }, []);


//     return (
//         <ButtonMusic onClick={() => {
//             setDirection(direction === 1 ? -1 : 1);
//             toggleAudio();
//         }}>
//             {!isAudioPlaying ? (
//                 <Player
//                     ref={playRef}
//                     icon={PlayIcon}
//                     size={30}
//                 />
//             ) : (
//                 <Player
//                     ref={playRef}
//                     icon={StopIcon}
//                     size={30}
//                 />
//             )}

//         </ButtonMusic>
//     );
// };

