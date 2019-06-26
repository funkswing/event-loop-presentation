# NodeJS Event Loop Presentation and Demo materials

## Overview

_NodeJS asynchronicity allows it to easily handle many concurrent requests. This makes NodeJS a great choice to power web APIs, but asynchronicity in Node is often misunderstood. This talk goes over the basics of the event loop, how asynchronous code can block incoming requests, and how (or better when) to solve blocking asynchronous API code._

## Presentation

https://event-loop.funkswing.now.sh/

 - Used [MDX Deck](https://github.com/jxnblk/mdx-deck)

## Demo - Blocking API

`npm install`
`node api/index.js`

_Open multiple terminals to run concurrent requests to API_

Mimic traffic to API:
`while true; do date && curl -m 1 http://localhost:3000 && echo; sleep 1; done`

Choose a long-running request to see which block the event loop:
```
START=$(date +%s) && curl http://localhost:3000/loop && END=$(date +%s) && echo "Took: $(expr $END - $START) sec"
START=$(date +%s) && curl http://localhost:3000/loop/bmap && END=$(date +%s) && echo "Took: $(expr $END - $START) sec"
START=$(date +%s) && curl http://localhost:3000/loop/seti && END=$(date +%s) && echo "Took: $(expr $END - $START) sec"
START=$(date +%s) && curl http://localhost:3000/loop/bird && END=$(date +%s) && echo "Took: $(expr $END - $START) sec"
START=$(date +%s) && curl http://localhost:3000/loop/native && END=$(date +%s) && echo "Took: $(expr $END - $START) sec"
START=$(date +%s) && curl http://localhost:3000/loop/sett && END=$(date +%s) && echo "Took: $(expr $END - $START) sec"
```
