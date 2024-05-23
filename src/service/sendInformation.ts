

interface IData {
    name: string;
    nameSong: string;
    linkSong?: string;
}

const urlGateway = process.env.GATEWAY || 'https://wedding-invitation-a8b56-default-rtdb.firebaseio.com';

export const sendDataFirebase = async (data: IData) => {
    try {
        await fetch(`${urlGateway}/data.json`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return true
    } catch (error) {
        console.log('Error in sendDataFirebase', error)
        return false
    }
}

export enum UserType {
    JOHANA_GUEST = "johana_guest",
    SEBASTIAN_GUEST = "sebastian_guest"
}

interface IGuess {
    nameGuest: string;
    from: UserType;
    confirm: boolean;
}

export const sendDataGuestsFirebase = async (data: IGuess) => {
    try {
        await fetch(`${urlGateway}/guests.json`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return true
    } catch (error) {
        console.log('Error in sendDataFirebase', error)
        return false
    }
}