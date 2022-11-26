const TOKEN_NAME = 'melody-game-token'

export const getToken = () => {
  return localStorage.getItem(TOKEN_NAME) ?? ''
}

type Token = string

export const setToken = (token: Token) => {
  return localStorage.setItem(TOKEN_NAME, token)
}

export const dropToken = () => {
  return localStorage.removeItem(TOKEN_NAME)
}
