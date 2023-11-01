import React from 'react';
import { ReactComponent as Logo } from './logo.svg';
import { ReactComponent as LogoWithSquare } from './logo-square.svg';

export function MidoriLogo({ withSquare, ...props }) {
    if (withSquare) {
        return <LogoWithSquare {...props} />;
    }
    return <Logo {...props} />;
}
