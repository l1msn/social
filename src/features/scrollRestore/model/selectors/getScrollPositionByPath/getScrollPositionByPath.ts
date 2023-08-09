import {IStateSchema} from '@/app/providers/StoreProvider';
import {createSelector} from '@reduxjs/toolkit';
import getScrollPosition from '../getScrollPosition/getScrollPosition';

const getScrollPositionByPath = createSelector(getScrollPosition,
    (state: IStateSchema, path: string) => path,
    (scroll, path) => scroll[path] || 0,
);

export default getScrollPositionByPath;
