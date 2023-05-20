export interface HeaderProps {
  title: string;
  id: number;
}

export interface UserItems {
  id: number;
  role: string;
  email: string;
  name: string;
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
  weight: number;
  origin: string;
  destiny: string;
  status: string;
}

export interface IBasicTableProps {
  headers: HeaderProps[];
  items: UserItems[] | TruckItems[] | CargoItems[];
  itemColor?: string;
  disableShadow?: boolean;
  disableGutters?: boolean;
  actions: "button" | "icon";
}

export type TableItem = {
  id: number;
  [key: string]: string | number;
};
