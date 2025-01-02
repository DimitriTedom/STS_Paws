
# Project with Tailwind CSS and Shadcn UI

This project is a Next.js application using Tailwind CSS for the design and Shadcn UI for the UI components. This README will guide you through the installation, configuration, and usage of the project.

## Prerequisites

Before you begin, make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/en/) (version 16 or higher)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

## Installation

### 1. Clone the repository

If you haven’t done so already, clone the project from GitHub (or download the source files):

```bash
git clone https://github.com/your-username/your-project.git
cd your-project
```

### 2. Install dependencies

Install the project's dependencies using npm or yarn.

With npm:
```bash
npm install
```

With yarn:
```bash
yarn install
```

### 3. Install Tailwind CSS and Shadcn UI

The project uses **Tailwind CSS** and **Shadcn UI**. Both are already installed and configured in the project. You can see the configuration in the following files:

- `tailwind.config.js` or `tailwind.config.ts` (Tailwind CSS configuration)
- `src/app/globals.css` (Global CSS file with Tailwind classes and custom CSS variables)

### 4. Run the application

After installing the dependencies, you can start the application in development mode:

With npm:
```bash
npm run dev
```

With yarn:
```bash
yarn dev
```

The application will be available at the following address:
```
http://localhost:3000
```

## Customization

- **Colors and theme**: Modify the color palette in `tailwind.config.js` to customize the theme of your application.
- **Fonts**: You can change the font in `globals.css` by modifying the imports of `@fontsource/inter` or using other fonts.

## Development

To customize Shadcn UI components, you can add or modify them in the `src/components/` folder. You can also create new custom Tailwind components if needed.

### 1. Add custom colors

Modify the `tailwind.config.js` file to add your custom colors in the `extend` section.

Example:
```js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "#1E3A8A",  // Dark Blue
        secondary: "#F97316", // Orange
        // Add other colors here
      },
    },
  },
};
```

### 2. Add components

Shadcn UI allows you to easily customize components using Tailwind classes. You can add new components in `src/components/` following the UI structure you want to create.

## Deployment

Once you're satisfied with the development of your application, you can deploy it on a platform like Vercel, Netlify, or any other service compatible with Next.js.

### Deployment with Vercel

1. Log in to [Vercel](https://vercel.com/).
2. Create a new project and connect it to your Git repository.
3. Vercel will automatically detect that you're using Next.js and deploy your application.

## Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Shadcn UI Documentation](https://shadcn.dev/)
- [Next.js Documentation](https://nextjs.org/docs)

## Contributing

1. Fork this project.
2. Create a branch for your feature (`git checkout -b feature-new-feature`).
3. Commit your changes (`git commit -am 'Added new feature'`).
4. Push your branch (`git push origin feature-new-feature`).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

- **Name:** Tedom Tafotsi Dimitri Wilfried
- **Email:** dimitritedom@gmail.com
- **LinkedIn:** [https://www.linkedin.com/in/tedom-tafotsi-dimitri-wilfried-b70502298/](https://www.linkedin.com/in/tedom-tafotsi-dimitri-wilfried-b70502298/)