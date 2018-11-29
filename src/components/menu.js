import React from 'react';
import { Link } from 'gatsby';

const MenuButton = ({ to, children }) => (<Link style={{
  fontWeight: '600',
  textTransform: 'uppercase',
  textDecoration: 'none',
  color: 'darkslategray',
  padding: '1rem'
}}
  to={`/${to}`}
>
  { children }
</Link>);

export default class Menu extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      select: null,
    };
  }

  handleSelect = (select) => () => this.setState({ select });

  render() {
    return (<aside style={{
      lineHeight: '3.3rem',
      height: '3.5rem',
      borderBottom: '0.2rem double slateblue',
    }}>
      {/* { category.map((cat) => (<h3>{cat}</h3>))} */}
      { ['linux', 'eclipse', 'spring', 'java', 'react', 'gatsby'].map((cat) => <MenuButton to={cat}>{cat}</MenuButton>) }
    </aside>);
  }
}