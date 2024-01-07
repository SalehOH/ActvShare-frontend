import React from "react";
import * as ToastPrimitive from "@radix-ui/react-toast";

export const Toast = React.forwardRef((props, forwardedRef) => {
  const { children, ...toastProps } = props as { children: React.ReactNode };
  const [count, setCount] = React.useState(0);

  React.useImperativeHandle(forwardedRef, () => ({
    publish: () => setCount((count) => count + 1),
  }));

  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <ToastPrimitive.Root key={index} {...toastProps}>
          <ToastPrimitive.Description>{children}</ToastPrimitive.Description>
          <ToastPrimitive.Close>Dismiss</ToastPrimitive.Close>
        </ToastPrimitive.Root>
      ))}
    </>
  );
});
