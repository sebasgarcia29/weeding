import React, { useState, useEffect } from 'react';
import { styled } from "@stitches/react";

const Container = styled("div", {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    height: '50vh',
    fontSize: '24px',
    backgroundColor: "rgba(134, 96, 75, 0.2)",
});

const ContainerTime = styled("div", {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
});

const CenteredCapsule = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    borderColor: "rgb(134, 96, 75, 0.3)",
    borderWidth: "2px",
    borderLeftStyle: "solid",
    borderRightStyle: "solid",
    width: "11.5vh",
    height: "11.5vh",
});

const Text = styled("p", {
    fontSize: "6vh",
    fontFamily: "Roboto, sans-serif",
    color: "#86604B",
    fontWeight: 'bold',
    margin: 0, // Set margin to 0 to ensure the text is centered
});

const TextDescription = styled("p", {
    fontSize: "2.5vh",
    color: "#86604B",
    fontFamily: "Open Sans",
    margin: 0, // Set margin to 0 to ensure the text is centered
});


const BigLabel = styled("p", {
    fontSize: "6vh",
    fontFamily: "Playfair Display, serif",
    color: "#86604B",
});

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

const CountdownTimer: React.FC = () => {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    function calculateTimeLeft(): TimeLeft {
        const currentDate = new Date();
        const targetDate = new Date("2024-09-21T00:00:00");
        const difference = targetDate.getTime() - currentDate.getTime();

        if (difference > 0) {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            return { days, hours, minutes, seconds };
        } else {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }
    }

    const { days, hours, minutes, seconds } = timeLeft;

    return (
        <Container>
            <BigLabel>{'Falta ⏰🎉'}</BigLabel>

            <ContainerTime>
                <CenteredCapsule style={{ borderLeftStyle: false ? 'solid' : 'none' }}>
                    <Text>{days}</Text>
                    <TextDescription>días</TextDescription>
                </CenteredCapsule>
                <CenteredCapsule>
                    <Text>{hours}</Text>
                    <TextDescription>horas</TextDescription>
                </CenteredCapsule>
                <CenteredCapsule>
                    <Text>{minutes}</Text>
                    <TextDescription>minutos</TextDescription>
                </CenteredCapsule>
                <CenteredCapsule style={{ borderRightStyle: false ? 'solid' : 'none' }}>
                    <Text>{seconds}</Text>
                    <TextDescription>segundos</TextDescription>
                </CenteredCapsule>
            </ContainerTime>

        </Container>
    );
};

export default CountdownTimer;
