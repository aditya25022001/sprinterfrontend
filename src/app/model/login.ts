export interface User{
  message:String,
  name:String,
  email:String,
  _id:String,
  token:String
}

export interface AuthState{
  user: User
}
