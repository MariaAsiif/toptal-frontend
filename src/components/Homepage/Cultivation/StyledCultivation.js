import styled from "styled-components";

export const CultivationMainContainer = styled.div`
margin-top: 12rem;
text-align: center;
h3{
    font-size: 1.8rem;
line-height: 27px;
color: #828282;
}
p{
    font-size: 3.2rem;
line-height: 48px;
opacity: 0.8;
color: #4F4F4F;
}
p{
margin: 0;
font-size: 3.2rem;
font-style: normal;
font-weight: 500;
line-height: 4.8rem;
letter-spacing: 0em;
color:#4F4F4F;
;
}
`
export const CultivationImgContainer = styled.div`
position:relative;
transition: .5s ease;
margin-top: 3.5rem;
text-align: -webkit-center;
text-align: -moz-center;
.product-description{
   p{
    text-align: center;
   }
}
.overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 13%;
    right: 0;
    opacity: 0;
    width: 77%;
    height: 86%;
    transition: 0.5s ease;
    background-color: rgba(0,0,0,0.71);
  }
.inner-overlay{
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  opacity: 0;
  }
   &:hover,  &:hover .inner-overlay ,&:hover .overlay{
        opacity: 1;
        
    }
h3{
font-size: 2rem;
font-style: normal;
font-weight: 600;
line-height: 3rem;
letter-spacing: 0em;
text-align: center;
color: #242424;
}
p{
font-size: 1.5rem;
font-style: normal;
font-weight: 400;
line-height: 2.7rem;
letter-spacing: 0em;
text-align: start;
color: #828282;


}
`

export const CultivationImg1 = styled.img`
height:100%;
object-fit:cover;
`

export const CultivationiImg = styled.img`
width: 32rem;
height:40rem;
`
