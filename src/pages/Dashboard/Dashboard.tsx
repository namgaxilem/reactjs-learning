import { InboxOutlined, UploadOutlined } from '@ant-design/icons';
import {
  Button, Form, Upload
} from 'antd';
import React, { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { changeTitle } from "../../store/title/titleSlice";
import './Dashboard.less';

function Dashboard() {
  const [form] = Form.useForm()
  const dispatch = useDispatch();

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  useEffect(() => {
    dispatch(changeTitle("Dashboard"));
  });

  const normFile = (e: any) => {
    if (Array.isArray(e))
      return e;
    return e && e.fileList;
  }

  const onUpload = (file: any) => {
    const reader = new FileReader()
    reader.addEventListener('load', event => {
      const result: string = event?.target?.result as string
      form.setFieldsValue({
        content: result.replace('data:application/json;base64,', '') as string
      })
    })
    reader.readAsDataURL(file)
    return Promise.resolve(file)
  }

  const fileList = [
    {
      uid: '-1',
      name: 'xxx.png',
    },
    {
      uid: '-2',
      name: 'yyy.png',
    }
  ];

  return (<>
    <Form
      name="validate_other"
      onFinish={onFinish}
      initialValues={{
        'input-number': 3,
        'checkbox-group': ['A', 'B'],
        rate: 3.5,
      }}
    >
      <Form.Item
        name="upload"
        label="Upload"
        valuePropName="fileList"
        getValueFromEvent={normFile}
        extra="longgggggggggggggggggggggggggggggggggg"
      >
        <Upload
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          listType="picture"
          defaultFileList={[...fileList]}
        >
          <Button icon={<UploadOutlined />}>Upload</Button>
        </Upload>
      </Form.Item>

      <Form.Item label="Dragger" name='description'>
        <Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
          <Upload.Dragger
            name="files"
            maxCount={1} action={onUpload}
            defaultFileList={[...fileList]}
          >
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
          </Upload.Dragger>
        </Form.Item>
      </Form.Item>
    </Form>
  </>
  )
}

export default Dashboard;