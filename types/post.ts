type Post = {
  uid: string;
  id: string;
  text: string;
  images: string[];
  createdAt: Date | null;
  user: {
    name: string;
  };
  likesCount: number;
  commentsCount: number;
};
export default Post;
