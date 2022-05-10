import {
    EditOutlined,
    EllipsisOutlined, SettingOutlined
} from "@ant-design/icons";
import { Avatar, Card, Divider } from "antd";
import Meta from "antd/lib/card/Meta";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeTitle } from "../../store/title/titleSlice";

const room_data = {
    // id: randomUUID(),

}

const Rooms = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeTitle("Dashboard"));
  });

  return (
    <>
      <Divider orientation="left" orientationMargin="0">
        Tầng trệt
      </Divider>

      <Card
        style={{ width: 300 }}
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title="Phòng lớn"
          description="This is the description"
        />
      </Card>

      <Divider orientation="left" orientationMargin="0">
        Tầng 1
      </Divider>

      <Card
        style={{ width: 300 }}
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title="Card title"
          description="This is the description"
        />
      </Card>

      <Divider orientation="left" orientationMargin="0">
        Tầng 2
      </Divider>
      <Divider orientation="left" orientationMargin="0">
        Tầng 3
      </Divider>
    </>
  );
}

export default Rooms;
