import { ITransportierbar } from "../interfaces/ITransportierbar.interface";
import { flugzeug } from "./flugzeug.class";

export class cessna172 extends flugzeug implements ITransportierbar {
  mMaxgewichts_kg: number = 757;
  mLeange_m: number = 5;
  mBreite_m: number = 11;
  mHoehe_m: number = 4;
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