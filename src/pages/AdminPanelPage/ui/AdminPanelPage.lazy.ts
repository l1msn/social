import React from 'react';

const AdminPanelPageLazy = React.lazy(
    () => import('./AdminPanelPage'),
);

export default AdminPanelPageLazy;
