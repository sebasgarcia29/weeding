import React from 'react'
import { styled } from "@stitches/react";
import { handleAgendarClick, sendLocation } from '@/utils/utils';
import Swal from 'sweetalert2';
import { confirmOrRejectAssistance, sendDataGuestsFirebase } from '@/service/sendInformation';
import { IanciliaryFiles } from '@/interfaces/guest';

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
    width: '1000%',
});

const BigLabel = styled("p", {
    fontSize: "5vh",
    color: "#fff",
    textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
});

const Label = styled("p", {
    fontSize: "4vh",
    fontWeight: 'bold',
    color: "#86604B",
});

const Description = styled("p", {
    fontSize: "2.5vh",
    color: "#80624E",
    textShadow: "0px 1px 1px rgba(0,0,0,0.7)",
    textAlign: 'center',
});

const Button = styled("button", {
    backgroundColor: "#C18171",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "25px", // Ajusta este valor para cambiar la forma del botón
    cursor: "pointer",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)", // Agrega sombra al botón
    fontSize: "2.5vh",
    fontFamily: "inherit",
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
    className?: string;
    inviteData?: IanciliaryFiles;
};

{/* 
        const styleSelect = 'style="width: calc(100% - 20px); height: 40px; margin: 5px 0; box-sizing: border-box; font-size: 16px;"';
<div style="margin: 5px 0;">
<select id="invitedBy" ${styleSelect} style="padding: 12px; font-size: 16px; color: rgba(0, 0, 0, 0.5);" onfocus="this.style.color='black';" onblur="this.style.color='inherit';">
    <option value="">Invitado por...</option>
    <option value="Sebastian" style="background-color: transparent;">Invitado por &#x1F935;&#x1F3FD; Sebastian</option>
    <option value="Johana" style="background-color: transparent;">Invitado por &#x1F470;&#x1F3FD; Johana</option>
</select>
</div> */}

const Links = ({ data, className, inviteData }: GrettingProps) => {

    const handleConfirmAssistance = async () => {
        const invitees = inviteData?.invitados || [];

        const htmlContent = invitees.map((invitee, index) => `
            <div class="row" style="display: flex; align-items: center; margin-bottom: 10px;">
                <label for="attendance-${index}" style="flex-basis: 50%;">${invitee}</label>
                <select id="attendance-${index}" class="swal2-input custom-select" style="flex-basis: 50%;">
                    <option value="accepted">¡Confirmo! 🤩</option>
                    <option value="rejected">Lo siento, no puedo 🥺</option>
                </select>
            </div>
        `).join('');

        const { value: formValues } = await Swal.fire({
            title: "Confirmar Asistencia",
            html: htmlContent,
            focusConfirm: false,
            showCancelButton: true,
            confirmButtonText: "Enviar",
            cancelButtonText: "Cancelar",
            confirmButtonColor: "#CA8D76",
            customClass: {
                container: className,
            },
            preConfirm: () => {
                const results = invitees.map((_, index) => {
                    const attendanceElement = document.getElementById(`attendance-${index}`) as HTMLInputElement;
                    const attendance = attendanceElement ? attendanceElement.value : '';
                    return { name: invitees[index], attendance };
                });

                return results;
            },
            allowOutsideClick: () => !Swal.isLoading(),
        });

        if (formValues) {
            console.log(formValues)
            formValues.forEach(async (guest: any) => {
                confirmOrRejectAssistance({
                    nameGuest: guest.name,
                    status: guest.attendance === 'accepted'
                })
            })
            sendDataGuestsFirebase({
                status: formValues[0].attendance === 'accepted',
                confirmados: formValues
            }, inviteData?.key?.toString() ?? '').then((res) => {
                Swal.fire({
                    title: '¡Gracias por tu respuesta!',
                    text: '¡Te esperamos el 21 de septiembre!',
                    icon: 'success',
                    confirmButtonColor: '#C98D7A',
                });
            }).catch((err) => {
                Swal.fire({
                    title: '¡Lo sentimos!',
                    text: 'Agradecemos mucho tu respuesta!',
                    icon: 'error',
                    confirmButtonColor: '#C98D7A',
                });
            })
        }
    };


    return (
        <div className={className}>
            <Container>
                <ContainerTitle>
                    <BigLabel>{'Ceremonia civil'}</BigLabel>
                </ContainerTitle>
                <ContainerLink>
                    <Label>{'Día'}</Label>
                    <Description>{'Sábado 21 de Septiembre de 2024, 5PM'}</Description>
                    <Button onClick={handleAgendarClick}>{'Agendar'}</Button>
                </ContainerLink>
                <ContainerLink>
                    <Label>{'Lugar'}</Label>
                    <Description>
                        {'Intiraimi | Salón de Eventos'}
                    </Description>
                    <Button onClick={handleConfirmAssistance}>
                        {'¡Confirmar asistencia!'}
                    </Button>
                </ContainerLink>
                <ContainerLink>
                    <Label>{'Dirección'}</Label>
                    <Description>{'Km 1, Vía Cali - Puerto Tejada, Cali, Valle del Cauca'}</Description>
                    <Button onClick={() => {
                        sendLocation(data.url_location)
                    }}>{'¿Cómo llegar?'}</Button>
                </ContainerLink>
            </Container>
        </div>
    )
}

export default Links
