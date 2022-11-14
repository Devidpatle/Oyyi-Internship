module.exports = {
    apps: [
        {
            name: 'Oyyi Fronted',
            exec_mode: 'cluster',
            instances: 'max',
            script: './.output/server/index.mjs'
        }
    ]
}
