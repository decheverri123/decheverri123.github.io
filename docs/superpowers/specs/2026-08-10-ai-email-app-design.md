# Design Spec: ai-email Homepage Showcase & App Page

- **Date**: 2026-08-10
- **Status**: Approved
- **Target Repository**: `decheverri123.github.io`
- **Primary Goal**: Satisfy Google OAuth verification requirements by prominently displaying the app name `ai-email` and its core purpose on the homepage and a dedicated detail page.

---

## 1. Component & Page Architecture

### 1.1 Featured Applications Component
- **File**: `src/components/FeaturedAppsSection.tsx`
- **Styling**: Tailwind CSS & DaisyUI (`bg-base-200`, `text-secondary`, card layout).
- **Featured App**:
  - **App Name**: `ai-email`
  - **Tagline**: AI-Powered Email Assistant & Inbox Productivity Tool
  - **Purpose Outline**: "ai-email is an intelligent assistant designed to help users summarize lengthy email threads, automatically organize messages, and draft context-aware replies using AI and Google Workspace APIs."
  - **Action**: "Learn More" button linking to `/apps/ai-email`.

### 1.2 Homepage Integration
- **File**: `src/app/page.tsx`
- **Location**: Render `<FeaturedAppsSection />` right below the bio intro section before Work History.

### 1.3 Dedicated `ai-email` App Page
- **File**: `src/app/apps/ai-email/page.tsx`
- **Route**: `https://decheverri123.github.io/apps/ai-email`
- **Sections**:
  1. **App Title & Purpose Header**: `ai-email`
  2. **Core Features**: Thread summarization, smart reply drafting, inbox organization.
  3. **Google OAuth & Privacy Declaration**: Explains how Gmail / Google Workspace API scopes are used strictly for requested user actions without selling or sharing data.
  4. **Links**: Links to `/privacy` and `/terms`.

---

## 2. Verification Criteria
1. Homepage (`https://decheverri123.github.io/`) prominently displays `ai-email` and its purpose.
2. Route `https://decheverri123.github.io/apps/ai-email` renders cleanly.
3. `npm run build` static export compiles with zero errors.
