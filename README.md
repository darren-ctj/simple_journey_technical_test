# Simple Journey Indonesia Website | Front-End Technical Test

🌐 Live URL : https://simplejourney.netlify.app/

A responsive web application built with **Vue 3**, focusing on visual accuracy, maintainable code, performance, and accessibility.

This website was developed as part of the Front-End Engineer technical test for PT Simple Journey Indonesia.

## Table of Contents

- [Getting Started](#getting-started)
  - [Option 1 : NPM](#option-1--npm)
  - [Option 2 : Docker](#option-2--docker)
- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Best Practices](#best-practices)
  - [Maintainability](#1-maintainability)
  - [Performance](#2-performance)
  - [Accessibility](#3-accessibility)

## Overview

The goal of this project is to recreate the Simple Journey website as a responsive **Vue 3** application while maintaining a clean and extensible codebase.

## Getting Started

This project provides **2 options to run the application**, using **NPM** or **Docker**.

**Prerequisites :**

- **Option 1 (NPM) :** [Node.js](https://nodejs.org/) + [Git](https://git-scm.com/)
- **Option 2 (Docker) :** [Docker Desktop](https://www.docker.com/products/docker-desktop/) or Docker Engine + [Git](https://git-scm.com/)

### Option 1 : NPM

#### 1. Clone the repository

```bash
git clone https://github.com/darren-ctj/simple_journey_technical_test.git
```

#### 2. Install dependencies

```bash
npm ci
```

#### 3. Start the development server

```bash
npm run dev
```

Open `http://localhost:5173` in browser.

#### 4. Create a production build (optional)

```bash
npm run build
```

The production assets are generated in the `dist/` directory.

#### 5. Preview the production build (optional)

```bash
npm run preview
```

Open `http://localhost:4173` in browser.

### Option 2 : Docker

#### 1. Clone the repository

```bash
git clone https://github.com/darren-ctj/simple_journey_technical_test.git
```

#### 2. Build the Docker image

```bash
docker build -t simple-journey-frontend .
```

#### 2. Run the container

```bash
docker run --rm -p 3000:80 simple-journey-frontend
```

#### 3. Open the application

Open `http://localhost:3000` in browser.

The application is now served by Nginx.

### Bonus: Jenkins CI Pipeline with Docker

This bonus demonstrates how Jenkins can validate and build the project through a CI pipeline. Jenkins runs in Docker, and the pipeline can be triggered manually by a reviewer.

#### 1. Start Jenkins

```bash
docker compose up -d --build
```

This builds the custom Jenkins image and starts the Jenkins container in the background.

Check the container status if needed :

```bash
docker compose ps
```

#### 2. Unlock Jenkins

Open [http://localhost:8080](http://localhost:8080).

Retrieve the initial administrator password:

```bash
docker compose exec jenkins cat /var/jenkins_home/secrets/initialAdminPassword
```

Follow the setup wizard and install the recommended plugins.

#### 3. Configure the pipeline

In Jenkins:

1. Select **New Item**.
2. Enter a job name, such as `simple-journey-frontend`.
3. Select **Pipeline**, then click **OK**.
4. Under the Pipeline section, choose **Pipeline script from SCM**.
5. Set SCM to **Git**.
6. Enter **https://github.com/darren-ctj/simple_journey_technical_test** as the GitHub repository URL.
7. Configure credentials if the repository is private.
8. Set the branch to `*/main`.
9. Set the script path to `Jenkinsfile`.
10. Save the configuration.

Ensure Jenkins has the necessary Git and Pipeline plugins and can access the repository.

#### 4. Run the pipeline manually

Select the configured job and click **Build Now**.

The pipeline runs the stages defined in the `Jenkinsfile`:

1. Check out the source code.
2. Verify the Node.js and npm versions.
3. Install dependencies using `npm ci`.
4. Build the production application using `npm run build`.

Review the build status and logs under **Console Output**. The pipeline also archives the `dist/` directory when artifacts are available.

The pipeline is triggered manually using **Build Now**. Automatic GitHub webhook triggering is not required.

## Tech Stack

- **Vue 3** — Component-based frontend framework.
- **JavaScript** — Application logic.
- **Vite** — Development server and production build tooling.
- **CSS** — Styling and responsive layouts.
- **Docker** — Containerization and production serving.
- **Nginx** — Production web server for the built frontend.
- **Jenkins** — Continuous integration pipeline.
- **Git and GitHub** — Version control and source code hosting.

## Project Structure

The structure below is a suggested reference. Adjust it to match the actual files in the repository.

```text
.
├── public/                 # Public static assets
├── src/
│   ├── assets/             # Images, icons, fonts, and styles
│   ├── components/         # Reusable UI components
│   ├── layouts/            # Shared page layouts
│   ├── pages/              # Page-level components
│   ├── router/             # Route definitions
│   ├── composables/        # Reusable Composition API logic
│   ├── services/           # API and external service logic
│   ├── utils/              # Shared helper functions
│   ├── App.vue             # Root component
│   └── main.js             # Application entry point
├── .dockerignore
├── .gitignore
├── Dockerfile
├── docker-compose.yml
├── Jenkinsfile
├── nginx.conf
├── package.json
├── package-lock.json
└── README.md
```

Not every directory is required for a small application. Add directories when they serve a real purpose instead of creating empty abstractions.

## Best Practices

### 1. Maintainability

The goal is to keep the codebase easy to understand, modify, and extend.

#### Folder organization

- Separate page-level components from reusable components.
- Keep route definitions separate from page implementation when routing is used.
- Extract repeated business logic into composables or utility functions where appropriate.
- Keep components focused on a clear responsibility.
- Avoid excessive abstraction for simple, one-off UI elements.
- Group related files logically as the application grows.

#### Naming conventions

Use consistent, descriptive names across the project.

| Item                    | Convention                          | Example                       |
| ----------------------- | ----------------------------------- | ----------------------------- |
| Vue components          | PascalCase                          | `JobCard.vue`                 |
| Composables             | camelCase with `use` prefix         | `useJobSearch.js`             |
| Utility functions       | camelCase                           | `formatDate.js`               |
| Constants               | UPPER_SNAKE_CASE for true constants | `MAX_RESULTS`                 |
| Variables and functions | camelCase                           | `jobListings`, `formatSalary` |
| CSS classes             | kebab-case                          | `job-card__title`             |
| Event handlers          | Verb-based names                    | `handleSubmit`                |

Use names that communicate intent. Prefer `filteredJobs` over vague names such as `data2`.

#### Component design

- Use props to pass data into child components.
- Emit events to communicate user interactions to parent components.
- Keep state close to where it is used unless it needs to be shared.
- Avoid duplicating the same markup and logic across multiple pages.
- Use computed properties for derived reactive values.
- Avoid mixing unrelated responsibilities in a single component.

#### Code quality

- Keep components readable and reasonably small.
- Remove unused imports, variables, and dead code.
- Avoid hardcoding repeated values when a shared constant or configuration is appropriate.
- Keep dependencies focused on actual project needs.
- Use the package lockfile and `npm ci` for reproducible installations.
- Keep secrets and local environment files out of version control.

### 2. Performance

The goal is to minimize unnecessary network requests, reduce asset sizes, and keep the interface responsive.

#### Image optimization

- Prefer appropriately sized images rather than loading oversized originals.
- Use modern formats such as WebP or AVIF when supported by the asset pipeline.
- Compress images while maintaining acceptable visual quality.
- Specify image dimensions or an aspect ratio to reduce layout shifts.
- Use descriptive alternative text for meaningful images.
- Use empty alternative text (`alt=""`) for purely decorative images.

#### Video optimization

- Compress videos and use web-friendly formats.
- Avoid automatically downloading large videos when they are not needed.
- Use `preload="none"` or `preload="metadata"` for videos when appropriate.
- Add a poster image to provide a preview before playback.
- Use `playsinline` for appropriate inline playback behavior on mobile devices.
- Avoid autoplaying videos with sound.

#### Lazy loading

Load non-critical assets when they are needed rather than downloading everything immediately.

For images below the initial viewport:

```html
<img
  src="/images/example.webp"
  alt="Description of the image"
  width="640"
  height="400"
  loading="lazy"
/>
```

For videos:

```html
<video controls preload="none" poster="/images/video-poster.webp">
  <source src="/videos/example.mp4" type="video/mp4" />
  Your browser does not support HTML video.
</video>
```

Do not lazy-load the main above-the-fold image if it is important for the initial visual experience. Choose loading behavior based on the resource's role.

#### Rendering and loading

- Use computed properties rather than repeatedly recalculating derived state in templates.
- Avoid unnecessary watchers and expensive work during rendering.
- Split large features into asynchronous components when this provides a meaningful benefit.
- Avoid loading large libraries for small tasks that can be handled natively.
- Test responsive layouts and performance on slower devices and networks.

### 3. Accessibility

The goal is to make the application usable by people with different abilities and input methods.

#### Semantic HTML

Use HTML elements according to their purpose:

- `<header>` for introductory or header content.
- `<nav>` for navigation links.
- `<main>` for the primary page content.
- `<section>` for a thematically grouped section, ideally with a heading.
- `<article>` for self-contained content.
- `<footer>` for footer content.
- `<button>` for actions.
- `<a>` for navigation.
- `<form>`, `<label>`, and appropriate input elements for user input.

Avoid using generic `<div>` or `<span>` elements when a semantic element better describes the content or interaction.

#### Keyboard accessibility

- Ensure interactive elements can be reached and operated using a keyboard.
- Preserve a visible focus indicator.
- Use native controls whenever practical.
- Avoid implementing clickable elements with non-interactive HTML elements.
- Ensure modal dialogs and menus manage keyboard focus appropriately.

#### Accessible content

- Provide meaningful alternative text for informative images.
- Associate form labels with their corresponding inputs.
- Maintain sufficient text and interface contrast.
- Use a logical heading hierarchy.
- Do not communicate information through color alone.
- Give buttons and links clear, descriptive names.
- Respect reduced-motion preferences when implementing non-essential animations.

#### Responsive accessibility

- Support browser zoom without losing content or functionality.
- Avoid horizontal scrolling at common viewport sizes unless required by the content.
- Ensure touch targets are practical to operate on mobile devices.
- Test layouts with longer text and different font sizes.

## CI Pipeline

The included `Jenkinsfile` defines a basic continuous integration workflow.

| Stage                | Purpose                                                |
| -------------------- | ------------------------------------------------------ |
| Checkout             | Retrieves the configured source repository.            |
| Environment          | Checks the installed Node.js and npm versions.         |
| Install dependencies | Installs dependencies using `npm ci`.                  |
| Tests                | Runs the configured test script if one is available.   |
| Production build     | Generates the production assets using `npm run build`. |

The pipeline archives the `dist/` directory when artifacts are available.

The current pipeline validates and builds the application. It does not automatically deploy the application to a remote production server.
