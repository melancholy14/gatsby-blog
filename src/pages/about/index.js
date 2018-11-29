import React from 'react';

import Layout from '../../components/layout';

const AboutPage = () => (
  <Layout>
    <div
      style={{
        textAlign: 'center',
        margin: '5rem 1.45rem'
      }}
    >
      <img
        style={{
          borderRadius: '50%'
        }}
        src="https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-1/p160x160/46449181_1991666380910798_7882554466191278080_n.jpg?_nc_cat=110&_nc_ht=scontent-lht6-1.xx&oh=46f6dc65b2836a020c7f5ffa9c4d711c&oe=5C686340"
        alt="profile"
      />
      <p>
        Hello, I'm Misol :) I've worked as a developer for about 5 years.<br />
        My interests are Programming (especially, React!), Backpacking trip and Beer !!<br />
        If you have anything to talk to me, please feel free to contact me via my social media.<br />
        You can see what I use at the bottom of my blog.
      </p>
    </div>
  </Layout>
)

export default AboutPage;