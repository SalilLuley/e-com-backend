export class UserPaymentEntity {
  readonly id?: number;
  readonly userLoginInfoId: number;
  readonly paymentType: string;
  readonly provider: string;
  readonly accountNo: number;
  readonly expiry: string;
}
