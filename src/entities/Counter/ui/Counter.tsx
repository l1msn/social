import React, {JSX} from 'react';
import Button from 'shared/ui/Button';
import {useDispatch, useSelector} from 'react-redux';
import {counterActions} from '../model/slice/counterSlice';
import getCounterValue from '../model/selector/getCounterValue/getCounterValue';

interface ICounterProps {
    className?: string
}

const Counter: React.FC<ICounterProps> = (): JSX.Element => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);

    function inc() {
        dispatch(counterActions.increment());
    }

    function dec() {
        dispatch(counterActions.decrement());
    }

    return (
        <div>
            <h1 data-testid='value-title'>{counterValue}</h1>
            <Button onClick={inc} data-testid='inc-button'>
                inc
            </Button>
            <Button onClick={dec} data-testid='dec-button'>
                dec
            </Button>
        </div>
    );
};

export default Counter;


