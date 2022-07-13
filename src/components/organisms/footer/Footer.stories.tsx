import { ComponentMeta, ComponentStory } from "@storybook/react";
import Footer from "./Footer";

export default{
    title: "Organisms/Footer",
    component: Footer
} as ComponentMeta<typeof Footer>

export const FooterDefault:ComponentStory<typeof Footer> = (args)=><Footer/>