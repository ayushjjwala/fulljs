const env = process.env;

export const nodeEnv = env.NODE_ENV || 'developement';

export default {
    port: env.PORT || 8080
};