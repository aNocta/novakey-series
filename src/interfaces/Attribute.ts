export interface Attribute {
    value: string | number;
    colour: string;
}
export interface Lock extends Attribute {
    description: string;
}
export interface SafetyRating extends Attribute {
    status: string;
}
export interface Guarantee extends Attribute {
    description: string;
}