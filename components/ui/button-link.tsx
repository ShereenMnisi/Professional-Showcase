import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "outline";
};

export function ButtonLink({
  children,
  className = "",
  variant = "outline",
  ...props
}: ButtonLinkProps) {
  return (
    <a className={`button button--${variant} ${className}`.trim()} {...props}>
      {children}
    </a>
  );
}
