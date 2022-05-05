import { ITransportierbar } from "../interfaces/ITransportierbar.interface";
import { LKW } from "./LKW.class";

export class MAN extends LKW implements ITransportierbar {
    mMaxgewichts_kg: number = 7320;
    mLeange_m: number = 5;
    mBreite_m: number = 3;
    mHoehe_m: number = 4;
    mIsZerbrechlich: boolean = false;

    gewicht_kg(): number {
        return this.mMaxgewichts_kg;
    }
    laenge_m(): number {
        return this.mLeange_m;
    }
    breite_m(): number {
        return this.mBreite_m;
    }
    hoehe_m(): number {
        return this.mHoehe_m;
    }
    isZerbrechlich(): boolean {
        return this.mIsZerbrechlich;
    }
}