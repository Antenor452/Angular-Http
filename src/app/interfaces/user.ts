import { Address } from './address';
import { Geo } from './geo';
import { Company } from './company';

export interface User {
  id?: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  geo: Geo;
  phone: string;
  website: string;
  company: Company;
}
