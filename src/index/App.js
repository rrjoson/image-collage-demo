import React, { useState } from "react";
import "./App/styles.css";
import Filestack from "./App/Filestack";
import Demo from "./Demo";
import "antd-mobile/dist/antd-mobile.css";
import { NavBar, Icon, TabBar } from "antd-mobile";

const data = [
  {
    name: "Demo",
    icon: "⏹",
    pathname: "/demo"
  },
  {
    name: "Try it out",
    icon: "⏹",
    pathname: "/try"
  },
  {
    name: "About",
    icon: "⏹",
    pathname: "/about"
  }
];

export default function App() {
  const [view, setView] = useState("/demo");

  return (
    <div className="fixed inset-0">
      <div className="mx-auto max-w-lg h-full">
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
        >
          {data.map(item => (
            <TabBar.Item
              title={item.name}
              key={item.name}
              icon={
                <span
                  role="img"
                  aria-label={item.name}
                  style={{
                    fontSize: "22px"
                  }}
                >
                  {item.icon}
                </span>
              }
              selectedIcon={
                <span
                  role="img"
                  aria-label={item.name}
                  style={{
                    fontSize: "22px"
                  }}
                >
                  {item.icon}
                </span>
              }
              selected={view}
              onPress={() => {
                setView(item.pathname);
              }}
            >
              <NavBar mode="light">Image Collage Demo</NavBar>
              <div className="p-4">
                {view === "/demo" && <Demo />}
                {view === "/try" && <Filestack />}
              </div>
            </TabBar.Item>
          ))}
        </TabBar>
      </div>
    </div>
  );
}
