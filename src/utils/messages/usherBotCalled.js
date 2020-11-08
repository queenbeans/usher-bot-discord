import configData from '../../appConfig/configData/configData.js'

const usherBotCalled = (message) => message.toLowerCase().includes(configData.prefix);

export default usherBotCalled;
