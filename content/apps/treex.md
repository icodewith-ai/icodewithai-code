+++
title = "TreeX"
description = "An advanced file tree visualization and manipulation tool for developers. Provides interactive directory exploration, batch operations, and intelligent file organization capabilities."
url_slug = "treex"
github_url = "https://github.com/bymarcelolewin/treex"
npm_url = ""
preview_url = "https://treex-demo.netlify.app"
date_created = "2024-02-08"
date_updated = "2024-06-15"
current_version = "v1.8.1"
draft=false
+++

TreeX transforms how developers interact with file systems, providing a visual, interactive approach to directory exploration and file management. Built for modern development workflows, it combines the power of command-line tools with intuitive visual interfaces.

## Core Features

- **Interactive Tree Visualization**: Dynamic, expandable file tree with syntax highlighting
- **Batch Operations**: Perform operations on multiple files and directories simultaneously
- **Smart Search**: Fuzzy finding with regex support and file type filtering
- **Git Integration**: View git status, diffs, and history directly in the tree
- **Plugin System**: Extensible architecture with custom plugins
- **Performance Optimized**: Handles large repositories with thousands of files

## Key Benefits

### Developer Productivity
- Navigate complex codebases 10x faster
- Visualize project structure at a glance
- Quick file operations without context switching

### Team Collaboration
- Share annotated directory structures
- Document project organization
- Onboard new team members efficiently

## Technology

- **Core**: Rust for performance-critical operations
- **UI**: Electron with React for cross-platform compatibility
- **Integration**: Native git, Docker, and VS Code extensions

## Installation

```bash
# Install via GitHub releases
curl -L https://github.com/bymarcelolewin/treex/releases/latest/download/install.sh | sh

# Or build from source
git clone https://github.com/bymarcelolewin/treex
cd treex
cargo build --release
```

## Usage Examples

```bash
# Basic tree view
treex

# Show only specific file types
treex --filter "*.js,*.ts,*.json"

# Include git status
treex --git

# Export structure as markdown
treex --export markdown > project-structure.md
```

## Perfect For

- **Code Reviews**: Understand changes in context
- **Documentation**: Generate project structure docs
- **Refactoring**: Visualize dependencies and relationships
- **Learning**: Explore new codebases efficiently