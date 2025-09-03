import { Card, CardBody, Typography, Button } from "@material-tailwind/react";

export default function About() {
  return (
    <div className="flex justify-center items-center py-12 px-4">
      <Card className="max-w-3xl shadow-lg rounded-2xl">
        <CardBody className="space-y-6">
          {/* Title */}
          <Typography
            variant="h3"
            color="blue-gray"
            className="text-center font-bold"
          >
            💻 About Us
          </Typography>

          {/* Description */}
          <Typography color="gray" className="text-center leading-relaxed">
            Welcome to our <span className="font-semibold">Web Development Studio</span>!  
            We create modern, responsive, and high-performance websites that help businesses grow online.  
            Using technologies like <strong>React</strong>, <strong>Vite</strong>, <strong>TailwindCSS</strong>,  
            and <strong>Material Tailwind</strong>, we deliver fast, scalable, and beautiful digital solutions.
          </Typography>

          {/* Mission + Vision */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="shadow-md p-4 bg-blue-50">
              <CardBody>
                <Typography variant="h6" className="mb-2 text-blue-700">
                  🎯 Our Mission
                </Typography>
                <Typography color="blue-gray">
                  To craft stunning, user-friendly websites that help our clients succeed online.
                </Typography>
              </CardBody>
            </Card>

            <Card className="shadow-md p-4 bg-green-50">
              <CardBody>
                <Typography variant="h6" className="mb-2 text-green-700">
                  🌍 Our Vision
                </Typography>
                <Typography color="blue-gray">
                  To be a leading web development studio known for innovation, quality, and client satisfaction.
                </Typography>
              </CardBody>
            </Card>
          </div>

          {/* Call-to-action */}
          <div className="text-center mt-6">
            <Button color="indigo" size="lg">
              Get in Touch
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
