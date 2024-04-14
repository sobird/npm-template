import { register } from 'node:module';
import { pathToFileURL } from 'node:url';

register(pathToFileURL('./ts-esm-loader-with-tsconfig-paths.js'), pathToFileURL('./'));
