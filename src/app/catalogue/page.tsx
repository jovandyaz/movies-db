import "./page.css";
import { Topics } from "./Topics";
import { NowPlaying } from "./NowPlaying";

const cataloguePage = () => {
  return (
    <section className="catalogue-container">
      <Topics />
      <NowPlaying />
    </section>
  );
};

export default cataloguePage;
