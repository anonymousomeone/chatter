import Channel from '../channel.js';
import { saveConfig } from '../index.js';

export const name = 'channel';
export const elevation = 'admin';
export const description = 'adds/removes channel to/from ai response whitelist';
export function execute(client, message, args) {
    if (args[0] == "add") {
        if (client.config.channelIds.includes(message.channelId)) {
            return message.react("❔");
        }

        let channel = new Channel(client);

        client.config.channelIds.push(message.channelId);
        client.chattingChannels.set(message.channelId, channel);

        message.react("✅");
    } else if (args[0] == "remove") {
        if (!client.config.channelIds.includes(message.channelId)) {
            return message.react("❔");
        }

        const index = client.config.channelIds.indexOf(message.channelId);
        
        client.config.channelIds.splice(index, 1);
        client.chattingChannels.delete(message.channelId);

        message.react("✅");
    }

    saveConfig(client.config);
}