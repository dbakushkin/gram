type Comment = {
  id: string;
  uid: string;
  user: {
    name: string;
  };
  text: string;
  createdAt: Date | null;
};

export default Comment;
