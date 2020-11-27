import config from '../../appConfig/configData/configData.js';

const getCommand = (message) => message
.slice(config.prefix.length)
.trim()
.split(/ +/)
.shift()
.toLowerCase();
export default getCommand;