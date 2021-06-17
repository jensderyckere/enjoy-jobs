import React from 'react';

import { Layout } from '../../layouts';
import { Roadmap, References } from './components';

const Steps = () => {
    document.title = 'Onze aanpak | kandidaten';
    document.querySelector('meta[name="description"]').setAttribute("content", "Zo pakken wij het aan...");

    return (
        <Layout>
            <Roadmap target="audience" />
            <References target="audience" />
        </Layout>
    )
};

export default Steps;