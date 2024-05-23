import React from 'react'
import { styled } from "@stitches/react";
import { ConfirmAssistance, handleAgendarClick, sendLocation } from '@/utils/utils';
import Swal from 'sweetalert2';
import { sendDataGuestsFirebase, UserType } from '@/service/sendInformation';

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
    width: '70%',
});

const ContainerLink = styled("div", {
    display: 'flex',
    marginLeft: '2rem',
    marginRight: '2rem',
    width: '90%',
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
});

type GrettingProps = {
    data: Data;
};

const Links = ({ data }: GrettingProps) => {


    const handleConfirmAssistance = async () => {
        let formValues = {
            name: '',
            action: '',
            invitedBy: ''
        };
        const styleInputs = 'style="width: calc(100% - 20px); padding: 10px; margin: 5px 0; box-sizing: border-box;"';
        const styleSelect = 'style="width: calc(100% - 20px); height: 40px; margin: 5px 0; box-sizing: border-box; font-size: 16px;"';
        await Swal.fire({
            title: 'Confirmar o rechazar asistencia',
            html: `
            <input id="name" placeholder="Tu nombre completo" ${styleInputs}>
                <div style="margin: 5px 0;">
                    <select id="invitedBy" ${styleSelect} style="padding: 12px; font-size: 16px; color: rgba(0, 0, 0, 0.5);" onfocus="this.style.color='black';" onblur="this.style.color='inherit';">
                        <option value="">Invitado por...</option>
                        <option value="Sebastian" style="background-color: transparent;">Invitado por &#x1F935;&#x1F3FD; Sebastian</option>
                        <option value="Johana" style="background-color: transparent;">Invitado por &#x1F470;&#x1F3FD; Johana</option>
                    </select>
                </div>
            <div style="display: flex; justify-content: space-around;">
              <button id="confirmButton" type="button" style="flex: 1; background-color: #ddd; color: white; border: none; margin: 10px; border-radius: 10px; font-size: 16px; padding: 12px 20px;">
                Confirmar 🎉
              </button>
              <button id="rejectButton" type="button" style="flex: 1; background-color: #ddd; color: white; border: none; margin: 10px; border-radius: 10px; font-size: 16px; padding: 12px 20px;">
                Rechazar ❌
              </button>
            </div>
            `,
            showCancelButton: false,
            showConfirmButton: true,
            confirmButtonText: 'Enviar',
            confirmButtonColor: '#C98D7A',
            allowOutsideClick: false,
            showCloseButton: true,
            showClass: {
                popup: `
                  animate__animated
                  animate__fadeInUp
                  animate__faster
                `
            },
            hideClass: {
                popup: `
                  animate__animated
                  animate__fadeOutDown
                  animate__faster
                `
            },
            didOpen: () => {
                const input1 = document.getElementById('name') as HTMLInputElement;
                const invitedBySelect = document.getElementById('invitedBy') as HTMLSelectElement;
                const confirmButton = document.getElementById('confirmButton') as HTMLButtonElement;
                const rejectButton = document.getElementById('rejectButton') as HTMLButtonElement;

                input1.addEventListener('input', () => {
                    formValues.name = input1.value;
                });

                invitedBySelect.addEventListener('change', () => {
                    formValues.invitedBy = invitedBySelect.value;
                });

                confirmButton.addEventListener('click', () => {
                    confirmButton.style.backgroundColor = '#65D46E';
                    rejectButton.style.backgroundColor = '#ddd';
                    formValues.action = 'Confirm';
                });

                rejectButton.addEventListener('click', () => {
                    rejectButton.style.backgroundColor = '#EB583A';
                    confirmButton.style.backgroundColor = '#ddd';
                    formValues.action = 'Reject';
                });
            },
        });

        if (formValues.action && formValues.name && formValues.invitedBy) {
            //TODO: Send data to firebase
            sendDataGuestsFirebase({
                nameGuest: formValues.name,
                confirm: formValues.action === 'Confirm',
                from: formValues.invitedBy === 'Sebastian' ? UserType.SEBASTIAN_GUEST : UserType.JOHANA_GUEST
            }).then((res) => {
                Swal.fire({
                    title: '¡Gracias por tu respuesta!',
                    text: '¡Te esperamos el 21 de septiembre!',
                    icon: 'success',
                    confirmButtonColor: '#C98D7A',
                });
            }).catch((err) => {
                Swal.fire({
                    title: '¡Lo sentimos!',
                    text: 'Ocurrió un error al enviar respuesta, intentalo de nuevo!',
                    icon: 'error',
                    confirmButtonColor: '#C98D7A',
                });
            })
        } else {
            Swal.fire({
                title: '¡Lo sentimos!',
                text: 'Por favor completa todos los campos',
                icon: 'error',
                confirmButtonColor: '#C98D7A',
            });
        }

    }


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
                {/* <Button style={{ backgroundColor: '#F9A88B' }}
                    onClick={() => {
                        ConfirmAssistance(data.url_whatsapp_novia)
                    }}>{'Confirmar Asistencia novía 👰🏽‍♀️'}</Button>
                <Button style={{ backgroundColor: '#98DA6C' }}
                    onClick={() => {
                        ConfirmAssistance(data.url_whatsapp_novio)
                    }}>{'Confirmar Asistencia novío 🤵🏽'}</Button> */}
                <Button onClick={handleConfirmAssistance}>
                    {'¡Confirmar Asistencia!'}
                </Button>
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
