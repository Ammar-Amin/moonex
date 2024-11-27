import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Blur from "./ Blur";

export default function WhyUs() {
  return (
    <div className="md:pt-20">
      <h2 className="px-4 w-full max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto text-2xl md:text-3xl lg:text-4xl py-8 md:py-10 font-bold">
        Why <span className="text-yel">MoonEX</span> ?
      </h2>
      <div className="relative w-full max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto bg-[#0d1c28] rounded-xl pb-9 px-2 lg:px-8">
        <div className=" w-full border-b border-slate-500">
          <div className=" absolute h-[87%] md:h-[91%] lg:h-[94%] w-[1px] bg-slate-500 left-[41%] md:left-[35%] top-5"></div>
          <div className=" absolute h-[87%] md:h-[91%] lg:h-[94%] w-[1px] bg-slate-500 left-[68%] top-5"></div>
          <Blur
            w="w-[200px]"
            h="h-[200px]"
            left="left-[23%]"
            bottom="bottom-[-1%]"
          />
          <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="py-4 md:pt-10 md:pb-6 text-center font-bold text-base md:text-lg lg:text-2xl text-yel">
                  Comparison
                </TableHead>
                <TableHead className="py-4 md:pr-12 text-center font-bold text-base md:text-lg lg:text-2xl text-yel">
                  Moonex
                </TableHead>
                <TableHead className="py-4 text-center font-bold text-base md:text-lg lg:text-2xl text-pink-700">
                  UNISWAP
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                "1. Point no one",
                "1. Point no one",
                "1. Point no one",
                "1. Point no one",
                "1. Point no one",
                "1. Point no one",
              ].map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="py-2 md:py-4 lg:py-6 pl-1 md:pl-6 lg:pl-10 text-gray-400 text-xs md:text-base">
                    {item}
                  </TableCell>
                  <TableCell className="py-2 md:py-4 lg:py-6 md:pr-9 text-xs md:text-base text-center">
                    ✅
                  </TableCell>
                  <TableCell className="py-2 md:py-4 lg:py-6 text-xs md:text-base text-center">
                    ❌
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
