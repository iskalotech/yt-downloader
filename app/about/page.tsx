import { Github, Heart, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent mb-8">
          About Us
        </h1>
        
        <div className="prose prose-lg dark:prose-invert">
          <p className="text-lg text-muted-foreground mb-6">
            We're passionate about making video downloading simple and accessible to everyone. Our platform provides a seamless way to download YouTube content while respecting content creators' rights.
          </p>

          <div className="grid md:grid-cols-3 gap-8 my-12">
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-gradient-to-br from-pink-500/10 to-transparent">
              <Users className="w-12 h-12 text-pink-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
              <p className="text-muted-foreground">To provide the best video downloading experience possible</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-gradient-to-br from-blue-500/10 to-transparent">
              <Heart className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Our Values</h3>
              <p className="text-muted-foreground">Quality, simplicity, and respect for digital rights</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-gradient-to-br from-pink-500/10 to-transparent">
              <Github className="w-12 h-12 text-pink-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Open Source</h3>
              <p className="text-muted-foreground">Built with transparency and community in mind</p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-muted-foreground mb-6">
            Started in 2024, our platform has grown from a simple tool to a comprehensive solution for video downloading needs. We continuously work to improve our service and add new features based on user feedback.
          </p>
        </div>
      </div>
    </div>
  );
}