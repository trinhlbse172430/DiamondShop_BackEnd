"use strict";
module.exports = (sequelize, DataTypes) => {
    const BonusPoint = sequelize.define(
        "DiaColors",
        {
            DiaColorID: {
                allowNull: false,
                primaryKey: true,
                type: DataTypes.CHAR(20),
            },
            DiaColorName: {
                type: DataTypes.STRING(50),
                allowNull: false,
            },
        },
        {
            tableName: "DiaColors",
            timestamps: false,
        },
    );
    return BonusPoint;
};
