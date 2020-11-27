import configData from './configData/configData.js';
import mongodb from 'mongodb';

const connectToStore = () => mongodb.connect(configData.url);

export default connectToStore;