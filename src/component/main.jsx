import { CORE_CONCEPTS } from "./data";
import Concept from "./concept";

const Main = () => {
  return (
    <>
      {/* we will pass the prop below by destructuring it */}
      {CORE_CONCEPTS.map((core_conceptItem) => {
        return <Concept key={core_conceptItem.title} {...core_conceptItem} />;
      })}
      {/* <Concept {...CORE_CONCEPTS[0]}/> */}
      {/* <Concept {...CORE_CONCEPTS[1]}/> */}
      {/* <Concept {...CORE_CONCEPTS[2]}/> */}
      {/* <Concept {...CORE_CONCEPTS[3]}/> */}
      {/* <Concept {...CORE_CONCEPTS[4]}/> */}
    </>
  );
};

export default Main;
