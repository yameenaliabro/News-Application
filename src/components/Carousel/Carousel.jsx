import { Col, Row } from "antd"
import "./carousel.css"
function Carousel() {
    return (
        <div>

            <div className="container">
                <div className="banner banner-slide-1">
                    <Carousel>
                        <Row>
                            <Col span={24} className="content">
                                <h5 className="nes-title">News</h5>
                                <h1 className="new-descrition">
                                    this is break news
                                </h1>
                            </Col>
                        </Row>
                    </Carousel>
                </div>
            </div>
            <div className="container">
                <div className="banner banner-slide-2">
                    <Carousel>
                        <Row>
                            <Col span={24} className="content">
                                <h5 className="nes-title">News</h5>
                                <h1 className="new-descrition">
                                    this is break news
                                </h1>
                            </Col>
                        </Row>
                    </Carousel>
                </div>
            </div> <div className="container">
                <div className="banner banner-slide-3">
                    <Carousel>
                        <Row>
                            <Col span={24} className="content">
                                <h5 className="nes-title">News</h5>
                                <h1 className="new-descrition">
                                    this is break news
                                </h1>
                            </Col>
                        </Row>
                    </Carousel>
                </div>
            </div>
        </div>
    )
}
export default Carousel