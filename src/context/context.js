import React from 'react'

const UserContext = React.createContext({
    hello:'hello'
})

export const UserProvider = UserContext.Provider
export const UserConsumer = UserContext.Consumer

export default UserContext