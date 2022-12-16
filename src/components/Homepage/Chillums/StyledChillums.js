import styled from "styled-components";
import { PrimarySubHeading, ShopBtnTransparent, TertiaryHeading } from "../../Globals/Globals";

export const ChillumMainContainer = styled.div`
text-align: center;
margin-top: 9rem;



/* .chillum-slick  .slick-next {
    right: 0rem;
    z-index: 1;
}
.chillum-slick  .slick-prev {
    left: 0rem;
    z-index:1;
} */
.chillum-slick .slick-prev:before, .chillum-slick .slick-next:before {
    font-size: 4rem !important; 
}

`
export const ChillumSlickContainer = styled.div`
margin-top: 5rem;


`
export const ChillumSubHeading = styled(TertiaryHeading)`
margin-top:2px;
padding: 0 2rem;
`
export const ChillumImgContainer = styled.div`
position: relative;
  text-align: center;
  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width:96%;
    opacity: 0;
    transition: 0.5s ease;
    background-color: rgba(0, 0, 0, 0.71);
  }
  .inner-overlay {
    color: white;
    font-size: 2rem;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 90%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    opacity: 0;
    h3{
        margin-top: 1rem;
font-size: 2.4rem;
font-style: normal;
font-weight: 600;
line-height: 3.6rem;
letter-spacing: 0em;
color: #FFFFFF;
    }
    p{
font-size: 1.6rem;
font-style: normal;
font-weight: 400;
line-height: 2.4rem;
text-align: center;
color: rgba(255, 255, 255, 0.8);
margin-top: 0.6rem;
    }
    .price{
font-size: 3.4rem;
font-style: normal;
font-weight: 700;
line-height: 5.1rem;
letter-spacing: 0em;
text-align: center;
margin: 0;
margin-top: 2rem;
 
    }
}
&:hover .inner-overlay,
  &:hover .overlay {
    opacity: 1;
  }

`
export const ChillumImg = styled.img`
padding-right:2rem;
height:100%;
object-fit: cover;
`
export const ChillumBtn = styled(ShopBtnTransparent)`
margin-top: 1.9rem;
`

export const ChillumSlick = styled.div`
.responsive-slick{
    margin-top: 5.6rem;
    
  @media screen and (min-width:1024px) {
    .slick-prev{

left: -25px !important;
z-index: 1;
} 
  .slick-next {
  right: 18px !important;
  z-index: 1;
}
  }


}
`