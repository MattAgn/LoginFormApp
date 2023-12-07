import { readFileSync, writeFileSync } from 'fs';
import path from 'path';

const filePath = path.join(__dirname, '../config/BUILD_NUMBER');

const previousRuntimeVersion = readFileSync(filePath, 'utf-8').trim();

const newRuntimeVersion = parseInt(previousRuntimeVersion, 10) + 1;

writeFileSync(filePath, newRuntimeVersion.toString());
