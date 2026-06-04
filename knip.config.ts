import { type KnipConfiguration } from "knip";

const config: KnipConfiguration = {
  $schema: "https://unpkg.com/knip@6/schema.json",
  ignoreDependencies: [
    "expo-modules-core",
    "expo-updates",
    "expo-notifications", // TODO: conditional import via try/catch
  ],
  ignoreIssues: {
    "src/shared/**": ["exports", "types"],
  },
};

export default config;
