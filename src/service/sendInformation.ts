

interface IData {
    name: string;
    nameSong: string;
    linkSong?: string;
}

export const sendDataFirebase = async (data: IData) => {
    const urlGateway = process.env.GATEWAY || 'https://wedding-invitation-a8b56-default-rtdb.firebaseio.com';
    try {
        const response = await fetch(`${urlGateway}/data.json`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log({ response })
    } catch (error) {
        console.log('Error in sendDataFirebase', error)
    }
}