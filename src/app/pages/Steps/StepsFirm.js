import React from 'react';

import { Layout } from '../../layouts';
import { Roadmap, References } from './components';

const Steps = () => {
    document.title = 'Onze aanpak | klanten';
    document.querySelector('meta[name="description"]').setAttribute("content", "Zo pakken wij het aan...");

    return (
        <Layout>
            <Roadmap target="firm" />
            <References target="firm" />
        </Layout>
    )
};

export default Steps;