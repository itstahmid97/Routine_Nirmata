import { readFileSync } from 'node:fs';
import path from 'node:path';
import LegacyApp from './legacy-app';

export default function HomePage() {
  const shellPath = path.join(process.cwd(), 'app', 'legacy-shell.html');
  const markup = readFileSync(shellPath, 'utf8');

  return <LegacyApp markup={markup} />;
}
