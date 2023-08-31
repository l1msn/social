import React, { JSX, memo } from 'react';
import MainLayout from '../MainLayout/MainLayout';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import Skeleton from '@/shared/ui/redesigned/Skeleton';
import cls from './AppLoaderLayout.module.scss';

interface IAppLoaderLayoutProps {
    className?: string;
}

const AppLoaderLayout: React.FC<IAppLoaderLayoutProps> = memo(
    ({ className }: IAppLoaderLayoutProps): JSX.Element => {
        const header = (
            <HStack className={cls.header}>
                <Skeleton width={40} height={40} borderRadius={'50%'} />
            </HStack>
        );

        const content = (
            <VStack gap={'16'} style={{ height: '100%' }}>
                <Skeleton borderRadius={'16px'} width={'70%'} height={32} />
                <Skeleton borderRadius={'16px'} width={'40%'} height={20} />
                <Skeleton borderRadius={'16px'} width={'50%'} height={20} />
                <Skeleton borderRadius={'16px'} width={'30%'} height={32} />
                <Skeleton borderRadius={'16px'} width={'80%'} height={'40%'} />
                <Skeleton borderRadius={'16px'} width={'80%'} height={'40%'} />
            </VStack>
        );

        const sidebar = (
            <Skeleton borderRadius={'32px'} width={220} height={'100%'} />
        );

        return (
            <MainLayout header={header} content={content} sidebar={sidebar} />
        );
    },
);

export default AppLoaderLayout;
