module.exports = (sequelize, dataTypes) => {
    const Actor = sequelize.define('Actor', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        first_name: {
            allowNull: false,
            type: dataTypes.STRING
        },
        last_name: {
            allowNull: false,
            type: dataTypes.STRING,
        },
    },
        {
            tableName: 'actors',
            timestamps: false,
        });

    Actor.associate = (models) => {
        Actor.belongsToMany(models.Movie, {
            as: 'movies',
            through: 'actor_movie',
            foreignKey: 'actor_id',
            otherKey: 'movie_id',
            timestamps: false,
        });
    }
    return Actor;
}