import { Menu } from "antd";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const navigation = [
    { label: "Home", key: "/" },
    { label: "Favourites", key: "/favourites" }
  ];

  const handleMenuClick = ({ key }: { key: string; }) => {
    if (key) {
      navigate(key);
    }
  }

  return (
    <>
      <Menu
        theme="dark"
        defaultSelectedKeys={["/"]}
        mode="horizontal"
        items={navigation}
        onClick={handleMenuClick}
      />
    </>
  );
}
