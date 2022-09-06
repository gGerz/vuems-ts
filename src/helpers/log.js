import { info, success } from 'consola';

/**
 * Show all logs
 * @function log
 * @param {Object} params
 * @param {String} header - Header
 * @param {Object[] | String} logs - Logs
 */
export async function log({ header, logs }) {
    info('------------------------');
    info(`-- ${header} --`);
    info('------------------------');

    if (Array.isArray(logs)) {
        logs.forEach((msg) => success(msg));
    } else {
        success(logs);
    }
}
