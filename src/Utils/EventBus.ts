type ListenerCallback = (...args: unknown[]) => void
  
type EventListeners = {
    [event: string]: ListenerCallback[];
}
  
class EventBus {
    private listeners: EventListeners;
  
    constructor() {
        this.listeners = {};
    }
  
    on(event: string, callback: ListenerCallback): void {
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }
  
        this.listeners[event].push(callback);
    }
  
    off(event: string, callback: ListenerCallback): void {
        if (!this.listeners[event]) {
            throw new Error(`Нет события: ${event}`);
        }
  
        this.listeners[event] = this.listeners[event].filter(
            (listener) => listener !== callback
        );
    }
  
    emit(event: string, ...args: unknown[]): void {
        if (!this.listeners[event]) {
            throw new Error(`Нет события: ${event}`);
        }
  
        this.listeners[event].forEach((listener) => {
            listener(...args);
        });
    }
}

export default EventBus;
