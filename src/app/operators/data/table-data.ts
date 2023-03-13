export interface IPerson {
    name: string;
    age: number;
    address?: IAddress;
    position?: Positions;
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
        name: 'Adam',
        age: 20,
        position: Positions.LEADER
    },
    {
        name: 'Ewa',
        age: 30,
        position: Positions.EMPLOYEE
    },
    {
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

