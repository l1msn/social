import React, {JSX} from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import Page from '@/widgets/Page';
import {VStack} from '@/shared/ui/Stack';
import {EditableProfileCard} from '@/features/EditableProfileCard';
import {useParams} from 'react-router-dom';

interface IProfilePageProps {
    className?: string
}

const ProfilePage: React.FC<IProfilePageProps> = ({className}: IProfilePageProps): JSX.Element => {
    const {id} = useParams<string>();


    return (
        <Page className={classNames('', {}, [className])}>
            <VStack max gap={'16'}>
                <EditableProfileCard id={id}/>
            </VStack>
        </Page>
    );
};

export default ProfilePage;


