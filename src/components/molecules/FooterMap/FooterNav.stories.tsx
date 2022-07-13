import { ComponentMeta, ComponentStory } from "@storybook/react";
import FooterNav from "./FooterNav";

export default{
    title: "Molecules/FooterContent",
    component: FooterNav
}as ComponentMeta<typeof FooterNav>

export const FooterNavbar:ComponentStory<typeof FooterNav> = (args)=><FooterNav />