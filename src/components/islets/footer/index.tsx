import React from "react";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  // const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  return (
    <div className="mt-28">
      <Separator className="my-4" />

      {/* <div className="flex space-x-4">
        <h2 className="text-lg font-semibold">A-Z List</h2>
      </div>

      <div className="mt-4 flex flex-wrap">
        {alphabet.map((letter) => (
          <div
            key={letter}
            className="uppercase py-1 px-2 rounded-sm bg-orange-400 text-white cursor-pointer mr-2 mb-2"
          >
            {letter}
          </div>
        ))}
      </div> */}

      <div className="mt-4 mb-2">
        <p className="text-slate-500">
          WatchListify does not store any files on our server, we only linked to
          the media which is hosted on 3rd party services.
        </p>
        <p className="text-slate-500">
          © WatchListify.site. All rights reserved.
        </p>
      </div>
    </div>
  );
}
