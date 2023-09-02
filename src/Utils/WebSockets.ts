import EventBus from "./EventBus";

export enum WebSocketsEvents {
    Error = "error",
    Connected = "conected",
    Close = "close",
    Message = "message"
}

class WebSockets extends EventBus {

    private socket: WebSocket;

    private url: string;

    constructor(url: string) {
        super();
        this.url = url;
    }

    public send(data: string | number | object) {
        if (!this.socket) {
            throw new Error("Соединения нет");
        }

        this.socket.send(JSON.stringify(data));
    }

    public connect(): Promise<void> {
        this.socket = new WebSocket(this.url);

        this.addEvents();

        const interval = setInterval(() => {
            this.send({type: "ping"});
        }, 5000);

        this.on(WebSocketsEvents.Close, () => {
            clearInterval(interval);
        });

        return new Promise((resolve) => {
            this.on(WebSocketsEvents.Connected, () => {
                resolve();
            });
        });
    }

    public close() {
        this.socket?.close();
    }

    private addEvents() {
        this.socket.addEventListener("open", () => {
            this.emit(WebSocketsEvents.Connected);
        });

        this.socket.addEventListener("close", () => {
            this.emit(WebSocketsEvents.Close);
        });

        this.socket.addEventListener("message", (message) => {
            try {
                const data = JSON.parse(message.data);
                if (data.type && data.type === "pong") {
                    return;
                }
                this.emit(WebSocketsEvents.Message, data);
            } catch (error) {
                console.log(error);
            }
        });
    }
    
}

export default WebSockets;
