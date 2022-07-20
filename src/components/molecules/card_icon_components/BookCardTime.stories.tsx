import { ComponentMeta, ComponentStory } from "@storybook/react";
import BookCardTime from "./BookCardTime";

export default {
  title: "Molecules/BookCardInfo",
  component: BookCardTime,
  args: {
    time: "13 min",
  },
} as ComponentMeta<typeof BookCardTime>;

export const BookTime: ComponentStory<typeof BookCardTime> = (args) => (
  <BookCardTime time={args.time} />
);
