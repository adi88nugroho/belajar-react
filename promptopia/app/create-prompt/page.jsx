"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { Router, useRouter } from "next/router";
import Form from "@components/Form";
import { set } from "mongoose";

const CreatePrompt = () => {
  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    prompt: "",
    tag: "",
  });

  const CreatePrompt = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch("/api/create-prompt/new", {
        method: "POST",
        body: JSON.stringify({
          prompt: post.prompt,
          userId: session?.user.id,
          tag: post.tag,
        }),
      });
      if (response.ok) {
        Router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Form
      type="Create"
      post={post}
      setPost={setPost}
      submitting={submitting}
      CreatePrompt={CreatePrompt}
    />
  );
};

export default CreatePrompt;
