+++
title = "TreeX"
description = "TreeX is a cross-platform CLI tool for visualizing and exporting folder structures. It provides emoji-based directory trees with extensive export capabilities to multiple formats text documents and images."
github_url = "https://github.com/bymarcelolewin/treex"
npm_url = "https://www.npmjs.com/package/@icodewith-ai/treex"
preview_url = ""
preview_label = "Check it Out!"
date_created = "2025-06-01T17:51:19-07:00"
date_updated = "2025-07-21T17:51:19-07:00"
current_version = "1.0.1"
draft = false
builder = "Marcelo Lewin"
+++

### About
TreeX is a cross-platform CLI tool for visualizing and exporting folder structures. It provides emoji-based directory trees with extensive export capabilities to multiple formats text documents and images.

### Features
- 🎨 **Emoji Display** - Folder 📂, file 📄, hidden 🫥, and locked 🔒 icons
- 📤 **Multi-Format Export** - SVG, PNG, WebP, and Markdown with perfect emoji rendering
- ⚡ **Smart Filtering** - Configurable ignore lists and display options
- 🔍 **Detailed Information** - File permissions, hidden file detection and more
- 🎯 **Flexible Output** - Console display or export to files
- 🌍 **Cross-Platform** - Works on Windows, macOS, and Linux
- 🎨 **Emoji Management** - Customize folder, file, and status emojis with easy list, update, and restore 

## 🚀 Installation

### Option 1: Install from NPM (Recommended)
```
npm install -g @icodewith-ai/treex
```

**Note for Linux users:** You may need to use `sudo`:
```
sudo npm install -g @icodewith-ai/treex
```

### Option 2: Development Installation
```
# Clone the repository
git clone https://github.com/icodewith-ai/treex.git
cd treex

# Install dependencies
npm install

# Make it globally available
npm link
```

### System Requirements
- **Node.js**: Version 14.0.0 or higher
- **Image exports**: Currently supported on Windows and macOS only

**Note for Linux users:** Image exports (PNG, WebP, SVG) are not available on Linux due to rendering compatibility issues. Markdown export is fully supported on all platforms.

## ⚡ Quick Start

```
# Basic usage - scan current directory
treex

# Show help with styled interface  
treex --help

# Scan specific directory
treex ./my-project

# Export to multiple formats
treex -E "svg,png,md" -S my-tree ./my-project

# Show detailed information
treex -d ./my-project
```

## 📖 Command Reference

### Basic Syntax
```
treex [directory] [options]
```

### Core Options

| Option | Short | Description |
|--------|-------|-------------|
| `--details` | `-d` | Show extra details like locked files and hidden indicators |
| `--collapsed` | `-c` | Only show top-level folders/files (non-recursive) |
| `--folders-only` | `-f` | Show only folders recursively, omit files |
| `--help` | `-h` | Display help information |
| `--version` | `-V` | Show version number |

### Export Options

| Option | Short | Description |
|--------|-------|-------------|
| `--export-as <types>` | `-E` | Export format(s) - comma-separated (md, svg, png, webp) |
| `--save-to <filename>` | `-S` | Export filename without extension |

### File / Folder Ignore Management Options

| Option | Short | Description |
|--------|-------|-------------|
| `--show-ignored` | `-s` | List currently ignored files/folders and exit |
| `--add-ignored <items>` | `-a` | Comma-separated names to add to ignored list |
| `--remove-ignored <items>` | `-r` | Comma-separated names to remove from ignored list |

### Emoji Management Options

| Option | Short | Description |
|--------|-------|-------------|
| `--list-emojis` | `-le` | List current emoji configuration and exit |
| `--update-emoji <type> <emoji>` | `-ue` | Update emoji for specified type (folder, file, hidden, locked, permissionDenied) |
| `--restore-emojis` | `-re` | Restore all emojis to default configuration |

## 📁 Export Formats

TreeX supports multiple export formats with emoji support:

### Image Formats (Windows & macOS only)
- **PNG** (`png`) - High-quality raster image
- **WebP** (`webp`) - Modern compressed format  
- **SVG** (`svg`) - Vector graphics

### Text Formats (All platforms)
- **Markdown** (`md`) - Code blocks with emoji support

**Linux Note:** Image exports are currently disabled on Linux due to compatibility issues.