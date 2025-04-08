import * as LabelPrimitive from "@radix-ui/react-label"
import { VariantProps } from "class-variance-authority"
import { FieldPath, FieldValues } from "react-hook-form"

import { formVariants, formLabelVariants, formDescriptionVariants, formMessageVariants } from "./variants"

export type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
  name: TName
}

export type FormItemContextValue = {
  id: string
}

export type FormItemProps = React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof formVariants>

export type FormLabelProps = React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & 
  VariantProps<typeof formLabelVariants>

export type FormDescriptionProps = React.HTMLAttributes<HTMLParagraphElement> & 
  VariantProps<typeof formDescriptionVariants>

export type FormMessageProps = React.HTMLAttributes<HTMLParagraphElement> & 
  VariantProps<typeof formMessageVariants> 