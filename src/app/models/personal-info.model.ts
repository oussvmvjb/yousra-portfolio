export interface PersonalInfo {
    id: number;
    nom: string;
    prenon: string;
    image: string;
    description: string;
    birthday: string;
    phone: string;
    city: string;
    email: string;
    degree: string;
    /** nullable because some records don’t have a CV path */
    cvpath: string | null;
    profection: string;
    locale: string;
}