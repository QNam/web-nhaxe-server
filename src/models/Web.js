module.exports = (sequelize, Sequelize) => {
    let web = sequelize.define('web', {
        idw: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        s_name: Sequelize.STRING,
        theme_id: Sequelize.STRING 
    }, {
        timestamps: false,
        tableName: 'web'
    })

    web.findBySubDomain = function (subdomain) {
        return web.findOne({
            where: {s_name: subdomain}, 
            raw: true
        })
    }

    return web
}
