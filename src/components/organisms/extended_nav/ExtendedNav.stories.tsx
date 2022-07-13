import { ComponentMeta, ComponentStory } from "@storybook/react";
import ExtendedNav from "./ExtendedNav";

export default{
    title: "Molecules/Nav",
    component: ExtendedNav
} as ComponentMeta<typeof ExtendedNav>

export const DropNav:ComponentStory<typeof ExtendedNav> = (args)=><ExtendedNav />