import Link from "next/link";
import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { RiWhatsappFill } from "react-icons/ri";

const Icon = () => {
  return (
    <div>
      <Link
        href="https://wa.me/923482129578"
        target="_blank"
        className="fixedIcon"
      >
        <RiWhatsappFill />
      </Link>
    </div>
  );
};

export default Icon;
