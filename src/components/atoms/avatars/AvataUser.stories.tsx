import { ComponentMeta, ComponentStory } from "@storybook/react";
import AvatarUser from "./AvatarUser";

export default {
    title: "Atoms/Avatars",
    component: AvatarUser,
} as ComponentMeta<typeof AvatarUser>

export const Avatar:ComponentStory<typeof AvatarUser> = (args)=><AvatarUser children="A"/>