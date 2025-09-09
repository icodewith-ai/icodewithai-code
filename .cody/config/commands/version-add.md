---
command: ":cody version add"
description: Adds a new version to the feature-backlog.md file.
agent-instructions: >
  Only tags that begin with <cf:...> must be executed as a Cody Framework component. 
  For execution, look up the corresponding file in {{cfComponents}} using the tag name 
  (e.g., <cf:table> → table.md, <cf:card> → card.md). 
  Standard HTML tags (e.g., <div>, <p>, <h1>) should not be executed.
  If you encounter a <cf:...> tag with no matching file, ask for clarification before proceeding.
---

# ADD NEW VERSION

### CREATE VERSION FOLDER
- Ask the **USER** what's the version number and name.
- Wait for **USER** to tell you.
- Create new version folder in {{cfWorkPhase}}.

### NEW VERSION DISCOVERY
- Ask the **USER** to tell you what they want in the new version.  Tell them to be as detailed as possible.
- Wait for **USER** to tell you.  Ask as many questions as you need.  Iterate until you (**AGENT**) are satisfied.
- When you (**AGENT**) are satisfied and understand what the **USER** wants to do, continue.

### ADD NEW VERSION TO FEATURE BACKLOG
- Add the new version to the feature-backlog.md file in {{cfWorkPhase}}

### TELL **USER** VERSION READY TO BUILD
- Tell the **USER** that the version has been added to the feature-backlog.md file in {{cfWorkPhase}}
- Ask the **USER** if they want to start working on this version.
- If the **USER** confirms (says yes or anything close to it), execute the command `:cody version build [and add the version number and name here]`
- If the **USER** doesn't confirm or says nothing, stop here.
