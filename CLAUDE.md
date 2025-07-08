# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a new, empty repository named "ipadjukebox" with no existing source code, documentation, or configuration files. The repository contains only:
- A `.git` directory (initialized but with no commits)
- A `.claude` directory with local settings for Claude Code permissions

## Development Setup

This is a web-based iPad jukebox application using:
- HTML5 with responsive design
- Tailwind CSS v4 for styling
- Vanilla JavaScript for interactivity
- Node.js/npm for build tools

To get started:
1. Run `npm install` to install dependencies
2. Run `npm run build` to build the CSS
3. Open `index.html` in a browser

## Build Commands

- `npm run build` - Copy and build Tailwind CSS to `dist/output.css`
- `npm run dev` - Build CSS and show success message

## Project Structure

- `index.html` - Main landing page
- `src/input.css` - Source CSS file (currently minimal)
- `dist/output.css` - Built Tailwind CSS file
- `node_modules/tailwindcss/` - Tailwind CSS v4 installation
- `tailwind.config.js` - Tailwind configuration (ES modules)

## Architecture Notes

- Uses Tailwind CSS v4 with native CSS custom properties
- Mobile-first responsive design optimized for iPad
- Custom primary color: `#00ff00` (bright green)
- Pure vanilla JavaScript for mobile navigation toggle
- No build pipeline beyond CSS copying (simple setup)