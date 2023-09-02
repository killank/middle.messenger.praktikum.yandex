import {HTTPTransport} from "../../Utils/HTTPTransport";
import Chat from "./endpoints";
import {iParams} from "./types";

class ChatApi {
    protected http: HTTPTransport;

    constructor() {
        this.http = new HTTPTransport();
    }

    getChats() {
        return this.http.get(Chat.chat.chats);
    }

    getChatUsers(id: number) {
        const url = Chat.chat.getChatUser.replace("{id}", id.toString());
        return this.http.get(url);
    }

    getChatToken(chatId: number) {
        const url = Chat.chat.getChatToken.replace("{chatId}", chatId.toString());
        return this.http.post(url);
    }

    addNewChat(data: iParams.iAddNewChat) {
        return this.http.post(Chat.chat.chats, data);
    }

    deleteChat(data: iParams.iDeleteChat) {
        return this.http.delete(Chat.chat.chats, data);
    }

    addUsersToChat(data: iParams.iAddUserToChat) {
        return this.http.put(Chat.chat.users, data);
    }

    deleteUsersFromChat(data: iParams.iDeleteUsersFromChat) {
        return this.http.delete(Chat.chat.users, data);
    }

}

export default ChatApi;
