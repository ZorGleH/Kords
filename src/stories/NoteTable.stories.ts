// Write storybook stories for ../components/Table.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { NoteTable } from "../components/NoteTable";

const meta = {
  component: NoteTable,
  tags: ["autodocs"],
  args: { note: "A4" },
} satisfies Meta<typeof NoteTable>;

export default meta;

type Story = StoryObj<typeof meta>;

export const GivenNote: Story = {};
