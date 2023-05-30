import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { mergeProps, useObjectRef } from '@react-aria/utils';
import { type AriaButtonProps, useButton } from 'react-aria';

import cn from '../../../utils/cn';

const buttonVariabts = cva('px-4 py-2 rounded-md outline-none', {
  variants: {
    variant: {
      primary: 'bg-primary text-primary-foreground ',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & AriaButtonProps & VariantProps<typeof buttonVariabts>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { variant, children, className, ...rest } = props;
  const buttonRef = useObjectRef<HTMLButtonElement>(ref);

  const { buttonProps } = useButton(rest, buttonRef);

  return (
    <button ref={buttonRef} {...mergeProps(buttonProps)} className={cn(buttonVariabts({ variant }), className)}>
      {children}
    </button>
  );
});

export default Button;
