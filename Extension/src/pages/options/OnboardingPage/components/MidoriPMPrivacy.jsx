import React from 'react';
import {
    Box, Flex,
} from '@qwant/qwant-ponents';
import { ReactComponent as IconQwantFavicon } from './assets/midori-favicon.svg';

export const MidoriPMPrivacy = () => (
    <Flex as="span" alignCenter>
        <Box as="span" mr="xxs">
            <b>Midori PMP</b>
            {'rivacy '}
        </Box>
        <IconQwantFavicon />
    </Flex>
);
