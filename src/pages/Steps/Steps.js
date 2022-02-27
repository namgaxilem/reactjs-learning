import React from "react";
import { Steps, Button, message, Row, Col, Layout, } from 'antd';

const { Step } = Steps;
const { Header, Content, Footer } = Layout;

const App = () => {
    const [current, setCurrent] = React.useState(0);

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };

    const steps = [
        {
            title: 'First',
            content: 'First-content',
        },
        {
            title: 'Second',
            content: 'Second-content',
        },
        {
            title: 'Last',
            content: 'Last-content',
        },
    ];

    return <Layout style={{ height: "100vh" }}>
        <Header>Header</Header>
        <Content>
            <Row>
                <Col span={8}>
                    <Steps current={current} direction="vertical">
                        {steps.map(item => (
                            <Step key={item.title} title={item.title} />
                        ))}
                    </Steps>
                </Col>
                <Col span={8}>
                    <div className="steps-content">{steps[current].content}</div>
                </Col>
                <Col span={8}>
                    detail
                </Col>
            </Row>
        </Content>
        <Footer>
            <Row>
                <Col span={8}></Col>
                <Col span={8}>
                    <div className="steps-action">
                        {current < steps.length - 1 && (
                            <Button type="primary" onClick={() => next()}>
                                Next
                            </Button>
                        )}
                        {current === steps.length - 1 && (
                            <Button type="primary" onClick={() => message.success('Processing complete!')}>
                                Done
                            </Button>
                        )}
                        {current > 0 && (
                            <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                                Previous
                            </Button>
                        )}
                    </div>
                </Col>
                <Col span={8}></Col>
            </Row>
        </Footer>
    </Layout>
};

export default App;