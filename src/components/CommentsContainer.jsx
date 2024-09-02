import React from "react";
import Comment from "./Comment";

const data = [
  {
    name: "Mohd Farhan",
    comment: "This is amazing video!",
    replies: [
      {
        name: "Adnan Pasha",
        comment: "I think this is not good",
        replies: [
          {
            name: "Adnan Pasha",
            comment: "I think this is not good",
            replies: [
              {
                name: "Mohd Farhan",
                comment: "This is amazing video!",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Rehan Hussain",
    comment: "Keep going",
    replies: [
      {
        name: "Mohd Farhan",
        comment: "This is amazing video!",
        replies: [
          {
            name: "Adnan Pasha",
            comment: "I think this is not good",
            replies: [
              {
                name: "Mohd Farhan",
                comment: "This is amazing video!",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Rehan Hussain",
    comment: "Keep going",
    replies: [
      {
        name: "Mohd Farhan",
        comment: "This is amazing video!",
        replies: [
          {
            name: "Adnan Pasha",
            comment: "I think this is not good",
            replies: [
              {
                name: "Mohd Farhan",
                comment: "This is amazing video!",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Rehan Hussain",
    comment: "Keep going",
    replies: [
      {
        name: "Mohd Farhan",
        comment: "This is amazing video!",
        replies: [
          {
            name: "Adnan Pasha",
            comment: "I think this is not good",
            replies: [
              {
                name: "Mohd Farhan",
                comment: "This is amazing video!",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Rehan Hussain",
    comment: "Keep going",
    replies: [
      {
        name: "Mohd Farhan",
        comment: "This is amazing video!",
        replies: [
          {
            name: "Adnan Pasha",
            comment: "I think this is not good",
            replies: [
              {
                name: "Mohd Farhan",
                comment: "This is amazing video!",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Rehan Hussain",
    comment: "Keep going",
    replies: [
      {
        name: "Mohd Farhan",
        comment: "This is amazing video!",
        replies: [
          {
            name: "Adnan Pasha",
            comment: "I think this is not good",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Rehan Hussain",
    comment: "Keep going",
    replies: [
      {
        name: "Mohd Farhan",
        comment: "This is amazing video!",
        replies: [
          {
            name: "Mohd Farhan",
            comment: "This is amazing video!",
            replies: [
              {
                name: "Mohd Farhan",
                comment: "This is amazing video!",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
];

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div style={{ marginLeft: "15px", borderLeft: "1px solid black" }}>
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div>
      <h3>Comments</h3>
      {/* <Comment data={data[0]} /> */}
      <CommentsList comments={data} />
    </div>
  );
};

export default CommentsContainer;
