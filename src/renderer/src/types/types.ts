export interface AuthProviderProps {
  children: React.ReactNode
}

export type AuthContextType = {
  isAuthenticated: boolean
  saveUser: (userData: AuthResponse) => void
  getAccessToken: () => string
  getRefreshToken: () => string | null
  requestNewAccesToken: (refreshToken: string) => Promise<string | null>
  getUserInfo: (accessToken: string) => User | null
  getUser: () => User | null
  signout: () => void
}

export interface AuthResponse {
  body: {
    user: User
    accessToken: string
    refreshToken: string
  }
}
export interface AuthResponseError {
  body: {
    error: string
  }
}

export interface User {
  _id: string
  name: string
  username: string
}

export interface AccessTokenResponse {
  statusCode: number
  body: {
    accessToken: string
  }
  error?: string
}

export interface TestData {
  id: number
  description: string
}
