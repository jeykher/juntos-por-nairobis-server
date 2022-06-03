interface IConfig {
    general: {
        mode: string;
    }
    server: {
        port: number | string;
    },
    database: {
        engine: string;
        driver: string;
        host: string;
        port: string | number;
        name: string;
        user: string;
    }
};

export default IConfig;
