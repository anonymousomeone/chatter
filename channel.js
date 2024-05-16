
export default class chattingChannel {
    constructor(systemMessage) {
        this.systemMessage = systemMessage;
        this.messageHistory = [];


        this.onCooldown = false;
    }
}