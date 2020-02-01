import User from './user';

export default class Team {
  id: string;
  title: string;
  description: string;
  author: User;
  target: User;

  constructor(
    id: string,
    title: string,
    description: string,
    author: User,
    target: User
  ) {
		this.id = id;
    this.title = title;
    this.description = description;
    this.author = author;
    this.target = target;
  }
}