export default class User {
  id: string;
  displayName: string;
  email: string;
  profilePicture: string;

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