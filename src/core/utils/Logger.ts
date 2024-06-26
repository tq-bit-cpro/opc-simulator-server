import pino from 'pino';

export default pino({
    level: process.env.LOG_LEVEL || 'info',
    transport: {
        target: 'pino-pretty',
        options: {
            colorize: true,
            translateTime: 'hh:MM:ss.l',
            ignore: 'pid,hostname',
            singleLine: true,
        },
    },
});
