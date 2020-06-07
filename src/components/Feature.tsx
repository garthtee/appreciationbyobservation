import React, {FC} from 'react';
import {
  Col,
  ColProps,
  Row,
} from 'react-bootstrap';
import styled from 'styled-components';

type Props = & ColProps & {
  viewHeight?: number;
}

const FeatureWrapper = styled.div<Props>`
  .feature {
    height: ${(props) => props.viewHeight}vh;
    padding: 50px 0;
    .h1 {
      vertical-align: middle;
    }
  }
`;

const Feature: FC<Props> = ({
  children,
  viewHeight = 40,
  ...colProps
}) => (
  <FeatureWrapper viewHeight={viewHeight}>
    <Row className="feature">
      <Col
        className={`mx-auto align-self-center`}
        xs={12} {...colProps}
      >
        {children}
      </Col>
    </Row>
  </FeatureWrapper>
);

export default Feature;
