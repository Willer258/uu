import { Avatar, Badge } from "antd";
import React from "react";
import { UserOutlined } from "@ant-design/icons";

interface AvatarProps {
  name?: string | null | undefined;
  badge?: string;
  size?: number;
  image?: any;
  count?: string;
  className?: string;
  shape?: "circle" | "square" | undefined;
}
function AvatarComponent({
  badge,
  size,
  name,
  image,
  count,
  shape,
}: AvatarProps) {
  return (
    <div>
      {!badge ? (
        <div className="flex items-center space-x-3">
          <Avatar
            size={size}
            icon={<UserOutlined />}
            src={image}
            shape={shape}
          />{" "}
          {name ? <span className="font-bold truncate ">{name}</span> : ""}
        </div>
      ) : (
        <div className="flex items-center space-x-3">
          <Badge count={count}>
            <Avatar shape={shape} size={size} icon={<UserOutlined />} />
          </Badge>
          {name ? <span className="font-bold truncate ">{name}</span> : ""}
        </div>
      )}
    </div>
  );
}

export default AvatarComponent;
