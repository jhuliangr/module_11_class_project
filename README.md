# SkyCast

SkyCast is a mobile weather app that allows you instantly check current weather conditions and a multi-day forecast for your current location or any city you search for. You can save favorite cities for quick access and manage notification preferences to display settings, all of which are persisted across sessions so the app remembers your choices.

## Technical overview

SkyCast is a React Native application built with Expo and written entirely in TypeScript. Navigation is handled by Expo Router, which provides file-based routing: the directory tree under `src/app/` maps directly to the screen files, keeping routing concerns completely separate from business logic and UI components. Weather data is fetched from the Open-Meteo free API. User preferences and favourite cities are stored locally on the device via AsyncStorage. The codebase is organized around a feature/shared split. Reusable cross-cutting modules live under `src/shared/` and are exposed through explicit package-level aliases, while feature-specific logic lives under `src/features/`. Every shared module follows the modlet pattern: each component or hook has its own folder with a public `index.ts`.

**Tech stack:**
- React Native 0.81 / React 19
- Expo ~54 + Expo Router ~6 (file-based routing)
- TypeScript ~5.9
- Open-Meteo API (weather data, free, no key)
- AsyncStorage (local persistence)
- expo-location (GPS / device location)
- expo-notifications (push notifications)
- expo-sensors (device-motion sensor)
- expo-haptics (tactile feedback)
- Jest + jest-expo + @testing-library/react-native (testing)
- ESLint, Prettier, Knip (linting / dead-code detection)

## Getting started

### Prerequisites

- Node.js 20+
- Expo Go installed on your phone **or** an Android/iOS simulator

### Install

```bash
npm install
```

### Environment variables

No environment variables are required. The Open-Meteo weather API is free and does not need an API key.

### Run the app

```bash
npm start        # starts the Expo dev server (clears cache)
```

Scan the QR code with Expo Go on your device, or press `a` for Android emulator / `i` for iOS simulator.

### Run the tests

```bash
npm test         # interactive watch mode
npm run test:ci  # single run with coverage (used in CI)
```

### Lint

```bash
npm run lint          # runs all checks (TypeScript, ESLint, Prettier, Knip)
npm run lint-typecheck
npm run lint-eslint
npm run lint-prettier
npm run lint-knip
```