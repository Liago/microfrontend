import { Avatar, Button, Table } from "antd";
import { ColumnsType } from "antd/lib/table";
import React, { useEffect, useState } from "react";

interface User {
  name: {
    first: string;
    last: string;
  };
  email: string;
  phone: string;
  picture: {
    medium: string;
  };
  login: {
    uuid: string;
  };
}

const UserTable: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://randomuser.me/api/?results=10");
      const data = await response.json();
      setUsers(data.results);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching users:", error);
      setLoading(false);
    }
  };

  const columns: ColumnsType<User> = [
    {
      title: "Avatar",
      dataIndex: "picture",
      render: (picture) => <Avatar src={picture.medium} />,
    },
    {
      title: "Name",
      dataIndex: "name",
      render: (name) => `${name.first} ${name.last}`,
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
    },
  ];

  return (
    <>
      <Table<User>
        dataSource={users}
        columns={columns}
        loading={loading}
        rowKey={(user) => user.login.uuid}
        pagination={false}
      />
      <Button onClick={fetchUsers} loading={loading}>
        Refresh
      </Button>
    </>
  );
};

export default UserTable;
