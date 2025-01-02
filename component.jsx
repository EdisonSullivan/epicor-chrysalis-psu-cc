import React from 'react';
import { withComponentFeatures } from 'universal-dashboard';
import { Button } from 'react95';

const ChyButton = props => {

    const p = {
        onClick: () => props.onClick()
    }

    return <Button {...p}>{props.text}</Button>
}

export default withComponentFeatures(ChyButton);