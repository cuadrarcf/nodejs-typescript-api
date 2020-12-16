export namespace Configuration {

  export const JSON_ENCRYPT_KEY = 'gdtdyfut3746tggFDEPOK99lkmnOIKVCXE76';

  export const DatabaseConfig = {
    host: '',
    database: '',
    username: '',
    password: '',
    dialect: 'mysql', // 'mysql'|'sqlite'|'postgres'|'mssql',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  };

}
