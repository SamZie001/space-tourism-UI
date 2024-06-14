"use client";
import React from "react";

const Button = ({
  size,
  children,
  props,
}: {
  size: "small" | "default";
  children: React.ReactNode;
  props?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}) => {
  return (
    <button
      className={`withTransition relative z-0 flex items-center justify-center rounded-full bg-white text-base uppercase text-primary after:absolute after:z-10 after:rounded-full after:bg-secondary after:opacity-0 after:content-[""] hover:text-primary/80 hover:after:animate-show-btn-padding md:text-xl ${props?.className} ${size === "small" ? "h-[150px] w-[150px] after:p-[120px]" : "h-[200px] w-[200px] after:p-[150px]"}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
