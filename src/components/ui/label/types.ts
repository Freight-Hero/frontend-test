import { LabelProps as RadixLabelProps } from "@radix-ui/react-label"
import { VariantProps } from "class-variance-authority"

import { labelVariants } from "./variants"

export type LabelProps = RadixLabelProps & VariantProps<typeof labelVariants> 