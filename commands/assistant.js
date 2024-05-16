export const name = 'assistant';
export const elevation = 'operator';
export const description = 'appends assistant (ai) message to history (use this to gaslight)';

export function execute(client, message, args) {
    let history = client.chattingChannels.get(message.channelId).messageHistory;

    history.push({role: 'system', content: args.join(' ')});
    message.react("✅");
}