import { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom"

export function Delete({ onDeleteGame }) {
    const { gameId } = useParams();

    useEffect(() => {
        onDeleteGame(gameId)
    }, [gameId, onDeleteGame])

    return <Navigate to='/catalog' />;
}