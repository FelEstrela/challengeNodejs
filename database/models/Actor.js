module.exports = (sequelize, dataTypes) => {
    const Actor = sequelize.define('Actor', {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: dataTypes.INTEGER(10),  
        },
        first_name: {
            type: dataTypes.STRING(200),
        },
        last_name: {
            type: dataTypes.STRING(200),
        },
        full_name: {
            type: DataTypes.VIRTUAL,
                get() {
                    return `${this.first_name} ${this.last_name}`;
                },
                set(value) {
                    throw new Error('No se debe agregar un valor a "full_name');
                },
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
            timestamps: true,
        });
    }
    return Actor;
}