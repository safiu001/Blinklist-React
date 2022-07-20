import { ComponentMeta, ComponentStory } from "@storybook/react";
import IconImage from "./IconImage";

export default {
  title: "Atoms/Icons",
  component: IconImage,
  args: {
    link: "/assets/pictures/icons/Career.png",
  },
} as ComponentMeta<typeof IconImage>;

export const Icon: ComponentStory<typeof IconImage> = (args) => (
  <IconImage link={args.link} />
);
