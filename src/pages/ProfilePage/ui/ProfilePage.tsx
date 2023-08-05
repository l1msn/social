import React, {JSX} from 'react';
import classNames from 'shared/lib/classNames/classNames';
import Page from 'shared/ui/Page';
import {VStack} from 'widgets/Stack';
import {EditableProfileCard} from 'features/editableProfileCard';
import {useParams} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {Text} from 'shared/ui/Text';

interface IProfilePageProps {
    className?: string
}

const ProfilePage: React.FC<IProfilePageProps> = ({className}: IProfilePageProps): JSX.Element => {
    const {t} = useTranslation('profile');

    const {id} = useParams<string>();

    if (!id) {
        return <Text text={t('Profile not found!')} />;
    }

    return (
        <Page className={classNames('', {}, [className])}>
            <VStack max gap={'16'}>
                <EditableProfileCard id={id}/>
            </VStack>
        </Page>
    );
};

export default ProfilePage;


