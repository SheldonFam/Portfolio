import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { Mail } from "lucide-react";
import type { ContactLink } from "../../data/contacts";

interface ContactIconProps {
  readonly type: ContactLink["iconType"];
}

export function ContactIcon({ type }: ContactIconProps) {
  switch (type) {
    case "email":
      return <Mail size={18} aria-hidden="true" />;
    case "linkedin":
      return <FaLinkedinIn size={18} aria-hidden="true" />;
    case "github":
      return <FaGithub size={18} aria-hidden="true" />;
    case "whatsapp":
      return <FaWhatsapp size={18} aria-hidden="true" />;
  }
}
