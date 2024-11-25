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

export default function WhyUs() {
  return (
    <div className="w-full max-w-3xl mx-auto py-10">
      <h2 className="text-4xl py-10 font-bold">
        Why <span className="text-yel">MoonEX</span> ?
      </h2>
      <div className="w-full max-w-7xl mx-auto bg-[#0d1c28]  rounded-xl pb-9 px-8">
        <div className="relative w-full border-b border-slate-500 ">
          <div className="absolute h-full w-[1px] bg-slate-500 left-[38%] top-5"></div>
          <div className="absolute h-full w-[1px] bg-slate-500 left-[69%] top-5"></div>
          <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="pt-6 pb-4 text-center font-bold text-2xl text-yel">
                  Comparison
                </TableHead>
                <TableHead className="text-center font-bold text-2xl text-yel">
                  Moonex
                </TableHead>
                <TableHead className="text-center font-bold text-2xl text-pink-700">
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
                  <TableCell className="py-4 pl-10 text-gray-400 text-base">
                    {item}
                  </TableCell>
                  <TableCell className="py-4  text-center">✅</TableCell>
                  <TableCell className="py-4 text-center">❌</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
