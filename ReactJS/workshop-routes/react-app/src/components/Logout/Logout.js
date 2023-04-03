import { Navigate } from "react-router-dom";
import { useEffect } from "react";

import { AuthContext} from "../../contexts/AuthContext";
import { useContext } from "react";

export function Logout() {
    const { onLogout } = useContext(AuthContext);

    useEffect(()=> {
        onLogout();
    }, [])

    return <Navigate to={'/'} />
}