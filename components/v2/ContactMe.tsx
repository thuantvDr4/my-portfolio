"use client";
import React from "react";
import { PhoneIcon, MapPinIcon, Mail } from "lucide-react";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import toast from "react-hot-toast";
import { profileMe } from "@/database";
import Image from "next/image";
import { images } from "@/constant";
import Heading from "./Heading";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function ContactMe() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Inputs>();

  // ---onSubmit
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:vinhthuan.tr@gmail.com?subject=${formData.subject}&body=Hi, My name is ${formData.name}. ${formData.message} (${formData.email})`;
  };

  const onError = () => {
    toast.error("Please, enter your information!");
  };

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen relative">
      {/* --image-bg-- */}
      <Image fill alt="hero" src={images?.bgFlower} className="object-cover" />
      {/* --overlay-- */}
      <div className="abosulte inset-0 z-20 bg-neutral-800/80 flex-1 w-full h-full">
        {/* ---body-- */}
        <div className="w-full h-full  flex flex-col justify-start py-12 md:py-24">
          {/* --title-- */}
          <Heading name="Get In Touch" className="flex items-center" />
          {/* ---form-- */}
          <div className="flex flex-col gap-y-12 mt-12 md:mt-24 w-full flex-1">
            <h4 className="content text-xl md:text-4xl font-semibold text-center">
              I have got just what you need.{" "}
              <span className="underline decoration-yellow-500">
                Lets Talk.
              </span>
            </h4>

            <div className="space-y-4 flex flex-col w-full">
              <div className="items-center flex justify-center space-x-5">
                <PhoneIcon className="w-7 h-7 text-yellow-600 " />
                <p className="content md:text-2xl">{profileMe?.phone}</p>
              </div>

              <div className="items-center flex justify-center space-x-5">
                <Mail className="w-7 h-7 text-yellow-600 " />
                <p className="content md:text-2xl">{profileMe?.email}</p>
              </div>

              <div className="items-center flex justify-center space-x-5">
                <MapPinIcon className="w-7 h-7 text-yellow-600 " />
                <p className="content md:text-2xl">{profileMe?.address}</p>
              </div>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit, onError)}
              className="flex flex-col space-y-4 md:space-y-2 mx-auto w-full md:w-fit"
            >
              <div className="flex flex-col md:flex-row w-full flex-1 gap-4">
                <Controller
                  control={control}
                  name="name"
                  rules={{ required: true }}
                  render={({ field: { onChange } }) => (
                    <input
                      onChange={onChange}
                      placeholder="Name"
                      className={twMerge(
                        `contactInput `,
                        errors.name && "border-rose-400"
                      )}
                      type="text"
                    />
                  )}
                />

                <Controller
                  control={control}
                  name="email"
                  rules={{ required: true }}
                  render={({ field: { onChange } }) => (
                    <input
                      onChange={onChange}
                      placeholder="Email"
                      className={twMerge(
                        `contactInput `,
                        errors.email && "border-rose-400 "
                      )}
                      type="email"
                    />
                  )}
                />
              </div>

              <Controller
                control={control}
                name="subject"
                rules={{ required: true }}
                render={({ field: { onChange } }) => (
                  <input
                    onChange={onChange}
                    placeholder="Subject"
                    className={twMerge(
                      `contactInput `,
                      errors.subject && "border-rose-400"
                    )}
                    type="text"
                  />
                )}
              />

              <Controller
                control={control}
                name="message"
                rules={{ required: true }}
                render={({ field: { onChange } }) => (
                  <textarea
                    onChange={onChange}
                    placeholder="Message"
                    className={twMerge(
                      `contactInput`,
                      errors.message && "border-rose-400"
                    )}
                  />
                )}
              />

              <button
                type="submit"
                className="bg-yellow-500 py-5 px-10 rounded-md text-black font-bold text-lg"
              >
                Submit
              </button>
            </form>
          </div>
          {/* --end-form */}
        </div>
        {/* ---end--body */}
      </div>
    </div>
  );
}

export default ContactMe;
