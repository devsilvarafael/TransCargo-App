export interface User {
  id?: number;
  name: string;
  email: string;
  password: string;
  role: "adm" | "driver" | "customer" | undefined;
}
