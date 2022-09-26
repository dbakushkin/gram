import {
  DocumentData,
  FirestoreDataConverter,
  QueryDocumentSnapshot,
  SnapshotOptions,
  WithFieldValue,
} from "firebase/firestore";
import type Post from "../types/post";

const postConverter: FirestoreDataConverter<Post> = {
  toFirestore(post: WithFieldValue<Post>): DocumentData {
    return { text: post.text };
  },
  fromFirestore(
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions
  ): Post {
    const data = snapshot.data(options);
    return {
      id: snapshot.id,
      text: data.text,
      user: data.user,
      uid: data.uid,
      images: data.images,
      createdAt: data.createdAt
        ? new Date(data.createdAt?.seconds * 1000)
        : null,
      likesCount: data.likesCount,
      commentsCount: data.commentsCount,
    };
  },
};

export default postConverter;
