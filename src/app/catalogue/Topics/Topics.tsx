import "./Topics.css";
import { TOPICS } from "@/global/constants";
import { Button } from "@/components";

export const Topics = () => {
  return (
    <div className="topics__container">
      {TOPICS.map((topic) => (
        <Button key={topic.id}>{topic.name}</Button>
      ))}
    </div>
  );
};
