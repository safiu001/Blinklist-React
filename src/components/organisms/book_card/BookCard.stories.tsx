import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import BookCard from "./BookCard";

export default{
    title: "Molecules/Cards",
    component: BookCard
} as ComponentMeta<typeof BookCard>

const bookData = {
    author: "rl",
    title: "abc",
    state: "nothing",
    image: "assets/pictures/beyondEntrepreneurship.png",
    time: "1.2 hrs",
    reads: "1.9k",
    category: "Featured",
    id: 11
}
export const CardBook:ComponentStory<typeof BookCard> = (args)=>{
 return (
    <BrowserRouter>
        <BookCard bookData={bookData} category={false}/>
    </BrowserRouter>
 )
}