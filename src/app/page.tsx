"use client";
import React from "react";
import Navbar from "./components/navbar";
import { TypeAnimation } from "react-type-animation";
import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoNodejs,
  IoLogoWhatsapp,
} from "react-icons/io";
import { IoDocument, IoLink, IoLogoReact, IoLogoTiktok } from "react-icons/io5";
import nest from "./assets/nestjs.svg";
import html from "./assets/html5.svg";
import css from "./assets/css.svg";
import js from "./assets/javascript.svg";
import redux from "./assets/redux.svg";
import reactQuery from "./assets/reactquery.svg";
import mongo from "./assets/mongodb-wordmark.svg";
import tailwind from "./assets/tailwindcss.svg";
import react from "./assets/react.svg";
import nodejs from "./assets/nodejs.svg";
import mysql from "./assets/mysql.svg";
import next from "./assets/next.svg";
import typeOrm from "./assets/typeorm.svg";
import conejito from "./assets/programador.png";
import Link from "next/link";
import Image from "next/image";
import dodo from "./assets/dodo.png";
import restaurante from "./assets/restaurante.png";
import materialUi from "./assets/materialui.svg";
import miguel from "./assets/perfilMiguelfondo.png";
import FixedWapp from "./components/fixedWapp";
import moxom from "./assets/moxom.png";
export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className=" bg-[#F1F1F1]  ">
        <div className="px-5 py-40 z-10 lg:px-40 min-h-[100vh] flex  justify-center xl:justify-between  flex-wrap-reverse  items-center w-full gap-3 relative bg-gradient-to-t from-[#140030]  to-black">
          <div className="  mt-16 lg:mt-0">
            <h1 className=" text-center font-bold  text-xl md:text-5xl text-white">
              ¡Hola! Soy Bonnie <span className=" text-[#00FFFF]">Dev</span>
            </h1>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "SOY DESARROLLADOR FRONTEND",
                1500, // wait 1s before replacing "Mice" with "Hamsters"
                "SOY DESARROLLADOR BACKEND",
                1500,
              ]}
              wrapper="h2"
              speed={50}
              className={
                "text-center text-lg  md:text-2xl font-semibold mt-[10px] text-white"
              }
              repeat={Infinity}
            />
            <div className=" flex justify-center mt-2 gap-2">
              <Link
                href={"https://github.com/fiufiu25"}
                className=" bg-sky-800 p-2 rounded-md"
              >
                <IoLogoGithub size={20} color="white" />
              </Link>
              <Link
                href={
                  "https://www.linkedin.com/in/luis-miguel-parvina-yarasca-b571a3271/"
                }
                className=" bg-sky-800 p-2 rounded-md"
              >
                <IoLogoLinkedin size={20} color="white" />
              </Link>
              <Link
                href={
                  "https://www.tiktok.com/@miguelparvina?_t=8qCHivip0AI&_r=1"
                }
                className=" bg-sky-800 p-2 rounded-md"
              >
                <IoLogoTiktok size={20} color="white" />
              </Link>
              <Link
                href={"https://wa.link/z2p8h6"}
                className=" bg-sky-800 p-2 rounded-md"
              >
                <IoLogoWhatsapp size={20} className=" text-green-500" />
              </Link>
            </div>
          </div>
          <div className=" relative -z-10    rounded-full  w-[300px] h-[300px] md:h-[400px] md:w-[400px]   ">
            <Image
              alt="conejito"
              src={conejito}
              layout="fill"
              objectFit="cover"
              className=" rounded "
            />

            <div className="  absolute -top-10 left-[45%]  -translate-x-[50%]  p-2 rounded-full  killIcons">
              <Image src={react} alt="react" width={40} height={40} />
            </div>

            <div className="   -bottom-16 left-[45%]  -translate-x-[50%]  absolute    p-2 rounded-full killIcons ">
              <Image src={nodejs} alt="react" width={40} height={40} />
            </div>
            <div className="  right-0  top-[50%]   -translate-y-[50%]  absolute         p-2 rounded-full  killIcons">
              <Image src={nest} alt="react" width={40} height={40} />
            </div>
            <div className="  absolute  left-0  top-[50%]   -translate-y-[50%]    p-2 rounded-full killIcons ">
              <Image src={tailwind} alt="react" width={40} height={40} />
            </div>
          </div>
          <div className="custom-shape-divider-bottom-1726208112">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
        </div>
        <section
          className=" bg-[#F1F1F1]  w-full flex  px-3 flex-col  py-20  justify-center items-center gap-16"
          id="about"
        >
          <div className=" w-full flex-wrap flex justify-center items-center gap-16">
            <div className=" w-[300px] h-[300px] md:h-[400px] md:w-[400px]  relative ">
              <Image alt="conejito" src={conejito} layout="fill" />
              <div className=" cursor-pointer   absolute -right-16 top-[50%] translate-x-[-50%]">
                <a
                  href="/cvParvina.pdf" // El archivo está en la carpeta public
                  target="_blank" // Abre en una nueva pestaña
                  rel="noopener noreferrer" // Seguridad para evitar acceso a la ventana principal
                  className="  cursor-pointer font-semibold bg-gray-200   gap-2 p-2 items-center justify-center rounded-md shadow-md inline-flex"
                >
                  Download cv
                  <IoDocument
                    size={20}
                    className=" text-sky-900 cursor-pointer"
                  />
                </a>
              </div>
            </div>
            <div className=" max-w-[600px]">
              <h3 className=" text-4xl text-cyan-500 font-bold my-2">
                Sobre Mí
              </h3>
              <p className=" my-2  text-black">
                Soy un apasionado de JavaScript y siempre estoy en búsqueda de
                nuevas habilidades para aprender. Me encanta transformar ideas
                en soluciones digitales únicas que marquen la diferencia.
              </p>
              <h6 className="text-xl text-cyan-500 font-bold my-2  ">
                ¿Qué me distingue?
              </h6>
              <p className="my-2  text-black">
                ¡Amo lo que hago! 💙 Me enfoco en más que solo escribir código;
                mi misión es crear experiencias que cautiven y resuelvan
                problemas del mundo real de forma innovadora. 🚀
              </p>
            </div>
          </div>
        </section>
        <section
          className=" px-3 min-h-[100vh]  bg-[#140030]  flex-wrap-reverse   relative w-full flex  flex-col  py-20  justify-center items-center gap-16"
          id="skills"
        >
          <div className="custom-shape-divider-top-1727836497">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
          <div className=" w-full flex justify-center  flex-wrap-reverse items-center gap-16">
            <div className=" max-w-[600px]">
              <h3 className=" text-4xl text-cyan-500 font-bold my-2">
                Habilidades
              </h3>
              <p className=" my-2  text-white">
                Soy experto en tecnologías web modernas y creo soluciones
                digitales dinámicas y centradas en el usuario utilizando React
                para el desarrollo del front-end y Nest.js para la arquitectura
                del back-end.
              </p>

              <p className="my-2  text-white">
                Mi experiencia en desarrollo tanto del front-end como del
                back-end permite la integración fluida del diseño y la
                funcionalidad, garantizando aplicaciones impactantes y
                atractivas.
              </p>
              <h6 className="text-xl text-cyan-500 font-bold my-2  ">
                Herramientas
              </h6>
              <p className="my-2  text-white">
                Aprovecho herramientas avanzadas como React, Nest.js y otras
                plataformas de vanguardia para optimizar los procesos de diseño
                y desarrollo.
              </p>

              <p className="my-2  text-white">
                Este enfoque asegura resultados de alta calidad, combinando la
                competencia técnica con el diseño creativo para mejorar los
                resultados de los proyectos. 🚀
              </p>
              <div className=" flex justify-center flex-wrap items-center gap-3  my-10">
                <div className="kills  ">
                  <Image alt="js" src={react} />
                  <div className="tooltip">
                    <p>React.js</p>
                  </div>
                </div>
                <div className="kills ">
                  <Image alt="js" src={nodejs} />
                  <div className="tooltip">
                    <p>Node.js</p>
                  </div>
                </div>
                <div className="kills  ">
                  <Image alt="js" src={nest} />
                  <div className="tooltip">
                    <p>Nest.js</p>
                  </div>
                </div>
                <div className="kills ">
                  <Image alt="js" src={html} className=" w-full h-full" />
                  <div className="tooltip">
                    <p>Html</p>
                  </div>
                </div>
                <div className="kills ">
                  <Image alt="js" src={css} className=" w-full h-full" />
                  <div className="tooltip">
                    <p>Css</p>
                  </div>
                </div>
                <div className="kills ">
                  <Image alt="js" src={mysql} className=" w-full h-full" />
                  <div className="tooltip">
                    <p>Mysql</p>
                  </div>
                </div>
                <div className="kills ">
                  <Image alt="js" src={typeOrm} className=" w-full h-full" />
                  <div className="tooltip">
                    <p>TypeOrm</p>
                  </div>
                </div>
                <div className="kills ">
                  <Image alt="js" src={reactQuery} className=" w-full h-full" />
                  <div className="tooltip">
                    <p>ReactQuery</p>
                  </div>
                </div>
                <div className="kills ">
                  <Image alt="js" src={js} className=" w-full h-full" />
                  <div className="tooltip">
                    <p>JavaScript</p>
                  </div>
                </div>
                <div className="kills ">
                  <Image alt="js" src={redux} className=" w-full h-full" />
                  <div className="tooltip">
                    <p>Redux</p>
                  </div>
                </div>
                <div className="kills ">
                  <Image alt="js" src={next} className=" w-full h-full" />
                  <div className="tooltip">
                    <p>Next.js</p>
                  </div>
                </div>
                <div className="kills ">
                  <Image alt="js" src={tailwind} className=" w-full h-full" />
                  <div className="tooltip">
                    <p>Tailwind</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="  overflow-hidden relative w-[300px] h-[300px] md:h-[400px] md:w-[400px] rounded-full">
              <Image
                alt="conejito"
                src={conejito}
                layout="fill"
                objectFit="cover"
                className=" rounded"
              />
            </div>
          </div>
          <div className="custom-shape-divider-bottom-1726208112">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
        </section>
        <section id="portafolio" className=" p-2 py-16 ">
          <h3 className="  py-4 md:py-10 text-4xl text-cyan-500 text-center font-bold my-2">
            Portafolio
          </h3>
          <div className=" justify-center  gap-6   flex-wrap flex items-center">
            <div className=" relative group transition-all duration-1000     w-[400px] h-[200px] bg-slate-200 shadow rounded-md overflow-hidden   after:bg-black/5 after:absolute  after:top-0 after:left-0 after:w-full after:h-full shadow-black">
              <Image
                src={moxom} // Ruta de tu imagen
                alt="moxom"
                layout="fill" // Hace que la imagen ocupe todo el contenedor
                // Controla cómo se adapta la imagen
              />
              <div className=" absolute w-full h-[60px]  bottom-0 left-0 z-20 rounded   hover:bg-white/85  group-hover:h-[200px] hover:transition-all  p-2">
                <div className=" flex justify-end gap-1  ">
                  <div className=" flex  items-center gap-1  bg-black/30 p-3  rounded-tl-xl">
                    <Image
                      src={materialUi}
                      width={30}
                      height={30}
                      alt="tailwind"
                    />

                    <Image src={react} width={30} height={30} alt="next" />
                  </div>
                </div>
                <div className=" py-4">
                  <p className=" text-center font-semibold">
                    landing page utilizando React y Material-UI
                  </p>
                  <div className=" flex items-center gap-4 justify-center">
                    <Link
                      className=" shadow bg-white p-1 rounded-full"
                      href={"https://github.com/fiufiu25/moxom"}
                    >
                      <IoLogoGithub size={30} color="black" />
                    </Link>
                    <Link
                      className=" shadow bg-white p-1 rounded-full"
                      href={
                        "https://64cb3b9818119b394b8fcb10--spiffy-puppy-d34e7e.netlify.app/"
                      }
                    >
                      <IoLink size={30} color="black" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className=" relative group transition-all duration-1000     w-[400px] h-[200px] bg-slate-200 shadow rounded-md overflow-hidden   after:bg-black/5 after:absolute  after:top-0 after:left-0 after:w-full after:h-full shadow-black">
              <Image
                src={dodo} // Ruta de tu imagen
                alt="Descripción de la imagen"
                layout="fill" // Hace que la imagen ocupe todo el contenedor
                // Controla cómo se adapta la imagen
              />
              <div className=" absolute w-full h-[60px]  bottom-0 left-0 z-20 rounded   hover:bg-white/85  group-hover:h-[200px] hover:transition-all  p-2">
                <div className=" flex justify-end gap-1  ">
                  <div className=" flex  items-center gap-1  bg-black/30 p-3  rounded-tl-xl">
                    <Image
                      src={tailwind}
                      width={30}
                      height={30}
                      alt="tailwind"
                    />

                    <Image src={next} width={30} height={30} alt="next" />
                  </div>
                </div>
                <div className=" py-4">
                  <p className=" text-center font-semibold">
                    Proyecto para una polleria hecho en next.js y tailwind.js
                  </p>
                  <div className=" flex items-center gap-4 justify-center">
                    <Link
                      className=" shadow bg-white p-1 rounded-full"
                      href={"https://github.com/fiufiu25/polleria"}
                    >
                      <IoLogoGithub size={30} color="black" />
                    </Link>
                    <Link
                      className=" shadow bg-white p-1 rounded-full"
                      href={"https://dodo-polleria.vercel.app/"}
                    >
                      <IoLink size={30} color="black" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className=" relative group transition-all duration-1000     w-[400px] h-[200px] bg-slate-200 shadow rounded-md overflow-hidden   after:bg-black/5 after:absolute  after:top-0 after:left-0 after:w-full after:h-full shadow-black">
              <Image
                src={restaurante} // Ruta de tu imagen
                alt="Descripción de la imagen"
                layout="fill" // Hace que la imagen ocupe todo el contenedor
                // Controla cómo se adapta la imagen
              />
              <div className=" absolute w-full h-[60px]  bottom-0 left-0 z-20 rounded   hover:bg-white/85  group-hover:h-[200px] hover:transition-all  p-2">
                <div className=" flex justify-end gap-1  ">
                  <div className=" flex  items-center gap-1  bg-black/30 p-2  rounded-tl-xl">
                    <Image src={react} width={30} height={30} alt="tailwind" />

                    <Image src={materialUi} width={30} height={30} alt="next" />
                  </div>
                </div>
                <div className=" py-4">
                  <p className=" text-center font-semibold">
                    Proyecto para una restaurante hecho en react.js y materialUi
                  </p>
                  <div className=" flex items-center gap-4 justify-center">
                    <Link
                      className=" shadow bg-white p-1 rounded-full"
                      href={"https://github.com/fiufiu25/tienda_Comida"}
                    >
                      <IoLogoGithub size={30} color="black" />
                    </Link>
                    <Link
                      className=" shadow bg-white p-1 rounded-full"
                      href={"https://tiendabonnie.netlify.app/"}
                    >
                      <IoLink size={30} color="black" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <FixedWapp />
      </main>
    </>
  );
}
