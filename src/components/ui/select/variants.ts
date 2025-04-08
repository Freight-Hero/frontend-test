import { cva } from "class-variance-authority"

export const selectTriggerVariants = cva(
  "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-sm border border-input bg-transparent px-3 py-2 text-sm ring-offset-background data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1"
)

export const selectContentVariants = cva(
  "relative z-50 max-h-[--radix-select-content-available-height] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-sm border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-select-content-transform-origin]"
)

export const selectLabelVariants = cva(
  "px-2 py-1.5 text-sm font-semibold"
)

export const selectItemVariants = cva(
  "relative flex w-full cursor-pointer select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
)

export const selectSeparatorVariants = cva(
  "-mx-1 my-1 h-px bg-muted"
)
