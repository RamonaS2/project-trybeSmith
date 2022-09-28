export interface ILogin {
  username: string,
  password: string,
  
}

export interface ILoginService {
  status: number,
  message?: string,
  id?: number,
  username?: string,
}
