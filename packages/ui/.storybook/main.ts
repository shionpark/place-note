import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(ts|tsx|js|jsx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-docs",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: true,
  },
  core: {
    builder: "@storybook/builder-vite", // 👈 The builder enabled here.
  },
  typescript: {
    reactDocgen: "react-docgen-typescript", // ← TS 전용 파서로 교체
    // reactDocgen: false,                  // ← docgen 자체 비활성화도 가능
  },
};

export default config;
