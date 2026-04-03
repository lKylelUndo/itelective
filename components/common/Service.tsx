import { ServicesTypes } from "@/constants/services";

const Service = ({ service }: { service: ServicesTypes }) => {
  const Icon = service.icon;
  return (
    <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
   
      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10 mb-4">
        <Icon className="text-primary w-6 h-6" />
      </div>

      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>

      <p className="text-sm text-muted-foreground">{service.description}</p>
    </div>
  );
};

export default Service;
