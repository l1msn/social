import 'app/styles/index.scss';
import {Story} from '@storybook/react';

const styleDecorator = (story: () => Story<any>) => story();

export default styleDecorator;
