import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  return (
    <div>
      <h2 className="text-[30px] font-bold mb-[10px] text-center">よくある質問</h2>
      <Accordion
        type="single"
        collapsible
        className="mx-auto w-full md:w-[600px]"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>
            企業はどんな学生にスカウトを送るんですか？
          </AccordionTrigger>
          <AccordionContent>
            Y企業の採用担当者が学生の登録情報（写真や自己PR）を閲覧し、「会って話をしてみたい！」と思った学生にスカウトが送られます。特に自己PRと写真は最も目のつきやすい項目です。あとで更新することは可能なので、とりあえずプロフィールを充実させてみましょう！
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>利用は有料ですか？</AccordionTrigger>
          <AccordionContent>
            学生の皆様はすべての機能を無料でご利用いただけます。
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            キャリア証明書の内容はいつまで残りますか？
          </AccordionTrigger>
          <AccordionContent>
            ブロックチェーンとVerifiable
            Credencialsの技術を用いることで半永久的に内容を検証できます。
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Faq;
