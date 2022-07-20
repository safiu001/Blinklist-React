import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import ExtendedNav from "./ExtendedNav";

export default{
    title: "Molecules/Nav",
    component: ExtendedNav
} as ComponentMeta<typeof ExtendedNav>

export const DropNav:ComponentStory<typeof ExtendedNav> = (args)=>{
    return(
        <BrowserRouter>
            <ExtendedNav />
        </BrowserRouter>
    )
}