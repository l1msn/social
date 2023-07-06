import {createSelector} from '@reduxjs/toolkit';
import getCounter from 'entities/Counter/model/selector/getCounter/getCounter';
import {ICounterSchema} from 'entities/Counter';

const getCounterValue =
    createSelector(getCounter, (counter: ICounterSchema) =>
        counter.value,
    );

export default getCounterValue;
