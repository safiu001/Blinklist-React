import { ComponentMeta, ComponentStory } from "@storybook/react";
import AvatarUser from "./AvatarUser";

export default {
  title: "Atoms/Avatars",
  component: AvatarUser,
  args: {
    children: "A",
  },
} as ComponentMeta<typeof AvatarUser>;

export const Avatar: ComponentStory<typeof AvatarUser> = (args) => (
  <AvatarUser children={args.children} />
);
