import React from 'react';
import { MainWind } from './types';

const WindInfo: React.FC<MainWind> = (props) => {
    const { deg, speed } = props;
    return (
        <div>
            Wind speed is {speed} with {deg} degree.
        </div>
    );
}

export default WindInfo;
