import { Flex, IconArrowLeftLine, Text } from '@qwant/qwant-ponents';
import { t } from '~src/common/translators/reactTranslator';
import { useLocation, useNavigate } from 'react-router-dom';
import { MidoriLogo } from '~src/pages/common/components/MidoriLogo/MidoriLogo';
import React from 'react';
import Styles from './Popup.module.scss';

export function PopupHeader() {
    const navigate = useNavigate();
    const location = useLocation();

    if (location.pathname === '/main') {
        return (
            <Flex between alignCenter mb="s">
                <MidoriLogo withSquare height={44} width={224} />
            </Flex>
        );
    }

    return (
        <Text typo="body-2" color="primary" raw>
            <Flex alignCenter mb="s" as="button" onClick={() => navigate('/main')} className={Styles.PopupBack}>
                <IconArrowLeftLine width={24} height={24} />
                {t('back')}
            </Flex>
        </Text>
    );
}
