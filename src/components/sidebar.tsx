"use client";
import { Sidebar, Menu, MenuItem, sidebarClasses } from "react-pro-sidebar";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesomeIcon
import { faList, faBook, faListUl } from "@fortawesome/free-solid-svg-icons"; // Import icons

const MySidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={"fixed left-0"}>
      <Sidebar
        rootStyles={{
          [`.${sidebarClasses.container}`]: {
            backgroundColor: "#2F2F2F",
            border: "0 !important",
            paddingTop: 85,
            height: "100vh",
          },
        }}
        collapsed={collapsed}
      >
        <Menu
          menuItemStyles={{
            button: {
              ":hover": {
                backgroundColor: "transparent",
              },
            },
          }}
        >
          <MenuItem
            icon={<FontAwesomeIcon icon={faList} className="text-white" />}
          >
            All Cards
          </MenuItem>
          <MenuItem
            icon={<FontAwesomeIcon icon={faListUl} className="text-white" />}
          >
            Deck Lists
          </MenuItem>
          <MenuItem
            icon={<FontAwesomeIcon icon={faBook} className="text-white" />} // Icon for Documentation
          >
            Starter Decks
          </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default MySidebar;
