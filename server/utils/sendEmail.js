import dotenv from 'dotenv'
import sgMail from '@sendgrid/mail'
dotenv.config()

export const sendEmail = async (email, type, data) => {
    try {

        const emailsTemplate = emailsTemplates(type, data)

        sgMail.setApiKey(process.env.SENDGRID_API_KEY);

        const msg = {
            to: email,
            from: process.env.SENDGRID_SENDER,
            subject: emailsTemplate.title,
            html: emailsTemplate.body,
        };

        //ES8
        (async () => {
            try {
                await sgMail.send(msg);
            } catch (error) {
                console.error(error);
                if (error.response) {
                    console.error(error.response.body)
                }
            }
        })();
    } catch (error) {
        console.log(error)
    }
}

const emailsTemplates = (type, data) => {
    switch (type) {
        case "reg":
            return {
                title: "",
                body: `
                <!DOCTYPE html>
                <html>
                <head>
                    <meta charset="UTF-8">
                </head>
                <body style="background-color: #cc4343; color: #fff; font-family: Arial, sans-serif; text-align: center;">
                    <div style="background-color: #292929; border-radius: 10px; display: inline-block; padding: 10px; margin-top: 30px; margin-bottom: 30px">
                        <img src="data:image/png;base64,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" alt="логотип">
                    </div>
                    <h1>Шановний ${data.name},</h1>
                    <p style="margin-bottom: 50px">Дякуємо Вам за реєстрацію на нашому сайті!</p>
                    <a href="https://carsaleo.000webhostapp.com/" style="text-decoration: none; color: #fff"><div style="background-color: #292929; border-radius: 10px; display: inline-block; padding: 10px;">Перейти на сайт</div></a>
                </body>
                </html> 
                `
            }
        default:
            break;
    }
}