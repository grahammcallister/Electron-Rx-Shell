"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
function sendChannel(channel, message) {
    electron_1.ipcRenderer.send(channel, message);
}
function sendChannelAction(channel, message) {
    return (dispatch) => {
        sendChannel(channel, message);
        dispatch(message);
        return;
    };
}
exports.sendChannelAction = sendChannelAction;
//# sourceMappingURL=channel-send.js.map