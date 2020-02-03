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


    /**
     * Getter $id
     * @return {string}
     */
	public get $id(): string {
		return this.id;
	}

    /**
     * Getter $displayName
     * @return {string}
     */
	public get $displayName(): string {
		return this.displayName;
	}

    /**
     * Getter $email
     * @return {string}
     */
	public get $email(): string {
		return this.email;
	}

    /**
     * Getter $profilePicture
     * @return {string}
     */
	public get $profilePicture(): string {
		return this.profilePicture;
	}
}