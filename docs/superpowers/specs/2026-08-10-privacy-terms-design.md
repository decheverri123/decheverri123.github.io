# Design Spec: Privacy Policy & Terms of Service Pages

- **Date**: 2026-08-10
- **Status**: Approved
- **Target Repository**: `decheverri123.github.io`
- **Primary Goal**: Add Google OAuth app verification-compliant Privacy Policy (`/privacy`) and Terms of Service (`/terms`) pages with a shared website footer.

---

## 1. Architecture & Component Structure

### 1.1 Shared Footer Component
- **File**: `src/components/Footer.tsx`
- **Styling**: Tailwind CSS & DaisyUI (`bg-base-300`, `text-base-content`).
- **Links**:
  - Home (`/`)
  - Projects (`/projects`)
  - Contact (`/contact`)
  - Privacy Policy (`/privacy`)
  - Terms of Service (`/terms`)
- **Copyright**: `© 2026 Danny Echeverri. All rights reserved.`

### 1.2 Layout Integration
- **File**: `src/app/LayoutHeader.tsx`
- **Change**: Render `<Footer />` inside the outer page container below `<main>{children}</main>`.

### 1.3 Routes & Pages
- **Privacy Policy Page**: `src/app/privacy/page.tsx`
  - Accessible at `https://decheverri123.github.io/privacy`
  - Wrapped in `<Layout>`
- **Terms of Service Page**: `src/app/terms/page.tsx`
  - Accessible at `https://decheverri123.github.io/terms`
  - Wrapped in `<Layout>`

---

## 2. Page Content Specifications

### 2.1 Privacy Policy (`/privacy`)
Includes all mandatory sections required for Google Cloud OAuth verification:

1. **Overview & Scope**:
   - Applies to `decheverri123.github.io` and applications/services provided by Danny Echeverri.
2. **Information Collection**:
   - Details OAuth authentication flow and data access limited strictly to scope permissions requested by user-authorized applications.
3. **Use of Data**:
   - Data accessed is utilized solely to deliver core application features.
4. **Data Retention & Storage**:
   - Credentials/tokens are stored client-side locally where applicable and retained only for functional durations.
5. **Data Sharing & Disclosure**:
   - Explicit declaration: **"We do not sell, rent, trade, or share user data or Google User Data with third parties."**
6. **Data Deletion & Access Revocation**:
   - Instructions for revoking OAuth access via [Google Account Permissions](https://myaccount.google.com/permissions) and clearing client data.
7. **Contact Information**:
   - Email: `decheverri123@gmail.com`

### 2.2 Terms of Service (`/terms`)
Includes standard verification-compliant terms:

1. **Acceptance of Terms**:
   - Terms apply upon using the website or associated applications.
2. **Permitted Use**:
   - Acceptable use guidelines for site resources and applications.
3. **Intellectual Property**:
   - Software and content rights reserved by Danny Echeverri.
4. **Disclaimer of Warranties**:
   - Provided on an "AS IS" and "AS AVAILABLE" basis without express or implied warranties.
5. **Limitation of Liability**:
   - Standard limitation of liability regarding service availability and usage.
6. **Changes to Terms**:
   - Updates published directly to `/terms`.
7. **Contact Information**:
   - Email: `decheverri123@gmail.com`

---

## 3. Verification & Compliance Criteria

1. Both `/privacy` and `/terms` render cleanly on mobile and desktop without layout shift.
2. Direct navigation via URL (`/privacy` and `/terms`) works without redirects or auth requirements.
3. Footer displays properly across all routes (`/`, `/projects`, `/contact`, `/privacy`, `/terms`).
4. Static export (`npm run build`) builds cleanly with no TypeScript or linting errors.
