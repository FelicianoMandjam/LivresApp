export default (connection, DataTypes) => {
    connection.define(
    "Book",
    {
        titre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
        {
            timestamp: true,
        }
    );
};