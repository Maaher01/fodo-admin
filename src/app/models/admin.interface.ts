export interface Admin {
  _id: String;
  email?: String;
  username: String;
  password: String;
  name: String;
  phoneNo: String;
  role: String;
  hasAccess: Boolean;
}
