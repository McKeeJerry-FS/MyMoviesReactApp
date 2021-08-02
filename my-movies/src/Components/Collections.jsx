import React from 'react';
import { ProgressPlugin } from 'webpack';

const Collection = ({ Children }) => {
    return (
        <div>
            <p>{Children}</p>
            test
        </div>
    );
};

export default Collection;