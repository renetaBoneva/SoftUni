import { useContext, useEffect } from "react";
import { Navigate, useParams } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext";

export function Delete() {
    const { gameId } = useParams();
    const { onDeleteGame } = useContext(AuthContext);

    useEffect(()=> {
        onDeleteGame(gameId)
    }, [gameId])

    return <Navigate to='/catalog' />;
}