import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import logo from '../logo.svg'
import styled from 'styled-components'
import {ButtonContainer} from './Button'



export default class Navbar extends Component{
    render(){
        return (
            <div>
              <nav className="navbar navbar-dark bg-dark">

                  {/* https://www.iconfinder.com/icons/1243689/call_phone_icon
                    Creative Commons (Attribution 3.0 Unported);
                    https://www.iconfinder.com/Makoto_msk */}
                    <Link to='./'>
                    <img src={logo} alt="store" className="navbar-brand"/>

                    </Link>
                    < ul className="navbar-nav.align-items-center">
                       <li className="nav-item ml-5"> 
                         <Link to="/" className="nav-link">
                           products
                         </Link>
                       </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                      <h5> Sunglasses</h5>
                   </form>
                   <form className="form-inline my-2 my-lg-0">
                      <h5> Eyeglasses</h5>
                   </form>
                   <form className="form-inline my-2 my-lg-0">
                      <h5> Customize</h5>
                   </form>
                   <form className="form-inline my-2 my-lg-0">
                      <h5> Gifts</h5>
                   </form>
                    <form className="form-inline my-2 my-lg-0">
                      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                      <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
                   </form>
                    <Link to='/cart' className="ml-auto">
                      <ButtonContainer>
                        <span className="mr-2">
                          <i className="fas fa-cart-plus" />
                        </span>
                        my cart
                      </ButtonContainer>
                    </Link>
                    </nav>
            </div>
           
          
        )
    }
}


const NavWrapper = styled.nav`
background:var(--mainBlue);
.nav-link{
    color:var(--mainWhite) !important;
    font-size:1.3rem;
    text-transform:capitalize !important;
}

`;

