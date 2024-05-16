import ollama from 'ollama';
import { SuperSafeSendFunctionThatTotallyWontError, saveConfig } from '../index.js';

export const name = 'model';
export const elevation = 'admin';
export const description = 'change model, or list current/installed models';
export function execute(client, message, args) {
    let subcmd = args[0];

    if (subcmd == "list") {
        ollama.list().then(list => {
            let result = `Models installed:\n`;

            result += "```\n";
            list.models.forEach(e => {
                result += e.name + '\n';
            });
            result += "```";

            SuperSafeSendFunctionThatTotallyWontError(message.channel, result)
            // message.react("✅");
        });
    } else if (subcmd == "switch") {
        ollama.list().then(list => {
            let models = [];
            list.models.forEach(e => {
                models.push(e.name);
            })

            let input = args[1];

            if (!models.includes(input)) { message.react("⁉"); return; }

            client.config.aiModel = input;

            message.react("🤔");
            // preload model
            ollama.chat({model: client.config.aiModel}).then(() => {
                message.react("✅")
            });

            saveConfig(client.config);
        });
    } else if (!subcmd) {
        SuperSafeSendFunctionThatTotallyWontError(message.channel, "`" + client.config.aiModel + "`");
    }

}