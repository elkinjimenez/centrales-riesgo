export interface RespGetInfoClient {
  isValid?: boolean;
  description?: string;
  documentNumber?: string;
  documentType?: string;
  firstName?: string;
  firstSurname?: string;
  email?: string;
  principalAddress?: string;
  dataOrigin?: string;
  doNotEmail?: string;
  doNotSMSInstantMessaging?: string;
  lastModified?: string;
}
