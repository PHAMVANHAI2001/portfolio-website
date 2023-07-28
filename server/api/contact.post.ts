import { IContactData } from "~/types";
import sendEmails from "../utils/send-emails";
import { log } from "console";

export default defineEventHandler(async (event) => {
  try {
    const body: IContactData | null = await readBody(event);
    if (!body) {
      return false;
    }
    const source = await useStorage().getItem(
      "root:components:SendEmail:email-contact.html"
    );

    if (source) {
      await sendEmails({
        source: source as string,
        head: {
          to: "haipham2001vn@gmail.com",
          from: body.email,
          subject: "Thư mời hợp tác",
        },
        body: { name: body.name, body: body.message },
      });
    }
    return true; // Success
  } catch (error: unknown) {
    console.log(error);
    return false;
  }

  const email_Template = (iContactData: IContactData) => {
    return `<!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>

  <body>
    <p style="white-space: pre-line;">${iContactData.message}</p>
  </body>

  </html>`;
  };
});
