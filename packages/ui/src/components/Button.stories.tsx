import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Example/Button",
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["solid", "primary", "outline"],
      },
    },
    size: {
      control: {
        type: "select",
        options: ["sm", "md", "lg"],
      },
    },
    disabled: {
      control: "boolean",
    },
    active: {
      control: "boolean",
    },
    wide: {
      control: "boolean",
    },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Solid: Story = {
  args: {
    children: <span>Button</span>,
    variant: "solid",
    size: "md",
    disabled: false,
    active: false,
    wide: false,
  },
};

export const Disabled: Story = {
  args: {
    ...Solid.args,
    disabled: true,
  },
};

export const Active: Story = {
  args: {
    ...Solid.args,
    active: true,
  },
};

export const Primary: Story = {
  args: {
    ...Solid.args,
    variant: "primary",
  },
};

export const Wide: Story = {
  args: {
    ...Solid.args,
    wide: true,
  },
};
