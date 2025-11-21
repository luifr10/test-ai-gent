import { tool } from "@opencode-ai/plugin";
import path from "node:path";
import fs from "node:fs";

function getBaseUrl(): string | undefined {
  // 1️⃣ Vérifie d'abord la variable d'environnement
  const fromEnv = process.env.UUV_BASE_URL;
  if (fromEnv) {
    return fromEnv;
  }

  // 2️⃣ Liste des fichiers de config possibles
  const configs = [
    { path: path.resolve('uuv/playwright.config.ts'), key: /baseURL\s*:\s*['"`](.*?)['"`]/ },
    { path: path.resolve('uuv/cypress.config.ts'), key: /baseUrl\s*:\s*['"`](.*?)['"`]/ },
  ];

  for (const { path: configPath, key } of configs) {
    if (fs.existsSync(configPath)) {
      const content = fs.readFileSync(configPath, 'utf-8');
      const match = content.match(key);
      if (match && match[1]) {
        return match[1];
      }
    }
  }

  return;
};

export default tool({
  description: "Retrieve the UUV base URL value for e2e tests",
  args: {},
  async execute() {
    const baseUrl = getBaseUrl();
    if(!baseUrl) {
      return "undefined";
    }
    return JSON.stringify({
      baseUrl: baseUrl
    });
  },
});