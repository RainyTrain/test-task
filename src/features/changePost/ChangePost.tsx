import { useRef, KeyboardEvent } from "react";
import { Box, Button, TextField } from "@mui/material";
import { Post, PostCard } from "@entities";
import { ModalWindow } from "@shared";

import { useChangePost } from "./useChangePost";
import { useModal } from "./useModal";

interface ChangePostProps {
  post: Post;
  remove: (arg: number) => void;
  changePostData: (id: number, data: Post) => void;
}

export const ChangePost = (props: ChangePostProps) => {
  const { post, remove, changePostData } = props;

  const textRef = useRef<HTMLInputElement>(null);
  const { isOpen, handleClose, handleOpen } = useModal();
  const { changeBodyData, changeTitleData, changeToDefault, data } =
    useChangePost({ post });

  const switchFocus = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" && textRef.current) {
      textRef.current.focus();
    }
  };

  const submitNewData = () => {
    changePostData(post.id, { ...post, body: data.body, title: data.title });
    handleClose();
  };

  const cancelData = () => {
    changeToDefault();
    handleClose();
  };

  return (
    <>
      <PostCard
        data={post}
        remove={remove}
        key={post.id}
        onClick={handleOpen}
      />
      <ModalWindow handleClose={handleClose} isOpen={isOpen}>
        <Box
          width="100%"
          display="flex"
          flexDirection={"column"}
          gap={2}
          py={2}
          px={5}
          bgcolor="#B6D1DB"
          sx={{ border: "2px solid grey" }}
          position="relative"
          borderRadius={4}
        >
          <TextField
            id="standard-basic"
            label="Standard"
            variant="standard"
            value={data.title}
            onChange={changeTitleData}
            onKeyUp={switchFocus}
            fullWidth
          />
          <TextField
            inputRef={textRef}
            id="standard-basic"
            label="Standard"
            variant="standard"
            value={data.body}
            onChange={changeBodyData}
            multiline
            rows={5}
            maxRows={5}
            fullWidth
          />
          <Box
            maxWidth={300}
            width="100%"
            display="flex"
            flexDirection="column"
            mt={4}
            mx="auto"
            gap={2}
          >
            <Button variant="contained" onClick={submitNewData} fullWidth>
              Update
            </Button>
            <Button variant="outlined" onClick={cancelData} fullWidth>
              Cancel
            </Button>
          </Box>
        </Box>
      </ModalWindow>
    </>
  );
};
