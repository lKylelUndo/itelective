import Image from "next/image";

const HomeBanner = () => {
  return (
    <section>
      <div className="container px-6 mx-auto flex flex-col lg:flex-row lg:justify-between">
        <div>
          <h1 className="text-center lg:leading-21.5 lg:mt-32 mt-20 lg:text-7xl text-4xl leading-16 font-bold">
            Modern Developer. <br /> Modern Code.
          </h1>
        </div>

        <div className="flex justify-center">
          <Image
            src={"/robotai.png"}
            width={500}
            height={500}
            alt="ts"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
