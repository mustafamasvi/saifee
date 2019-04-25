import React from "react";
import ToolBoxList from "../components/ToolBoxList";
import ToolBoxPopOver from "../components/ToolBoxPopOver";
import shcs from '../images/shcs.png'

class ToolBoxListContainer extends React.Component {
  constructor(props) {
    super(props);

    this.itemListOnClickHandler = this.itemListOnClickHandler.bind(this);
    this.popOverOnClickHandler = this.popOverOnClickHandler.bind(this);
    this.windowResizeHandler = this.windowResizeHandler.bind(this);
    this.windowClickHandler = this.windowClickHandler.bind(this);
    this.windowKeyDownHandler = this.windowKeyDownHandler.bind(this);
    this.deactivatePopOver = this.deactivatePopOver.bind(this);

    this.state = {
      items: [
        {
          id: 1,
          label: "Socket Head Cap Screws",
          description: `A <b>Socket Head Cap Screw</b>, also known as <b>Allen bolt</b> or <b>SHCS</b>, is a type of cap screw with a cylindrical head and hexagonal drive hole.
          <b>SHCS</b> are typically used in machine parts, die fixturing, and clamping. <b>Socket head cap screws</b> are ideal for applications in which there is not enough space to maneuver wrenches or sockets.`,
          comment: `Our SHCS are DIN: <b>912</b>, Grade: <b>12.9</b>. From Dia <b>M2</b> to <b>M42</b> and <b>1/8"</b> to <b>1"</b>, length upto <b>500mm</b> is available.`,
          image : shcs
        },
        {
          id: 2,
          label: "Socket Head Button Screws",
          description: `<a href="https://www.python.org/" target="_blank">Python</a> is an 
          interpreted, high-level, general-purpose programming language.`,
          comment: `Most of our automation work are done using Pyhton.`,
          image: shcs
        },
        // {
        //   id: 3,
        //   label: "C#",
        //   description: `Often pronounced as <a href="https://dotnet.microsoft.com/" target="_blank">C Sharp</a> is a
        //   strong typed, lexically scoped, imperative, declarative, functional, generic and object-oriented programming language.`,
        //   comment: `<b>.Net Core</b> is our preferred framework for back-end development.`
        // },
        // {
        //   id: 4,
        //   label: "Java",
        //   description: `Java is one of the most popular and widely used programming <a href="https://www.java.com/en/" target="_blank">language</a> and platform`,
        //   comment: `Beside <b>.Net Core</b>, we also love to code in <b>Java</b>.`
        // },
        // {
        //   id: 5,
        //   label: "HTML5",
        //   description: `A markup language used for structuring and presenting content on the 
        //     World Wide Web. It is the fifth and current major version of the 
        //     <a href="https://en.wikipedia.org/wiki/HTML5" target="_blank">HTML</a> standard.`,
        //   comment: `There is no web without HTML.`
        // },
        // {
        //   id: 6,
        //   label: "CSS / CSS3",
        //   description: `Cascading Style Sheets - a style sheet 
        //     <a href="https://en.wikipedia.org/wiki/Cascading_Style_Sheets" target="_blank">language</a> 
        //     used for describing the presentation of a document written in HTML.`,
        //   comment: `CSS makes the web beautiful.`
        // },
        // {
        //   id: 7,
        //   label: "SCSS/SASS",
        //   description: `A scripting <a href="http://sass-lang.com/" target="_blank">language</a> 
        //   that is interpreted or compiled into Cascading Style Sheets (CSS).`,
        //   comment: `SASS helps me write and manage CSS code faster.`
        // },
        // {
        //   id: 8,
        //   label: "Angular",
        //   description: `A TypeScript-based open-source front-end web application 
        //     <a href="https://angular.io/" target="_blank">platform</a>.`,
        //   comment: `Our preferred front-end framework.`
        // },
        // {
        //   id: 9,
        //   label: "ReactJs",
        //   description: `A JavaScript <a href="https://reactjs.org/" target="_blank">library</a> for building user interfaces. 
        //   React makes it painless to create interactive UIs. Build encapsulated components 
        //   that manage their own state and then compose them to make complex UIs.`,
        //   comment: `We've been in love since using it for the first time.`
        // },
        // {
        //   id: 10,
        //   label: "Ionic",
        //   description: `Ionic Framework is an open source UI toolkit 
        //   for building performant, high-quality mobile and desktop <a href="https://ionicframework.com/" target="_blank">app</a> using web technologies.`,
        //   comment: `Some of our apps are in Ionic.`
        // },
        // {
        //   id: 11,
        //   label: "React Native",
        //   description: `React Native is a <a href="https://www.reactnative.com/" target="_blank">JavaScript framework</a> for writing real, natively rendering mobile applications for iOS and Android.`,
        // },
        // {
        //   id: 12,
        //   label: "SQL Server",
        //   description: `SQL Server is a database server by Microsoft. 
        //   The Microsoft relational <a href="https://en.wikipedia.org/wiki/Microsoft_SQL_Server" target="_blank">database management system</a> is a software product which primarily stores and retrieves data requested by other applications.`,
        //   comment: `This is where we store our and your data.`
        // },
        // {
        //   id: 13,
        //   label: "Elasticsearch",
        //   description: `Elasticsearch is an open-source, RESTful, <a href="https://www.elastic.co/" target="_blank">distributed search and analytics</a> engine built on Apache Lucene.`,
        //   comment: `Give extra power to the data, makes searching very fast.`
        // },
        // {
        //   id: 14,
        //   label: "Power BI",
        //   description: `Power BI is a business analytics service by Microsoft. 
        //   It aims to provide interactive visualizations and business intelligence capabilities with an interface simple enough for end users 
        //   to create their own <a href="https://powerbi.microsoft.com/en-us/" target="_blank">reports</a> and dashboards.`,
        //   comment: `Want a customize report. We can do that.`
        // },
        // {
        //   id: 15,
        //   label: "QlikView",
        //   description: `QlikView is a business discovery platform that provides self-service BI for all business users in organizations.
        //    With QlikView you can analyze data and use your data <a href="www.qlik.com/‎" target="_blank">discoveries</a> to support decision making. 
        //   QlikView lets you ask and answer your own questions.`,
        // },
        // {
        //   id: 16,
        //   label: "Docker",
        //   description: `Docker is a tool designed to make it easier to create, deploy, and run applications by using <a href="https://www.docker.com/" target="_blank">containers</a>. 
        //   Containers allow a developer to package up an application with all of the parts it needs, such as libraries and other dependencies, and ship it all out as one package.`,
        // },
        // {
        //   id: 17,
        //   label: "Kubernetes",
        //   description: `Kubernetes is an open-source container orchestration system for automating application deployment, scaling, and management. 
        //   It was originally designed by Google.`,
        //   comment: `Deploy the application properly so that no user has any issue.`
        // }
      ],
      activatedItem: null,
      popOver: {
        isActive: false,
        topPx: "auto",
        bottomPX: "auto",
        leftPx: "auto",
        rightPx: "auto",
        description: "",
        comment: ""
      },
      popOverPosition: null
    };
  }

  componentDidMount() {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", this.windowResizeHandler, false);
      window.addEventListener("click", this.windowClickHandler, false);
      window.addEventListener("keydown", this.windowKeyDownHandler, false);
    }
  }

  componentWillUnmount() {
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", this.windowResizeHandler, false);
      window.removeEventListener("click", this.windowClickHandler, false);
      window.removeEventListener("keydown", this.windowKeyDownHandler, false);
    }
  }

  componentWillReceiveProps(nextProps) {
    //
  }

  windowKeyDownHandler(e) {
    if (this.state.activatedItem && e.which == 27) {
      this.deactivatePopOver();
    }
  }

  windowResizeHandler() {
    if (this.state.activatedItem) {
      this.deactivatePopOver();
    }
  }

  windowClickHandler(e) {
    const isValidClickTarget =
      e.target.nodeName === "A" || e.target.nodeName === "BUTTON"
        ? true
        : false;
    if (!isValidClickTarget && this.state.activatedItem) {
      this.deactivatePopOver();
    }
  }

  itemListOnClickHandler(e, id) {
    const anchor = {
      offsetTop: e.target.offsetTop,
      offsetLeft: e.target.offsetLeft,
      offsetWidth: e.target.offsetWidth,
      offsetHeight: e.target.offsetHeight
    };
    /*
      check why the initial shape of the code does'n work in iPhone 4
      it semas as array.find() function is not transpiled corectlyu
      const popOver = this.state.items.find(el => el.id === id);
    */
    const popOver = this.state.items.filter(el => el.id === id)[0];
    this.positionPopOver(anchor, popOver);

    this.setState(() => ({
      activatedItem: id
    }));
  }

  positionPopOver(anchor, popOver) {
    const popWidth = 200;
    const popHeight = 100;
    const body = document.querySelector("body");

    const spaceUnder =
      body.offsetHeight - anchor.offsetTop - anchor.offsetHeight;
    const spaceOnRight =
      body.offsetWidth - anchor.offsetLeft - anchor.offsetWidth;

    const verticalPositionUnder = spaceUnder >= anchor.offsetTop ? true : false;
    const horizontalPositionOnRight =
      spaceOnRight >= anchor.offsetLeft ? true : false;

    const verticalPosition = verticalPositionUnder
      ? anchor.offsetTop
      : anchor.offsetTop - popHeight + anchor.offsetHeight;
    const horizontalPosition = horizontalPositionOnRight
      ? anchor.offsetLeft
      : anchor.offsetLeft - popWidth + anchor.offsetWidth;

    const topPx = verticalPositionUnder
      ? `${anchor.offsetTop + anchor.offsetHeight}px`
      : `auto`;
    const bottomPx = verticalPositionUnder
      ? `auto`
      : `${body.offsetHeight - anchor.offsetTop}px`;
    const leftPx = horizontalPositionOnRight
      ? `${anchor.offsetLeft}px`
      : `auto`;
    const rightPx = horizontalPositionOnRight
      ? `auto`
      : `${body.offsetWidth - anchor.offsetLeft - anchor.offsetWidth}px`;
    const positionUnderModifierClass = "";

    this.setState(() => ({
      popOver: {
        isActive: true,
        topPx: topPx,
        bottomPx: bottomPx,
        leftPx: leftPx,
        rightPx: rightPx,
        modifierClasses: `${positionUnderModifierClass}`,
        description: popOver.description,
        comment: popOver.comment,
        image : popOver.image
      },
      popOverPosition: verticalPositionUnder ? "under" : "above"
    }));
  }

  popOverOnClickHandler() {
    this.deactivatePopOver();
  }

  deactivatePopOver() {
    this.setState(() => ({
      popOver: {
        isActive: false
      },
      activatedItem: null,
      popOverPosition: null
    }));
  }

  render() {
    return (
      <div>
        <ToolBoxList
          items={this.state.items}
          activatedItem={this.state.activatedItem}
          itemOnClick={this.itemListOnClickHandler}
          popOverPosition={this.state.popOverPosition}
        />
        {this.state.popOver.isActive && (
          <ToolBoxPopOver
            top={this.state.popOver.topPx}
            bottom={this.state.popOver.bottomPx}
            left={this.state.popOver.leftPx}
            right={this.state.popOver.rightPx}
            modifierClasses={this.state.popOver.modifierClasses}
            description={this.state.popOver.description}
            comment={this.state.popOver.comment}
            image={this.state.popOver.image}
            onClick={this.popOverOnClickHandler}
          />
        )}
      </div>
    );
  }
}

export default ToolBoxListContainer;
