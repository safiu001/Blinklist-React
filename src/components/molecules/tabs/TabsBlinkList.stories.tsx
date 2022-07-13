import { ComponentMeta, ComponentStory } from "@storybook/react";
import TabsBlinkList from "./TabsBlinkList";

export default{
    title: "Molecules/Tabs",
    component: TabsBlinkList
} as ComponentMeta<typeof TabsBlinkList>

export const TabsList:ComponentStory<typeof TabsBlinkList> = (args)=><TabsBlinkList data={[]}/>