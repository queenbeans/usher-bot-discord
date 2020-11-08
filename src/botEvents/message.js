import getCommand from '../utils/messages/getCommand.js';
import usherOutOfChannel from '../features/usherOutOfChannel/usherOutOfChannel.js';
import usherBotCalled from '../utils/messages/usherBotCalled.js';

const createMessageBroker = client => {
    client.on("message", (message) => {
        const {content} = message;

        if(usherBotCalled(content)){
            const command = getCommand(content);

            switch(command){
                case "dc": 
                    usherOutOfChannel(message);
                    break;
                    
                default:
                    message.reply("...don't know that one.")
            }
        }
    });
}

export default createMessageBroker;