// Model for departments table
    // http://docs.sequelizejs.com/en/latest/docs/getting-started/#your-first-model
    // http://docs.sequelizejs.com/en/latest/docs/models-definition/

module.exports = function (sequelize, Sequelize) {
    var Department = sequelize.define("departments",
        {
            dept_no: {
                type: Sequelize.STRING,
                primaryKey: true,
                allowNull: false
            },
            dept_name: {
                type: Sequelize.STRING,
                allowNull: false
            }
        },
        {
            timestamps: false
            // don't add timestamps attributes updatedAt and createdAt
         });

    return Department;
};