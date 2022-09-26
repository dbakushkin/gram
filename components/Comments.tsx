import { FC } from "react";
import { formatDistance } from "date-fns";
import { ru } from "date-fns/locale";
import type Comment from "../types/comment";
import { Card } from "@mui/material";

type CommentProps = {
  comments: Comment[];
};

const Comments: FC<CommentProps> = ({ comments }) => {
  if (comments.length === 0) {
    return <h3>Комментариев пока нет</h3>;
  }
  return (
    <div>
      {comments.map((comment) => (
        <Card sx={{ mb: 2, p: 3 }} key={comment.id}>
          <div>{comment.user.name}</div>
          {comment.createdAt ? (
            <div>
              {formatDistance(new Date(comment.createdAt), new Date(), {
                addSuffix: true,
                locale: ru,
              })}
            </div>
          ) : (
            "Только-что"
          )}
          <div>{comment.text}</div>
        </Card>
      ))}
    </div>
  );
};

export default Comments;
