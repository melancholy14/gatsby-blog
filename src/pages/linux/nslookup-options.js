import React from 'react';

import Layout from '../../components/layout';

import man from '../../images/linux/nslookup_man.png';
import a from '../../images/linux/nslookup_a.png';
import ptr from '../../images/linux/nslookup_ptr.png';
import mx from '../../images/linux/nslookup_mx.png';
import txt from '../../images/linux/nslookup_txt.png';
import ns from '../../images/linux/nslookup_ns.png';
import any from '../../images/linux/nslookup_any.png';

const NslookupOptionsPage = () => (
  <Layout>
    <div className="date">July 8, 2018</div>
    <div className="title">nslookup options</div>
    <div>
      Simply put, <span>nslookup</span> shorten to Name Servers Lookup.
      This is one of network managing tools on Linux. You can query for finding a domain name and an ip address.
      For more info, please check <a href="https://en.wikipedia.org/wiki/nslookup">https://en.wikipedia.org/wiki/nslookup</a>
    </div>
    <img src={man} alt="nslookup-man" />
    <img src={a} alt="nslookup-a" />
    <img src={ptr} alt="nslookup-ptr" />
    <img src={mx} alt="nslookup-mx" />
    <img src={txt} alt="nslookup-txt" />
    <img src={ns} alt="nslookup-ns" />
    <img src={any} alt="nslookup-any" />
  </Layout>
)

export default NslookupOptionsPage;