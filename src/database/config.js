const USER_NAME = 'kirilIvailovIliev:';
const PASSWORD = 'dafhasdfl234234.alsdfkj';
const COLLECTION_NAME = 'wildlife';

exports.DATABASE_CONNECTION_URL =
  `mongodb+srv://${USER_NAME}${PASSWORD}@cluster0.mhqxh0n.mongodb.net/${COLLECTION_NAME}?retryWrites=true&w=majority&appName=Cluster0/`;
