const config = {
    production: {
        PORT : 1234,
        connectionString: 'mongodb://127.0.0.1:27017/cubicle',
        secret: 'verysecretproductionsecret'
    },
    development: {
        PORT: 5000,
        connectionString: 'mongodb://127.0.0.1:27017/cubicle',
        secret: 'verysecretdevsecret'
    }
}

module.exports = config[process.env.node_env || 'development'];