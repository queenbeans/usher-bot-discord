import canReplyToMessage from './canReplyToMessage.js';

const getPermissions = (member) => ({
    ...canReplyToMessage(member)
})

export default getPermissions;