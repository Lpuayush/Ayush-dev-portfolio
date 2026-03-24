import { build } from 'vite';
import fs from 'fs';

build().catch(err => {
  fs.writeFileSync('error.json', JSON.stringify(err, Object.getOwnPropertyNames(err), 2));
});
