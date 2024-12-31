#!/bin/bash
set -e  # Exit on error

echo "Starting deployment process..."

# Go to source project directory
cd /Users/andrew/Documents/GitRepos/portfolioRepo/my-app

echo "Cleaning old builds..."
rm -rf .next out

echo "Installing dependencies..."
npm install

echo "Building project..."
NODE_ENV=production npm run build

echo "Build completed. Copying files to GitHub Pages repo..."

# Go to GitHub Pages repo
cd /Users/andrew/Documents/GitRepos/andrewsosag.github.io

echo "Cleaning GitHub Pages repo..."
find . -not -path './.git/*' -not -name '.git' -not -path './.github/*' -not -name '.github' -delete

echo "Copying new build..."
cp -r /Users/andrew/Documents/GitRepos/portfolioRepo/my-app/out/* .

echo "Creating necessary files..."
touch .nojekyll

echo "Deployment completed!"