import { type ComponentPropsWithoutRef, FC, Ref } from 'react';
import * as SwitchPrimitives from '@radix-ui/react-switch';

import cn from '../../../utils/cn';

type SwitchRefProps = { ref?: Ref<HTMLButtonElement> };
type SwitchProps = ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> & SwitchRefProps;

const Switch: FC<SwitchProps> = ({ className, ref, ...props }) => (
  <SwitchPrimitives.Root
    className={cn(
      'peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors',
      'focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background',
      'disabled:cursor-not-allowed disabled:opacity-50 bg-primary',
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        'pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0'
      )}
    />
  </SwitchPrimitives.Root>
);

export default Switch;
