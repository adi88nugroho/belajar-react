"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Profile from "@components/Profile";

const handleEdit = () => {
  console.log("Edit");
};

const handleDelete = async () => {
  console.log("Delete");
};

const MyProfile = () => {
  return (
    <Profile
      name="My"
      desc="Welcome to your profile page. Here you can see all your posts and edit your profile."
      data={[]}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default MyProfile;
