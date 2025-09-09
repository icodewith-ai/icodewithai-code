---
command: ":cody refresh"
description: Refreshes the memory about the current project of the AI AGENT.
agent-instructions: >
  Only tags that begin with <cf:...> must be executed as a Cody Framework component. 
  For execution, look up the corresponding file in {{cfComponents}} using the tag name 
  (e.g., <cf:table> → table.md, <cf:card> → card.md). 
  Standard HTML tags (e.g., <div>, <p>, <h1>) should not be executed.
  If you encounter a <cf:...> tag with no matching file, ask for clarification before proceeding.
---

# REFRESH AGENT MEMORY

### ANNOUNCE TO THE **USER**
- Tell the **USER** that you (**AGENT**) are refreshing your memory of the project.

### REVIEW DOCUMENTS AND PROJECT STRUCTURE
- Read {{cfPlanPhase}}/plan.md
- If you need more information, read {{cfPlanPhase}}/prd.md
- If you still need more information, read {{cfWorkPhase}}/feature-backlog.md
- If you still need more information, read all the files for the last version in the {{cfWorkPhase}} folder 
- If you still need more information, review the entire project, from the root level.
- If you still need more information, ask the **USER**.

### DONE REVIEWING THE ENTIRE PROJECT
- Please tell the **USER** that your memory is refreshed and that you are ready to start working.
