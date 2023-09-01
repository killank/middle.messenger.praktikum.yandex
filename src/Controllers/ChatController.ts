import ChatApi from "../Api/Chat/ChatApi";
import Store from "../Utils/Store";
import MessagesController from "./MessagesController";
import {ChatListItem, User} from "../types";

type Token = {
    token: string;
}

class ChatController {
    private api: ChatApi;

    constructor() {
        this.api = new ChatApi();
    }

    async getChats() {
        const res = await this.api.getChats();
        Store.set("chats", res);
    }

    async getChatUsers(id: number) {
        return await this.api.getChatUsers(id).then((result) => {
            Store.set("chatUsers", result);
        });
    }

    getToken(chatId: number) {
        return this.api.getChatToken(chatId);
    }

    addNewChat(chatName: string) {
        return this.api.addNewChat({title: chatName}).then(() => {
            this.getChats();
            Store.set("chat", null);
            Store.set("messages", []);
        });
    }

    deleteChat(chatId: number) {
        return this.api.deleteChat({chatId}).then(() => {
            Store.set("chat", null);
            Store.set("messages", null);
            this.getChats();
        });
    }

    selectChat(chat: ChatListItem) {
        Store.set("chat", null);
        Store.set("chat", chat);
        Store.set("messages", null);

        if (chat?.id) {
            this.getChatUsers(chat.id);
            this.getToken(chat.id).then((result) => {
                const token = result as unknown as Token;
                const user = Store.getState().user as User;
                MessagesController.connect(chat.id, user.id, token.token);
            });
        }
    }

    addUsersToChat(user: number, chat: number) {
        return this.api.addUsersToChat({
            users: [user],
            chatId: chat
        }).then(() => {
            this.getChatUsers(chat);
        });
    }

    deleteUsersFromChat(user: number, chat: number) {
        return this.api.deleteUsersFromChat({
            users: [user],
            chatId: chat
        }).then(() => {
            this.getChatUsers(chat);
        });
    }
}

export default new ChatController();
