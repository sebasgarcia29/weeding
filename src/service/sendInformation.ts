import { db } from "@/config/firebaseConfig";
import { get, ref, set, update } from "firebase/database";

interface IData {
    name: string;
    nameSong: string;
    linkSong?: string;
}

export const sendDataFirebase = async (data: IData) => {
    try {
        const newDataRef = ref(db, 'data/' + Date.now());
        await set(newDataRef, data);
        return true;
    } catch (error) {
        console.log('Error in sendDataFirebase', error);
        return false;
    }
}

interface IGuest {
    status: boolean;
    confirmados: IAttendance;
}

interface IAttendance {
    name: string;
    attendance: string;
}


export const sendDataGuestsFirebase = async (data: IGuest, id: string) => {
    try {
        const inviteRef = ref(db, `invites/${id}`);

        const updates = {
            ...data,
            status: data.status ? 'confirmed' : 'rejected'
        };

        await update(inviteRef, updates);
        return true;
    } catch (error) {
        console.log('Error in sendDataGuestsFirebase', error);
        return false;
    }
};

interface IConfirmAssistance {
    status: boolean;
    nameGuest: string;
}

export const confirmOrRejectAssistance = async (data: IConfirmAssistance) => {
    try {
        const inviteRef = ref(db, 'assistance/' + Date.now());

        const updates = {
            name: data.nameGuest,
            status: data.status ? 'confirmed' : 'rejected'
        };

        await set(inviteRef, updates);
        return true;
    } catch (error) {
        console.log('Error in confirmOrRejectAssistance', error);
        return false;
    }
}

export async function getServerSideProps(id: string) {
    const dbRef = ref(db, `invites/${id}`);
    // const dbRef = ref(db, `invites/-NzPZeaSAkEF_GROFjh8`);
    const snapshot = await get(dbRef);
    if (!snapshot.exists()) {
        return {
            notFound: true,
        };
    }
    const inviteData = snapshot.val();
    return {
        props: {
            inviteData,
        },
    };
}