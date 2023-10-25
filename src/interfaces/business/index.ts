import { GetQueryInterface } from 'interfaces';

export interface BusinessInterface {
  id?: string;
  name?: number;
  industry: string;
  location: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface BusinessGetQueryInterface extends GetQueryInterface {
  id?: string;
  industry?: string;
  location?: string;
}
