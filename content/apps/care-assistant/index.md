+++
title = "CARE Assistant"
description = "An AI-powered insurance coverage assistant that helps users understand their healthcare benefits created using LangGraph, LangChain and LangSmith."
url_slug = "care-assistant"
github_url = "https://github.com/bymarcelolewin/care-assistant"
npm_url = ""
preview_url = "https://github.com/bymarcelolewin/care-assistant"
preview_label = "More Details & Get It"
date_created = "2025-10-14T12:26:31-0700"
date_updated = "2025-10-22T12:26:31-0700"
current_version = "0.9.0"
draft = false
builder = "Marcelo Lewin"
+++

An AI-powered insurance coverage assistant that helps users understand their healthcare benefits.

## 🏗️ Architecture

- **Backend**: Python 3.13 with FastAPI
- **LLM Framework**: LangGraph 1.0.1 + LangChain 1.0.2
- **Local LLM**: Ollama (default: llama3.2, configurable)
- **Observability**: LangSmith (optional cloud tracing)
- **Frontend**: Next.js 15 + TypeScript + shadcn/ui + Tailwind CSS
- **Package Management**: uv (Python) + npm (Frontend)
- **Data**: Mock JSON files (no real APIs or databases)
- **Deployment**: Static build with single-server architecture

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have:
- **[uv](https://github.com/astral-sh/uv)** package manager - Install with:
  ```
  curl -LsSf https://astral.sh/uv/install.sh | sh
  ```
- **[Ollama](https://ollama.ai/)** - Download and install from https://ollama.ai/

### Step-by-Step Installation

**1. Clone the repository and navigate to the project folder**
```
git clone https://github.com/bymarcelolewin/care-assistant.git
cd care-assistant
```

**2. Pull an Ollama model**
```
# Pull the default model used in the code (or any model you prefer)
ollama pull llama3.2

# Or use a larger model for better quality:
# ollama pull llama3.3:70b-instruct-q4_K_S

# Verify the model is available
ollama list
```

**Note:** The code is configured to use `llama3.2` by default. You can change the model in [app/graph/nodes.py](app/graph/nodes.py#L32) to use any Ollama model.

All subsequent commands should be run from this `care-assistant` directory.

**3. Create and activate virtual environment**
```
# Create virtual environment with uv
uv venv --python 3.13

# Activate (macOS/Linux)
source .venv/bin/activate
```

**4. Install Python dependencies**
```
# Install all dependencies from pyproject.toml
uv sync
```

**5. (Optional) Configure LangSmith for tracing**

If you want cloud-based observability (optional):
```
# Copy the environment template
cp .env.example .env

# Edit .env and add your LangSmith API key from https://smith.langchain.com/
# LANGCHAIN_TRACING_V2=true
# LANGCHAIN_API_KEY=your_api_key_here
```

**Note:** The app works perfectly without LangSmith.

**6. Build the frontend**
```
cd frontend
npm install
npm run build
cd ..
```

This creates the static frontend files in `frontend/out/` that the backend will serve.

**7. Verify installation**
```
# Test Ollama integration
python tests/test_ollama.py
```

If successful, you should see: `✅ Ollama integration test PASSED!`

## 🏃 Running It

From the `care-assistant` directory, make sure Ollama is running, then start the server:

```
uv run uvicorn app.main:app --port 8000
```

When the server starts successfully, you should see:
```
🚀 Starting CARE Assistant - Coverage Analysis and Recommendation Engine...
📚 Version 0.9.0
📂 Loading mock data...
  ✓ Loaded 3 user profiles
  ✓ Loaded 3 insurance plans
  ✓ Loaded 9 claims records
✅ Application startup complete!
```

Open your browser to: **http://localhost:8000/**

That's it! You should see the CARE Assistant chat interface.

**Note:** The backend serves the pre-built static frontend from `frontend/out/`. If you make changes to the frontend, rebuild it with `cd frontend && npm run build && cd ..`