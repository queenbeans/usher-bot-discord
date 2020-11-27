import configData from '../appConfig/configData/configData.js';
import connectToStore from './../appConfig/store.js';

const getUsers = async (members) => {
    const store = await connectToStore();
    const dbo = store.db(configData.dbName);
    const userList = dbo.collection(configData.userCollectionName);
    const users = [];

    members.forEach(member => {
        const {displayName} = member;
        users.push(userList.findOne({name: displayName}));
    })
    return await Promise.all(users);
}

const getMemberPronouns = {
    name: 'pronouns',
    run: async (message) => {
        const {mentions: {members}} = message;

        const users = await getUsers(members);

        if(users.length){
            let response = "";
            for(const user of users){
                const {name, pronouns} = user;
                response += `${name} goes by ${pronouns} pronouns.\n`
            }
            message.channel.send(response);
            return;
        }

        message.channel.send("That user has not shared their pronouns yet.")
    }
}

export default getMemberPronouns;