export interface Users {
  id?: string;
  name: string;
  password: string;
  confirmPassword: string;
  email: string;
  isSubscribed: boolean;
  country: string;
  city: string;
}
