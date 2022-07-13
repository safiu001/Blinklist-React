import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import Book from "./Book";

export default{
    title: "Pages/page",
    component: Book
} as ComponentMeta<typeof Book>

export const BookDetailsPage:ComponentStory<typeof Book> = (args)=>{
    return (
        <BrowserRouter>
            <Book />
        </BrowserRouter>
    )
}