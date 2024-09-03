# This `README.md` provides clear instructions on how to set up, run, and troubleshoot the application, along with a brief overview of its features and structure.

├── assets # Images, icons, etc.
├── components # Reusable components
├── screens # Screen components (Auth, Root)
├── Index.tsx # Entry point of the application
├── package.json # Project dependencies and scripts
└── README.md # Project documentation

# Tinder-Style Matching Application

## Overview

This project is a Tinder-style matching application built with React Native using Expo. The app allows users to browse profiles, swipe to express interest, and match with the one whom you swipe right on (as i am using static data, there is no other user to match with). It's designed to demonstrate an intuitive, responsive, and interactive mobile application focusing on user experience.

## Features

- **Profile Browsing:** Users can swipe through a stack of profiles.
- **Swipe Functionality:** Swipe right to like, swipe left to pass.
- **Match Feature:** A match notification is displayed when a user swipes right as using static data in index.ts.
- **Match List:** A list of all matched profiles is available for the user.
- **Optional:** Basic chat interface for matched users.
- **Optional:** Auth screens and Auth functionality

## Getting Started

### Prerequisites

- **Expo Go App**: Install the Expo Go app on your mobile device:
  - **[iOS](https://apps.apple.com/us/app/expo-go/id982107779)**
  - **[Android](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en&gl=US)**

### Installation

1. **Clone the repository:**
   ```bash
   git clone : https://github.com/zeenatmalikk/tinder-clone
   cd tinder-clone
   ```

### Run the App

1. npm install
2. npm start

## Running the app on your device:

1.  iOS Users:
    Once the QR code appears in the terminal or Expo DevTools in your browser, open the Camera app on your iPhone and scan the QR code.
    You should see a notification to open the link in the Expo Go app. Tap this notification to open the app.
2.  Android Users:
    Open the Expo Go app and scan the QR code displayed in the terminal or Expo DevTools.
    The app should now bundle and load the authentication screens.

# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
