import React, { JSX } from 'react';
import Page from '@/widgets/Page';
import { AppLogo } from '@/shared/ui/redesigned/AppLogo';
import { Card } from '@/shared/ui/redesigned/Card';
import { ToggleFeatures } from '@/shared/features';
import { Text } from '@/shared/ui/redesigned/Text';
import { Card as DeprecatedCard } from '@/shared/ui/deprecated/Card';
import { Text as DeprecatedText } from '@/shared/ui/deprecated/Text';

const MainPage: React.FC = (): JSX.Element => {
    const DeprecatedMainPage = (
        <Page data-testid={'MainPage'}>
            <DeprecatedCard>
                <DeprecatedText />
            </DeprecatedCard>
        </Page>
    );

    const RedesignedMainPage = (
        <Page data-testid={'MainPage'}>
            <AppLogo size={100} />
            <Card>
                <Text
                    title={
                        'Добро пожаловать на наш сайт о мире информационных технологий и не только! Здесь вы найдете самые свежие и интересные статьи на темы, связанные с программированием, веб-разработкой, искусственным интеллектом, кибербезопасностью и многими другими аспектами IT-сферы.\n' +
                        '\n' +
                        'Наша цель - делиться знаниями и новостями, помогать начинающим разработчикам, а также обсуждать ключевые тенденции и инновации в мире технологий. Мы стремимся создать сообщество единомышленников, где каждый может найти что-то полезное и вдохновляющее.\n' +
                        '\n' +
                        'Присоединяйтесь к нам, чтобы оставаться в курсе последних событий и открывать для себя захватывающий мир IT!\n'
                    }
                />
            </Card>
        </Page>
    );

    return (
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={RedesignedMainPage}
            off={DeprecatedMainPage}
        />
    );
};

export default MainPage;
