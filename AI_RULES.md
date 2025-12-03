# AI Rules for PréFab Application

This document outlines the technical stack and specific library usage rules to maintain consistency and best practices within the PréFab project.

## Tech Stack Overview

*   **Framework**: React (with Vite for fast development)
*   **Language**: TypeScript
*   **UI Library**: shadcn/ui (built on Radix UI)
*   **Styling**: Tailwind CSS
*   **Routing**: React Router DOM
*   **Data Fetching & State Management**: TanStack React Query
*   **Backend & Database**: Supabase
*   **Icons**: Lucide React
*   **Date Manipulation**: date-fns
*   **Form Management**: React Hook Form with Zod for validation
*   **Utility Functions**: clsx and tailwind-merge for class management

## Library Usage Rules

To ensure a cohesive and maintainable codebase, please adhere to the following guidelines when developing new features or modifying existing ones:

*   **UI Components**:
    *   Always prioritize using components from `shadcn/ui` (located in `src/components/ui/`).
    *   If a required component is not available in `shadcn/ui` or needs significant customization, create a new component in `src/components/` and style it using Tailwind CSS. **Do not modify existing `shadcn/ui` files directly.**
*   **Styling**:
    *   All styling must be done using **Tailwind CSS** classes.
    *   Avoid writing custom CSS unless absolutely necessary for global styles or specific utility classes defined in `src/index.css`.
*   **Data Fetching & Server State**:
    *   Use **TanStack React Query** for all asynchronous data fetching, caching, and server state management.
    *   Define custom hooks for data operations (e.g., `useObras`, `useCreateForma`) in `src/hooks/`.
*   **Routing**:
    *   Use **React Router DOM** for all client-side navigation.
    *   All primary routes should be defined within `src/App.tsx`.
    *   Page components should reside in `src/pages/`.
*   **Icons**:
    *   Use icons from the **lucide-react** library.
*   **Date & Time**:
    *   Use **date-fns** for all date formatting, parsing, and manipulation tasks.
*   **Forms**:
    *   For form creation and validation, use **React Hook Form** in conjunction with **Zod** for schema definition.
*   **Backend Interaction**:
    *   All interactions with the database and authentication should be performed via the **Supabase** client (`@/integrations/supabase/client`).
*   **Notifications**:
    *   Use the `toast` utility from `src/hooks/use-toast.ts` for transient user feedback (e.g., success/error messages).
    *   For more persistent or complex notifications, consider `sonner` if appropriate.
*   **Class Utilities**:
    *   When conditionally applying or merging Tailwind CSS classes, always use the `cn` utility function from `src/lib/utils.ts`.