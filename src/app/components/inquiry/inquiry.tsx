"use client";

import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { init, send } from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { Button } from "@/components/ui/button";

const phoneRegex = /^(?:\+?\d{1,3}[- ]?)?(?:\(\d{1,3}\)|\d{1,3})[- ]?\d{1,4}[- ]?\d{1,4}[- ]?\d{1,4}$/;

const formSchema = z.object({
  company: z.string().min(1, { message: "1文字以上で入力してください" }),
  name: z.string().min(1, { message: "1文字以上で入力してください" }).max(10),
  email: z
    .string()
    .email({ message: "メールアドレスの形式で入力してください" }),
  phone: z.string().regex(phoneRegex, { message: "電話番号の形式で入力してください" }),
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
    <div className="bg-[#69c2ee]">
      <div className="container mx-auto h-[900px]">
        <Toaster />
        <div className="flex items-center justify-center h-full">
          <div className="md:w-[55%] w-full">
            <h2 className="text-[30px] font-bold mb-[20px]  text-white">
              お問い合わせ
            </h2>
            <form
              action=""
              className="flex flex-col gap-[20px]"
              onSubmit={handleSubmit(handleOnSubmit)}
            >
              <div className="flex gap-[5px] flex-col">
                <label className="flex gap-2 items-center mb-1" htmlFor="company">
                  <div className="bg-red-500 text-white rounded-sm px-[5px] py-[2px] text-[13px]">必須</div>
                  <div>
                    団体名
                  </div>
                </label>
                <input
                  placeholder="株式会社PitPa"
                  id="company"
                  disabled={isSending}
                  className="border-[2px] border-[#eee] rounded-[5px] w-full px-2 py-1 focus:outline-none"
                  type="text"
                  {...register("company")}
                />
                {formatError.name && (
                  <div className="text-red-500">{formatError.name.message}</div>
                )}
              </div>

              <div className="flex gap-[5px] flex-col">
                <label className="flex gap-2 items-center mb-1" htmlFor="name">
                  <div className="bg-red-500 text-white rounded-sm px-[5px] py-[2px] text-[13px]">必須</div>
                  <div>
                    名前
                  </div>
                </label>
                <input
                  placeholder="PitPa 太郎"
                  id="name"
                  disabled={isSending}
                  className={`border-[2px] border-[#eee] rounded-[5px] w-full px-2 py-1 focus:outline-none`}
                  type="text"
                  {...register("name")}
                />
                {formatError.name && (
                  <div className="text-red-500">{formatError.name.message}</div>
                )}
              </div>

              <div className="flex gap-[5px] flex-col">
                <label className="flex gap-2 items-center mb-1" htmlFor="email">
                  <div className="bg-red-500 text-white rounded-sm px-[5px] py-[2px] text-[13px]">必須</div>
                  <div>
                    メールアドレス
                  </div>
                </label>
                <input
                  disabled={isSending}
                  placeholder="example@pitpa.com"
                  id="email"
                  className={`border-[2px] border-[#eee] rounded-[5px] w-full px-2 py-1 focus:outline-none`}
                  type="text"
                  {...register("email")}
                />
                {formatError.email && (
                  <div className="text-red-500">{formatError.email.message}</div>
                )}
              </div>

              <div className="flex gap-[5px] flex-col">
                <label className="flex gap-2 items-center mb-1" htmlFor="phone">
                  <div className="bg-red-500 text-white rounded-sm px-[5px] py-[2px] text-[13px]">必須</div>
                  <div>
                    電話番号
                  </div>
                </label>
                <input
                  disabled={isSending}
                  placeholder="090-1234-5678"
                  id="phone"
                  className={`border-[2px] border-[#eee] rounded-[5px] w-full px-2 py-1 focus:outline-none`}
                  type="text"
                  {...register("phone")}
                />
                {formatError.phone && (
                  <div className="text-red-500">{formatError.phone.message}</div>
                )}
              </div>

              <div className="flex gap-[5px] flex-col mb-[10px]">
                <label className="flex gap-2 items-center mb-1" htmlFor="content">
                  <div className="bg-red-500 text-white rounded-sm px-[5px] py-[2px] text-[13px]">必須</div>
                  <div>
                    お問い合わせ内容
                  </div>
                </label>
                <textarea
                  disabled={isSending}
                  id="acquire"
                  {...register("acquire")}
                  placeholder="お問い合わせ内容を入力してください"
                  className={`border-[2px] border-[#eee] rounded-[5px] h-[200px] resize-none p-[5px] w-full focus:outline-none`}
                />
                {formatError.acquire && (
                  <div className="text-red-500">{formatError.acquire.message}</div>
                )}
              </div>
              <Button>送信</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inquiry;
