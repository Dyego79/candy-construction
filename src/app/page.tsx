import { IoLogoFacebook, IoLogoGoogle, IoLogoInstagram } from "react-icons/io5";

export default function Home() {
  return (
    <>
      <div className="flex flex-col lg:flex-row">
        <div className="fondo flex flex-col lg:w-1/2 justify-center items-center min-h-dvh relative px-6 pt-5 pb-0 gap-y-6">
          <img
            src="/img/logo-candy-cortantes.png"
            alt={""}
            width={300}
            height={300}
            style={{
              width: "180px",
              height: "auto",
              filter: "drop-shadow(0 15px 0.75rem rgba(132,20,19,0.5))",
            }}
          />
          <img
            src="/img/en-construccion.png"
            alt={""}
            width={300}
            height={300}
            className="lg:hidden"
            style={{
              width: "90%",
              height: "auto",
              marginBottom: "50px",
            }}
          />
          <img
            src="/img/en-construccion.png"
            alt={""}
            width={1200}
            height={1200}
            className="hidden lg:block"
            style={{
              width: "500px",
              height: "auto",
              marginBottom: "50px",
            }}
          />
          <div className="franja_degrade"></div>
        </div>
        <div className="flex flex-col lg:p-8 justify-center">
          <div className="text-pink-600 px-6 py-2">
            <h3 className="my-8 font-bold text-3xl">
              ¡Bienvenidos a CandyCortantes!
            </h3>{" "}
            <div className="prose text-pink-700">
              <p>
                Estamos muy emocionados de anunciar que nuestra tienda en línea
                está en proceso de construcción.
              </p>
              <p>
                Estamos trabajando para ofrecerte la mejor experiencia de
                compra, con productos de alta calidad y un servicio excepcional.
              </p>
              <p>
                Mientras tanto, te invitamos a seguirnos en nuestras redes
                sociales para estar al tanto de las últimas novedades y la fecha
                de lanzamiento.
              </p>{" "}
              <p>
                ¡No podemos esperar a compartir con ustedes todo lo que hemos
                preparado! Gracias por tu paciencia y apoyo.
              </p>
              <p className="font-bold">¡Nos vemos pronto!</p>
            </div>
          </div>
          <div className="flex gap-5 items-center lg:justify-start justify-center p-8 bg-pink-600 lg:bg-inherit mt-8">
            <a
              className="text-pink-200 lg:text-pink-600"
              target="_blank"
              href="https://www.instagram.com/candycortantes/"
            >
              <IoLogoInstagram size={40} />
            </a>
            <a
              className="text-pink-200 lg:text-pink-600"
              target="_blank"
              href="https://www.facebook.com/profile.php?id=61564915490783"
            >
              <IoLogoFacebook size={40} />
            </a>
            <a
              className="text-pink-200 lg:text-pink-600"
              target="_blank"
              href="mailto:candycortantes@gmail.com"
            >
              <IoLogoGoogle size={40} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
