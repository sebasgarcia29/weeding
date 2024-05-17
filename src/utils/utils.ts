export const handleAgendarClick = () => {
    alert("Para agregar este evento a su calendario, descargue el archivo .ics y ábralo con su aplicación de calendario.");
    const eventDetails = {
        title: 'Boda Johana & Sebastian',
        description: 'Boda de Johana & Sebastian',
        location: 'Intiarimi | Salón de Eventos',
        startTime: new Date('2024-09-21T17:00:00'), // Start time of the event
        endTime: new Date('2024-09-22T03:00:00'), // End time of the event
    };
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
DTSTART:${eventDetails.startTime.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')}
DTEND:${eventDetails.endTime.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')}
SUMMARY:${eventDetails.title}
DESCRIPTION:${eventDetails.description}
LOCATION:${eventDetails.location}
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar' });

    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'event.ics';

    link.click();
};

export const ConfirmAssistance = (numberWhatsapp: string) => {
    const message = "¡Me alegra mucho confirmar mi asistencia a su boda el 21 de septiembre!"; // Predefined message
    const whatsappURL = `https://wa.me/${numberWhatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
}

export const sendLocation = (urlLocation: string) => {
    window.open(urlLocation, "_blank");
}