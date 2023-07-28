import { IContactData } from "~/types";
import sendEmails from "../utils/send-emails";

export default defineEventHandler(async (event) => {
  try {
    const dataForm: IContactData | null = await readBody(event);
    if (!dataForm) {
      return false;
    }
    const source = email_Template(dataForm);

    if (source) {
      await sendEmails({
        source: source,
        head: {
          to: "haipham2001vn@gmail.com",
          from: dataForm.email,
          subject: "Thư mời hợp tác",
        },
        body: { name: dataForm.name, body: dataForm.message },
      });
    }
    return true; // Success
  } catch (error: unknown) {
    console.log(error);
    return false;
  }

  function email_Template(iContactData: IContactData) {
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
  }
});
