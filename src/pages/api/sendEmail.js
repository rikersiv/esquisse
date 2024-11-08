import nodemailer from 'nodemailer';
import cors from 'cors';

const corsMiddleware = cors({
    origin: '*',
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type'],
    optionsSuccessStatus: 200,
});

function runMiddleware(req, res, fn) {
    return new Promise((resolve, reject) => {
        fn(req, res, (result) => {
            if (result instanceof Error) {
                return reject(result);
            }
            return resolve(result);
        });
    });
}

async function sendApplication(mailOptions) {
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        service: process.env.EMAIL_SERVICE,
        port: process.env.EMAIL_PORT,
        secure: process.env.EMAIL_SECURE === 'true',
        auth: {
            user: process.env.EMAIL_FROM,
            pass: process.env.EMAIL_PASSWORD,
        },
    });

    return new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                reject(error);
            } else {
                resolve(info);
            }
        });
    });
}

const sendApplicationHandler = async (req, res) => {
    await runMiddleware(req, res, corsMiddleware);

    if (req.method === 'POST') {
        const application = req.body;
        console.log('application:', application); 

        const formattedAnswers = Object.entries(application).map(([question, answer]) => {
            return `<p><strong>${question}:</strong></p>
            <p>&nbsp;&nbsp; ${answer}</p>`;
        }).join('');

        const userMailOptions = {
            from: `"esquisse" <${process.env.EMAIL_FROM}>`,
            to: application.email,
            subject: "Thanks for sending a Message",
            html: `<!DOCTYPE html>
            <html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
            <head>
                <title></title>
                <meta content="text/html; charset=utf-8" http-equiv="Content-Type"/>
                <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
                <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@100;200;300;400;500;600;700;800;900" rel="stylesheet" type="text/css"/>
                <style>
                    * {
                        box-sizing: border-box;
                    }
            
                    body {
                        margin: 0;
                        padding: 0;
                        font-family: 'Quicksand', sans-serif; /* Set default font family to Quicksand */
                    }
            
                    a[x-apple-data-detectors] {
                        color: inherit !important;
                        text-decoration: inherit !important;
                    }
            
                    #MessageViewBody a {
                        color: inherit;
                        text-decoration: none;
                    }
            
                    p {
                        line-height: inherit;
                    }
            
                    .desktop_hide,
                    .desktop_hide table {
                        mso-hide: all;
                        display: none;
                        max-height: 0px;
                        overflow: hidden;
                    }
            
                    .image_block img+div {
                        display: none;
                    }
            
                    sup,
                    sub {
                        line-height: 0;
                        font-size: 75%;
                    }
            
                    @media (max-width:620px) {
                        .row-5 .column-1 .block-1.button_block .alignment a,
                        .row-5 .column-1 .block-1.button_block .alignment div,
                        .row-5 .column-2 .block-1.button_block .alignment a,
                        .row-5 .column-2 .block-1.button_block .alignment div {
                            display: inline-block !important;
                        }
            
                        .mobile_hide {
                            display: none;
                        }
            
                        .row-content {
                            width: 100% !important;
                        }
            
                        .stack .column {
                            width: 100%;
                            display: block;
                        }
            
                        .mobile_hide {
                            min-height: 0;
                            max-height: 0;
                            max-width: 0;
                            overflow: hidden;
                            font-size: 0px;
                        }
            
                        .desktop_hide,
                        .desktop_hide table {
                            display: table !important;
                            max-height: none !important;
                        }
            
                        .row-2 .column-1 .block-1.paragraph_block td.pad>div {
                            text-align: left !important;
                            font-size: 15px !important;
                        }
            
                        .row-2 .column-1 .block-1.paragraph_block td.pad {
                            padding: 0 0 20px 30px !important;
                        }
            
                        .row-3 .column-1 .block-1.paragraph_block td.pad>div,
                        .row-4 .column-1 .block-1.paragraph_block td.pad>div {
                            font-size: 13px !important;
                        }
            
                        .row-1 .column-1 .block-1.image_block td.pad {
                            padding: 0 0 20px !important;
                        }
            
                        .row-1 .column-1 .block-1.image_block .alignment div {
                            margin: 0 auto !important;
                        }
            
                        .row-5 .column-1 .block-1.button_block a,
                        .row-5 .column-1 .block-1.button_block div,
                        .row-5 .column-1 .block-1.button_block span,
                        .row-5 .column-2 .block-1.button_block a,
                        .row-5 .column-2 .block-1.button_block div,
                        .row-5 .column-2 .block-1.button_block span {
                            line-height: 32px !important;
                        }
            
                        .row-5 .column-1 .block-1.button_block .alignment,
                        .row-5 .column-2 .block-1.button_block .alignment {
                            text-align: center !important;
                        }
                    }
                </style>
            </head>
            <body class="body" style="background-color: #ffffff; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
            <table border="0" cellpadding="0" cellspacing=" 0" class="nl-container" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff;" width="100%">
            <tbody>
            <tr>
            <td>
            <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
            <tbody>
            <tr>
            <td>
            <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 600px; margin: 0 auto;" width="600">
            <tbody>
            <tr>
            <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
            <table border="0" cellpadding="0" cellspacing="0" class="image_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
            <tr>
            <td class="pad" style="width:100%;">
            <div align="center" class="alignment" style="line-height:10px">
            <div style="max-width: 600px;"><img height="auto" src="https://res.cloudinary.com/dhewmvhae/image/upload/v1730968114/esquisse_book_a_demo_transparent_1_yeu5kc.png" style="display: block; height: auto; border: 0; width: 100%;" width="600"/></div>
            </div>
            </td>
            </tr>
            </table>
            </td>
            </tr>
            </tbody>
            </table>
            </td>
            </tr>
            </tbody>
            </table>
            <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%; padding-bottom: 20px">
            <tbody>
            <tr>
            <td>
            <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-radius: 0; color: #000000; width: 600px; margin: 0 auto;" width="600">
            <tbody>
            <tr>
            <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 20px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
            <table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
            <tr>
            <td class="pad" style="padding-left:30px;">
            <div style="color:#101112;direction:ltr;font-family:'Quicksand';font-size:16px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:left;mso-line-height-alt:19.2px;">
            <p style="margin: 0;">&nbsp;&nbsp;Hello ${application.name}</p>
            </div>
            </td>
            </tr>
            </table>
            </td>
            </tr>
            </tbody>
            </table>
            </td>
            </tr>
            </tbody>
            </table>
            <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-6" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
            <tbody>
            <tr>
            <td>
            <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-radius: 0; color: #000000; width: 600px; margin: 0 auto;" width="600">
            <tbody>
            <tr>
            <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
            <table border="0" cellpadding="0" cellspacing="0" class="image_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
            <tr>
            <td class="pad" style="width:100%;">
            <div align="center" class="alignment" style="line-height:10px">
            <div style="max-width: 600px;"><img height="auto" src="https://res.cloudinary.com/dhewmvhae/image/upload/v1730879795/esquisse_book_qd12m4.png" style="display: block; height: auto; border: 0; width: 100%;" width="600"/></div>
            </div>
            </td>
            </tr>
            </table>
            </td>
            </tr>
            </tbody>
            </table>
            </td>
            </tr>
            </tbody>
            </table>
            </td>
            </tr>
            </tbody>
            </table><!-- End -->
            </body>
            </html>`,
                    
                    };

        const adminMailOptions = {
            from: process.env.EMAIL_FROM,
            to: 'sales@esquisse.io', 
            subject: 'New Contact Submission',
            html: formattedAnswers, 
        };

        try {
            await sendApplication(adminMailOptions);
            await sendApplication(userMailOptions);
            res.status(200).json({ message: 'Email sent successfully!' });
        } catch (error) {
            console.error("Error sending email:", error.message); 
            res.status(500).json({ error: 'Error sending email', details: error.message }); 
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
};

export default sendApplicationHandler;