import Store from "../Utils/Store";
import WebSockets, {WebSocketsEvents} from "../Utils/WebSockets";

type Message = {
    time: string,
    user_id: number,
    content: string,
}

class MessagesController {
    private socket: WebSockets;

    connect(chat: number, user: number, token: string){
        this.socket = new WebSockets(`wss://ya-praktikum.tech/ws/chats/${user}/${chat}/${token}`);

        this.socket.on(WebSocketsEvents.Message, (result: unknown) => {
            const messages = result as Message | Message[];
            this.messageUpdated(messages);
        });

        this.socket.connect().then(() => {
            this.getMessages();
        });
    }

    sendMessage(message: string) {
        this.socket.send({
            type: "message",
            content: message,
        });
    }

    messageUpdated(messages: Message | Message[]) {
        let newMessages: Message[] = [];

        if (Array.isArray(messages)) {
            newMessages = messages.reverse();
        } else {
            if (messages.user_id) newMessages.push(messages);
        }
        const currentMessages = (Store.getState().messages || []) as Message[];
        newMessages = [...currentMessages, ...newMessages];
        Store.set("messages", newMessages);
    }

    getMessages() {
        this.socket.send(
            {
                type: "get old",
                content: "0"
            });
    }
}

export default new MessagesController();
