module.exports = (sequelize, dataTypes) => {
    const User = sequelize.define('User', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        name: {
            allowNull: false,
            type: dataTypes.STRING,
        },
        email: {
            type: dataTypes.STRING,
            unique: true
        },
        password: {
            allowNull: false,
            type: dataTypes.STRING,
        },
        createdAt: {
            allowNull: true,
            field: 'created_at',
            type: dataTypes.DATE,
        },
        updatedAt: {
            allowNull: true,
            field: 'updated_at',
            type: dataTypes.DATE,
        },
        remember_token: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        rol: {
            type: dataTypes.BOOLEAN,
        },
    },
        {
            tableName: 'users',
            timestamps: true,
        })

    return User;
}