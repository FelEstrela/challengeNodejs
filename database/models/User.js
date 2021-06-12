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
            type: dataTypes.STRING,
        },
        createdAt: {
            field: 'created_at',
            type: dataTypes.DATE,
        },
        updatedAt: {
            field: 'updated_at',
            type: dataTypes.DATE,
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