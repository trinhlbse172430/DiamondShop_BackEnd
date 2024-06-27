"use strict";
module.exports = (sequelize, DataTypes) => {
    const BonusPoint = sequelize.define(
        "DiaOrigins",
        {
            DiaOriginID: {
                allowNull: false,
                primaryKey: true,
                type: DataTypes.CHAR(20),
            },
            DiaOriginName: {
                type: DataTypes.STRING(50),
                allowNull: false,
            },
        },
        {
            tableName: "DiaOrigins",
            timestamps: false,
        },
    );
    return BonusPoint;
};
