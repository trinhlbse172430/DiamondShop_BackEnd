"use strict";
module.exports = (sequelize, DataTypes) => {
    const Diamond = sequelize.define(
        "Diamonds",
        {
            DiamondID: {
                type: DataTypes.CHAR(10),
                primaryKey: true,
            },
            GIAID: {
                type: DataTypes.CHAR(10),
                allowNull: false,
            },
            DiaPicture: {
                type: DataTypes.TEXT,
            },
            GIAPicture: {
                type: DataTypes.TEXT,
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
            DiaCut: {
                type: DataTypes.CHAR(10),
                allowNull: false,
            },
        },
        {
            tableName: "Diamonds",
            timestamps: false,
        },
    );

    return Diamond;
};
