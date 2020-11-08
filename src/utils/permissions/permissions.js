import canReplyToMessage from './messages/canReply.js';

const getPermissions = (member) => ({
    ...canReplyToMessage(member)
})

export default getPermissions;