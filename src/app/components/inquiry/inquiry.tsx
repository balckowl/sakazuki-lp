"use client";

import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { init, send } from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import "./inquiry.css";

const formSchema = z.object({
  company: z.string().min(1, { message: "1文字以上で入力してください" }),
  name: z.string().min(1, { message: "1文字以上で入力してください" }).max(10),
  email: z
    .string()
    .email({ message: "メールアドレスの形式で入力してください" }),
  phone: z.string().min(1, { message: "1文字以上で入力してください" }),
  acquire: z.string().min(1, { message: "1文字以上で入力してください" }),
});

type formType = z.infer<typeof formSchema>;
const Inquiry = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors: formatError, isValid, isSubmitting },
  } = useForm<formType>({
    resolver: zodResolver(formSchema),
    mode: "onSubmit",
  });
  const [isSending, setIsSending] = useState<boolean>(false);

  const handleOnSubmit: SubmitHandler<formType> = async (data) => {
    const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    console.log(userId, serviceId, templateId);
    if (userId && serviceId && templateId) {
      init(userId);
      setIsSending(true);
      const loadingToast = toast.loading("送信中");
      const params = {
        company: data.company,
        name: data.name,
        email: data.email,
        phone: data.phone,
        acquire: data.acquire,
      };
      try {
        // await send(serviceId, templateId, params);
        toast.success("送信完了");
        reset();
      } catch (e) {
        toast.error("送信失敗");
      } finally {
        toast.dismiss(loadingToast);
        setIsSending(false);
      }
    }
  };
  return (
    <div className="container mx-auto">
      <Toaster />
      <h2 className="text-[30px] font-bold mb-[10px] text-center">
        お問い合わせ
      </h2>
      <form
        action=""
        className="flex flex-col gap-[10px]"
        onSubmit={handleSubmit(handleOnSubmit)}
      >
        <div className="flex gap-[5px] flex-col">
          <label htmlFor="company">
            会社名
          </label>
          <input
            placeholder="株式会社PitPa"
            id="company"
            disabled={isSending}
            className="border-[2px] border-black rounded-[2px] w-full md:w-[200px]"
            type="text"
            {...register("company")}
          />
          {formatError.name && (
            <div className="text-red-500">{formatError.name.message}</div>
          )}
        </div>

        <div className="flex gap-[5px] flex-col">
          <label htmlFor="name">名前</label>
          <input
            placeholder="PitPa　太郎"
            id="name"
            disabled={isSending}
            className={`border-[2px] border-black rounded-[2px] w-full md:w-[200px]`}
            type="text"
            {...register("name")}
          />
          {formatError.name && (
            <div className="text-red-500">{formatError.name.message}</div>
          )}
        </div>

        <div className="flex gap-[5px] flex-col">
          <label htmlFor="email">メールアドレス</label>
          <input
            disabled={isSending}
            placeholder="example@pitpa.com"
            id="email"
            className={`border-[2px] border-black rounded-[2px] w-full md:w-[200px]`}
            type="text"
            {...register("email")}
          />
          {formatError.email && (
            <div className="text-red-500">{formatError.email.message}</div>
          )}
        </div>

        <div className="flex gap-[5px] flex-col">
          <label htmlFor="phone">電話番号</label>
          <input
            disabled={isSending}
            placeholder="090-1234-5678"
            id="phone"
            className={`border-[2px] border-black rounded-[2px] w-full md:w-[200px]`}
            type="text"
            {...register("phone")}
          />
          {formatError.email && (
            <div className="text-red-500">{formatError.email.message}</div>
          )}
        </div>

        <div className="flex gap-[5px] flex-col">
          <label htmlFor="acquire">お問い合わせ内容</label>
          <textarea
            disabled={isSending}
            id="acquire"
            {...register("acquire")}
            placeholder="お問い合わせ内容を入力してください"
            className={`border-[2px] border-black rounded-[2px] h-[200px] resize-none p-[5px] w-full md:w-[500px]`}
          />
          {formatError.acquire && (
            <div className="text-red-500">{formatError.acquire.message}</div>
          )}
        </div>
        <button
          className="bg-blue-700 w-max text-white rounded-[3px] px-[6px] py-[2px]"
          type="submit"
        >
          送信
        </button>
      </form>
    </div>
  );
};

export default Inquiry;
