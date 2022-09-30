import React, { useState } from "react"
import { ThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import theme from "./themes/default.theme"
import { Box, Card, CardContent } from "@mui/material"
import LayerCard from "./components/LayerCard/LayerCard"

function App() {
  const [isSelectedState1, setIsSelectedState1] = useState(false)
  const [isSelectedState2, setIsSelectedState2] = useState(true)

  // This all is just for testing purposes, main focus of this challenge was to make reusable LayerCard component
  // and appropriate Storybook integration
  return (
    <ThemeProvider theme={theme}>
      <>
        <CssBaseline />
        <Card
          sx={{
            padding: 4,
            backgroundColor: "#f5f5f5"
          }}
        >
          <CardContent>
            <Box>
              <h1>Layer card</h1>
              <h2>Unselected</h2>
              <LayerCard label="Flood zone 3" isSelected={isSelectedState1} onSelect={() => setIsSelectedState1(!isSelectedState1)} />
              <h2>Selected</h2>
              <LayerCard label="Flood zone 3" isSelected={isSelectedState2} onSelect={() => setIsSelectedState2(!isSelectedState2)} />
            </Box>
          </CardContent>
        </Card>
      </>
    </ThemeProvider>
  )
}

export default App
