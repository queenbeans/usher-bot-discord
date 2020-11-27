const getMemberPronouns = {
    name: 'pronouns',
    run: (message) => {
        const {mentions: {members}} = message;
        let response = "";
        members.forEach(member => {
            const {displayName} = member;
            response += `${displayName} goes by they/them pronouns.\n`;
        })
        message.channel.send(response);
    }
}

export default getMemberPronouns;