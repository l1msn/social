import React, { JSX } from 'react';
import Page from '@/widgets/Page';
import { Card as DeprecatedCard } from '@/shared/ui/deprecated/Card';
import { Text as DeprecatedText } from '@/shared/ui/deprecated/Text';
import { Card } from '@/shared/ui/redesigned/Card';
import { Text } from '@/shared/ui/redesigned/Text';
import { ToggleFeatures } from '@/shared/features';
import { AppLogo } from '@/shared/ui/redesigned/AppLogo';

const AboutPage: React.FC = (): JSX.Element => {
    const DeprecatedAboutPage = (
        <Page data-testid={'AboutPage'}>
            <DeprecatedCard>
                <DeprecatedText />
            </DeprecatedCard>
        </Page>
    );

    const RedesignedAboutPage = (
        <Page data-testid={'AboutPage'}>
            <AppLogo size={100} />
            <Card>
                <Text
                    title={
                        'Наш сайт - это место, где мы объединяем пассивное увлечение информационными технологиями и стремление делиться знаниями с сообществом. Мы верим, что IT-индустрия - это не только коды и алгоритмы, но и бесконечные возможности для творчества и решения сложных задач.\n' +
                        '\n' +
                        'Наша команда состоит из опытных специалистов в области программирования, дизайна, веб-разработки и других смежных областей. Мы стараемся предоставлять актуальную информацию, проверенные рекомендации и интересные истории из нашего опыта.\n' +
                        '\n' +
                        'Если у вас есть вопросы, предложения или вы хотите поделиться своей историей успеха, не стесняйтесь связаться с нами через нашу страницу контактов. Благодарим вас за то, что вы с нами, и надеемся, что наш сайт будет вам полезен и вдохновит вас на новые свершения в мире IT!\n'
                    }
                />
            </Card>
        </Page>
    );

    return (
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={RedesignedAboutPage}
            off={DeprecatedAboutPage}
        />
    );
};

export default AboutPage;
