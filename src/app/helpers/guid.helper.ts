import { UUID } from 'angular2-uuid';

export class GuidHelper {
  public static GenerateGUID = (): string => {
    let uuid = UUID.UUID();
  }
}
