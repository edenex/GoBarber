export default {
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
  default: {
    from: 'Equipe GoBarber <noreply@gobarber.com>',
  },
};

/**
 * Ferramentas de envio:
	. Amazon SES
	. Mailgun
	. Sparkpost
	. Madril (só para Mailchimp)
	. Gmail (limite de envio de mensagens)
	. Mailtrap (Apenas para ambientes de DEV)
 */
