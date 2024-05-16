export const name = 'reset';
export const elevation = 'operator';
export const description = 'clears message history for current channel';

export function execute(client, message, args) {
    let chattingChannel = client.chattingChannels.get(message.channelId);
    let history = chattingChannel.messageHistory;

    history = [];
    history.push({role: 'system', content: chattingChannel.systemMessage});
    message.react("✅");
}