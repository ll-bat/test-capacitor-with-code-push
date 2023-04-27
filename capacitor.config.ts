import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'test.app',
  appName: 'test-app',
  webDir: 'build',
  bundledWebRuntime: false,
  plugins: {
    "CodePush": {
      "IOS_DEPLOY_KEY": "IOS_DEPLOYMENT_KEY",
      "IOS_PUBLIC_KEY": "APP_SECRET_KEY",
      "ANDROID_DEPLOY_KEY": "ANDROID_DEPLOYMENT_KEY",
      "ANDROID_PUBLIC_KEY": "APP_SECRET_KEY",
      "SERVER_URL": "https://codepush.appcenter.ms/"
    }
  }
};

export default config;
