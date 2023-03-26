import * as gameService from './services/gameService';

const initialData = [{
    "title": "Super Mario",
    "imageUrl": "https://mario.wiki.gallery/images/thumb/c/cc/NSMBUD_Mariojump.png/1200px-NSMBUD_Mariojump.png",
    "maxLevel": "400",
    "category": "Action",
    "summery": "Cool game"
},
{
    "title": "CS GO",
    "imageUrl": "https://i0.wp.com/bookmaker-ratings.bg/wp-content/uploads/sites/12/2021/01/CS-Global-Offensive.jpg?fit=620%2C347&ssl=1",
    "maxLevel": "100",
    "category": "Action",
    "summery": "Action game"
},
{
    "title": "Subway Surfers",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWdDL3_j-m_L73PHEYw0TWt_vBqXRtjtI14Q&usqp=CAU",
    "maxLevel": "200",
    "category": "Mobile game",
    "summary": "Dynamic game",
    "_id": "6681b37c-80a6-433a-b893-95b454dfe5e5"
},
{
    "title": "Minecraft",
    "imageUrl": "https://play-lh.googleusercontent.com/VSwHQjcAttxsLE47RuS4PqpC4LT7lCoSjE7Hx5AW_yCxtDvcnsHHvm5CTuL5BPN-uRTP",
    "maxLevel": "300",
    "category": "Arcade",
    "summary": "Cool summary",
    "_id": "711f1152-1914-4a72-a40b-2f54a15407b5"
}];
export function onStartInitalData(isStarted, setIsStarted) {
    console.log(isStarted);
    if (!isStarted) {
        initialData.map(gameData => gameService.create(gameData));
        setIsStarted(true);
    }
}