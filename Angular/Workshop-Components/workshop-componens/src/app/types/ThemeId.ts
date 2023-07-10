import { UserId } from "./UserId";

export interface ThemeId {
    "subscribers": string[],
    "posts": string[],
    "_id": string,
    "themeName": string,
    "userId": UserId,
    "created_at": string,
    "updatedAt": string,
    "__v": number
}