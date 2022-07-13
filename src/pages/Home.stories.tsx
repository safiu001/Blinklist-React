import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import Home from "./Home";

export default{
    title: "Pages/page",
    component: Home
} as ComponentMeta<typeof Home>

export const Homepage:ComponentStory<typeof Home> = (args)=>{
    return (
        <BrowserRouter>
        <Home/>
        </BrowserRouter>
    )
}
    