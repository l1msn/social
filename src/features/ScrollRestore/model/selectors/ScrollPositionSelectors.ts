import {IStateSchema} from '@/app/providers/StoreProvider';
import {createSelector} from '@reduxjs/toolkit';

class ScrollPositionSelectors {
    static getScrollPosition = (state: IStateSchema) => state.scrollRestore.scroll;
    static getScrollPositionByPath = createSelector(this.getScrollPosition,
        (state: IStateSchema, path: string) => path,
        (scroll, path) => scroll[path] || 0,
    );
}

export default ScrollPositionSelectors;
