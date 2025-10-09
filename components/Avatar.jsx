import Image from "next/image";

const Avatar = () => {
  return (
    <div className="flex justify-center items-center xl:max-w-none pointer-events-none select-none">
      <Image
        src="/avatar.png"
        alt="avatar"
        width={737}
        height={678}
        className="translate-z-0 w-full h-full scale-[0.4] sm:scale-[0.5] md:scale-[0.55] lg:scale-[0.65] xl:scale-70 2xl:scale-75"
      />
    </div>
  );
};

export default Avatar;
