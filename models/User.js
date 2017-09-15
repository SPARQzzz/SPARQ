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
            type: DataTypes.INTEGER,
        },

        bio:{
            type: DataTypes.TEXT,
        },

        gender:{
            type:DataTypes.STRING
        }

    });


    return User;
};