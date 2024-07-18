"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            "Warranties",
            [
                {
                    WarrantieID: "WARR0001",
                    OrderDetailID: "OD001",
                    OrderID: "ORD001",
                    BeginWarrDate: "2024-06-18",
                    EndWarrDate: "2025-06-18",
                    WarrNote: "This is a test warranty",
                }

            ],
            {},
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("Warranties", null, {});
    },
};