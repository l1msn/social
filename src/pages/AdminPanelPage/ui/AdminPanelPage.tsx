import React, {JSX} from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import Page from '@/shared/ui/Page';

interface IAdminPanelPageProps {
    className?: string
}

const AdminPanelPage: React.FC<IAdminPanelPageProps> = ({className}: IAdminPanelPageProps): JSX.Element => {
    return (
        <Page className={classNames('', {}, [className])}>
            AdminPanelPage
        </Page>
    );
};

export default AdminPanelPage;


