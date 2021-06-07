export default class RepositorySchema {
  static schema = {
    name: 'Repository',
    primaryKey: 'id',
    proprieties: {
      id: {type: 'int', indexed: true},
      name: 'string',
      fullName: 'string',
      description: 'string',
      stars: 'int',
      forks: 'int',
    },
  };
}
