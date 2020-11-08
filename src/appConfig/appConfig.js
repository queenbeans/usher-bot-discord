import { Client } from 'discord.js';
import createMessageBroker from '../botEvents/message.js';
import configData from './configData/configData.js';

const getBotToken = () => ({
    token: configData.token
})

const getAppConfig = () => {
    return {
        ...getBotToken()
    }
}

const initClient = () => {
    const {token} = getAppConfig();
    const client = new Client();
    client.login(token);

    return client;
}

const initApp = () => {
    const client = initClient();
    createMessageBroker(client);
}

export default initApp;