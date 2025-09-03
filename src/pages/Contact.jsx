import { Card, CardBody, Typography, Input, Textarea, Button } from "@material-tailwind/react";

export default function Contact() {
  return (
    <div className="flex justify-center items-center py-12 px-4 bg-gray-50">
      <Card className="w-full max-w-lg shadow-xl rounded-2xl">
        <CardBody className="space-y-6">
          {/* Page Title */}
          <Typography
            variant="h3"
            color="blue-gray"
            className="text-center font-bold"
          >
            📩 Contact Us
          </Typography>

          {/* Description */}
          <Typography color="gray" className="text-center leading-relaxed">
            Interested in working with us or have questions about our services?  
            Fill out the form below and our team will get back to you promptly.
          </Typography>

          {/* Contact Form */}
          <form className="flex flex-col gap-4">
            <Input label="Full Name" size="lg" required />
            <Input label="Email Address" type="email" size="lg" required />
            <Input label="Phone Number" type="tel" size="lg" required />
            <Textarea label="Message" size="lg" required />
            <Button color="indigo" variant="filled" size="lg">
              Send Message
            </Button>
          </form>

          {/* Optional Contact Info */}
          <div className="mt-4 text-center text-gray-600 space-y-1">
            <p>📍 444601 Amravati, Maharashtra </p>
            <p>✉️ shaikhayyanahmad@gmail.com</p>
            <p>📞 9371501567</p>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
