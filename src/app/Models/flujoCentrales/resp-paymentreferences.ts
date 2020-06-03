export interface RespPaymentreferences {
  responseStatus: ResponseStatus;
  customer: Customer;
  accounts: Accounts;
}
export interface ResponseStatus{
  code: string;
  message: string;
  status: string;
}
export interface Customer{
  name: string;
  lastname: string;
  identificationNumber: string;
  identificationType: string;
}
export interface Accounts{
  accounts: Account;
}
export interface Account{
  number: string;
  currentArrangement: CurrentArrangement;
  TPR: TPR;
}
export interface CurrentArrangement{
  validFrom: string;
  id: string;
  paymentMethod: string;
}
export interface TPR{
  id: string;
  previousBalance: string;
  currentBalance: string;
  lastBilledDate: string;
  SPR: SPR;
}
export interface SPR{
  id: string;
  billingAcountId: string;
  billingAcountCode: string;
  previousBalance: number;
  currentBalance: number;
  collectionInd: string;
  collection: Collection;
}
export interface Collection{
  status: string;
  suspensionDate: string;
  overdueAmount: string;
}
