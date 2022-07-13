import { ComponentMeta, ComponentStory } from "@storybook/react";
import IconImage from "./IconImage";

export default{
    title: "Atoms/Icons",
    component: IconImage
} as ComponentMeta<typeof IconImage>

export const Icon:ComponentStory<typeof IconImage> = (args)=><IconImage link={"assets/pictures/icons/Career.png"}/>