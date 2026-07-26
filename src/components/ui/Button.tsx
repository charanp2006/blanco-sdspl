import { type ButtonHTMLAttributes, type AnchorHTMLAttributes, forwardRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-pill font-display font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand disabled:opacity-50 disabled:pointer-events-none";

const variants = {
  primary: "bg-brand text-white hover:bg-brand-dark hover:-translate-y-0.5 hover:shadow-card",
  secondary: "bg-charcoal text-white hover:bg-charcoal-light hover:-translate-y-0.5",
  outline: "border-2 border-brand text-brand hover:bg-brand hover:text-white",
  ghost: "text-brand hover:bg-brand-50",
  accent: "bg-accent text-charcoal hover:bg-accent-dark hover:-translate-y-0.5",
} as const;

const sizes = {
  sm: "text-sm px-4 py-2",
  md: "text-base px-6 py-3",
  lg: "text-lg px-8 py-4",
} as const;

interface BaseProps {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
}

type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
type LinkProps = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps | LinkProps>(
  ({ variant = "primary", size = "md", className, ...props }, ref) => {
    const classes = cn(baseStyles, variants[variant], sizes[size], className);

    if ("href" in props && props.href) {
      const { href, ...anchorProps } = props as LinkProps;
      return (
        <Link
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={classes}
          {...anchorProps}
        />
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={classes}
        {...(props as ButtonProps)}
      />
    );
  },
);
Button.displayName = "Button";
