import { ComponentMeta, ComponentStory } from "@storybook/react";
import FooterLeftContent from "./FooterLeftContent";

export default{
    title: "Molecules/FooterContent",
    component: FooterLeftContent
} as ComponentMeta<typeof FooterLeftContent>

export const FooterLeft:ComponentStory<typeof FooterLeftContent> = (args)=><FooterLeftContent />