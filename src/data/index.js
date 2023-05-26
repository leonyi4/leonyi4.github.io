import sceneBuilderLogo from "../assets/SceneBuilderPic.png";
import aqiPic from "../assets/aqi category.jpg";
import cssPic from "../assets/css.png";
import expressLogo from "../assets/express.png";
import gitHubPic from "../assets/github.png";
import htmlPic from "../assets/html.png";
import javaPic from "../assets/java.jpg";
import javaPng from "../assets/javaPng.png";
import javafxPng from "../assets/javafxPng.png";
import javascriptPic from "../assets/javascript.png";
import jnotePic from "../assets/jnote.png";
import matlabPic from "../assets/matlab.jpg";
import mySqlPic from "../assets/mySql.png";
import nodePic from "../assets/node.png";
import numpyPic from "../assets/numpy.png";
import orderSystem from "../assets/order_system.png";
import pandasPic from "../assets/pandas.png";
import pandasPic2 from "../assets/pandas2.png";
import phpPic from "../assets/phpPng.png";
import postgresqlLogo from "../assets/postgresql.png";
import pythonPic from "../assets/python.png";
import reactPic from "../assets/react.png";
import reactLogo from "../assets/reactLogo.png";
import seabornPic from "../assets/seaborn.png";
import sklearnPic from "../assets/sklearn.png";
import sklearnPic2 from "../assets/sklearn2.png";
import taskManagerPic from "../assets/taskmanager.png";
import gamePic from "../assets/video game prediction.jpg";
import vscPic from "../assets/vsc.jpg";
import webForumPic from "../assets/webForum.jpg";
export const skills = [
  {
    name: "Python",
    pic: pythonPic,
    alt: "python",
  },
  {
    name: "Scikit Learn",
    pic: sklearnPic,
    alt: "Scikit Learn",
  },
  {
    name: "Pandas",
    pic: pandasPic2,
    alt: "Pandas",
  },
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
    name: "PHP",
    pic: phpPic,
    alt: "PHP",
  },
  {
    name: "VSCode",
    pic: vscPic,
    alt: "vsc",
  },
  {
    name: "Jupyter Notebook",
    pic: jnotePic,
    alt: "Jupyter Notebook",
  },
  {
    name: "MATLAB",
    pic: matlabPic,
    alt: "MATLAB",
  },
  {
    name: "GitHub",
    pic: gitHubPic,
    alt: "github",
  },
];

export const projects = [
  {
    title: "AQI Category Classification",
    type: "python notebook",
    desc: "Classifying AQI Category using 5 machine learning classification models",
    pic: aqiPic,
    tech: [pythonPic, pandasPic, sklearnPic2, numpyPic, seabornPic],
    alt: "AQI Category Classification",
    link: "https://www.kaggle.com/code/nyinyeinaung/aqi-category-classification",
  },
  {
    title: "Video Game Rating Prediction",
    type: "python notebook",
    desc: "Predicting video game's star rating using two regression models",
    pic: gamePic,
    tech: [pythonPic, pandasPic, sklearnPic2, numpyPic, seabornPic],
    alt: "AQI Category Classification",
    link: "https://www.kaggle.com/code/nyinyeinaung/video-game-rating-prediction",
  },
  {
    title: "Online Forum",
    type: "WAMP stack web application",
    desc: "Online Forum where users can create discussions on topics of mutual interests",
    pic: webForumPic,
    tech: [phpPic, htmlPic, cssPic, javascriptPic, mySqlPic],
    alt: "WAMPapp",
    link: "https://github.com/leonyi4/PHP-forum-final-project",
  },
  {
    title: "Task Manager",
    type: "PERN stack web application",
    desc: "A full stack web application where the user can store tasks they have to complete or things they want to do in a postgresql database. ",
    pic: taskManagerPic,
    tech: [postgresqlLogo, reactLogo, expressLogo, nodePic],
    alt: "PERNapp",
    link: "https://github.com/leonyi4/no-do-list",
  },
  {
    title: "food order system",
    type: "Javafx GUI application",
    desc: "This is an application where a customer can order from a pizza restaurant written in javaFX using scene builder. ",
    pic: orderSystem,
    tech: [javaPng, javafxPng, sceneBuilderLogo],
    alt: "javaApp",
    link: "https://github.com/leonyi4/funPizzaShop",
  },
];
