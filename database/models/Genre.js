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
    },
        {
            tableName: 'genres',
            timestamps: false,
        });

    Genre.associate = (models) => {
        Genre.hasMany(models.Movie, {
            as: 'movies',
            foreignKey: 'genre_id',
        });
    }
return Genre;
}