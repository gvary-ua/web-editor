import React, { HTMLAttributes } from 'react';

export default function Logo({
  withText,
  ...props
}: HTMLAttributes<HTMLImageElement> & { withText?: boolean }) {
  return withText ? (
    <img src="/icons/Logo_text.svg" alt="Logo" {...props} />
  ) : (
    <img src="/icons/Logo.svg" alt="Logo" {...props} />
  );
}
