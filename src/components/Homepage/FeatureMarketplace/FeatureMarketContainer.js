import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import featureMark from '../../../assets/featureMarketplace.svg'

import { FeatureHeading, FeatureMarketPlaceBtn, FeatureMarkImg, FeatureMarkMain, FeatureMarkTextContainer, FeatureSubHeading } from './StyledFeatureMark'

const FeatureMarketContainer = ({order}) => {
    return (

        <Container fluid className='p-0'>
            <FeatureMarkMain>
                <Container>
                    <Row>
                        <Col lg={6} className={order === 'first' ? 'order-0' : 'order-1'}>
                            <FeatureMarkImg src={featureMark} alt={featureMark} />
                        </Col>
                        <Col lg={6} className={order === 'second' ? 'order-1' : 'order-0'}>
                            <FeatureMarkTextContainer>
                                <FeatureHeading>Marketplace Vendors</FeatureHeading>
                                <FeatureSubHeading>All products featured are available from selected marketplace vendors, please search or select the product category you require</FeatureSubHeading>
                                <FeatureMarketPlaceBtn>Start Buying</FeatureMarketPlaceBtn>
                            </FeatureMarkTextContainer>
                        </Col>
                    </Row>
                </Container>
            </FeatureMarkMain>
        </Container>
    )
}

export default FeatureMarketContainer