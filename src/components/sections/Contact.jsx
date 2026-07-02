import { useState } from 'react';
import { motion } from 'framer-motion';
import { contact, identity, socials } from '../../data/portfolio.config';
import useReveal from '../../hooks/useReveal';
import Button from '../ui/Button';
import SectionHeading from '../ui/SectionHeading';

const SOCIAL_LINKS = [
  { label: 'GitHub', href: socials.github },
  { label: 'LinkedIn', href: socials.linkedin },
  { label: 'Email', href: socials.email },
];

const inputClass =
  'w-full border-b border-hueso/15 bg-transparent py-3 text-hueso ' +
  'placeholder:text-humo/40 transition-colors duration-200 ' +
  'focus:border-cobre focus:outline-none';

function Field({ id, label, value, onChange, type = 'text', textarea = false }) {
  const Tag = textarea ? 'textarea' : 'input';
  return (
    <div>
      <label
        htmlFor={id}
        className="font-mono text-[11px] uppercase tracking-[0.25em] text-humo"
      >
        {label}
      </label>
      <Tag
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={textarea ? 4 : undefined}
        maxLength={textarea ? 1500 : undefined}
        type={textarea ? undefined : type}
        inputMode={type === 'email' ? 'email' : undefined}
        autoComplete={type === 'email' ? 'email' : undefined}
        className={`${inputClass} ${textarea ? 'resize-none' : ''}`}
      />
    </div>
  );
}

export default function Contact() {
  const reveal = useReveal();
  const [values, setValues] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null); // null | 'error' | 'sent'

  const setField = (field) => (value) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    setStatus(null);
  };

  // Sin backend todavía: arma un mailto con los campos y abre el cliente
  // de correo. Los datos nunca salen hacia terceros.
  const handleSend = () => {
    const { name, email, message } = values;
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus('error');
      return;
    }
    const subject = encodeURIComponent(`Proyecto — ${name.trim()}`);
    const body = encodeURIComponent(
      `${message.trim()}\n\n— ${name.trim()} (${email.trim()})`,
    );
    window.location.href = `mailto:${identity.email}?subject=${subject}&body=${body}`;
    setStatus('sent');
  };

  return (
    <section
      id="contacto"
      className="relative border-t border-hueso/5 px-5 py-24 md:px-10 md:py-36 lg:px-28"
    >
      <motion.div {...reveal}>
        <SectionHeading signal={contact.signal} title={contact.title} />
      </motion.div>

      <div className="mt-14 grid gap-14 lg:grid-cols-12">
        <motion.div {...reveal} className="lg:col-span-5">
          <h3 className="font-display text-3xl font-bold leading-tight tracking-tight text-hueso md:text-4xl">
            {contact.headline}
          </h3>
          <p className="mt-4 leading-relaxed text-humo">{contact.blurb}</p>

          <a
            href={socials.email}
            className="mt-8 inline-block font-mono text-sm tracking-wide text-cobre transition-colors hover:text-cobre-bright"
          >
            {identity.email}
          </a>

          <ul className="mt-10 space-y-4">
            {SOCIAL_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-humo transition-colors hover:text-cobre"
                >
                  <span
                    aria-hidden="true"
                    className="h-px w-6 bg-humo/40 transition-[background-color,transform] duration-200 group-hover:bg-cobre motion-safe:group-hover:scale-x-150"
                  />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Inputs controlados sin <form>: el envío lo dispara el onClick */}
        <motion.div {...reveal} className="space-y-8 lg:col-span-6 lg:col-start-7">
          <Field
            id="contact-name"
            label={contact.form.name}
            value={values.name}
            onChange={setField('name')}
          />
          <Field
            id="contact-email"
            label={contact.form.email}
            value={values.email}
            onChange={setField('email')}
            type="email"
          />
          <Field
            id="contact-message"
            label={contact.form.message}
            value={values.message}
            onChange={setField('message')}
            textarea
          />

          <div className="flex flex-wrap items-center gap-6">
            <Button onClick={handleSend}>{contact.form.submit}</Button>
            {status && (
              <p
                role="status"
                className={`font-mono text-xs ${
                  status === 'error' ? 'text-cobre' : 'text-patina'
                }`}
              >
                {status === 'error' ? contact.form.error : contact.form.sent}
              </p>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
