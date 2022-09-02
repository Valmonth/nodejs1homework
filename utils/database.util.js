const { Sequelize, DataTypes } = require("sequelize");

// Establish db connection
const db = new Sequelize({
	dialect: 'postgres',
	host: 'localhost',
	username: 'postgres',
	password: '12qwaszx',
	port: 5432,
	database: 'attendance',
	logging: false,
});
module.exports = { db, DataTypes };

