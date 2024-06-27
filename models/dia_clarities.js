"use strict";
//error
module.exports = (sequelize, DataTypes) => {
    const BonusPoint = sequelize.define(
        "DiaClarities",
        {
            DiaClarityID: {
                allowNull: false,
                primaryKey: true,
                type: DataTypes.CHAR(20),
            },
            DiaClarityName: {
                type: DataTypes.STRING(50),
                allowNull: false,
            },
        },
        {
            tableName: "DiaClarities",
            timestamps: false,
        },
    );
    return BonusPoint;
};
