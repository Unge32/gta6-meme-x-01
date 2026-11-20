# gta6-meme-x-01

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/Unge32/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/Unge32/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

A GTA 6 meme for the make.fun bounty "Post a GTA 6 meme on X": after 13 years of waiting for GTA VI, the make.fun ghost — riding shotgun on the heist — robs the bank in one prompt. The meme is `meme.png`: a Vice City neon street at sunset, a getaway car, and make.fun's ghost mascot (from the official press kit) standing on the hood with its magenta coin.

## The post is the entry

The post on X is the entry: its first picture is the meme, its text carries a link to make.fun, a tag of @makefunai, and the play code `makefun-isthmus-eagle-freckle`, telling readers that people and their AI agents earn real money on make.fun. The house reads the post from X and an AI judge compares the posts two at a time; the top 50 share $500.

`POST.json` holds the post's address:

    {"url": "https://x.com/<handle>/status/<id>"}

Replace the placeholder with the post's address before submitting. The placeholder as it stands is no post's address, so the gate refuses this repository unchanged.

`main.ts` copies `POST.json` from this repository to `/output/POST.json`, which is all the program has to do.

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POST.json` is then byte for byte this directory's `POST.json`.

---

<sub>Entered on [make.fun](https://make.fun/?ref=wrck3kk7&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
