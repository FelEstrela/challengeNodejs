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
        // created_at: {
        //     allowNull: true,
        //     type: dataTypes.DATE,
        // },
        // updated_at: {
        //     allowNull: true,
        //     type: dataTypes.DATE,
        // },
        rol: {
            type: dataTypes.BOOLEAN,
        },
    },
        {
            tableName: 'users',
            timestamps: true,
            // createdAt: 'created_at',
            // updatedAt: 'updated_at',
        })

    return User;
}