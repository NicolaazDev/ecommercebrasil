import React from "react";

export const RealeaseSection = () => {
  return (
    <section className="w-screen h-screen bg-primary relative">
      <div className="w-full h-full bg-primary">
        <img
          className="absolute top-0 left-0 h-[100%] w-[100%]"
          src="https://4kwallpapers.com/images/wallpapers/ios-16-stock-ipados-16-gradient-background-dark-mode-1920x1080-8134.png"
        />
        <img
          src="https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111902_mbp14-silver2.png"
          className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
        />
      </div>
    </section>
  );
};
