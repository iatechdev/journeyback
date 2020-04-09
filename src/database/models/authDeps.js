/* jshint indent: 1 */

export default function(sequelize, DataTypes) {
	const authDeps = sequelize.define('authDeps', {
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
		tableName: 'cms_departments'
	});
	authDeps.associate = function (models) {
		authDeps.hasMany(models.authUsers, {
			foreignKey: 'id_dep',
			as: 'authUsers'
		});
	}
	return authDeps;
};
