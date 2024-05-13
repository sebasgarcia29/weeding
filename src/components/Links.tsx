import React from 'react'
import { styled } from "@stitches/react";
import { ConfirmAssistance, handleAgendarClick, sendLocation } from '@/utils/utils';

const Container = styled("div", {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    height: '120vh',
    fontSize: '24px',
    backgroundColor: "rgba(134, 96, 75, 0.2)",

});

const ContainerTitle = styled("div", {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "rgba(134, 96, 75, 0.3)",
    // backgroundColor: 'red',
    width: '1000%',
});

const BigLabel = styled("p", {
    fontSize: "5vh",
    fontFamily: "Playfair Display, serif",
    color: "#fff",
});

const Label = styled("p", {
    fontSize: "4vh",
    fontFamily: "Arial, serif",
    fontWeight: 'bold',
    color: "#86604B",
});

const Description = styled("p", {
    fontSize: "2.5vh",
    fontFamily: "Playfair Display, serif",
    color: "rgba(134, 96, 75, 0.8)",
});

const Button = styled("button", {
    fontSize: "2vh",
    backgroundColor: "#CA8D76",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    marginTop: "10px",
    width: '50%',
});

const ContainerLink = styled("div", {
    display: 'flex',
    marginLeft: '2rem',
    marginRight: '2rem',
    width: '90%',
    flexDirection: 'column',
});

type GrettingProps = {
    data: Data;
};

const Links = ({ data }: GrettingProps) => {
    return (
        <Container>
            <ContainerTitle>
                <BigLabel>{'Ceremonia 💍'}</BigLabel>
            </ContainerTitle>
            <ContainerLink>
                <Label>{String('día 🗓️').toUpperCase()}</Label>
                <Description>{'Sábado 21 de Septiembre de 2024, 5PM'}</Description>
                <Button onClick={handleAgendarClick}>{'Agendar'}</Button>
            </ContainerLink>
            <ContainerLink>
                <Label>{String('lugar 🏡').toUpperCase()}</Label>
                <Description>{'Intiraimi | Salón de Eventos'}</Description>
                <Button onClick={() => {
                    ConfirmAssistance(data.url_whatsapp)
                }}>{'Confirmar Asistencia'}</Button>
            </ContainerLink>
            <ContainerLink>
                <Label>{String('Dirección 📍').toUpperCase()}</Label>
                <Description>{'Km 1, Vía Cali - Puerto Tejada, Cali, Valle del Cauca'}</Description>
                <Button onClick={() => {
                    sendLocation(data.url_location)
                }}>{'¿Como llegar?'}</Button>
            </ContainerLink>
        </Container>
    )
}

export default Links
