export interface SignInRequest {
  login: string
  password: string
}

export interface SignInResponse {
  accessToken: string
  refreshToken: string
}

// export interface SignInResult {
//   accessToken: string
//   refreshToken: string
// }
