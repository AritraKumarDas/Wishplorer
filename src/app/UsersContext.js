
import React from "react";

const usersContext = React.createContext('');

export const UsersProvider = usersContext.Provider;
export const UsersConsumer = usersContext.Consumer;

export default usersContext;