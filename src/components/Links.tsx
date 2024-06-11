import React from 'react'
import { styled } from "@stitches/react";
import { handleAgendarClick, sendLocation } from '@/utils/utils';
import Swal from 'sweetalert2';
import { confirmOrRejectAssistance, getServerSideProps, sendDataGuestsFirebase } from '@/service/sendInformation';
import { useRouter } from 'next/router';

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

{/* 
        const styleSelect = 'style="width: calc(100% - 20px); height: 40px; margin: 5px 0; box-sizing: border-box; font-size: 16px;"';
<div style="margin: 5px 0;">
<select id="invitedBy" ${styleSelect} style="padding: 12px; font-size: 16px; color: rgba(0, 0, 0, 0.5);" onfocus="this.style.color='black';" onblur="this.style.color='inherit';">
    <option value="">Invitado por...</option>
    <option value="Sebastian" style="background-color: transparent;">Invitado por &#x1F935;&#x1F3FD; Sebastian</option>
    <option value="Johana" style="background-color: transparent;">Invitado por &#x1F470;&#x1F3FD; Johana</option>
</select>
</div> */}

enum Status {
    CONFIRMED = 'confirmed',
    PENDING = 'pending',
    REJECTED = 'rejected'
}

interface IInvites {
    numberOfGuests: number;
    invitados: string[];
    status: Status;
    phoneNumber: string;
}

const Links = ({ data }: GrettingProps) => {


    const router = useRouter();
    const { id } = router.query;
    const [inviteData, setInviteData] = React.useState<IInvites>();

    React.useEffect(() => {
        if (id?.length ?? 0 > 0) {
            getServerSideProps(id?.toString() ?? '').then((res) => {
                const response = res.props?.inviteData;
                const parseData = {
                    numberOfGuests: response.invitados.length,
                    invitados: response.invitados,
                    status: response.status,
                    phoneNumber: response.telefono
                }
                setInviteData(parseData)
            }).catch((err) => {
                console.log('error in getServerSideProps>>>>')
            })
        }

    }, [id])



    const handleConfirmAssistance = async () => {
        const invitees = inviteData?.invitados || [];

        const htmlContent = invitees.map((invitee, index) => `
            <div class="row" style="display: flex; align-items: center; margin-bottom: 10px;">
                <label for="attendance-${index}" style="flex-basis: 50%;">${invitee}</label>
                <select id="attendance-${index}" class="swal2-input" style="flex-basis: 50%;">
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
            formValues.forEach(async (guest: any) => {
                confirmOrRejectAssistance({
                    nameGuest: guest.name,
                    status: guest.attendance === 'accepted'
                })
            })
            sendDataGuestsFirebase({
                status: formValues[0].attendance === 'accepted',
                confirmados: formValues
            }, id?.toString() ?? '').then((res) => {
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
