"use client";

import "./Topics.css";
import { TOPICS } from "@/global/constants";
import { Button } from "@/components";
import { useAppDispatch, useAppSelector } from "@/store/appHooks";
import { setCatalogueTopic } from "@/store/slices";
import { nowPlayingUri } from "@/services/urls";
import clsx from "clsx";

export const Topics = () => {
  const { catalogueTopic } = useAppSelector((state) => state.catalogue);
  const dispatch = useAppDispatch();

  const handleClick = (topicId: number) => {
    dispatch(
      setCatalogueTopic(
        TOPICS.find((topic) => topic.id === topicId)?.uri ?? nowPlayingUri
      )
    );
  };

  return (
    <div className="topics__container">
      {TOPICS.map((topic) => (
        <Button
          className={clsx("topics__button", {
            "topics__button--active": topic.uri === catalogueTopic,
          })}
          key={topic.id}
          disabled={topic.uri === catalogueTopic}
          onClick={() => handleClick(topic.id)}
        >
          {topic.name}
        </Button>
      ))}
    </div>
  );
};
