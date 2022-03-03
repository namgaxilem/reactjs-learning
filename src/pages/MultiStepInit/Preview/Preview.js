import React from 'react';
import { Form, Input, Collapse, Radio, Card, Row, Col, Divider, Space, Select } from 'antd';
import styles from '../MultiStepInit.module.less'

const Preview = () => {
  return <>
    <Form
      className={styles.formWrapper}
      name="basic"
      labelCol={{ span: 14 }}
      wrapperCol={{ span: 10 }}
      autoComplete="off">
      <Row>
        <Col span={11}>
          <Card className={styles.cardWrapper}>
            <Form.Item
              label="Number Of Nifi Node"
              name="numberOfNifiNode" >
              <Input type={"number"} />
            </Form.Item>
          </Card>

          {/* <Card className={styles.cardWrapper} title={<Form.Item label="Auto Scaling Nifi Node" name="radio-group">
            <Radio.Group>
              <Radio value="a">Enabled</Radio>
              <Radio value="b">Disabled</Radio>
            </Radio.Group>
          </Form.Item>}> */}
          <Card className={styles.cardWrapper}>
            <legend>
              <Form.Item label="Auto Scaling Nifi Node" name="radio-group">
                <Radio.Group>
                  <Radio value="a">Enabled</Radio>
                  <Radio value="b">Disabled</Radio>
                </Radio.Group>
              </Form.Item>
            </legend>
            <Form.Item
              label="Minimum Nifi Node"
              name="minimumNifiNode" >
              <Input type={"number"} />
            </Form.Item>
            <Form.Item
              label="Maximum Nifi Node"
              name="maximumNifiNode" >
              <Input type={"number"} />
            </Form.Item>
            <Form.Item
              label="CPU Target Average Utilization"
              name="CPUTargetAverageUtilization" >
              <Input type={"number"} />
            </Form.Item>
            <Form.Item
              label="Memory Target Average Utilization"
              name="memoryTargetAverageUtilization" >
              <Input type={"number"} />
            </Form.Item>
          </Card>

          <Card className={styles.cardWrapper} title="Resource Request">
            <Form.Item
              label="CPU"
              name="numberOfNifiNode" >
              <Input type={"number"} />
            </Form.Item>
            <Form.Item
              label="Memory"
              name="numberOfNifiNode" >
              <Input type={"number"} />
            </Form.Item>
          </Card>

          <Card className={styles.cardWrapper} title="Resource Limit">
            <Form.Item
              label="CPU"
              name="numberOfNifiNode" >
              <Input type={"number"} />
            </Form.Item>
            <Form.Item
              label="Memory"
              name="numberOfNifiNode" >
              <Input type={"number"} />
            </Form.Item>
          </Card>

          <Card className={styles.cardWrapper}>
            <Space direction="vertical" className={styles.spaceWidth}>
              <Form.Item
                label="Cluster Domain"
                name="minimumNifiNode" >
                <Input />
              </Form.Item>
              <Form.Item
                label="x509CertRdns"
                name="minimumNifiNode" >
                <Input />
              </Form.Item>
              <Form.Item
                label="Secret Provider Class"
                name="minimumNifiNode" >
                <Input />
              </Form.Item>
              <Form.Item
                label="Web Proxy Host"
                name="minimumNifiNode" >
                <Input />
              </Form.Item>
              <Form.Item
                label="Provenance Storage"
                name="minimumNifiNode" >
                <Input />
              </Form.Item>
              <Form.Item
                label="Secrets"
                name="minimumNifiNode" >
                <Input.TextArea />
              </Form.Item>
              <Form.Item
                label="JVM Memory"
                name="minimumNifiNode" >
                <Input />
              </Form.Item>
            </Space>
          </Card>

          <Space direction="vertical" className={styles.spaceWidth}>
            <Collapse defaultActiveKey={['1']}>
              <Collapse.Panel header="Image" key="1">
                <Form.Item
                  label="Repository"
                  name="minimumNifiNode" >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Tag"
                  name="minimumNifiNode" >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Pull Policy"
                  name="minimumNifiNode" >
                  <Select
                    placeholder="Select a option and change input text above"
                    allowClear>
                    <Select.Option value="male">Always</Select.Option>
                    <Select.Option value="female">female</Select.Option>
                    <Select.Option value="other">other</Select.Option>
                  </Select>
                </Form.Item>
              </Collapse.Panel>
            </Collapse>

            <Collapse defaultActiveKey={['1']}>
              <Collapse.Panel header="Persistence" key="1">
                <Form.Item
                  label="Storage Class"
                  name="minimumNifiNode" >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Premium Storage Class"
                  name="minimumNifiNode" >
                  <Input />
                </Form.Item>

                <Card className={styles.cardWrapper}>
                  <Form.Item
                    label="Config Storage Size"
                    name="minimumNifiNode" >
                    <Input type='number' />
                  </Form.Item>
                  <Form.Item
                    label="Auth Config Storage Size"
                    name="minimumNifiNode" >
                    <Input type='number' />
                  </Form.Item>
                  <Form.Item
                    label="Data Storage Size"
                    name="minimumNifiNode" >
                    <Input type='number' />
                  </Form.Item>
                  <Form.Item
                    label="Flow File Repo Storage Size"
                    name="minimumNifiNode" >
                    <Input type='number' />
                  </Form.Item>
                  <Form.Item
                    label="Content Repo Storage Size"
                    name="minimumNifiNode" >
                    <Input type='number' />
                  </Form.Item>
                  <Form.Item
                    label="Provenance Repo Storage Size"
                    name="minimumNifiNode" >
                    <Input type='number' />
                  </Form.Item>
                  <Form.Item
                    label="Log Storage Size"
                    name="minimumNifiNode" >
                    <Input type='number' />
                  </Form.Item>
                </Card>
              </Collapse.Panel>
            </Collapse>
          </Space>
        </Col>

        <Col span={1} className={styles.divider}>
          <Divider type='vertical' dashed style={{ height: '100%' }} />
        </Col>

        <Col span={11}>
          <Space direction="vertical" className={styles.spaceWidth}>
            <Collapse defaultActiveKey={['1']}>
              <Collapse.Panel header="Auth" key="1">
                <Form.Item
                  label="Admin"
                  name="minimumNifiNode" >
                  <Input />
                </Form.Item>

                <Card className={styles.cardWrapper}>
                  <legend>OIDC</legend>
                  <Form.Item
                    label="Discovery URL"
                    name="minimumNifiNode" >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label="Tenant Id"
                    name="minimumNifiNode" >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label="Claim Identifying User"
                    name="minimumNifiNode" >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label="Additional Scopes"
                    name="minimumNifiNode" >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label="Azure Group Filter"
                    name="minimumNifiNode" >
                    <Input.TextArea />
                  </Form.Item>
                </Card>
              </Collapse.Panel>
            </Collapse>

            <Collapse defaultActiveKey={['1']}>
              <Collapse.Panel header="Ingress" key="1">
                <Form.Item
                  label="Domain Suffix"
                  name="minimumNifiNode" >
                  <Input.TextArea />
                </Form.Item>
                <Form.Item
                  label="Istio Gateway"
                  name="minimumNifiNode" >
                  <Input.TextArea />
                </Form.Item>
              </Collapse.Panel>
            </Collapse>
          </Space>
        </Col>
      </Row>

    </Form>
  </>
}

export default Preview;