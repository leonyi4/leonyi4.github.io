import cssPic from "../assets/css.png";
import expressLogo from "../assets/express.png";
import gitHubPic from "../assets/github.png";
import htmlPic from "../assets/html.png";
import javaPic from "../assets/java.jpg";
import javafxPic from "../assets/javafx.png";
import javafxPng from "../assets/javafxPng.png";
import javaPng from "../assets/javaPng.png";
import javascriptPic from "../assets/javascript.png";
import materialUIPic from "../assets/materialUI.png";
import netbeansPic from "../assets/net_beans.png";
import nodePic from "../assets/node.png";
import orderSystem from "../assets/order_system.png";
import postgresqlLogo from "../assets/postgresql.png";
import pythonPic from "../assets/python.png";
import reactPic from "../assets/react.png";
import reactLogo from "../assets/reactLogo.png";
import sceneBuilderLogo from "../assets/SceneBuilderPic.png";
import taskManagerPic from "../assets/taskmanager.png";
import vscPic from "../assets/vsc.jpg";
export const skills = [
  {
    name: "JavaScript",
    pic: javascriptPic,
    alt: "javascript",
  },
  {
    name: "React",
    pic: reactPic,
    alt: "react",
  },
  {
    name: "Node",
    pic: nodePic,
    alt: "node",
  },
  {
    name: "Java",
    pic: javaPic,
    alt: "java",
  },

  {
    name: "HTML",
    pic: htmlPic,
    alt: "html",
  },
  {
    name: "CSS",
    pic: cssPic,
    alt: "css",
  },
  {
    name: "Python",
    pic: pythonPic,
    alt: "python",
  },
  {
    name: "JavaFX",
    pic: javafxPic,
    alt: "javafx",
  },
  {
    name: "MaterialUI",
    pic: materialUIPic,
    alt: "materialUI",
  },
  {
    name: "VSCode",
    pic: vscPic,
    alt: "vsc",
  },

  {
    name: "GitHub",
    pic: gitHubPic,
    alt: "github",
  },
  {
    name: "Netbeans",
    pic: netbeansPic,
    alt: "netbeans",
  },
];

export const projects = [
  {
    title: "Task Manager",
    type: "PERN stack web application",
    desc: "A full stack web application where the user can store tasks they have to complete or things they want to do in a postgresql database. The website lists them based on the priority and allows the user to edit any tasks.",
    pic: taskManagerPic,
    tech: [postgresqlLogo, reactLogo, expressLogo, nodePic],
    alt: "PERNapp",
    link: "https://github.com/leonyi4/no-do-list",
  },
  {
    title: "food order system",
    type: "Javafx GUI application",
    desc: "This is a gui application where a customer can order from a pizza restaurant written in javaFX using scene builder. The user can order a variety of items with varying amounts. A coupon is given as a discount based on how much each order costs. A sales txt file containing the receipt and a summary txt file contianing all the inputs from every order is created after each sale.",
    pic: orderSystem,
    tech: [javaPng, javafxPng, sceneBuilderLogo],
    alt: "javaApp",
    link: "https://github.com/leonyi4/funPizzaShop",
  },
];
