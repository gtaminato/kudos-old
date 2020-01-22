export default class User {
  private id: string;
  private firstName: string;
  private displayName: string;
  private email: string;
  private profilePicture: string;
  private idToken: string;
  private accessToken: string;

  constructor(
    id: string,
    firstName: string,
    displayName: string,
    email: string,
    profilePicture: string,
    idToken: string,
    accessToken: string,
  ) {
		this.id = id;
		this.firstName = firstName;
		this.displayName = displayName;
		this.email = email;
		this.profilePicture = profilePicture;
		this.idToken = idToken;
		this.accessToken = accessToken;
  }
}