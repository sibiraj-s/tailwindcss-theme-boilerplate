import { FC, Ref, type ButtonHTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { mergeProps, useObjectRef } from '@react-aria/utils';
import { type AriaButtonProps, useButton } from 'react-aria';

import cn from '../../../utils/cn';

const buttonVariabts = cva('px-4 py-2 rounded-md outline-hidden', {
  variants: {
    variant: {
      primary: 'bg-primary text-primary-foreground ',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

type ButtonVariantProps = VariantProps<typeof buttonVariabts>;
type ButtonRefProps = { ref?: Ref<HTMLButtonElement> };
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & AriaButtonProps & ButtonVariantProps & ButtonRefProps;

const Button: FC<ButtonProps> = ({ variant, children, className, ref, ...rest }) => {
  const buttonRef = useObjectRef<HTMLButtonElement>(ref);

  const { buttonProps } = useButton(rest, buttonRef);

  return (
    <button ref={buttonRef} {...mergeProps(buttonProps)} className={cn(buttonVariabts({ variant }), className)}>
      {children}
    </button>
  );
};

export default Button;
