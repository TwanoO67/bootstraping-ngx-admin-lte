import { UUID } from 'angular2-uuid';

export class GuidHelper {
  public static generateGUID = (): string => {
    return UUID.UUID();
  }
}
