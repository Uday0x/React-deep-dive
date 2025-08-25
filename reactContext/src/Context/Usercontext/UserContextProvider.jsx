import React from "react";
import Usercontext from "./Usercontext";

const UserContextProvider = ({ children }) => {
    const [user ,setUser] = React.useState(null);
    
    return <Usercontext.Provider value = {{user ,setUser}}>
        {children}
        </Usercontext.Provider>;
};  

export default UserContextProvider;
//children is similar to outlert what we used in router dom