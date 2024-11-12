import { cn } from "@utils/shadcn";

export const Box = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={cn("", className)}>{children}</div>;
};
export const Center = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={cn("flex justify-center items-center", className)}>{children}</div>;
};

export const VStack = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={cn("flex flex-col w-full h-full", className)}>{children}</div>;
};
export const HStack = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={cn("flex flex-row w-full h-full", className)}>{children}</div>;
};

export const VDivider = ({ className }: { className?: string }) => {
  return <div className={cn("bg-neutral-90 w-[1px] h-full", className)} />;
};
export const HDivider = ({ className }: { className?: string }) => {
  return <div className={cn("bg-neutral-90 w-full h-[1px]", className)} />;
};
