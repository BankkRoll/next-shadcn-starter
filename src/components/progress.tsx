import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { cn } from '../lib/utils';
import { CircularProgressbarStyles } from 'react-circular-progressbar/dist/types';

// Pre-defined color attributes for the progress bar
const colorAttributes = {
  default: { path: 'green', trail: '#d6d6d6', text: 'green' },
  destructive: { path: 'red', trail: '#d6d6d6', text: 'red' },
  warning: { path: 'yellow', trail: '#d6d6d6', text: 'yellow' },
  info: { path: 'blue', trail: '#d6d6d6', text: 'blue' },
  success: { path: 'green', trail: '#d6d6d6', text: 'green' },
};

// Pre-defined size attributes for the progress bar
const sizeAttributes = {
  linear: {
    xs: 'h-0.5 w-full',
    sm: 'h-1 w-full',
    md: 'h-2 w-full',
    lg: 'h-4 w-full',
    xl: 'h-6 w-full',
    '2xl': 'h-8 w-full',
    '3xl': 'h-10 w-full',
    '4xl': 'h-12 w-full',
    '5xl': 'h-14 w-full',
    '6xl': 'h-16 w-full',
    '7xl': 'h-20 w-full',
    '8xl': 'h-24 w-full',
    '9xl': 'h-32 w-full',
  },
  circular: {
    xs: 'w-6 h-6',
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20',
    '2xl': 'w-24 h-24',
    '3xl': 'w-32 h-32',
    '4xl': 'w-40 h-40',
    '5xl': 'w-48 h-48',
    '6xl': 'w-56 h-56',
    '7xl': 'w-64 h-64',
    '8xl': 'w-72 h-72',
    '9xl': 'w-80 h-80',
  },
};

const progressVariants = cva('relative overflow-hidden rounded-full', {
  variants: {
    type: {
      linear: '',
      circular: '',
    },
    colorVariant: colorAttributes,
  },
  defaultVariants: {
    type: 'linear',
    colorVariant: 'default',
  },
});

// Type definition for ProgressProps
interface ProgressProps extends VariantProps<typeof progressVariants> {
  value: number;
  label?: boolean;
  min?: number;
  max?: number;
  strokeWidth?: number;
  background?: boolean;
  backgroundPadding?: number;
  counterClockwise?: boolean;
  circleRatio?: number;
  styles?: CircularProgressbarStyles;
  text?: string;
  size?:
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl'
    | '7xl'
    | '8xl'
    | '9xl';
}

const Progress: React.FC<ProgressProps> = ({
  value,
  label = false,
  min = 0,
  max = 100,
  type = 'linear',
  colorVariant = 'default',
  strokeWidth = 8,
  background = false,
  size = 'md',
  ...props
}) => {
  const percentage = ((value - min) / (max - min)) * 100;
  const colorStyle = colorAttributes[colorVariant ?? 'default'];
  const sizeStyle = type ? sizeAttributes[type][size] : '';

  const circularStyles = buildStyles({
    strokeLinecap: 'round',
    textSize: '16px',
    pathTransitionDuration: 0.6,
    pathColor: colorStyle.path,
    textColor: colorStyle.text,
    trailColor: colorStyle.trail,
    backgroundColor: background ? colorStyle.path : 'transparent',
    ...props.styles,
  });

  return (
    <div className={cn(progressVariants({ type, colorVariant }), sizeStyle)}>
      {type === 'linear' && (
        <div
          className="h-full w-full flex-1 transition-all"
          style={{
            transform: `translateX(-${100 - percentage}%)`,
            backgroundColor: colorStyle.path,
          }}
        />
      )}
      {type === 'circular' && (
        <CircularProgressbar
          value={percentage}
          text={props.text ?? `${Math.round(percentage)}%`}
          strokeWidth={strokeWidth}
          styles={circularStyles}
        />
      )}
      {label && type !== 'circular' && (
        <span className="absolute inset-0 flex items-center justify-center text-sm">
          {`${Math.round(percentage)}%`}
        </span>
      )}
    </div>
  );
};

export { Progress };
