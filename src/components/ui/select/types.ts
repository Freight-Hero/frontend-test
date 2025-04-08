import * as SelectPrimitive from "@radix-ui/react-select"
import { VariantProps } from "class-variance-authority"

import { 
  selectTriggerVariants, 
  selectContentVariants, 
  selectLabelVariants, 
  selectItemVariants, 
  selectSeparatorVariants 
} from "./variants"

export type SelectTriggerProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> & 
  VariantProps<typeof selectTriggerVariants>

export type SelectContentProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content> & 
  VariantProps<typeof selectContentVariants>

export type SelectLabelProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label> & 
  VariantProps<typeof selectLabelVariants>

export type SelectItemProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item> & 
  VariantProps<typeof selectItemVariants>

export type SelectSeparatorProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator> & 
  VariantProps<typeof selectSeparatorVariants>
