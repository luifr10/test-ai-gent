---
description: Retrieve UUV Prompt and execute it
agent: uuv-assistant
---

## Tasks to execute

1. execute uuv_get_base_url and extract baseUrl value

2. @uuv-prompt-retriever retrieve prompt (with mcp tool uuv_retrieve_prompt) for prompName and arguments : $ARGUMENTS and baseUrl(from previous task ONLY if no url provided by user)

3. For each edited or create .feature file, display diff in console
