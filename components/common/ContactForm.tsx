import { Github, Linkedin, Mail, MessageCircle, MessageCircleCode } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardAction, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import Link from "next/link";

const ContactForm = () => {
  return (
    <section className="px-6 pt-20 space-y-10 container mx-auto flex flex-col lg:flex-row lg:justify-between">
      <div>
        <h1 className="text-xl lg:text-left text-center lg:w-150 lg:text-6xl md:leading-20 leading-14 font-light">
          <span className="font-bold lg:text-7xl text-2xl">Discuss</span> Your
          Technological Needs
        </h1>

        <div className="text-sm space-y-4 mt-4">
          <Card className="md:w-90">
            <CardContent>
             <div className="flex items-center gap-x-2">
                <Mail className="w-5" />
                Email
             </div>
              <p className="mt-2">ando.kyle44@gmail.com</p>
            </CardContent>
          </Card>

          <Card className="md:w-90">
            <CardContent>
             <div className="flex items-center  gap-x-2">
                <MessageCircleCode className="w-5" />
                Connect With Me
             </div>
              <div className="mt-4 space-x-4">
                <Link href={'https://www.linkedin.com/in/kyle-ando-942947289/'} target="_blank"><Button variant={"outline"}><Linkedin/> LinkedIn</Button></Link>
                <Link href={'https://github.com/lkylelUndo'} target="_blank"><Button variant={"outline"}><Github/> Github</Button></Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Card className="lg:w-125 lg:h-105">
        <CardContent>
          <form className="space-y-4">
            <div className="flex flex-col gap-y-2">
              <label htmlFor="email">Email</label>
              <Input />
            </div>

            <div className="flex flex-col gap-y-2">
              <label htmlFor="email">Message</label>
              <Textarea className="h-50" />
            </div>
          </form>

          <CardAction className="w-full mt-4">
            <Button>
              <MessageCircle /> Send Message
            </Button>
          </CardAction>
        </CardContent>
      </Card>
    </section>
  );
};

export default ContactForm;
