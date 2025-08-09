import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { useUserStore } from "../store/useUserStore";
import { Notyf } from "notyf";
import 'notyf/notyf.min.css';

const SIGNUP_MUTATION = gql`
  mutation Signup($firstname: String!, $lastname: String!, $email: String!, $password: String!) {
    signup(firstname: $firstname, lastname: $lastname, email: $email, password: $password) {
      id
      firstname
      lastname
      email
    }
  }
`;

export const useSignupForm = () => {
  const [signup] = useMutation(SIGNUP_MUTATION);
  const setUser = useUserStore((state) => state.setUser);
  const notyf = new Notyf();

  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const clearFormData = () => {
    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});
    const { firstname, lastname, email, password } = formData;

    try {
      setIsLoading(true);
      const { data } = await signup({
        variables: { firstname, lastname, email, password }
      });
      setUser(data.signup);
      clearFormData();
      notyf.success({
        message: "Account created successfully!",
        dismissible: true,
        position: {
          x: "right",
          y: "top"
        }
      });
    } catch (err: any) {
      if (err.graphQLErrors?.length) {
        try {
          const errorObj = JSON.parse(err.graphQLErrors[0].message);
          setErrors(errorObj);
        } catch {
          notyf.error("Error parsing backend error message");
        }
      }
    } finally {
      setIsLoading(false);
    }
  };

  return {
    formData,
    isLoading,
    errors,
    handleChange,
    handleSubmit
  };
};
