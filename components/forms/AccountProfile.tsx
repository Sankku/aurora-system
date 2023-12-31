"use client";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserValidation } from "@/lib/validations/user";

interface Props {
  user: {
    id: string;
    objectId: string;
    username: string;
    name: string;
    bio: string;
    image: string;
  };
}

const AccountProfile = ({ user, btnTitle }) => {
  const form = useForm({
    resolver: zodResolver(UserValidation),
    defaultValues: {
      profile_phote: "",
      name: "",
      username: "",
      bio: "",
    },
  });
  return <Form></Form>;
};

export default AccountProfile;
