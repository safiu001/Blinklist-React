import { ComponentMeta, ComponentStory } from "@storybook/react";
import SearchBar from "./SearchBar";

export default{
    title: "Molecules/SearchBar",
    component: SearchBar
} as ComponentMeta<typeof SearchBar>

export const SearchBarBooks:ComponentStory<typeof SearchBar> = (args)=><SearchBar />