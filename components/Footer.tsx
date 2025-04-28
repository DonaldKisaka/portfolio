import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer id="contact" className="w-full flex items-center pt-6 border-t border-gray-800 pb-1 mt-5">
        <div className="flex items-center gap-2 text-gray-400 hover:text-white transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="tabler-icon tabler-icon-mail-filled ">
            <path d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z"></path>
            <path d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z"></path>
            </svg>
            <Link href="mailto:kisakadonald1@gmail.com" className="hover:text-white transition-all">
               kisakadonald1@gmail.com
            </Link>
        </div>

        <div className="flex items-center gap-2 text-gray-400 ml-5 hover:text-white transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="tabler-icon tabler-icon-phone">
            <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.11-.27c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1v3.5a1 1 0 0 1-1 1A17 17 0 0 1 3 5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.27 1.11l-2.2 2.2z"></path>
            </svg>
            <Link href="tel:+1234567890" className="hover:text-white transition-all">
               +254 707412258
            </Link>
        </div>

      </footer>
    </>
  )
}

export default Footer;
