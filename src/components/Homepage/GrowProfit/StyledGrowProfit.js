import styled from "styled-components"
import GrowProfitBack from '../../../assets/growProfitBack.svg';
import { PrimaryHeading, SubHeading, ViewMoreBtn } from "../../Globals/Globals";

export const GrowProfitMainContainer = styled.div`
 .grow-profit-width{
   max-width: 1440px;
   margin: 0 auto;
   
 }
margin-top: 11.2rem;
p{
  margin-top: 1.1rem;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.8rem;
  letter-spacing: 0em;
  color: #828282;

}
h5{
  margin-top: 3.2rem;
font-size: 2.4rem;
font-style: normal;
font-weight: 500;
line-height: 3.6rem;
letter-spacing: 0em;
color: #828282;

}
@media screen and (min-width:900px){
  .grow-profit-slick {
  margin-top: 5.6rem;
}
.grow-profit-slick  .slick-next {
  left: 50%;
  
  transform: translate(1rem,36rem);
  z-index: 1;

  &:before {
    font-size: 4rem !important;
    color: black;
}
}
.grow-profit-slick  .slick-prev {
  left: 52%;
  transform: translate(-7rem,36rem);
  z-index: 1;

  &:before {
    font-size: 4rem !important;
    color: black;
}
}
.grow-profit-slick .slick-prev:before, .grow-profit-slick .slick-next:before {
    font-size: 4rem !important; 
}
}
`

export const GrowProfitViewMore=styled(ViewMoreBtn)`
margin-top: 3.3rem;
margin-left: 2.4rem;
`
export const GrowProfitViewMoreBlack=styled(ViewMoreBtn)`
margin-top: 3.3rem;
background: #242424;
color: white;
`
export const GrowProfitPriceText=styled(SubHeading)`
margin-top: 4px;
`
export const GrowProfitHeading = styled(PrimaryHeading)`
color: #242424;
opacity: 0.8;
text-transform: capitalize;
`
export const GrowProfitSubHeading = styled(SubHeading)`
color: #333333;
opacity: 0.8;
margin-top: 0.9rem;
`
export const GrowProfitImgContainer = styled.div`
background-image:linear-gradient(to right, rgba(10, 71, 46, 0.88), rgba(10, 71, 46, 0.88)), url(${GrowProfitBack}) ;
  background-repeat: no-repeat;
  height: 61.5rem;
  background-size: cover;
margin-top: 3rem;
position: relative;
`
export const GrowProfitImg = styled.img`
width:63.6rem;
height:45.6rem;
`
export const GrowProfitSlickContainer = styled.div`
.text-container{
  margin-left: 7.5rem;
}
@media only screen and (max-width: 768px) {
 .text-container{
    margin-left: 0;
    padding:0 2rem;
  }
}
.overlay{
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .5s ease;
  background-color: #008CBA;
}
.text {
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}
`