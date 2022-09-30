import React, { useState, useEffect } from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import LayerCard from "./LayerCard"

export default {
  title: "Layer Card",
  component: LayerCard
} as ComponentMeta<typeof LayerCard>

const Template: ComponentStory<typeof LayerCard> = (args) => {
  const { isSelected, ...rest } = args
  const [isSelectedState, setIsSelectedState] = useState(isSelected)

  useEffect(() => {
    setIsSelectedState(isSelected)
  }, [isSelected])

  return <LayerCard isSelected={isSelectedState} onSelect={() => setIsSelectedState(!isSelectedState)} {...rest} />
}

export const Unselected = Template.bind({})
Unselected.parameters = { controls: { include: ["isSelected", "label", "height", "width"] } }
Unselected.args = {
  isSelected: false,
  label: "Flood Zone 3"
}

export const Selected = Template.bind({})
Selected.parameters = { controls: { include: ["isSelected", "label", "height", "width"] } }
Selected.args = {
  isSelected: true,
  label: "Flood Zone 3"
}
