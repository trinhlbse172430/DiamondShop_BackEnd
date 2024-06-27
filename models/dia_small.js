"use strict";
module.exports = (sequelize, DataTypes) => {
    const DiamondSmall = sequelize.define(
        "DiamondSmalls",
        {
            DiaSmallID: {
                type: DataTypes.CHAR(10),
                primaryKey: true,
            },
            DiaSmallPicture: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            DiaSmallWeight: {
                type: DataTypes.FLOAT,
                allowNull: false,
            },
            DiaSmallUnit: {
                type: DataTypes.STRING(10),
            },
            DiaSmallOriginID: {
                type: DataTypes.CHAR(20),
                allowNull: false,
            },
            DiaSmallColorID: {
                type: DataTypes.CHAR(20),
                allowNull: false,
            },
        },
        {
            tableName: "DiamondSmalls",
            timestamps: false,
        },
    );
    return DiamondSmall;
};
