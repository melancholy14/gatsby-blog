import React from 'react';
import { Link } from 'gatsby';

import Layout from '../../components/layout';

const LinuxIndexPage = () => (
  <Layout>
    <h1>Here is linux pages</h1>
    <Link to="linux/nslookup-options">nslookup options</Link>
  </Layout>
)

export default LinuxIndexPage;