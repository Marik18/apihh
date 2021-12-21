import React from "react";
import "antd/dist/antd.css";
import { Menu } from "antd";

const { SubMenu } = Menu;

export const MenuSave = () => {
  const onclickPDF = (e) => {
    console.log("click ", e);
  };

  const onclickHTML = (e) => {
    console.log("click ", e);
  };

  const onclickCSV = (e) => {
    console.log("click ", e);
  };


  return (
    <Menu
      style={{ width: 256 }}
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
    >
      <SubMenu key="sub1" title="Сохранить результаты">
        <Menu.ItemGroup key="g1" title="Отчет">
          <Menu.Item onClick={onclickPDF} key="1">Сохранить как PDF</Menu.Item>
          <Menu.Item onClick={onclickHTML} key="2">Cохранить как html</Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup key="g2" title="Результат выгрузки">
          <Menu.Item onClick={onclickCSV} key="3">CSV</Menu.Item>
        </Menu.ItemGroup>
      </SubMenu>
    </Menu>
  )
}