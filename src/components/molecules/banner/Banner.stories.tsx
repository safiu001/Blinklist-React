import { ComponentMeta, ComponentStory } from "@storybook/react";
import Banner from "./Banner";

export default{
    title: "Molecules/Banner",
    component: Banner
} as ComponentMeta<typeof Banner>

export const AppBanner:ComponentStory<typeof Banner> = (args)=><Banner />