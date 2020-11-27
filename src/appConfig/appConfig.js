import { Client, Collection } from 'discord.js';
import createMessageBroker from '../botEvents/message.js';
import configData from './configData/configData.js';
import * as fs from 'fs';

const getBotToken = () => ({
    token: configData.token
})

const getAppConfig = () => {
    return {
        ...getBotToken()
    }
}

const setClientCommands = async (client) => {
    client.messageCommands = new Collection();
    const files = fs.readdirSync('./src/commands').filter(file => file.endsWith('.js'));

    for(const file of files){
        let command = await import(`../commands/${file}`);
        command = command.default;
        client.messageCommands.set(command.name, command);
    }
}

const initClient = () => {
    const {token} = getAppConfig();
    const client = new Client();
    client.login(token);
    setClientCommands(client);
    return client;
}

const initApp = async() => {
    const client = initClient();
    createMessageBroker(client);
}

export default initApp;