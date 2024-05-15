import { Client, Collection } from 'discord.js-selfbot-v13';

export class Client2 extends Client {
	constructor(config) {
		super({
			// disableEveryone: true,
			// disabledEvents: ['TYPING_START'],
		});

		this.config = config;
        this.systemMessage = "";
        this.messageHistory = [];
		this.messageHistories = new Collection();
	}
};