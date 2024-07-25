"use strict";
module.exports = (sequelize, DataTypes) => {
    const DiaSmallPrice = sequelize.define(
        "DiaSmallPrices",
        {
            DiaSmallPriceID: {
                type: DataTypes.CHAR(50),
                primaryKey: true,
            },
            DiaSmallInputDate: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            DiaSmallOriginID: {
                type: DataTypes.CHAR(20),
                allowNull: false,
            },
            DiaSmallWeight: {
                type: DataTypes.FLOAT,
                allowNull: false,
            },
            DiaSmallUnit: {
                type: DataTypes.STRING(10),
            },
            DiaSmallColorID: {
                type: DataTypes.CHAR(20),
                allowNull: false,
            },
            DiaSmallPrice: {
                type: DataTypes.DECIMAL(10, 2),
                allowNull: false,
            },
            Currency: {
                type: DataTypes.STRING(10),
            },
        },
        {
            tableName: "DiaSmallPrices",
            timestamps: false,
        },
    );
    return DiaSmallPrice;
};
