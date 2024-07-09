import * as convict from 'convict';
import * as dotenv from 'dotenv';
import * as path from 'path';

const environment = process.env.NODE_ENV ? process.env.NODE_ENV : '';
dotenv.config({ path: path.join(__dirname, `../../${environment}.env`) });

const config = convict({
  port: {
    doc: 'Port to run the service on',
    env: 'PORT',
    format: 'port',
    default: 3001,
  },
  env: {
    doc: 'Node environment',
    env: 'NODE_ENV',
    format: ['production', 'development'],
    default: '',
  },
});

config.validate({ allowed: 'strict' });

export default config;
