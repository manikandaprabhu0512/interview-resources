import Link from "next/link";
import { Mail, ExternalLink } from "lucide-react";
import Linkedin from "@/components/icons/LinkedInIcon";
import Github from "@/components/icons/GithubIcon";

export function SiteFooter() {
  return (
    <footer className="fixed bottom-0 bg-black w-full py-2 mx-auto">
      <div className="text-center">
        <div className="flex flex-wrap items-center justify-center gap-3">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} M Manikanda Prabhu.
          </p>
          <Link
            href="https://github.com/manikandaprabhu0512"
            target="_blank"
            className="inline-flex items-center gap-2 transition-colors"
          >
            <Github size={16} />
          </Link>

          <Link
            href="https://www.linkedin.com/in/m-manikanda-prabhu"
            target="_blank"
            className="inline-flex items-center gap-2 transition-colors"
          >
            <Linkedin size={16} />
          </Link>

          <Link
            href="mailto:mmanikandaprabhu1710@gmail.com"
            className="inline-flex items-center gap-2 transition-colors"
          >
            <Mail size={16} />
          </Link>

          <Link
            href="https://manikanda-prabhu-portfolio.vercel.app"
            target="_blank"
            className="inline-flex items-center gap-2 transition-colors"
          >
            <ExternalLink size={16} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
