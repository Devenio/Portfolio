import { motion } from "framer-motion";
import LinkedinIcon from "@/assets/icons/linkedin.svg";
import GithubIcon from "@/assets/icons/github.svg";
import DribbbleIcon from "@/assets/icons/dribbble.svg";
import Link from "next/link";

export default function Socials() {
  return (
    <motion.div className="fixed bottom-5 flex items-center gap-5 right-5 sm:bottom-10 sm:right-10 z-10">
      <Link
        href="https://www.linkedin.com/in/mahziyar-erfani-a713a718a/"
        target="_blank"
      >
        <LinkedinIcon className="fill-theme-primary color-transition" />
      </Link>
      <Link href="https://github.com/mhzrerfani" target="_blank">
        <GithubIcon className="fill-theme-primary color-transition" />
      </Link>
      <Link href="https://dribbble.com/mhzrerfani" target="_blank">
        <DribbbleIcon className="fill-theme-primary color-transition" />
      </Link>
    </motion.div>
  );
}
