import React from 'react';

import { useToolbox } from '../../services'
import { Layout } from '../../layouts';
import { About, BlogsSection, Contact, Head, SearchEngine, Team, WhyFullSubjects, WhySubjects } from './components';

const Home = () => {
    const { target } = useToolbox();
    document.title = 'Enjoy Jobs | Startpagina';

    return (
        <Layout>
            <Head />
            { target === 'audience' ? <SearchEngine /> : <WhySubjects />}
            <About />
            { target !== 'audience' && <WhyFullSubjects />}
            <Team />
            <BlogsSection title="Neus rond door onze blogs" />
            <Contact />
        </Layout>
    );
};

export default Home;