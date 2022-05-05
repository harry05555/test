export interface ITransportierbar {
    mMaxgewichts_kg: number;
    gewicht_kg(): number;
    laenge_m(): number;
    breite_m(): number;
    hoehe_m(): number;
    isZerbrechlich(): boolean;
}