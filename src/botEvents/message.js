import getCommand from '../utils/messages/getCommand.js';
import usherBotCalled from '../utils/messages/usherBotCalled.js';

const createMessageBroker = client => {
    client.on("message", (message) => {
        const {content} = message;
        const {messageCommands} = client;

        if(usherBotCalled(content)){
            const command = getCommand(content);
            if(!messageCommands.has(command)) message.channel.send("...I don't kow that command")
            try{
                messageCommands.get(command).run(message);
            }catch(e){
                message.channel.send("I had trouble running that command. Please try again.");
                console.log(e);
            }
        }
    });
}

export default createMessageBroker;