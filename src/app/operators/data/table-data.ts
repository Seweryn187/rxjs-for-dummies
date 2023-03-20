export interface IPerson {
    id: number;
    name: string;
    age: number;
    address?: IAddress;
    position?: Positions;
}

export interface IPersonDetails {
    fullname: string;
    department: string;
    phoneNumber: string;
}

export enum Positions {
    EMPLOYEE = 'employee',
    LEADER = 'leader'
}

export interface IAddress {
    city: string;
    zipCode: string;
    street: string;
}

export interface IPersonExternal {
    surname: string;
    age: string;
}

export const PEOPLE: IPerson[] = [
    {
        id: 0,
        name: 'Adam',
        age: 20,
        position: Positions.LEADER
    },
    {
        id: 1,
        name: 'Ewa',
        age: 30,
        position: Positions.EMPLOYEE
    },
    {
        id: 2,
        name: 'Tomek',
        age: 40,
        position: Positions.EMPLOYEE
    }
];

export const ADDRESSES: IAddress[] = [
    {
        city: 'Kielce',
        zipCode: '25-530',
        street: 'Warszawska',
    },
    {
        city: 'Kraków',
        zipCode: '30-230',
        street: 'Węgierska',
    },
    {
        city: 'Warszawa',
        zipCode: '50-130',
        street: 'Żelazna',
    }
];

export const PEOPLE_EXTERNAL: IPersonExternal[] = [
    {
        surname: 'Adam',
        age: '20'
    },
    {
        surname: 'Ewa',
        age: '30'
    },
    {
        surname: 'Tomek',
        age: '40'
    }
];

export const PEOPLE_DETAILS: IPersonDetails[] = [
    {
        fullname: 'Adam Kowalski',
        department: 'HR',
        phoneNumber: '123456789',
    },
    {
        fullname: 'Ewa Nowak',
        department: 'Support',
        phoneNumber: '987654321',
    },
    {
        fullname: 'Tomek Potocki',
        department: 'HR',
        phoneNumber: '111222333',
    },
]

