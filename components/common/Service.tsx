import { ServicesTypes } from "@/constants/services";

const Service = ({ service }: { service: ServicesTypes }) => {
  const Icon = service.icon;
  return (
    <article className="flex h-full flex-col border border-hairline bg-plate p-6">
      <div className="flex size-10 items-center justify-center border border-ink bg-paper">
        {Icon && <Icon className="size-4 text-ember" aria-hidden />}
      </div>

      <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-ink">
        {service.title}
      </h3>

      <p className="mt-2.5 text-[15px] leading-relaxed text-urn">
        {service.description}
      </p>
    </article>
  );
};

export default Service;
