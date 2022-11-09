import React from "react";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as BsIcons from "react-icons/bs";

export const SidebarData = [
   {
    title: "HOME",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text"
},
{
    title: "LOGIN",
    path: "/login",
    icon: <BsIcons.BsFillPersonFill />,
    cName: "nav-text"
},
  {
    title: "HISTORY",
    path: "/history",
    icon: <BsIcons.BsReverseLayoutTextSidebarReverse />,
    cName: "nav-text"
  },
  {
    title: "LIKE",
    path: "/like",
    icon: <BsIcons.BsSuitHeartFill />,
    cName: "nav-text"
  },
  {
    title: "INSTAGRAM",
    path: "/instagram",
    icon: <BsIcons.BsInstagram />,
    cName: "nav-text"
  },
  {
    title: "NOTICE",
    path: "/notice",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text"
  },
  {
    title: "HELP",
    path: "/help",
    icon: <BsIcons.BsQuestionCircleFill />,
    cName: "nav-text"
  },
];