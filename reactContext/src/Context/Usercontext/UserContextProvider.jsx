import React from "react";
import Usercontext from "./Usercontext";

const UserContextProvider = ({ children }) => {
    const [user ,SetUser] = React.useState(null);
    
    return <Usercontext.Provider value = {{user ,SetUser}}>
        {children}
        </Usercontext.Provider>;
};

export default UserContextProvider;
//children is similar to outlert what we used in router dom