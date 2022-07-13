import { ComponentMeta, ComponentStory } from "@storybook/react";
import CardsGrid from "./CardsGrid";

export default{
    title: "Organisms/CardsGrid",
    component: CardsGrid
} as ComponentMeta<typeof CardsGrid>

export const BooksGrid:ComponentStory<typeof CardsGrid> = (args)=><CardsGrid data={[]}/>