module.exports = (sequelize, dataTypes) => {
    const Movie = sequelize.define('Movie', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            type: dataTypes.INTEGER,
        },
        createdAt: {
            field: 'created_at',
            allowNull: false,
            type: dataTypes.DATE,

        },
        updatedAt: {
            field: 'updated_at',
            allowNull: false,
            type: dataTypes.DATE,

        },
        deletedAt: {
            field: 'deleted_at',
            allowNull: false,
            type: dataTypes.DATE,

        },
        title: {
            allowNull: false,
            type: dataTypes.STRING,
        },
        rating: {
            allowNull: false,
            type: dataTypes.DOUBLE,
        },
        awards: {
            allowNull: false,
            type: dataTypes.INTEGER,
        },
        release_date: {
            allowNull: false,
            type: dataTypes.DATE,
        },
        length: {
            allowNull: false,
            type: dataTypes.INTEGER,
        },
        genre_id: {
            allowNull: false,
            type: dataTypes.INTEGER,
        },
    },
        {
            tableName: 'movies',
            timestamps: true,
            paranoid: true,
        });

    Movie.associate = (models) => {
        Movie.belongsToMany(models.Actor, {
            as: 'actors',
            through: 'actor_movie',
            foreignKey: 'movie_id',
            otherKey: 'actor_id',
            timestamps: true,
        });
        Movie.belongsTo(models.Genre, {
            as: 'genre',
            foreignKey: 'genre_id',
        });
    }
    return Movie;
}