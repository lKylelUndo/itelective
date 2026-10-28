import { services } from "@/constants/services";
import Service from "../common/Service";

const MyServices = () => {
  return (
    <section className="border-t border-hairline">
      <div className="wrap grid gap-10 py-16 md:py-24 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="font-mono text-[13px] text-ink">
            <span className="text-ember">[</span> services{" "}
            <span className="text-ember">]</span>
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            What I do<span className="text-ember">.</span>
          </h2>
          <p className="mt-5 max-w-[36ch] text-[15px] leading-relaxed text-urn">
            I help fellow students and businesses build scalable, modern, and
            efficient applications.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:col-span-8">
          {services.map((service) => (
            <Service key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyServices;
