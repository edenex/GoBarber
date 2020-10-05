module.exports = {
  up: (queryInterface, Sequelize) => {
    // adiciona na tabela users a coluna avatar_id
    return queryInterface.addColumn('users', 'avatar_id', {
      // type é integer porque referencio apenas o id da imagem e não o nome completo da imagem
      type: Sequelize.INTEGER,
      // references = foreign key do banco de dados
      // na tabela files o campo id é o avatar_id na tabela users
      references: { model: 'files', key: 'id' },
      // Se id da tabela files for alterado, o avatar_id será alterado na tabela users
      onUpdate: 'CASCADE',
      // Se id da tabela files for excluído, o avatar_id ficará nulo na tabela users
      onDelete: 'SET NULL',
      // Permitir nulo na coluna avatar_id da tabela users
      allowNull: true,
    });
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('users', 'avatar_id');
  },
};
