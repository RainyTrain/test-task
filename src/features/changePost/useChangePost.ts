import { ChangeEvent, useState } from "react";
import { Post } from "@entities";

interface useChangePostProps {
  post: Post;
}

export const useChangePost = ({ post }: useChangePostProps) => {
  const [data, setData] = useState({ title: post.title, body: post.body });

  const changeTitleData = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setData({ ...data, title: event.target.value });
  };

  const changeBodyData = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setData({ ...data, body: event.target.value });
  };

  const changeToDefault = () => {
    setData({ body: post.body, title: post.title });
  };

  return {
    changeTitleData,
    changeBodyData,
    changeToDefault,
    data,
  };
};
