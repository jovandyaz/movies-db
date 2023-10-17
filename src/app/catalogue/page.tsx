import "./page.css";
import { Topics } from "./Topics";
import { Catalogue } from "./Catalogue";
import { ProtectedPages } from "../ProtectedPages";

const CataloguePage = () => {
  return (
    <ProtectedPages>
      <section className="catalogue-container">
        <Topics />
        <Catalogue />
      </section>
    </ProtectedPages>
  );
};

export default CataloguePage;
