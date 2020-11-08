import configData from '../../appConfig/configData/configData.js';

const getRawCommand = (message) => {
    const commandIndex = configData.prefix.length + 1;
    return message.toLowerCase().slice(commandIndex, message.length);
}

const getSanitizedCommand = (rawCommand) => rawCommand.split(" ")[0];

const getCommand = (message) => getSanitizedCommand(getRawCommand(message));

export default getCommand;