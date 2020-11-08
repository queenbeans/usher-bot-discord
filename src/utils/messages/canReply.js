const canReplyToMessage = (member) => ({
    canReply: !member.user.bot
})

export default canReplyToMessage;