module.exports = (sequelize, dataTypes) => {
    let Genre = sequelize.define('Genre', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        name: {
            type: dataTypes.STRING,
        }
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