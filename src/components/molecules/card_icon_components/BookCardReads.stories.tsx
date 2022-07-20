import { ComponentMeta, ComponentStory } from "@storybook/react";
import BookCardReads from "./BookCardReads";

export default {
  title: "Molecules/BookCardInfo",
  component: BookCardReads,
  args: {
    reads: "1.9k",
  },
} as ComponentMeta<typeof BookCardReads>;

export const BookReads: ComponentStory<typeof BookCardReads> = (args) => (
  <BookCardReads reads={args.reads} />
);
