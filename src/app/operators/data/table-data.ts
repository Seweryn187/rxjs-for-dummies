export interface IPerson {
    name: string;
    age: number;
    address?: IAddress;
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
        age: 20
    },
    {
        name: 'Ewa',
        age: 30
    },
    {
        name: 'Tomek',
        age: 40
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

