import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ItAdministratorInterface {
  id?: string;
  user_id: string;
  skills: string;
  experience: number;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface ItAdministratorGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  skills?: string;
}
