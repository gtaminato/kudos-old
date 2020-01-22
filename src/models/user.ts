export default class User {
  private id: string;
  private displayName: string;
  private email: string;
  private profilePicture: string;

  constructor(
    id: string,
    displayName: string | null,
    email: string | null,
    profilePicture: string | null
  ) {
		this.id = id;
		this.displayName = displayName || '';
		this.email = email || '';
		this.profilePicture = profilePicture || '';
  }
}