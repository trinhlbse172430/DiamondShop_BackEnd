"use strict";
module.exports = (sequelize, DataTypes) => {
    const DiaPrice = sequelize.define(
        "DiaPrices",
        {
            DiaPriceID: {
                type: DataTypes.CHAR(10),
                primaryKey: true,
            },
            DiaInputDate: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            DiaOriginID: {
                type: DataTypes.CHAR(20),
                allowNull: false,
            },
            DiaWeight: {
                type: DataTypes.FLOAT,
                allowNull: false,
            },
            DiaUnit: {
                type: DataTypes.STRING(10),
                allowNull: false,
            },
            DiaColorID: {
                type: DataTypes.CHAR(20),
                allowNull: false,
            },
            DiaClarityID: {
                type: DataTypes.CHAR(20),
                allowNull: false,
            },
            DiaPrice: {
                type: DataTypes.DECIMAL(10, 2),
                allowNull: false,
            },
            Currency: {
                type: DataTypes.STRING(10),
            },
        },
        {
            tableName: "DiaPrices",
            timestamps: false,
        },
    );
    return DiaPrice;
};
