

export interface UseSignalRConfig {
    url: string;
    eventHandlers: { [eventName: string]: (...args: any[]) => void };
    logLevel?: signalR.LogLevel;
}