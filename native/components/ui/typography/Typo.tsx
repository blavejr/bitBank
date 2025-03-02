import { TextProps, Text } from "react-native";
import { tv, VariantProps } from "tailwind-variants";

const BBText = tv({
    base: '',
    defaultVariants: {
        color: 'primary',
    },
    variants: {
      color: {
        primary: 'text-typography-primary',
        secondary: 'text-typography-secondary',
        tertiary: 'text-typography-tertiary',
        danger: 'text-red-500',
        success: 'text-green-500',
        warning: 'text-yellow-500',
        info: 'text-blue-500',
      },
      size: {
        sm: 'text-sm',
        md: 'text-md',
        lg: 'text-lg',
        xl: 'text-xl',
        '2xl': 'text-2xl',
        '3xl': 'text-3xl',
        '4xl': 'text-4xl',
      },
      weight: {
        normal: 'font-normal',
        bold: 'font-bold',
      },
    },
});
  
type TypographyProps = TextProps & VariantProps<typeof BBText>;
  
export function Typography({ className, ...props }: TypographyProps) {
    return (
      <Text className={BBText({ className, ...props })} {...props} />
    );
  }