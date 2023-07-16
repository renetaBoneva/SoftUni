import { ThemeId } from "./ThemeId"
import { UserId } from "./UserId"

export interface Post {
    "likes": string[],
    "_id": string,
    "text": string,
    "userId": UserId,
    "themeId": ThemeId,
    "created_at": string,
    "updatedAt": string,
    "__v": number
}