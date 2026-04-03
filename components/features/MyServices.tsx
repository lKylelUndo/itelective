import { services } from "@/constants/services";
import Service from "../common/Service";

const MyServices = () => {
  return (
    <section className="container mx-auto px-6 py-16 mt-20">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-4xl font-bold mb-4">My Services</h1>
        <p className="text-muted-foreground">
          I help fellow students and businesses build scalable, modern, and efficient
          applications.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
            <Service key={index} service={service} />
        ))}
      </div>
    </section>
  );
};

export default MyServices;
