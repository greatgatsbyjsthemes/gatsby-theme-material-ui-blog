import React from 'react';
import Helmet from 'react-helmet';

import Layout from '../layouts';
import { fadeInTransitionTime } from '../constants/transitions';
import SEO from '../components/Seo';
import Legal from '../components/Legal';

import useSiteMetadata from '../hooks/use-site-metadata';
import { Fade } from '@material-ui/core';

/**
 * Legal pages for the blog
 *
 * @param {Object} props
 * @returns {Component}
 */
const LegalPage = ({ classes }) => {
  const { seoKeywords, siteUrl, title } = useSiteMetadata();

  return (
    <Layout>
      <SEO title='Legal' keywords={seoKeywords} />
      <Fade in timeout={{ enter: fadeInTransitionTime }}>
        <div>
          <Helmet>
            <title>{`Legal | ${title}`}</title>
            <link rel='canonical' href={`${siteUrl}/legal/`} />
          </Helmet>
          <Legal />
        </div>
      </Fade>
    </Layout>
  );
};

export default LegalPage;
