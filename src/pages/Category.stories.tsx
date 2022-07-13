import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import Category from "./Category";

export default{
    title: "Pages/page",
    component: Category
} as ComponentMeta<typeof Category>

export const Entrepreneur:ComponentStory<typeof Category> = (args)=>{
    return (
        <BrowserRouter>
        <Category />
        </BrowserRouter>
    )
}