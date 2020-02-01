import User from './user';

export default class Team {
  private id: string;
  private name: string;
  private members: User[];

  constructor(
    id: string,
    name: string,
    members: User[] | null
  ) {
		this.id = id;
		this.name = name;
		this.members = members || [];
  }
}