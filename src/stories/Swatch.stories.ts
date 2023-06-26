import type { Meta, StoryObj } from "@storybook/react";
import { NoteSwatch } from "../components/Swatch";

const meta = {
  component: NoteSwatch,
  tags: ["autodocs"],
  args: { note: "A4" },
} satisfies Meta<typeof NoteSwatch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const GivenNote: Story = {};

export const GivenFrequency: Story = {
  args: { note: undefined, frequency: 1999 },
};
