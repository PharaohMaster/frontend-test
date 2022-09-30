import * as React from "react"
import FormGroup from "@mui/material/FormGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import CheckboxMui, { CheckboxProps as CheckboxPropsMui } from "@mui/material/Checkbox"

interface CheckboxProps extends CheckboxPropsMui {
  label?: string
}

export default function Checkbox({ label, ...rest }: CheckboxProps) {
  return (
    <FormGroup>
      <FormControlLabel control={<CheckboxMui size="small" {...rest} />} label={label} onClick={(e) => e.stopPropagation()} />
    </FormGroup>
  )
}
