import React from 'react';

import './styles.css';
/**
 *  Statelles components 
 *  no react podemos criar componentes 
 * a partir de funções
 * */
const Header = () => (
  <header id="main-header">JSHunt</header>
);

export default Header;



/**
 * a mesma coisa de
 * class Header extends Component{
 *  render() {
 *
 *  }
 * }
 *
 * Esse metodo é para ser utilizado
 * com state.
 */