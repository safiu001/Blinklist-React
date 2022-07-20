import { ComponentMeta, ComponentStory } from "@storybook/react";
import Cover from "./Cover";

export default {
  title: "Atoms/Cover",
  component: Cover,
  args: {
    link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS44Ikz5jD3_306-TNqoAK5Go9o1grVT9NVVA&usqp=CAU",
  },
} as ComponentMeta<typeof Cover>;

export const CoverBook: ComponentStory<typeof Cover> = (args) => (
  <Cover link={args.link} />
);
