import { SuperSafeSendFunctionThatTotallyWontError } from "../index.js";

export const name = 'help';
export const elevation = 'none';
export const description = 'sends this message.';
export function execute(client, message, args) {
    let result = "```\n";

    client.commands.forEach((v, k) => {
        result += k + "\n" + "    elevation: " + v.elevation + "\n    " + v.description + "\n";
    });

    result += "```";

    SuperSafeSendFunctionThatTotallyWontError(message.channel, result);
}
