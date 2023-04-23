export interface HeaderProps {
  title: string;
  id: number;
}

export interface UserItems {
  id: number;
  type: string;
  user: string;
  username: string;
}

export interface TruckItems {
  id: number;
  plate: string;
  model: string;
  driver: string;
}

export interface CargoItems {
  id: number;
  document: string;
  category: string;
  peso: number;
  origin: string;
  destiny: string;
  status: string;
}

export interface IBasicTableProps {
  headers: HeaderProps[];
  items: UserItems[] | TruckItems[] | CargoItems[];
}

export type TableItem = {
  id: number;
  [key: string]: string | number;
};
