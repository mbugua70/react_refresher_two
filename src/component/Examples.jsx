/* eslint-disable react/prop-types */
import React from "react";
import TabButton from "./tabButton";
import DynamicComponent from "./dynamicComponent";
import Tab from "./Tab";

const ExamplesTab = () => {
  const [dynamicContent, setDynamic] = React.useState(
    "Irure commodo fugiat enim consequat eu pariatur ex culpa velit voluptate sint. Ad eiusmod eu ea consequat laboris id aliqua eu. Proident ullamco officia qui voluptate cillum voluptate elit. Laboris labore et sunt incididunt culpa dolor anim do nulla dolore. Ut ut occaecat velit non id esse in aute. Do aliquip labore ad in."
  );

  const handleset = (selecteContent) => {
    if (selecteContent === "component") {
      setDynamic(
        "Pariatur irure laborum ea ea anim aute commodo officia dolor eu ex adipisicing amet. Officia irure laborum eu adipisicing fugiat sunt culpa ipsum labore cillum pariatur pariatur. Officia aute cupidatat nisi fugiat nostrud ea. Ex mollit consectetur tempor occaecat proident est ad id aliquip deserunt nulla. Exercitation dolore deserunt Lorem culpa mollit occaecat sint non. Tempor consequat velit proident nulla in ipsum non proident anim dolore aliquip aliquip ipsum ad. Laborum consectetur in esse aliquip aute eu do ad ex."
      );
    } else if (selecteContent === "jsx") {
      setDynamic(
        "Nulla veniam dolor pariatur commodo eu. Non pariatur enim laboris exercitation sit consequat amet. Labore proident consequat mollit tempor consequat consectetur sunt Lorem commodo sit eiusmod deserunt. Enim dolor occaecat magna nostrud cupidatat do Lorem consectetur in in voluptate."
      );
    } else if (selecteContent === "react") {
      setDynamic(
        "Dolor laborum qui dolor reprehenderit qui in et. Voluptate eiusmod id occaecat laborum elit aliqua. Nisi qui excepteur dolore consequat. Sunt exercitation qui aute non ullamco est in pariatur Lorem dolore. Aliqua minim velit id culpa amet cillum voluptate proident cillum culpa qui aute esse."
      );
    } else if (selecteContent === "form") {
      setDynamic(
        "Labore eiusmod proident anim irure laboris aliqua officia in. Anim et laborum cupidatat id aliqua in est officia voluptate nisi nulla. Tempor officia laboris non fugiat laboris culpa enim amet qui et quis minim voluptate. Dolor et dolore mollit elit."
      );
    }
  };

  return (
    <section>
      {/* <TabButton
        isSelected={dynamicContent === "component"}
        onSet={() => handleset("component")}
      >
        John doe
      </TabButton>
      <TabButton
        isSelected={dynamicContent === "jsx"}
        onSet={() => handleset("jsx")}
      >
        John doe one
      </TabButton>
      <TabButton
        isSelected={dynamicContent === "react"}
        onSet={() => handleset("react")}
      >
        John doe two
      </TabButton>
      <TabButton
        isSelected={dynamicContent === "form"}
        onSet={() => handleset("form")}
      >
        John doe three
      </TabButton> */}

      {/* The use of props to create more  multiple jsx slots */}
      <Tab
        buttons={
          <>
            <TabButton
              isSelected={dynamicContent === "component"}
              onSet={() => handleset("component")}
            >
              John doe
            </TabButton>
            <TabButton
              isSelected={dynamicContent === "jsx"}
              onSet={() => handleset("jsx")}
            >
              John doe one
            </TabButton>
            <TabButton
              isSelected={dynamicContent === "react"}
              onSet={() => handleset("react")}
            >
              John doe two
            </TabButton>
            <TabButton
              isSelected={dynamicContent === "form"}
              onSet={() => handleset("form")}
            >
              John doe three
            </TabButton>
          </>
        }
      >
        <DynamicComponent>{dynamicContent}</DynamicComponent>
      </Tab>
    </section>
  );
};

export default ExamplesTab;
