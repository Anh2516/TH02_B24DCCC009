export interface Student {
    id: number;
    name: string;
    email: string;
    phone?: string;
    website?: string;
}

export interface StudentDetail extends Student {
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
    };
    phone?: string;
    website?: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}