import { ipcRenderer } from "electron";

function sendChannel(channel: string, message: any): void {
    ipcRenderer.send(channel, message);
}

export function sendChannelAction(channel: string, message: any): any {
    return (dispatch: any): any => {
        sendChannel(channel, message);
        dispatch(message);
        return;
    };
}
