import { commentsData } from "../utils/constants";
import { Comment } from "./Comment";

const CommentList = ({ comments }) => {
  return comments?.map((comment) => (
    <div key={comment.id} className="my-3">
      {/* Pass comment data to the Comment component */}
      <Comment data={comment} />

      {/* If replies is exist, pass array of replies to the CommentList */}
      {comment.replies && (
        <div className="ml-6 border border-y-0 border-r-0 border-l-stone-600 pl-6">
          {/* Recursion */}
          <CommentList comments={comment.replies} />
        </div>
      )}
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <>
      <div className="mb-8 rounded-lg bg-gray-300 p-4">
        <h1 className="mb-4 text-2xl font-bold">Comments:</h1>
        <CommentList comments={commentsData} />
      </div>
    </>
  );
};

export { CommentsContainer };
