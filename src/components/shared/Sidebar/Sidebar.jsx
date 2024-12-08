import React from "react";
import { Link } from "react-router-dom";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  PeopleOutline,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@mui/icons-material";
import "./Sidebar.css";

function SidebarSection({ listItemArray, sectionTitle }) {
  return (
    <section className="sidebar__section">
      <h3 className="sidebar__section-title">{sectionTitle}</h3>
      <ul className="sidebar__section-list">
        {listItemArray.map((item) => (
          <SidebarListItem key={item.id} {...item} />
        ))}
      </ul>
    </section>
  );
}

function SidebarListItem({ href, title, icon }) {
  return (
    <li className="sidebar__section-list-item">
      <Link to={href} className="sidebar__section-list-item-link">
        {icon}
        <span className="sidebar__section-list-item-title">{title}</span>
      </Link>
    </li>
  );
}

export default function Sidebar() {
  const sidebarSectionsInfo = [
    {
      id: 1,
      sectionTitle: "Dashboard",
      listItemArray: [
        { id: 1, title: "Home", href: "/", icon: <LineStyle /> },
        { id: 2, title: "Analytics", href: "analytics", icon: <Timeline /> },
        { id: 3, title: "Sales", href: "sales", icon: <TrendingUp /> },
      ],
    },
    {
      id: 2,
      sectionTitle: "Quick Menu",
      listItemArray: [
        { id: 1, title: "User", href: "users", icon: <PermIdentity /> },
        { id: 2, title: "New User", href: "newuser", icon: <PeopleOutline /> },
        { id: 3, title: "Products", href: "products", icon: <Storefront /> },
        {
          id: 4,
          title: "Transactions",
          href: "transactions",
          icon: <AttachMoney />,
        },
        { id: 5, title: "Reports", href: "reports", icon: <BarChart /> },
      ],
    },
    {
      id: 3,
      sectionTitle: "Notifications",
      listItemArray: [
        { id: 1, title: "Mail", href: "mail", icon: <MailOutline /> },
        { id: 2, title: "Feedback", href: "feedback", icon: <DynamicFeed /> },
        {
          id: 3,
          title: "Messages",
          href: "messages",
          icon: <ChatBubbleOutline />,
        },
      ],
    },
    {
      id: 4,
      sectionTitle: "Staff",
      listItemArray: [
        { id: 1, title: "Manage", href: "/", icon: <WorkOutline /> },
        { id: 2, title: "Analytics", href: "analytics", icon: <Timeline /> },
        { id: 3, title: "Reports", href: "reports", icon: <Report /> },
      ],
    },
  ];

  return (
    <aside className="sidebar">
      {sidebarSectionsInfo.map((section) => (
        <SidebarSection key={section.id} {...section} />
      ))}
    </aside>
  );
}
