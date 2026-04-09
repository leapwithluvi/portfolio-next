"use client"

import { motion } from "motion/react";
import { Sidebar } from "@/components/Sidebar";

export const ContactSection = () => {
  return (
    <section id="contact" className="relative w-full py-16">
      <div className="max-container flex h-full px-4 sm:px-6">
        {/* Sidebar kiri */}
        <Sidebar num="06" title="Contact" />

        <div className="flex-1 flex flex-col items-center justify-center">
          {/* Konten */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <motion.h2
              className="text-4xl font-serif text-foreground"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
            >
              Contacts
            </motion.h2>

            <motion.p
              className="text-lg font-serif text-muted-foreground mt-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              Nice to see you here !
            </motion.p>

            <motion.div
              className="flex gap-6 mt-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              {/* GMAIL */}
              <a href="mailto:itsluvi13@gmail.com?subject=Halo%20Luvi&body=Hai%20Luvi%2C%20saya%20ingin%20bertanya%20tentang%20portofolio%20Anda.">
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="50"
                  viewBox="0 0 24 24"
                  fill="#EA4335"
                  width="48"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.435 24 5.457z" />
                </motion.svg>
              </a>

              {/* LINKEDIN */}
              <a href="https://www.linkedin.com/in/luviaprilyansyahgabriel">
                <motion.svg
                  height="50"
                  viewBox="0 0 256 256"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <g>
                    <path
                      d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055"
                      fill="#0A66C2"
                    />
                  </g>
                </motion.svg>
              </a>

              {/* GITHUB */}
              <a href="https://github.com/leapwithluvi">
                <motion.svg
                  height="50"
                  viewBox="0 0 1024 1024"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
                    transform="scale(64)"
                    className="fill-[#1B1F23] dark:fill-white"
                  />
                </motion.svg>
              </a>

              {/* INSTAGRAM */}
              <a
                href="https://www.instagram.com/byl.rooks"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.svg
                  viewBox="0 0 32 32"
                  height="53"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <rect
                    x="2"
                    y="2"
                    width="28"
                    height="28"
                    rx="6"
                    fill="url(#paint0_radial_87_7153)"
                  />
                  <rect
                    x="2"
                    y="2"
                    width="28"
                    height="28"
                    rx="6"
                    fill="url(#paint1_radial_87_7153)"
                  />
                  <rect
                    x="2"
                    y="2"
                    width="28"
                    height="28"
                    rx="6"
                    fill="url(#paint2_radial_87_7153)"
                  />
                  <path
                    d="M23 10.5C23 11.3284 22.3284 12 21.5 12C20.6716 12 20 11.3284 20 10.5C20 9.67157 20.6716 9 21.5 9C22.3284 9 23 9.67157 23 10.5Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16 21C18.7614 21 21 18.7614 21 16C21 13.2386 18.7614 11 16 11C13.2386 11 11 13.2386 11 16C11 18.7614 13.2386 21 16 21ZM16 19C17.6569 19 19 17.6569 19 16C19 14.3431 17.6569 13 16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6 15.6C6 12.2397 6 10.5595 6.65396 9.27606C7.2292 8.14708 8.14708 7.2292 9.27606 6.65396C10.5595 6 12.2397 6 15.6 6H16.4C19.7603 6 21.4405 6 22.7239 6.65396C23.8529 7.2292 24.7708 8.14708 25.346 9.27606C26 10.5595 26 12.2397 26 15.6V16.4C26 19.7603 26 21.4405 25.346 22.7239C24.7708 23.8529 23.8529 24.7708 22.7239 25.346C21.4405 26 19.7603 26 16.4 26H15.6C12.2397 26 10.5595 26 9.27606 25.346C8.14708 24.7708 7.2292 23.8529 6.65396 22.7239C6 21.4405 6 19.7603 6 16.4V15.6ZM15.6 8H16.4C18.1132 8 19.2777 8.00156 20.1779 8.0751C21.0548 8.14674 21.5032 8.27659 21.816 8.43597C22.5686 8.81947 23.1805 9.43139 23.564 10.184C23.7234 10.4968 23.8533 10.9452 23.9249 11.8221C23.9984 12.7223 24 13.8868 24 15.6V16.4C24 18.1132 23.9984 19.2777 23.9249 20.1779C23.8533 21.0548 23.7234 21.5032 23.564 21.816C23.1805 22.5686 22.5686 23.1805 21.816 23.564C21.5032 23.7234 21.0548 23.8533 20.1779 23.9249C19.2777 23.9984 18.1132 24 16.4 24H15.6C13.8868 24 12.7223 23.9984 11.8221 23.9249C10.9452 23.8533 10.4968 23.7234 10.184 23.564C9.43139 23.1805 8.81947 22.5686 8.43597 21.816C8.27659 21.5032 8.14674 21.0548 8.0751 20.1779C8.00156 19.2777 8 18.1132 8 16.4V15.6C8 13.8868 8.00156 12.7223 8.0751 11.8221C8.14674 10.9452 8.27659 10.4968 8.43597 10.184C8.81947 9.43139 9.43139 8.81947 10.184 8.43597C10.4968 8.27659 10.9452 8.14674 11.8221 8.0751C12.7223 8.00156 13.8868 8 15.6 8Z"
                    fill="white"
                  />
                  <defs>
                    <radialGradient
                      id="paint0_radial_87_7153"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(12 23) rotate(-55.3758) scale(25.5196)"
                    >
                      <stop stopColor="#B13589" />
                      <stop offset="0.79309" stopColor="#C62F94" />
                      <stop offset="1" stopColor="#8A3AC8" />
                    </radialGradient>
                    <radialGradient
                      id="paint1_radial_87_7153"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(11 31) rotate(-65.1363) scale(22.5942)"
                    >
                      <stop stopColor="#E0E8B7" />
                      <stop offset="0.444662" stopColor="#FB8A2E" />
                      <stop offset="0.71474" stopColor="#E2425C" />
                      <stop offset="1" stopColor="#E2425C" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient
                      id="paint2_radial_87_7153"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(0.500002 3) rotate(-8.1301) scale(38.8909 8.31836)"
                    >
                      <stop offset="0.156701" stopColor="#406ADC" />
                      <stop offset="0.467799" stopColor="#6A45BE" />
                      <stop offset="1" stopColor="#6A45BE" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                </motion.svg>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
