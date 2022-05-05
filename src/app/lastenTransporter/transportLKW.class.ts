import { ITransportierbar } from "../ware/interfaces/ITransportierbar.interface";

export class TransportLKW {
    private _MAX_GEWICHT_KG: number = 44000;


    isTransportMachbar(tDetails: ITransportierbar): boolean {

        let gewichtProFlaeche: number = tDetails.gewicht_kg() / (tDetails.laenge_m() * tDetails.breite_m());

        if (gewichtProFlaeche < this.MAX_GEWICHT_KG) {
            this.MAX_GEWICHT_KG = this.MAX_GEWICHT_KG - gewichtProFlaeche;
            return true;
        }
        return false;
    }

    berechneVolumen(tDetails: ITransportierbar): number {
        return tDetails.laenge_m() * tDetails.breite_m() * tDetails.hoehe_m();
    }

    public get MAX_GEWICHT_KG(): number {
        return this._MAX_GEWICHT_KG;
    }
    public set MAX_GEWICHT_KG(value: number) {
        this._MAX_GEWICHT_KG = value;
    }
}