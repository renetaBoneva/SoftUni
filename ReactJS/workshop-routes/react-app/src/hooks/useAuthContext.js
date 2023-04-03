import { AuthContext } from "../contexts/AuthContext";
import { useService } from "./useService";

export function useAuthContext(){
    const context = useService(AuthContext);
    return context;
}