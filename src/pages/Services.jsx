import { Card, CardBody, Typography, Button } from "@material-tailwind/react";
import { CodeBracketSquareIcon, RocketLaunchIcon, CubeTransparentIcon } from "@heroicons/react/24/solid";

export default function Services() {
  const services = [
    {
      title: "Web Development",
      description: "Building responsive, modern websites using React, TailwindCSS, and best practices.",
      icon: CodeBracketSquareIcon,
      color: "blue",
    },
    {
      title: "App Development",
      description: "Creating cross-platform mobile and desktop applications with smooth UX/UI.",
      icon: RocketLaunchIcon,
      color: "indigo",
    },
    {
      title: "UI/UX Design",
      description: "Designing intuitive interfaces and delightful experiences for your users.",
      icon: CubeTransparentIcon,
      color: "green",
    },
  ];

  return (
    <div className="py-12 px-4 bg-gray-50">
      <div className="text-center mb-12">
        <Typography variant="h3" className="font-bold mb-4">
          🛠 Our Services
        </Typography>
        <Typography color="gray" className="leading-relaxed max-w-xl mx-auto">
          We provide a range of web and app development services tailored to help your business grow.
        </Typography>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <Card key={idx} className="shadow-lg rounded-2xl p-6 text-center hover:scale-105 transition-transform">
            <div className={`w-16 h-16 mx-auto rounded-full bg-${service.color}-100 flex items-center justify-center mb-4`}>
              <service.icon className={`w-8 h-8 text-${service.color}-600`} />
            </div>
            <CardBody>
              <Typography variant="h5" className="font-bold mb-2">
                {service.title}
              </Typography>
              <Typography color="gray" className="mb-4">
                {service.description}
              </Typography>
              <Button color={service.color} variant="outlined" size="sm">
                Learn More
              </Button>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}
