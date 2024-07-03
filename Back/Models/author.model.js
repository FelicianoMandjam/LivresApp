export default (connection, DataTypes) => {
    connection.define(
    "Author",
    {
        nom: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        prenom: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
        {
            timestamp: true,
        }
    );
};

