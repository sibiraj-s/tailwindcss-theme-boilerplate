# TailwindCSS Theming Boilerplate

This repository provides a boilerplate setup for building web applications with theming using TailwindCSS and Vite. It serves as a starting point for developers who want to quickly set up a project that supports customizable themes with the power of TailwindCSS.

## Prerequisites

Before you can use this boilerplate, ensure that you have the following dependencies installed on your machine:

- Node.js (v18.16.0 or higher)
- npm (v9 or higher)

### Getting Started

To get started with this boilerplate, follow these steps:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/sibiraj-s/tailwindcss-theme-boilerplate.git
   ```

2. Change into the project's directory:

   ```bash
   cd tailwindcss-theme-boilerplate
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

   This command will start the development server, and you can view your web application at `http://localhost:5173` or in any available port.

## Theming

This boilerplate demonstrates theming using TailwindCSS. It includes two themes: dark mode and light mode. By default, the light mode theme is applied.

To switch between themes, open the `src/index.html` file and modify the `data-theme` attribute of the `html` tag. Set it to `dark` to activate the dark mode theme:

```html
<html data-theme="dark"></html>
```

When you switch themes, the styles defined in the `src/styles/tailwind.css` file will be automatically updated based on the active theme.

### Customization

You can customize the themes and add more variations to suit your project's requirements. To modify the existing themes or create new ones, you can make changes in the `tailwind.config.js` file.

For more details on configuring TailwindCSS, please refer to the official [TailwindCSS documentation](https://tailwindcss.com/docs).

### Example Components

This boilerplate includes some example components that showcase theming. You can find these components in the `src/components/ui` directory. These components are pre-styled with TailwindCSS classes and demonstrate how to apply the active theme to various UI elements.

## Building for Production

To build the application for production, run the following command:

```bash
npm run build
```

This command will generate an optimized and minified version of your application in the `dist` directory. You can then deploy the contents of this directory to a static hosting provider of your choice.

Happy coding!
