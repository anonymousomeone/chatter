import { SuperSafeSendFunctionThatTotallyWontError } from "../index.js";

export const name = 'history';
export const elevation = 'operator';
export const description = 'send the message history of the current channel (for debugging)';

export function execute(client, message, args) {
    let history = client.chattingChannels.get(message.channelId).messageHistory;
    
    let response = "```\n";

    for (let i = 0; i < history.length; i++) {
        // dont include system prompt
        if (i == 0) {continue;}

        response += `${history[i].role}: ${history[i].content}\n`
    }
    response += "\n```";

    SuperSafeSendFunctionThatTotallyWontError(message.channel, response);
}