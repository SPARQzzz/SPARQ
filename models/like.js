module.exports = function(sequelize, DataTypes) {
    var Like = sequelize.define("Like", {
        username: {
            type: DataTypes.STRING,
        },

        liked: {
            type: DataTypes.STRING,

        }



    });


    return Like;
};
