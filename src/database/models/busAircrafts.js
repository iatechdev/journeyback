/* jshint indent: 1 */

export default function(sequelize, DataTypes) {
	const busAircrafts = sequelize.define('busAircrafts', {
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
		reference: {
			type: DataTypes.STRING(45),
			allowNull: false,
			field: 'reference'
		},
		id_user: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'authUsers',
				key: 'id'
			},
			field: 'id_user'
		},
		id_aircraft: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
					model: 'authStatus',
					key: 'id'
			},
			field: 'id_aircraft'
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
		tableName: 'bus_aircrafts'
	});

	return busAircrafts;
};
