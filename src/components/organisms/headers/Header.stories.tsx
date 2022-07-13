import { ComponentMeta, ComponentStory } from "@storybook/react";
import Header from "./Header";

export default{
    title: "Organisms/Header",
    component: Header
} as ComponentMeta<typeof Header>

export const AppBar:ComponentStory<typeof Header> = (args)=><Header handleExplore={()=>{}}/>