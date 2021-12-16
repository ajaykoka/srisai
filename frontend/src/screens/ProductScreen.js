import React from 'react'
import Header from '../components/Header'
import { Container, Row, Col, Button } from 'react-bootstrap'

const ProductScreen = () => {
    return (
        <>
        <main>
            <Header/>
            <Container>
                <Row>
                   <Col>
                   <img src="https://cdn.shopify.com/s/files/1/0941/2116/products/IMG20181206133507_grande.jpg?v=1544083874" Height="500"
                      className="d-inline-block align-top w-50 h-100 pt-5" 
                      alt="" />  
                   </Col>

                    <Col className="d-inline-block align-top pt-5 color-primary">

                    <h1>Silver Set</h1>

                    <p>Silver pooja item sets ideally include silver lamps for pooja, silver plates, silver bowls. </p>
                 
                     <div >
                        <Button variant="primary">Add to Cart</Button>{' '}{' '}
                        <Button variant="secondary">Buy Now</Button>{' '}
                    </div>

                </Col>
                </Row>
            </Container>

        </main>
        </>
            
      
    )

}

export default ProductScreen
