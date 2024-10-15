# Our Company Template

<p align="center">
  A future-proof template built with Next.js and Supabase, designed for all modern web applications within the company, featuring scalability, minimalistic design, and full authentication.
</p>

---

## Analytics

![Alt](https://repobeats.axiom.co/api/embed/8389dcb173b4ef34d879f9be04ab61c6e5b0ea80.svg "Analytics image")

## Table of Contents

1. [Features](#features)
2. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
3. [Running the Application](#running-the-application)
   - [Development](#development)
   - [Production](#production)
4. [Testing with Cypress](#testing-with-cypress)
5. [Customization](#customization)
   - [UI Components](#ui-components)
   - [Authentication](#authentication)
   - [Color Scheme](#color-scheme)
6. [Feedback and Issues](#feedback-and-issues)
7. [Build for Production](#build-for-production)

---

## Features

- **Next.js Stack**: Built on Next.js, leveraging both App Router and Pages Router, supporting Middleware and both Client and Server components.
- **Supabase Authentication**: Full integration with Supabase Auth for user authentication using cookies for session handling.
- **Minimalist UI Design**: Styled with Tailwind CSS and shadcn/ui for reusable components. Clean, simple, and modern design.
- **Future-Proof**: Designed to scale and evolve with modern web technologies and standards.

---

## Getting Started

### Prerequisites

Before you start, ensure you have the following tools installed:

- **Node.js** (v18.x or later)
- **pnpm** (preferred for managing packages)
- **Supabase Account** (for authentication and backend services)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Quanby-IT-Solutions/NextJsTemplate
   cd NextJsTemplate
   ```

2. **Install dependencies**:

   ```bash
   pnpm install
   ```

3. **Set up environment variables**:
   - Rename `.env.local.example` to `.env.local`.
   - Add your **Supabase** credentials and other required environment variables to the `.env.local` file.

---

## Running the Application

### Development

To start the development server:

```bash
pnpm dev
```

- The project will run locally at [localhost:3000](http://localhost:3000/).
- Hot reloading is enabled, so any changes made will reflect in real-time.

### Production

To build and run the application in production mode:

```bash
pnpm build
pnpm start
```

Ensure all environment variables are correctly set up for production deployment.

---

## Testing with Cypress

Cypress is used for end-to-end testing. Here’s how you can use it:

1. **Install Cypress** (if not already installed):

   ```bash
   pnpm install cypress --save-dev
   ```

2. **Open Cypress UI**:

   ```bash
   pnpm cypress:open
   ```

3. **Run tests in headless mode**:

   ```bash
   pnpm cypress run
   ```

### Writing Cypress Tests

- Tests are located in the `cypress/e2e` directory.
- Example of a simple test:

  ```js
  describe('Homepage', () => {
    it('should display the homepage correctly', () => {
      cy.visit('/');
      cy.contains('Welcome to the company template');
    });
  });
  ```

For more information, refer to the [Next.js Cypress guide](https://nextjs.org/docs/pages/building-your-application/testing/cypress).

---

## Customization

### UI Components

This template is designed to be highly customizable. You can extend or modify existing components to suit the company’s design needs.

1. **Aceternity UI**:
   - Provides advanced UI components like modals, tooltips, etc.
   - Customize these in `components/Aceternity`.
   - Example usage of a button:

     ```tsx
     import { Button } from 'aceternity-ui';

     const MyButton = () => <Button color="primary">Click Me</Button>;
     export default MyButton;
     ```

2. **shadcn/UI**:
   - Built-in reusable components with minimalist design.
   - Modify or add components in `components/Shadcn`.
   - Example usage of a dialog:

     ```tsx
     import { Dialog, DialogTrigger, DialogContent } from '@shadcn/ui';

     const MyDialog = () => (
       <Dialog>
         <DialogTrigger>Open Dialog</DialogTrigger>
         <DialogContent>
           <p>This is a dialog content</p>
         </DialogContent>
       </Dialog>
     );
     export default MyDialog;
     ```

### Authentication

- Authentication is managed by Supabase Auth, which uses cookies for session handling.
- You can customize the authentication flow by modifying the corresponding API routes or updating your Supabase settings.

### Color Scheme

- The template supports both **light** and **dark** modes.
- You can update the color themes to match the company’s branding in `tailwind.config.js`.

---

## Feedback and Issues

If you encounter any issues or have feedback, please report them to the development team or submit them via the internal company tracking system.

---

## Build for Production

To prepare the app for production:

1. **Clean the pnpm store**:

   ```bash
   pnpm clean
   ```

2. **Build the application**:

   ```bash
   pnpm build
   ```

3. **Start the production server**:

   ```bash
   pnpm start
   ```

<!-- correct this -->
4. **Test Lint**

   ```bash
   pnpm build && pnpm start
   ```
