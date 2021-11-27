import React, { useState, useContext, useEffect } from "react";
import { Nav } from "shards-react";

import SidebarNavItem from "./SidebarNavItem";
import { Store } from "../../../flux";
import { Context } from '../../../context';
import items from '../../../data/studet-nav-items';


const SidebarNavItems = (props) => {
  console.log(items)
  const { user } = useContext(Context)
  const [navItems, setNavItems] = useState(Store.getSidebarItems())
  const [studentItems, setStudentItems] = useState(items)
  console.log(navItems)

  // useEffect(() => {
  //   Store.addChangeListener(onChange);

  //   return () => {
  //     Store.removeChangeListener(onChange);
  //   }
  // }, [])

  const onChange = () => {
    setNavItems({
      ...navItems,
      navItems: Store.getSidebarItems()
    })
  }

  return (
    <div className="nav-wrapper">
      <Nav className="nav--no-borders flex-column">
        {user.isStudent ? studentItems.map((item, idx) => (
          <SidebarNavItem key={idx} item={item} />
        )) : navItems.map((item, idx) => (
          <SidebarNavItem key={idx} item={item} />
        ))}
      </Nav>
    </div>
  )
}

export default SidebarNavItems;
