const usherOutOfChannel = {
    name: 'dc',
    run: (message) => {
        const {mentions: {members}} = message;
        if(members.size < 1) {
            message.reply("please mention the guild members you'd like me to disonnect <3");
        }

        members.forEach(member => {
            member.voice.setChannel(null);
        });
    }
}

export default usherOutOfChannel;