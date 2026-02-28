export const WHATSAPP_NUMBER = "56987654321"; // Reemplazar con el número real

export const getWhatsAppLink = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
};

export const WA_MESSAGES = {
    RESERVATION: "Hola Aura Pizza, me gustaría solicitar una reserva para una mesa.",
    ORDER: (pizzaName: string) => `Hola Aura Pizza, me gustaría pedir la pizza ${pizzaName}.`,
    INFO: "Hola Aura Pizza, me gustaría recibir más información sobre sus servicios.",
    NEWSLETTER: "Hola Aura Pizza, me gustaría unirme a su comunidad de invitados especiales.",
};
