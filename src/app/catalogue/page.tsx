import "./page.css";
import { Topics } from "./Topics";
import { Catalogue } from "./Catalogue";

const cataloguePage = () => {
  return (
    <section className="catalogue-container">
      <Topics />
      <Catalogue />
    </section>
  );
};

export default cataloguePage;
