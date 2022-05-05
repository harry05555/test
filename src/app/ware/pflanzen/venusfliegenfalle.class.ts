import { ITransportierbar } from "../interfaces/ITransportierbar.interface";
import { Fleischfresser } from "./fleischfresser.class";

export class venusfliegenfalle extends Fleischfresser implements ITransportierbar {
  mMaxgewichts_kg: number = 1;
  mLeange_m: number = 1;
  mBreite_m: number = 1;
  mHoehe_m: number = 1;
  mIsZerbrechlich: boolean = true;

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