import { ITransportierbar } from "../interfaces/ITransportierbar.interface";
import { Baum } from "./baum.class";

export class Ahorn extends Baum implements ITransportierbar {
  mMaxgewichts_kg: number = 3000;
  mLeange_m: number = 7;
  mBreite_m: number = 3;
  mHoehe_m: number = 10;
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