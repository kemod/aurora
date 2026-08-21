import * as migration_20260820_032826 from './20260820_032826';
import * as migration_20260820_223624 from './20260820_223624';

export const migrations = [
  {
    up: migration_20260820_032826.up,
    down: migration_20260820_032826.down,
    name: '20260820_032826',
  },
  {
    up: migration_20260820_223624.up,
    down: migration_20260820_223624.down,
    name: '20260820_223624'
  },
];
