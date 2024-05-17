import { useEffect, useRef } from 'react';
import { Player } from '@lordicon/react';
import { styled } from "@stitches/react";
import { Divider } from "antd";
import Swal from 'sweetalert2'
import { sendDataFirebase } from "@/service/sendInformation";
import ICON from '../../public/assets/music.json';
import NoStrollerIcon from '@mui/icons-material/NoStroller';
import CheckroomIcon from '@mui/icons-material/Checkroom';

const Wrapper = styled("div", {
  background: "#efebe9",
  backgroundImage: "url(./assets/GroovePaper.png)",
  width: "100%",
  paddingBottom: 42,
  textAlign: "center",
});

const Title = styled("p", {
  fontSize: "5vh",
  fontWeight: "bold",
  color: "#86604B",
});

const TextInsideQuote = styled("p", {
  fontSize: "3vh",
  fontFamily: "Open Sans", // O puedes usar "Open Sans, sans-serif"
  color: "#86604B",
  padding: "0 2rem",
});

const CenteredContainer = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "40vh",
});

const CardContainer = styled("div", {
  width: "300px",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  backgroundColor: "#fff",
});

const TitleCard = styled("h2", {
  fontSize: "24px",
  marginBottom: "10px",
  textAlign: "center",
  color: "#C98D7A",
  fontWeight: "bold", // Cambiar el peso de la fuente a bold
  fontFamily: "Roboto, sans-serif", // Usar la fuente Roboto
});

const Icon = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%", // Ensure the icon container takes full width
  height: "100%", // Ensure the icon container takes full height
});

const Description = styled("p", {
  fontSize: "16px",
  textAlign: "center",
  color: '#847870',
  fontWeight: "normal", // Reset font weight to normal
  fontFamily: "Roboto, sans-serif", // Use Roboto font
});

const Button = styled("button", {
  backgroundColor: "#C98D7A",
  color: "#fff",
  border: "none",
  borderRadius: "25px",
  padding: "10px 20px",
  fontSize: "16px",
  cursor: "pointer",
  display: "block",
  margin: "20px auto 0",
});

const BoxContainer = styled("div", {
  width: "50px",
  height: "50px",
});

type ShareProps = {
  data?: Data;
};

export default function Share({ data }: ShareProps) {
  const playerRef = useRef<Player>(null);

  useEffect(() => {
    playerRef.current?.play();
  }, [])

  const onAddSong = async () => {
    const styleInputs = 'class="swal2-input" style="font-size: 14px; width: calc(100% - 20px); margin: 5px 10px;"'
    const { value: formValues } = await Swal.fire({
      title: 'Sugerir canción',
      html: `
        <input id="name" placeholder="Tu nombre" ${styleInputs}>
        <input id="nameSong" placeholder="Nombre de canción o autor" ${styleInputs}>
        <input id="linkSong" placeholder="Si lo desea ingrese el link de Youtube, Spotify, etc"${styleInputs}>
      `,
      confirmButtonText: 'Enviar',
      confirmButtonColor: '#C98D7A',
      focusConfirm: true,
      customClass: {
        container: 'swal-container',
        popup: 'swal-popup',
        confirmButton: 'swal-confirm-button',
        input: 'swal-input', // Custom class for the input fields
      },
      preConfirm: () => {
        const input1 = document.getElementById('name') as HTMLInputElement;
        const input2 = document.getElementById('nameSong') as HTMLInputElement;
        const input3 = document.getElementById('linkSong') as HTMLInputElement;
        return {
          name: input1 ? input1.value : '',
          nameSong: input2 ? input2.value : '',
          linkSong: input3 ? input3.value : '',
        }
      },
    });
    if (formValues) {
      const response = sendDataFirebase(formValues)
        .then((_) => {
          Swal.fire({
            title: '¡Gracias por tu sugerencia!',
            text: 'Tu canción será tomada en cuenta para la fiesta',
            icon: 'success',
            confirmButtonColor: '#C98D7A',
          });
        }).catch((_) => {
          Swal.fire({
            title: '¡Lo sentimos!',
            text: 'Ocurrió un error al enviar tu sugerencia, intentalo de nuevo!',
            icon: 'error',
            confirmButtonColor: '#C98D7A',
          });
        })
    }
  };

  return (
    <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title>{'Fiesta'}</Title>
      </Divider>
      <TextInsideQuote>{'Hagamos juntos una fiesta épica. Aquí algunos detalles a tener en cuenta'}</TextInsideQuote>
      <CenteredContainer>
        <CardContainer>
          <TitleCard>{String('Música').toUpperCase()}</TitleCard>
          <Icon>
            <Player
              ref={playerRef}
              icon={ICON}
              size={100}
              onComplete={() => playerRef.current?.playFromBeginning()}
            />
          </Icon>
          <Description>{'¿Cuál es la canción que no debe faltar en la PlayList de la fiesta?'}</Description>
          <Button onClick={onAddSong}>{'Sugerir canción'}</Button>
        </CardContainer>
      </CenteredContainer>
      <CenteredContainer>
        <CardContainer style={{ marginBottom: '100px' }}>
          <TitleCard>{'NO niños'}</TitleCard>
          <Icon>
            <NoStrollerIcon sx={{ fontSize: 100, color: 'red' }} />
          </Icon>
        </CardContainer>
      </CenteredContainer>
      <CenteredContainer>
        <CardContainer style={{ marginBottom: '200px' }}>
          <TitleCard>{'Codigo de Vestir'}</TitleCard>
          <Icon>
            <CheckroomIcon sx={{ fontSize: 100, color: 'lightgrey' }} />
          </Icon>
          <Description>{'Mujeres'}</Description>
          <Description>{'Vestio o traje semiformal (No blanco)'}</Description>
          <Description>{'Hombres'}</Description>
          <Description>{'Traje semiformal'}</Description>
        </CardContainer>
      </CenteredContainer>
    </Wrapper>
  );
}
