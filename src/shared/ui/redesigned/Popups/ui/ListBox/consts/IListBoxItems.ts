import React from 'react';

interface IListBoxItems<T extends string> {
    value: T;
    content: React.ReactNode;
    disabled?: boolean;
}

export default IListBoxItems;
