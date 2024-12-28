import { useEffect } from "react";
import * as signalR from "@microsoft/signalr";
import { UseSignalRConfig } from "../../modules/signalR/signalRService";


const useSignalR = ({ url, eventHandlers, logLevel = signalR.LogLevel.Information }: UseSignalRConfig) => {
    useEffect(() => {
        const connection = new signalR.HubConnectionBuilder()
            .withUrl(url)
            .configureLogging(logLevel)
            .withAutomaticReconnect()
            .build();


        Object.entries(eventHandlers).forEach(([eventName, handler]) => {
            connection.on(eventName, handler);
        });


        connection
            .start()
            .then(() => console.log("SignalR connected"))
            .catch((err) => console.error("Error while starting connection: " + err));


        return () => {
            Object.keys(eventHandlers).forEach((eventName) => {
                connection.off(eventName);
            });
            connection.stop();
        };
    }, [url, eventHandlers, logLevel]);
};

export default useSignalR;