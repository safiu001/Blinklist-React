import { ComponentMeta, ComponentStory } from "@storybook/react"
import Logo from "./Logo"

export default{
    title: "Atoms/Logo",
    component: Logo
} as ComponentMeta<typeof Logo>

export const LogoBlinkList:ComponentStory<typeof Logo> = (args)=><Logo link="/assets/pictures/BlinkList.png"/>