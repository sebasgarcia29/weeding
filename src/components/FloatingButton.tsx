import React from 'react';
import { styled } from "@stitches/react";
import UseAnimations from 'react-useanimations';
import play from 'react-useanimations/lib/playPause';

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

    return (
        <ButtonMusic>
            <UseAnimations
                size={40}
                wrapperStyle={{ marginTop: '5px' }}
                animation={play}
                strokeColor='#B88474'
            />
        </ButtonMusic>
    );
};
