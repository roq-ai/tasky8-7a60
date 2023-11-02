import { TaskInterface } from 'interfaces/task';
import { TeamInterface } from 'interfaces/team';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ListInterface {
  id?: string;
  team_id: string;
  owner_id: string;
  created_at?: any;
  updated_at?: any;
  task?: TaskInterface[];
  team?: TeamInterface;
  user?: UserInterface;
  _count?: {
    task?: number;
  };
}

export interface ListGetQueryInterface extends GetQueryInterface {
  id?: string;
  team_id?: string;
  owner_id?: string;
}
