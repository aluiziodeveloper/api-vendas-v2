#!/bin/bash

npm install
npm run typeorm migration:run
npm run dev
