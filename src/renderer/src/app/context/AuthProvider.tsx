import React, { useContext, createContext, useState, useMemo, useEffect } from 'react'
import {
  AccessTokenResponse,
  AuthContextType,
  AuthProviderProps,
  AuthResponse,
  User
} from '../@types/types'

const AuthContext = createContext<AuthContextType | null>(null)

export const AuthProvider = ({ children }: AuthProviderProps): React.JSX.Element => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [accessToken, setAccessToken] = useState<string>('')
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    checkAuth()
  }, [])

  const checkAuth = async (): Promise<void> => {
    if (accessToken) {
      //usuario autencado
      const userInfo = await getUserInfo(accessToken)
      if (userInfo) {
        saveSessionInfo(userInfo, accessToken, getRefreshToken()!)
      }
    } else {
      //usuario no autenticado
      const token = getRefreshToken()
      if (token) {
        const newAccesToken = await requestNewAccesToken(token)
        if (newAccesToken) {
          const userInfo = await getUserInfo(newAccesToken)
          if (userInfo) {
            saveSessionInfo(userInfo, newAccesToken, token)
          }
        }
      }
    }
    setIsLoading(false)
  }

  const saveSessionInfo = (userInfo: User, accessToken: string, refreshToken: string): void => {
    setAccessToken(accessToken)
    localStorage.setItem('token', JSON.stringify(refreshToken))
    setIsAuthenticated(true)
    setUser(userInfo)
  }

  const getUserInfo = (accessToken: string): User | null => {
    try {
      console.log(`Bearer ${accessToken}`)
      const response: User = {
        _id: '1',
        name: 'asfa',
        username: 'asfdf'
      }
      if (response) {
        return response
      } else {
        throw new Error('error')
      }
    } catch (error) {
      console.log(error)
      return null
    }
  }

  const requestNewAccesToken = async (refreshToken: string): Promise<string | null> => {
    try {
      console.log(`Bearer ${refreshToken}`)
      const response: AccessTokenResponse = {
        statusCode: 200,
        body: {
          accessToken: 'asfs'
        }
      }

      if (response) {
        if (response.error) {
          throw new Error(response.error)
        }
        return response.body.accessToken
      } else {
        throw new Error('error')
      }
    } catch (error) {
      console.log(error)
      return null
    }
  }

  const getAccessToken = (): string => {
    return accessToken
  }

  const getRefreshToken = (): string | null => {
    const tokenData = localStorage.getItem('token')
    if (tokenData) {
      const token = JSON.parse(tokenData)
      return token
    } else {
      return null
    }
  }

  const saveUser = (userData: AuthResponse): void => {
    saveSessionInfo(userData.body.user, userData.body.accessToken, userData.body.refreshToken)
  }

  const getUser = (): User | null => {
    return user
  }

  const signout = (): void => {
    setIsAuthenticated(false)
    setAccessToken('')
    setUser(null)
    localStorage.removeItem('token')
  }

  const contextValue = useMemo(
    () => ({
      isAuthenticated,
      getAccessToken,
      saveUser,
      getRefreshToken,
      requestNewAccesToken,
      getUserInfo,
      getUser,
      signout
    }),
    [
      isAuthenticated,
      getAccessToken,
      saveUser,
      getRefreshToken,
      requestNewAccesToken,
      getUserInfo,
      getUser,
      signout
    ]
  )

  return (
    <AuthContext.Provider value={contextValue}>
      {isLoading ? <div>Loading...</div> : children}
    </AuthContext.Provider>
  )
}

//hook
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
