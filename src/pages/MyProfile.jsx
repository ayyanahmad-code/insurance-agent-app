import React from "react";
import {
  Card,
  Typography,
  Avatar,
  Button,
} from "@material-tailwind/react";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

function MyProfile() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <Card className="w-full max-w-md p-6 shadow-lg rounded-2xl">
        <div className="flex flex-col items-center text-center">
          {/* Profile Avatar */}
          <Avatar
            src="/ayyan.png"
            alt="User Profile"
            size="xl"
            className="border border-gray-300 p-1 mb-4"
          />

          {/* User Info */}
          <Typography variant="h4" color="blue-gray" className="mb-1">
            Ayyan Shaikh
          </Typography>
          <Typography color="gray" className="mb-4">
            Full Stack Developer 🚀
          </Typography>

          {/* Bio */}
          <Typography
            variant="small"
            color="gray"
            className="mb-6 text-center"
          >
            Passionate about building modern web applications with React,
            Node.js, and Tailwind. Always learning and exploring new
            technologies.
          </Typography>

          {/* Contact Info */}
          <div className="w-full text-left space-y-3 mb-6">
            <div className="flex items-center gap-2">
              <EnvelopeIcon className="h-5 w-5 text-blue-500" />
              <a
                href="mailto:shaikhayyanahmad@gmail.com"
                className="text-sm text-gray-700 hover:underline"
              >
                shaikhayyanahmad@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-2">
              <PhoneIcon className="h-5 w-5 text-green-500" />
              <a
                href="tel:+91 9371501567"
                className="text-sm text-gray-700 hover:underline"
              >
                +91 9371501567
              </a>
            </div>

            <div className="flex items-center gap-2">
              <MapPinIcon className="h-5 w-5 text-red-500" />
              <span className="text-sm text-gray-700">
                Amravati, Maharashtra
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          {/* <div className="flex gap-4">
            <Button color="blue" variant="filled">
              Edit Profile
            </Button>
            <Button color="red" variant="outlined">
              Log Out
            </Button>
          </div> */}
        </div>
      </Card>
    </div>
  );
}

export default MyProfile;
