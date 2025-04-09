import { cva } from "class-variance-authority"

export const formVariants = cva("space-y-2")

export const formLabelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
)

export const formDescriptionVariants = cva("text-sm text-muted-foreground")

export const formMessageVariants = cva("text-sm font-medium text-destructive") 