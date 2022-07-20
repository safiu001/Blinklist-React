import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import CardsGrid from "./CardsGrid";

const data = [
  {
    author: "Jim Collins & Bill Lazier",
    title: "Beyond Entrepreneurship",
    state: "",
    image: "/assets/pictures/beyondEntrepreneurship.png",
    time: "13-minute read",
    reads: "1.9k reads",
    category: "Trending blinks",
    id: 11,
  },
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
  title: "Organisms/CardsGrid",
  component: CardsGrid,
  args: {
    data: data,
    category: false,
  },
} as ComponentMeta<typeof CardsGrid>;

export const BooksGrid: ComponentStory<typeof CardsGrid> = (args) => {
  return (
    <BrowserRouter>
      <CardsGrid data={args.data} category={args.category} />
    </BrowserRouter>
  );
};
