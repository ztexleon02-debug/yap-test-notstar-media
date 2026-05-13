"use client";

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./src/sanity/schemaTypes";
import { siteStructure } from "./src/sanity/structure";

export default defineConfig({
  name: "default",
  title: "Notstar Media CMS",
  basePath: "/studio",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "jlx9t7dl",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  plugins: [structureTool({ structure: siteStructure }), visionTool()],
  schema: {
    types: schemaTypes,
  },
});
