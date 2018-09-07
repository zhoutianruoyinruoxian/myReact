export const defaultOption = {
  // baseURL: 'http://47.98.117.109:8085',
  baseURL: 'http://127.0.0.1:8085',
  timeout: 10000,
  validateStatus(status) {
    return (status >= 200 && status < 300) || status === 304; // 默认的
  },
};
