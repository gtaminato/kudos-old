export default class User {
  private _id: string;
  private _firstName: string;
  private _displayName: string;
  private _email: string;
  private _profilePicture: string;
  private _idToken: string;
  private _accessToken: string;

  constructor(
    id: string,
    firstName: string,
    displayName: string,
    email: string,
    profilePicture: string,
    idToken: string,
    accessToken: string,
  ) {
		this._id = id;
		this._firstName = firstName;
		this._displayName = displayName;
		this._email = email;
		this._profilePicture = profilePicture;
		this._idToken = idToken;
		this._accessToken = accessToken;
  }
}