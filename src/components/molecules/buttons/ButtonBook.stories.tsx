import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import ButtonBook from "./ButtonBook";

export default{
    title: "Molecules/Buttons",
    component: ButtonBook
} as ComponentMeta<typeof ButtonBook>

export const ActionButton:ComponentStory<typeof ButtonBook> = (args)=>{
    return (
        <BrowserRouter>
            <ButtonBook></ButtonBook>
        </BrowserRouter>
    )
}