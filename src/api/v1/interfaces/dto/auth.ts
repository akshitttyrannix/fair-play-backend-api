export interface SignupDto {
  username: string;
  password: string;
  role: string;
}

export interface UserDto {
  username: string;
  password: string;
  role: string;
  createdBy: string;
  status: boolean;
}

export interface SigninDto {
  username: string;
  password: string;
}
