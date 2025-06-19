/* eslint-disable @next/next/no-img-element */
//hero secion

const blog: string[] = ["Blog", "Explore", "KnowMore", "About"];
export function Hero() {
  return (
    <div className="w-[90%] m-auto ">
      <div className="flex justify-between items-center flex-wrap pb-[40px] border-b-2 border-b-[#B4B4B4] gap-[20px]">
        <div className="flex flex-wrap gap-[clamp(20px,2.4vw,40px)] ">
          {blog.map((ele) => (
            <p
              className="text-[clamp(20px,1.7vw,25px)] font-sanstext-black "
              key={ele}
            >
              {ele}
            </p>
          ))}
        </div>
        <div className="flex gap-[15px]">
          <img src="/images/apple.png" alt="" />
          <img src="/images/playstore.png" alt="" />
        </div>
      </div>
      <div className="pt-[20px] pb-[50px] gap-[40px] flex justify-between items-center flex-wrap">
        <img src="/images/last.png" alt="" />
        <div className="flex gap-[30px]">
          <img src="/images/facebook.png" alt="" />
          <img src="/images/instargram.png" alt="" />
          <img src="/images/twitter.png" alt="" />
          <img src="/images/youtube.png" alt="" />
        </div>
      </div>
    </div>
  );
}