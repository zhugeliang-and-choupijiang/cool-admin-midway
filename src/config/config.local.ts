import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export type DefaultConfig = PowerPartial<EggAppConfig>;

export default (appInfo: EggAppInfo) => {
  const config = {} as DefaultConfig;

  config.orm = {
    type: 'mysql',
<<<<<<< HEAD
    host: 'localhost',
    port: 3306,
    username: 'dev',
    password: 'WK5JbniQN',
    database: 'mydb',
=======
    host: '10.211.55.7',
    port: 3306,
    username: 'midway',
    password: '123123',
    database: 'midway',
>>>>>>> 69188a93054b2427d00ef1f168323b3ad0f3af7f
    // 自动建表 注意：线上部署的时候不要使用，有可能导致数据丢失
    synchronize: true,
    // 打印日志
    logging: true,
    // 字符集
    charset: 'utf8mb4',
  };

  config.logger = {
    coreLogger: {
      consoleLevel: 'INFO',
    },
  };

  return config;
};
