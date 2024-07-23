export interface Distributor {
  id: number;
  name: string;
  index: string;
  region: string;
  city: string;
  street: string;
  phone: string;
  email: string;
  website: string;
}

export interface FormDistributor extends Omit<Distributor, "id"> {}
