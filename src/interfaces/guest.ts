export interface IanciliaryFiles {
    confirmados: Confirmado[];
    invitados: string[];
    status: string;
    telefono: string;
    id: string;
    key: string;
}

export interface Confirmado {
    attendance: string;
    name: string;
}
