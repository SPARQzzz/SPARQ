module.exports = function(sequelize, DataTypes) {
    var Bio = sequelize.define("Bio", {
        name: {
            type: DataTypes.STRING,
        },


        Age: {
            type: DataTypes.BIGINT,

        },

        Bio: {
            type: DataTypes.TEXT
        }

    });

    Bio.associate = function(models) {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        Bio.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Bio;

}