// gta6-meme-x-01 entry (Node 22, standard library only): it copies POST.json
// from the repository root to /output/POST.json, where the gate reads it.
// That is all the program has to do. The entry is the post itself: a GTA 6
// meme (meme.png) posted on X from a public account with make.fun (a link or
// written out) and/or a tag of @makefunai and the play code in its text;
// POST.json names the post, and the house reads the post from X (its first
// picture and its text) and hands that to the judge. Nothing this program
// writes about the post is judged.
//
// The POST.json this repository ships now holds the live post address
// (posted 20 Nov 2026, verified live on X). The gate reads it from
// /output/POST.json.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand
// in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// POST.json must name a real X post: https://x.com/<handle>/status/<digits>.
// Anything else is not a post the house can read, so fail here with a clear
// message instead of copying an entry that cannot score.
let postUrl = '';
try {
  postUrl = JSON.parse(readFileSync(join(BOT_DIR, 'POST.json'), 'utf8')).url;
} catch (err) {
  console.error(`POST.json could not be read from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
if (typeof postUrl !== 'string' || !/^https:\/\/(www\.)?x\.com\/[A-Za-z0-9_]+\/status\/\d+([?#].*)?$/.test(postUrl)) {
  console.error(`POST.json does not hold an X post address (${postUrl}); it must be https://x.com/<handle>/status/<digits>.`);
  process.exit(1);
}
mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
