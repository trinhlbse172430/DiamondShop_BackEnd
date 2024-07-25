"use strict";
module.exports = (sequelize, DataTypes) => {
    const Warrantie = sequelize.define(
        "Warranties",
        {
            WarrantieID: {
                type: DataTypes.CHAR(10),
                primaryKey: true,
            },
            OrderDetailID: {
                type: DataTypes.CHAR(10),
                allowNull: false,
            },
            OrderID: {
                type: DataTypes.CHAR(10),
                allowNull: false,
            },
            BeginWarrDate: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            EndWarrDate: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            WarrNote: {
                type: DataTypes.STRING(200),
            },
        },
        {
            tableName: "Warranties",
            timestamps: false,
        },
    )
    return Warrantie;
}