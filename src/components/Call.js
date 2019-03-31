import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Icon } from 'react-icons-kit'
import { home } from 'react-icons-kit/icomoon/home'
import Carousel from '../components/Carousel'


export default class Call extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
     <CallContainer>
         <div className="container">
         <LeftContainer>
             <TopLeftLabel>
                 <h5>My Markets</h5>
                 <ColoredLine color="red" />

             </TopLeftLabel>
          <BottomLeftDiv>
              <InLeftDiv>
               
              </InLeftDiv>
              <text>Consumer</text>
              <InRightDiv>
              
              </InRightDiv>
              <text>Apparel</text>


          </BottomLeftDiv>
          <LastLeftDiv>

          </LastLeftDiv>

         </LeftContainer>
         <Carousel />
         <RightContainer>
            <TopLabel>
            <h5> unmissable 2019 </h5>
            </TopLabel>
            <BottomDiv>

            </BottomDiv>
            <ColoredLine color="black" />
            <LastDiv>

            </LastDiv>
         </RightContainer>
     

         </div>

     </CallContainer>
    )
  }
}


const CallContainer = styled.div `
        position:relative;
        height: 1000
        top:0;
        left:50;
        right:50;
        bottom:3000;
        background:rgba(0,0,0,0.3);
        display:inlineBlock;
        align-items:center;
        justify-content:center;
        #modal{
        background:var(--mainBlue);
        }
`;

const TopLeftLabel = styled.div`
  height : 30px;
  width: 220px;
  text-color: white;
  margin: 15px 15px 7px;
  text-align : center;



`;

const BottomLeftDiv = styled.div`
  height : 110px;
  width: 220px;
  background:rgba(0,0,0.3,0.3);
  text-color: white;
  margin: 15px 15px 7px;
  text-align : center;
  

`;
const InLeftDiv = styled.div`
  height : 70px;
  width: 70px;
  background:rgba(0,0,0.3,0.3);
  text-color: white;
  margin: 15px 15px 7px ;
  text-align : center;

`;

const InRightDiv = styled.div`
  height : 70px;
  width: 70px;
  background:rgba(0,0,0.3,0.3);
  text-color: white;
  margin: 15px 15px 7px;


`;

const LastLeftDiv = styled.div`
  height : 110px;
  width: 220px;
  background:rgba(0,0,0.3,0.3);
  text-color: white;
  margin: 15px 15px 7px;
  text-align : center;
  display:inlineBlock;




`;

const LeftContainer = styled.div`
    height : 320px;
    width : 250px;
    left:10;
    background:rgba(0,0,0,0.3);
    float:left;


}`
;

const TopLabel = styled.div`
  height : 30px;
  width: 220px;
  background:rgba(0,0,0.3,0.3);
  text-color: white;
  margin: 15px 15px 7px;
  text-align : center;



`;

const BottomDiv = styled.div`
  height : 110px;
  width: 220px;
  background:rgba(0,0,0.3,0.3);
  text-color: white;
  margin: 15px 15px 7px;
  text-align : center;



`;
const LastDiv = styled.div`
  height : 110px;
  width: 220px;
  background:rgba(0,0,0.3,0.3);
  text-color: white;
  margin: 15px 15px 7px;
  text-align : center;



`;




const RightContainer = styled.div`
    height : 320px;
    width : 250px;
    background:rgba(0,0,0,0.3);
    float:right;



}`
;

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 2.5
        }}
    />
);



