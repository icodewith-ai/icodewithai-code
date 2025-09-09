---
command: ":cody help"
description: Provides the USER with help about Cody.
agent-instructions: >
  Only tags that begin with <cf:...> must be executed as a Cody Framework component. 
  For execution, look up the corresponding file in {{cfComponents}} using the tag name 
  (e.g., <cf:table> → table.md, <cf:card> → card.md). 
  Standard HTML tags (e.g., <div>, <p>, <h1>) should not be executed.
  If you encounter a <cf:...> tag with no matching file, ask for clarification before proceeding.
---

**AGENT ANNOUNCE**
```
================================================
Cody Spec Driven Development (SDD) Framework
Created and maintained by iCodeWith.ai
(©) 2025 by Red Pill Blue Pill Studios, LLC
================================================
```

- Provide the **USER** with a short overview of the Cody Framework.
- Provide the **USER** the current version of the Cody Framework.  You can it from the "version" key in {{cfConfig}}/settings.json.
- Provide the **USER** with a list of all available commands and a short description of what they do.
- Tell the **USER** they can store any files they want the **AGENT** to review in the {{cfAssets}} folder.
- Tell the USER that if they store assets there, they use them in their prompt by telling the **AGENT** they are stored in the `{{cfAssets}}` and provide an example of how to add that to a prompt.
- Stop here.