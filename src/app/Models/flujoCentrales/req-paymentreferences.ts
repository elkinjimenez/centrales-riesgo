export interface ReqPaymentreferences {
  headerRequest: Header;
  subscriberNumber: string;
}

export interface Header {
  idBusinessTransaction: string;
  idApplication: string;
  target: string;
  startDate: Date;
  channel: string;
}
