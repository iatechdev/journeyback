/* jshint indent: 1 */

export default function(sequelize, DataTypes) {
	const busStatus = sequelize.define('busStatus', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		name: {
			type: DataTypes.STRING(60),
			allowNull: false,
			field: 'name'
		},
		createdAt: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'createdAt'
		},
		updatedAt: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'updatedAt'
		}
	}, {
		tableName: 'bus_status'
	});

	return busStatus;
};
