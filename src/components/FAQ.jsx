import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import Blur from "./ Blur";

export default function FAQ() {
  let questions = [
    {
      question: "How do I get a Referral Code",
      answer: "Yes. It adheres to the WAI-ARIA design pattern.",
    },
    {
      question: "Do I get rewarded in tokens or ETH when I refer buyers?",
      answer:
        "Yes. It comes with default styles that matches the other components' appearance.",
    },
    {
      question: "How can I earn the reward?",
      answer:
        "Yes. It comes with default styles that matches the other components' appearance.",
    },
  ];

  return (
    <div className="relative py-20 flex-center overflow-hidden">
      <Blur h="h-[300px]" w="w-[300px]" left="left-[-14%]" bottom="bottom-1" />
      {/* <div className="absolute bottom-1 left-1 bg-yel h-[200px] w-[100px] blur-3xl"></div> */}
      <div className="w-full max-w-2xl lg:max-w-4xl mx-auto py-10 bg-[#0d1c28] rounded-lg">
        <h3 className="font-bold text-2xl md:text-4xl text-center pb-10 text-yel">
          FAQs
        </h3>
        <div>
          <div className="h-[1px] bg-slate-800"></div>
          {questions.map((q) => (
            <div key={q.question}>
              <Accordion type="single" collapsible className="px-10">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="font-medium text-slate-200">
                    {q.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-400">
                    {q.answer}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <div className="h-[1px] bg-slate-800"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
