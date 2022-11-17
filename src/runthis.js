import path from 'path';
import fs from 'fs';

const pdfjsDistPath = path.dirname(require.resolve('pdfjs-dist/package.json'));
const pdfWorkerPath = path.join(pdfjsDistPath, 'build', 'pdf.worker.js');

fs.copyFileSync(pdfWorkerPath, './dist/pdf.worker.js');
