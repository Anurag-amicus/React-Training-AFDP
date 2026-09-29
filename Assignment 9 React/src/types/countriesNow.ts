export type Country = {
    country: string;
};

export type State = {
    name: string;
};

export type CountriesResponse = {
    error: boolean;
    msg: string;
    data: Country[];
};

export type StatesResponse = {
    error: boolean;
    msg: string;
    data: {
        states: State[];
    };
};

export type CitiesResponse = {
    error: boolean;
    msg: string;
    data: string[];
};