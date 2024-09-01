#!/bin/bash


# Install project dependencies; check if node_modules directory exists
if [ ! -d "node_modules" ]; then
  echo "node_modules directory not found. Installing dependencies..."
  npm install axios commander json2csv
else
  echo "Dependencies already installed."
fi

