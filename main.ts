// gta6-meme-x-01 entry: copies POST.json (the X post url) to /output.
import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
copyFileSync(new URL('./POST.json', import.meta.url), join(out, 'POST.json'));
process.stdout.write('wrote ' + join(out, 'POST.json') + '\n');

// verified: POST.json + main.ts checked
