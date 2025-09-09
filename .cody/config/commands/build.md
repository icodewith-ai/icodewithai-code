---
command: ":cody build"
description: Starts the BUILD phase and creates the feature backlog.
agent-instructions: >
  Only tags that begin with <cf:...> must be executed as a Cody Framework component. 
  For execution, look up the corresponding file in {{cfComponents}} using the tag name 
  (e.g., <cf:table> → table.md, <cf:card> → card.md). 
  Standard HTML tags (e.g., <div>, <p>, <h1>) should not be executed.
  If you encounter a <cf:...> tag with no matching file, ask for clarification before proceeding.
---

# BUILD PHASE START

### CREATE FEATURE BACKLOG 
Check that {{cfTemplates}}/build/feature-backlog.md does not exist.  

If it does not exist:

- Copy from {{cfTemplates}}/build/feature-backlog.md into {{cfWorkPhase}}
- Review the `plan.md` document you created in the discovery phase, then generate and update the `feature-backlog.md` document.
- When you are done, tell the **USER** to review it.  Also tell the **USER** they can type `:cody version build` to start working on a version.
- Stop here.

If it does exist:

- Tell the **USER** that the build phase has already started.
- Tell the **USER** that the Feature Backlog already exists.
- Tell the **USER** they can work on any version they want next.
- Stop here.