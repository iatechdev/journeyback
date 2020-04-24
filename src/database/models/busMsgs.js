/* jshint indent: 1 */

export default function(sequelize, DataTypes) {
	const busMsgs = sequelize.define('busMsgs', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		msg: {
			type: DataTypes.STRING(255),
			allowNull: false,
			field: 'msg'
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
				model: 'busAircrafts',
				key: 'id'
			},
			field: 'id_aircraft'
		},
		file: {
			type: DataTypes.STRING(250),
			allowNull: false,
			field: 'file'
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
		tableName: 'bus_msg'
	});
	busMsgs.associate = function (models) {
		busMsgs.belongsTo(models.authUsers, {
			foreignKey: 'id_user',
			as: 'authUsers'
		});
	}
	return busMsgs;
};
