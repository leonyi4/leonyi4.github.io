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
    type: "Full PERN stack web application",
    desc: "Task manager that users can store their tasks",
    pic: taskManagerPic,
    tech: [postgresqlLogo, reactLogo, expressLogo, nodePic],
    alt: "PERNapp",
  },
  {
    title: "food order system",
    type: "javafx GUI application",
    desc: "App that orders pizza",
    pic: orderSystem,
    tech: [javaPng, javafxPng, sceneBuilderLogo],
    alt: "javaApp",
  },
];
