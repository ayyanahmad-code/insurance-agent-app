import React from "react";
import { Card, CardBody, Typography, Button } from "@material-tailwind/react";

export default function Resume() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <Typography variant="h3" className="font-bold mb-6">
        📄 My Resume
      </Typography>

      {/* Education */}
      <Card className="mb-6">
        <CardBody>
          <Typography variant="h5" className="font-bold mb-2">
            🎓 Education
          </Typography>
          <div className="mb-2">
            <Typography className="font-semibold">Bachelor in  Computer Applications</Typography>
            <Typography variant="small" className="text-gray-500">
              SGU University — 2022 to 2025
            </Typography>
          </div>
          <div>
            <Typography className="font-semibold">HSC</Typography>
            <Typography variant="small" className="text-gray-500">
              HSC Maharashtra Board / March 2022
            </Typography>
          </div>
        </CardBody>
      </Card>

      {/* Experience */}
      <Card className="mb-6">
        <CardBody>
          <Typography variant="h5" className="font-bold mb-2">
            💼 Experience
          </Typography>
          <div className="mb-2">
            <Typography className="font-semibold">Frontend Developer</Typography>
            <Typography variant="small" className="text-gray-500">
              ABC Company — 2022 to Present
            </Typography>
            <Typography variant="small" className="text-gray-600">
              Built responsive web apps using React, TailwindCSS & Material Tailwind.
            </Typography>
          </div>
          <div>
            <Typography className="font-semibold">Intern Web Developer</Typography>
            <Typography variant="small" className="text-gray-500">
              XYZ Startup — 2021 to 2022
            </Typography>
            <Typography variant="small" className="text-gray-600">
              Assisted in developing UI components and landing pages.
            </Typography>
          </div>
        </CardBody>
      </Card>

      {/* Skills */}
      <Card className="mb-6">
        <CardBody>
          <Typography variant="h5" className="font-bold mb-2">
            🛠 Skills
          </Typography>
          <div className="flex flex-wrap gap-2">
            {["React", "TailwindCSS", "JavaScript", "HTML", "CSS", "React"].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </CardBody>
      </Card>

      {/* Download CV Button */}
      <div className="text-center mt-6">
        <Button
          color="blue"
          onClick={() => {
            // Replace with your PDF file path
            window.open("/ayyan_resume.pdf", "_blank");
          }}
        >
          Download CV
        </Button>
      </div>
    </div>
  );
}
