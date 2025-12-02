---
description: UUV Prompt Retriever
mode: subagent
model: lmstudio-mis/qwen3-coder-30b-a3b-instruct
temperature: 0.1
tools:
  read: false
  write: false
  edit: false
  playwright_browser_navigate: true
  playwright_browser_evaluate: true
  filesystem_write_file: true
  filesystem_edit_file: true
  filesystem_read_file: true
  uuv_retrieve_prompt: true
  uuv_generate_test_expect_element: true
  uuv_generate_test_click_element: true
  uuv_generate_test_type_element: true
  uuv_generate_test_within_element: true
  uuv_available_sentences: false
  uuv_get_base_url: false
---

# UUV Prompt Retriever

## Task
Retrieve the best uuv prompt using the uuv_retrieve_prompt tool that best matches the expressed need and return it to main agent

## IMPORTANT
- When Playwright returns the result, ignore any console logs or debug lines.