module.exports = (sequelize, dataTypes) => {
    const Genre = sequelize.define('Genre', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        name: {
            allowNull: false,
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
    },
        {
            tableName: 'genres',
            timestamps: true,
        });

    Genre.associate = (models) => {
        Genre.hasMany(models.Movie, {
            as: 'movies',
            foreignKey: 'genre_id',
        });
    }
return Genre;
}