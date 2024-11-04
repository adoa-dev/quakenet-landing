import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contacto-empresa" className="contact contact--padding">
      <div className="contact__container">
        <div className="contact__content">
          <div className="contact__text-group">
            <div className="contact__badge">Contactar Empresa</div>
            <h2 className="contact__title">
              Hablemos sobre cómo podemos ayudarte
            </h2>
            <p className="contact__description">
              Nuestro equipo de expertos está listo para analizar tus
              necesidades y brindarte una solución a medida. Completa el
              formulario de contacto y nos comunicaremos contigo a la brevedad.
            </p>
          </div>
          <div className="contact__form-wrapper">
            <form className="contact__form">
              <div className="contact__field">
                <Label htmlFor="name" className="contact__label">
                  Nombre
                </Label>
                <Input
                  id="name"
                  placeholder="Ingresa tu nombre"
                  className="contact__input"
                />
              </div>
              <div className="contact__field">
                <Label htmlFor="email" className="contact__label">
                  Correo Electrónico
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Ingresa tu correo electrónico"
                  className="contact__input"
                />
              </div>
              <div className="contact__field">
                <Label htmlFor="message" className="contact__label">
                  Mensaje
                </Label>
                <Textarea
                  id="message"
                  placeholder="Escribe tu mensaje"
                  className="contact__textarea"
                />
              </div>
              <Button type="submit" className="contact__button">
                Enviar
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
