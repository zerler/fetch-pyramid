# Fetch Rewards Pyramid Words

## Prerequisites

Make sure you have node and npm installed. When you first download this repo, run `npm install` to install all dependencies.

## Setup

Run `node app.js` in the root directiory and leave this running. Then open `index.html` and start making requests.

## Operation

When a word is submitted, it's given to the express backend which counts each character occurrence and calculates if it's a pyramid word or not. The resulting map of character counts is shown in the output box, and the output box turns green if the word is a pyramid word or red if not.

![example](https://i.imgur.com/ClwJtqF.png)
