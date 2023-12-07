import type { ExpoConfig } from '@expo/config-types';
import { readFileSync } from 'fs';
import * as path from 'path';

const buildNumber = readFileSync(
  path.join(__dirname, './config/BUILD_NUMBER'),
  'utf-8',
).trim();

const runtimeVersion = readFileSync(
  path.join(__dirname, './config/RUNTIME_VERSION'),
  'utf-8',
).trim();

const config: ExpoConfig = {
  name: 'LoginFormApp',
  slug: 'LoginFormApp',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/icon.png',
  userInterfaceStyle: 'light',
  jsEngine: 'hermes',
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    config: {
      usesNonExemptEncryption: false,
    },
    // Once an iOS build has been submitted with `supportsTablet: true`, it can no longer be disabled
    supportsTablet: false,
    buildNumber,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#FFFFFF',
    },
    versionCode: parseInt(buildNumber),
  },
  web: {
    favicon: './assets/favicon.png',
  },
  runtimeVersion,
};

module.exports = config;
