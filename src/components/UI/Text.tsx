import React from 'react';
import classNames from 'classnames';
import { Colors } from '../../types';

type TextSizes = 28 | 20 | 16 | 14 | 12 | 10;

interface TextProps {
  size: TextSizes;
  As?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'div';
  children?: React.ReactNode;
  mobileSize?: TextSizes;
  tabletSize?: TextSizes;
  desktopSize?: TextSizes;
  color?: Colors;
  bold?: boolean;
  upperCase?: boolean;
}

export function Text(props: TextProps) {
  const {
    As = 'span',
    bold = false,
    upperCase = false,
    color = Colors.black,
    children,
    size,
    mobileSize,
    tabletSize,
    desktopSize,
  } = props;
  const classes = classNames(
    [`s${size}`],
    [color],
    { bold: bold },
    { upperCase: upperCase },
    { [`m${mobileSize}`]: mobileSize },
    { [`t${tabletSize}`]: tabletSize },
    { [`d${desktopSize}`]: desktopSize }
  );
  return <As className={classes}>{children}</As>;
}
