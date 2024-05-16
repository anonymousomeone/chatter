export const name = 'system';
export const elevation = 'operator';
export const description = 'appends a system message to history';

export function execute(client, message, args) {
    let history = client.chattingChannels.get(message.channelId).messageHistory;

    history.push({role: 'system', content: args.join(' ')});
    message.react("✅");
}