"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const subject = formData.get("subject");
  const message = formData.get("message");

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(subject, 200)) {
    return {
      error: "Invalid subject",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  const receivedAt =
    new Date().toLocaleString("en-GB", {
      timeZone: "UTC",
      dateStyle: "medium",
      timeStyle: "short",
    }) + " UTC";

  // Create the client here, not at module load: Resend throws when the key is
  // missing, which would crash the whole page at build time.
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return {
      error: "The email service is not configured yet. Please try again later.",
    };
  }

  let data;
  try {
    const resend = new Resend(apiKey);
    data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "fradjcharf@gmail.com",
      subject: `[Portfolio] ${subject}`,
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, {
        subject: subject,
        message: message,
        senderEmail: senderEmail,
        receivedAt: receivedAt,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
