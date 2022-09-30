import React from "react"
import { Box } from "@mui/material"
import styled from "@mui/system/styled"
import Checkbox from "../Checkbox/Checkbox"
import layerCardMediaImg from "../../assets/images/layerCardMediaImg.png"

interface LayerCardProps {
  label: string
  isSelected?: boolean
  onSelect?: () => void
  height?: number
  width?: number
}

const LayerCardWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isSelected"
})<{ isSelected: boolean; height: number; width: number }>(({ theme, isSelected, height, width }) => ({
  background: theme.palette.primary.contrastText,
  border: `1px solid ${theme.palette.grey[200]}`,
  borderRadius: 10,
  overflow: "hidden",
  height: height,
  width: width,
  "&:hover": {
    border: `1px solid ${theme.palette.primary.dark}`,
    boxShadow: `0px 0px 0px 2px ${theme.palette.primary.light}`,
    cursor: "pointer"
  },
  ...(isSelected && {
    border: `1px solid ${theme.palette.primary.dark}`,
    boxShadow: `0px 0px 0px 2px ${theme.palette.primary.light}`
  })
}))

const MediaHeader = styled("div")<{ height: number }>(({ height }) => ({
  height: height - 50
}))

const Img = styled("img")({
  backgroundSize: "cover",
  height: "100%",
  width: "100%"
})

const Content = styled("div")({
  paddingLeft: 18.5,
  paddingTop: 6
})

export default function LayerCard({ label, isSelected = false, onSelect, height = 150, width = 229 }: LayerCardProps) {
  return (
    <LayerCardWrapper isSelected={isSelected} height={height} width={width} onClick={onSelect}>
      <MediaHeader height={height}>
        <Img src={layerCardMediaImg} alt="aerial land view" />
      </MediaHeader>
      <Content>
        <Checkbox checked={isSelected} label={label} onChange={onSelect} />
      </Content>
    </LayerCardWrapper>
  )
}
