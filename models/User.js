module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        username: {
            type: DataTypes.STRING,
        },

        password: {
            type: DataTypes.STRING,

        }, 

        name:{
            type: DataTypes.STRING,
        },

        age:{
            type: DataTypes.BIGINT,
        },

        bio:{
            type: DataTypes.TEXT,
        }


    });


    return User;
};