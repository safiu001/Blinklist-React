import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";

export default{
    title: "Organisms/Header",
    component: Header
} as ComponentMeta<typeof Header>

export const AppBar:ComponentStory<typeof Header> = (args)=>{
    return(
        <BrowserRouter>
            <Header handleExplore={()=>{}}/>
        </BrowserRouter>
    )
}