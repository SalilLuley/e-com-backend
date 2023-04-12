export class UserAddressEntity {
  readonly id?: number;
  readonly userLoginInfoId: number;
  readonly addressLine1: string;
  readonly addressLine2: string;
  readonly city: string;
  readonly postalCode: string;
  readonly country: string;
  readonly telephone: string;
  readonly mobile: string;
}
