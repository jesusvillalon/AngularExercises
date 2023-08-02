export interface Users {
  id?: number;
  name: string;
  password: string;
  confirmPassword: string;
  email: string;
  isSubscribed: boolean;
  country: string;
  city: string;
}
