export const projectContent = {
  name: "ReactUI5WebComponent",
  rootPath: "ui/react",
  projectType: "npm workspace monorepo",
  workspaces: ["apps/*", "packages/*"],
  applications: [
    {
      name: "web",
      path: "apps/web",
      stack: ["Vite", "React", "TypeScript"],
      scripts: {
        dev: "vite",
        build: "tsc && vite build",
        preview: "vite preview"
      }
    }
  ],
  sourceFiles: [
    "apps/web/src/main.tsx",
    "apps/web/src/App.tsx",
    "apps/web/src/project-content-element.tsx",
    "apps/web/src/project-content.ts",
    "apps/web/src/style.css"
  ]
};
