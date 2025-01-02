export interface PaymentSession {
  id: string;
  url?: string;
}

export interface PaymentError {
  message: string;
  code?: string;
}