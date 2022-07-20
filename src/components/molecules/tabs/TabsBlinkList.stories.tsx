import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import TabsBlinkList from "./TabsBlinkList";

const data = [
  {
    author: "James Moore",
    title: "Dropshipping",
    state: "added to lib",
    image: "/assets/pictures/dropshipping.png",
    time: "12-minute read",
    category: "Just added",
    id: 9,
  },
  {
    author: "Trey Gowdy",
    title: "Doesn’t Hurt to Ask",
    state: "Finished",
    image: "/assets/pictures/DoesntHurtToAsk.png",
    time: "13-minute read",
    reads: "1.9k reads",
    category: "Featured audio blinks",
    id: 3,
  },
];

export default {
  title: "Molecules/Tabs",
  component: TabsBlinkList,
  args: {
    data: data,
  },
} as ComponentMeta<typeof TabsBlinkList>;

export const TabsList: ComponentStory<typeof TabsBlinkList> = (args) => (
  <BrowserRouter>
    <TabsBlinkList data={args.data} />
  </BrowserRouter>
);
