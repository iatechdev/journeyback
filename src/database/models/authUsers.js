/* jshint indent: 1 */

export default function(sequelize, DataTypes) {
	const authUsers = sequelize.define('authUsers', {
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
		last_name: {
			type: DataTypes.STRING(60),
			allowNull: false,
			field: 'last_name'
		},
		email: {
			type: DataTypes.STRING(60),		
			notEmpty: true,
			field: 'email'
		},
		password: {
			type: DataTypes.STRING(120),
			allowNull: true,
			field: 'password'
		},
		id_dep: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'authDeps',
				key: 'id'
			},
			field: 'id_dep'
		},
		id_level: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'authLevels',
				key: 'id'
			},
			field: 'id_level'
		},
		img: {
			type: DataTypes.STRING(120),
			notEmpty: true,
			field: 'img'
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
		tableName: 'def_user'
	});

	authUsers.associate = function (models) {
		authUsers.hasMany(models.busMsgs, {
			foreignKey: 'id_user',
			as: 'busMsgs'
		});
	}
	authUsers.associate = function (models) {
		authUsers.belongsTo(models.authDeps, {
			foreignKey: 'id_dep',
			as: 'authDeps'
		});
	}	
	return authUsers;
};
