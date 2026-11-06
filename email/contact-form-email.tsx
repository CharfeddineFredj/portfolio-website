import React from "react";
import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";

type ContactFormEmailProps = {
  subject: string;
  message: string;
  senderEmail: string;
  receivedAt: string;
};

// Inline styles only: they are the most reliable way to keep the layout
// consistent across email clients (Gmail, Outlook, Apple Mail...).
const colors = {
  page: "#f3f4f6",
  card: "#ffffff",
  navy: "#0f172a",
  text: "#111827",
  muted: "#6b7280",
  border: "#e5e7eb",
  soft: "#f9fafb",
};

const fontFamily =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif';

const styles: Record<string, React.CSSProperties> = {
  body: {
    margin: 0,
    padding: "32px 12px",
    backgroundColor: colors.page,
    fontFamily,
  },
  container: {
    width: "600px",
    maxWidth: "100%",
    margin: "0 auto",
    backgroundColor: colors.card,
    border: `1px solid ${colors.border}`,
    borderRadius: "8px",
    overflow: "hidden",
  },
  header: {
    backgroundColor: colors.navy,
    padding: "28px 32px",
  },
  eyebrow: {
    margin: 0,
    fontSize: "12px",
    lineHeight: "16px",
    letterSpacing: "1.2px",
    textTransform: "uppercase",
    color: "#94a3b8",
  },
  title: {
    margin: "8px 0 0",
    fontSize: "22px",
    lineHeight: "30px",
    fontWeight: 600,
    color: "#ffffff",
  },
  content: {
    padding: "32px",
  },
  paragraph: {
    margin: "0 0 24px",
    fontSize: "15px",
    lineHeight: "24px",
    color: colors.text,
  },
  label: {
    margin: 0,
    fontSize: "12px",
    lineHeight: "20px",
    letterSpacing: "0.8px",
    textTransform: "uppercase",
    color: colors.muted,
  },
  value: {
    margin: 0,
    fontSize: "15px",
    lineHeight: "20px",
    color: colors.text,
    wordBreak: "break-all",
  },
  divider: {
    borderColor: colors.border,
    margin: "28px 0",
  },
  messageBox: {
    marginTop: "12px",
    padding: "20px 22px",
    backgroundColor: colors.soft,
    border: `1px solid ${colors.border}`,
    borderLeft: `3px solid ${colors.navy}`,
    borderRadius: "6px",
  },
  messageText: {
    margin: 0,
    fontSize: "15px",
    lineHeight: "26px",
    color: colors.text,
    whiteSpace: "pre-wrap",
    wordBreak: "break-word",
  },
  button: {
    display: "inline-block",
    padding: "12px 22px",
    backgroundColor: colors.navy,
    borderRadius: "6px",
    color: "#ffffff",
    fontSize: "14px",
    fontWeight: 600,
    textDecoration: "none",
  },
  footer: {
    padding: "20px 32px",
    backgroundColor: colors.soft,
    borderTop: `1px solid ${colors.border}`,
  },
  footerText: {
    margin: 0,
    fontSize: "12px",
    lineHeight: "18px",
    color: colors.muted,
  },
};

export default function ContactFormEmail({
  subject,
  message,
  senderEmail,
  receivedAt,
}: ContactFormEmailProps) {
  const replyHref = `mailto:${encodeURIComponent(senderEmail)}?subject=${encodeURIComponent(
    "Re: Your message via my portfolio website"
  )}`;

  return (
    <Html lang="en">
      <Head />
      <Preview>{`New message from ${senderEmail}`}</Preview>
      <Body style={styles.body}>
        <Container style={styles.container}>
          <Section style={styles.header}>
            <Text style={styles.eyebrow}>Portfolio contact form</Text>
            <Heading style={styles.title}>New message received</Heading>
          </Section>

          <Section style={styles.content}>
            <Text style={styles.paragraph}>
              A visitor has sent you a message through the contact form on your
              portfolio website. The details are listed below.
            </Text>

            <Row style={{ marginBottom: "12px" }}>
              <Column style={{ width: "120px", verticalAlign: "top" }}>
                <Text style={styles.label}>From</Text>
              </Column>
              <Column style={{ verticalAlign: "top" }}>
                <Text style={styles.value}>
                  <Link
                    href={`mailto:${senderEmail}`}
                    style={{ color: colors.navy, textDecoration: "underline" }}
                  >
                    {senderEmail}
                  </Link>
                </Text>
              </Column>
            </Row>

            <Row style={{ marginBottom: "12px" }}>
              <Column style={{ width: "120px", verticalAlign: "top" }}>
                <Text style={styles.label}>Subject</Text>
              </Column>
              <Column style={{ verticalAlign: "top" }}>
                <Text style={styles.value}>{subject}</Text>
              </Column>
            </Row>

            <Row>
              <Column style={{ width: "120px", verticalAlign: "top" }}>
                <Text style={styles.label}>Received</Text>
              </Column>
              <Column style={{ verticalAlign: "top" }}>
                <Text style={styles.value}>{receivedAt}</Text>
              </Column>
            </Row>

            <Hr style={styles.divider} />

            <Text style={styles.label}>Message</Text>
            <Section style={styles.messageBox}>
              <Text style={styles.messageText}>{message}</Text>
            </Section>

            <Section style={{ marginTop: "28px" }}>
              <Button href={replyHref} style={styles.button}>
                Reply to sender
              </Button>
            </Section>
          </Section>

          <Section style={styles.footer}>
            <Text style={styles.footerText}>
              This is an automated notification from your portfolio website.
              Replying to this email sends your response directly to the sender.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
