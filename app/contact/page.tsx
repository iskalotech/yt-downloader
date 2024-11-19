"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent mb-8">
          Contact Us
        </h1>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg text-muted-foreground mb-8">
              Have questions or suggestions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-pink-500" />
                <span>support@ytdownloader.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-blue-500" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-4">
                <MessageSquare className="w-6 h-6 text-pink-500" />
                <span>Live chat available 24/7</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-pink-500/5 via-blue-500/5 to-transparent p-6 rounded-lg border border-pink-500/20">
            <form className="space-y-6">
              <div>
                <Input placeholder="Your Name" />
              </div>
              <div>
                <Input type="email" placeholder="Your Email" />
              </div>
              <div>
                <Input placeholder="Subject" />
              </div>
              <div>
                <Textarea placeholder="Your Message" className="min-h-[150px]" />
              </div>
              <Button className="w-full bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}