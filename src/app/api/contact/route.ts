import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

const GARAGE_RECIPIENTS = [
  "ccmot1@outlook.com",
  "Jpautorepairclydebank@gmail.com",
];

const FROM = "enquiries@thegarageclydebank.com";

export async function POST(req: Request) {
  const body = await req.json();
  const { firstName, lastName, email, phone, reg, service, centre, message } = body;

  const serviceLabel: Record<string, string> = {
    mot: "MOT Test",
    "interim-service": "Interim Service",
    "full-service": "Full Service",
    "major-service": "Major Service",
    repairs: "Repairs",
    tyres: "Tyres",
    diagnostics: "Diagnostics",
    other: "Other",
  };

  const centreLabel =
    centre === "domestic"
      ? "Domestic Centre – 423 Glasgow Road"
      : centre === "commercial"
      ? "Commercial Centre – 6 Caledonia Street"
      : "Not specified";

  try {
    // ── Email to the garage ──────────────────────────────────────────────────
    await resend.emails.send({
      from: FROM,
      to: GARAGE_RECIPIENTS,
      replyTo: email,
      subject: `New Booking Request – ${firstName} ${lastName}${reg ? ` (${reg})` : ""}`,
      html: garageEmailHtml({
        firstName,
        lastName,
        email,
        phone,
        reg,
        service: serviceLabel[service] || service || "Not specified",
        centre: centreLabel,
        message,
      }),
    });

    // ── Confirmation email to the customer ──────────────────────────────────
    await resend.emails.send({
      from: FROM,
      to: email,
      subject: "We've received your booking request – The Garage Clydebank",
      html: customerEmailHtml({ firstName }),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}

// ── Templates ────────────────────────────────────────────────────────────────

function garageEmailHtml(d: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  reg: string;
  service: string;
  centre: string;
  message: string;
}) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>New Booking Request</title>
</head>
<body style="margin:0;padding:0;background:#0D0D0D;font-family:'DM Sans',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0D0D0D;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background:#C41E3A;padding:0 0 0 4px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background:#1A1A1A;padding:28px 32px;">
                    <p style="margin:0 0 4px;font-family:'DM Sans',Arial,sans-serif;font-size:10px;letter-spacing:0.3em;text-transform:uppercase;color:#F5A623;">The Garage Clydebank</p>
                    <h1 style="margin:0;font-family:Arial Black,Arial,sans-serif;font-size:28px;color:#FFFFFF;letter-spacing:0.05em;text-transform:uppercase;">New Booking Request</h1>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background:#1A1A1A;padding:32px;">

              <!-- Customer details table -->
              <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid rgba(255,255,255,0.08);margin-bottom:24px;">
                <tr>
                  <td colspan="2" style="background:#2A2A2A;padding:12px 16px;border-bottom:1px solid rgba(255,255,255,0.08);">
                    <p style="margin:0;font-family:Arial,sans-serif;font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:rgba(255,255,255,0.5);">Customer Details</p>
                  </td>
                </tr>
                ${row("Name", `${d.firstName} ${d.lastName}`)}
                ${row("Email", `<a href="mailto:${d.email}" style="color:#F5A623;text-decoration:none;">${d.email}</a>`)}
                ${row("Phone", d.phone || "Not provided")}
              </table>

              <!-- Vehicle & booking table -->
              <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid rgba(255,255,255,0.08);margin-bottom:24px;">
                <tr>
                  <td colspan="2" style="background:#2A2A2A;padding:12px 16px;border-bottom:1px solid rgba(255,255,255,0.08);">
                    <p style="margin:0;font-family:Arial,sans-serif;font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:rgba(255,255,255,0.5);">Booking Details</p>
                  </td>
                </tr>
                ${row("Registration", d.reg ? `<span style="font-family:Arial Black,Arial,sans-serif;font-size:16px;letter-spacing:0.15em;color:#FFFFFF;">${d.reg}</span>` : "Not provided")}
                ${row("Service", d.service)}
                ${row("Centre", d.centre)}
              </table>

              <!-- Message -->
              ${
                d.message
                  ? `<table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid rgba(255,255,255,0.08);margin-bottom:24px;">
                      <tr>
                        <td style="background:#2A2A2A;padding:12px 16px;border-bottom:1px solid rgba(255,255,255,0.08);">
                          <p style="margin:0;font-family:Arial,sans-serif;font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:rgba(255,255,255,0.5);">Message</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:16px;font-family:'DM Sans',Arial,sans-serif;font-size:14px;color:rgba(255,255,255,0.7);line-height:1.6;">${d.message}</td>
                      </tr>
                    </table>`
                  : ""
              }

              <!-- Reply CTA -->
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background:#C41E3A;">
                    <a href="mailto:${d.email}" style="display:inline-block;padding:14px 28px;font-family:Arial,sans-serif;font-size:12px;letter-spacing:0.15em;text-transform:uppercase;font-weight:700;color:#FFFFFF;text-decoration:none;">Reply to Customer</a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#0D0D0D;padding:20px 32px;border-top:1px solid rgba(255,255,255,0.06);">
              <p style="margin:0;font-family:'DM Sans',Arial,sans-serif;font-size:11px;color:rgba(255,255,255,0.25);">The Garage Clydebank · 423 Glasgow Road, Clydebank G81 1LW · 0141 952 6761</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function row(label: string, value: string) {
  return `<tr>
    <td style="padding:12px 16px;width:36%;font-family:Arial,sans-serif;font-size:11px;letter-spacing:0.1em;text-transform:uppercase;color:rgba(255,255,255,0.4);border-bottom:1px solid rgba(255,255,255,0.06);vertical-align:top;">${label}</td>
    <td style="padding:12px 16px;font-family:'DM Sans',Arial,sans-serif;font-size:14px;color:#FFFFFF;border-bottom:1px solid rgba(255,255,255,0.06);vertical-align:top;">${value}</td>
  </tr>`;
}

function customerEmailHtml({ firstName }: { firstName: string }) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>Booking Request Received</title>
</head>
<body style="margin:0;padding:0;background:#0D0D0D;font-family:'DM Sans',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0D0D0D;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background:#C41E3A;padding:0 0 0 4px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background:#1A1A1A;padding:28px 32px;">
                    <p style="margin:0 0 4px;font-family:Arial,sans-serif;font-size:10px;letter-spacing:0.3em;text-transform:uppercase;color:#F5A623;">The Garage Clydebank</p>
                    <h1 style="margin:0;font-family:Arial Black,Arial,sans-serif;font-size:28px;color:#FFFFFF;letter-spacing:0.05em;text-transform:uppercase;">Request Received</h1>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background:#1A1A1A;padding:36px 32px;">

              <!-- Tick icon -->
              <table cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
                <tr>
                  <td style="background:#C41E3A;width:52px;height:52px;text-align:center;vertical-align:middle;">
                    <span style="font-size:22px;color:#FFFFFF;line-height:52px;">✓</span>
                  </td>
                </tr>
              </table>

              <p style="margin:0 0 16px;font-family:'DM Sans',Arial,sans-serif;font-size:16px;color:#FFFFFF;line-height:1.6;">Hi ${firstName},</p>
              <p style="margin:0 0 16px;font-family:'DM Sans',Arial,sans-serif;font-size:15px;color:rgba(255,255,255,0.7);line-height:1.7;">Thanks for getting in touch. We've received your booking request and a member of our team will be in contact shortly to confirm your appointment.</p>
              <p style="margin:0 0 32px;font-family:'DM Sans',Arial,sans-serif;font-size:15px;color:rgba(255,255,255,0.7);line-height:1.7;">If you need to speak to us urgently in the meantime, give us a call on the number below.</p>

              <!-- Divider -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
                <tr><td style="border-top:1px solid rgba(255,255,255,0.08);"></td></tr>
              </table>

              <!-- Contact details -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:8px;">
                <tr>
                  <td style="padding-bottom:8px;">
                    <p style="margin:0 0 2px;font-family:Arial,sans-serif;font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:rgba(255,255,255,0.4);">Domestic Centre</p>
                    <p style="margin:0;font-family:'DM Sans',Arial,sans-serif;font-size:14px;color:#FFFFFF;">423 Glasgow Road, Clydebank G81 1LW</p>
                    <a href="tel:01419526761" style="font-family:'DM Sans',Arial,sans-serif;font-size:14px;color:#F5A623;text-decoration:none;">0141 952 6761</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding-top:12px;">
                    <p style="margin:0 0 2px;font-family:Arial,sans-serif;font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:rgba(255,255,255,0.4);">Opening Hours</p>
                    <p style="margin:0;font-family:'DM Sans',Arial,sans-serif;font-size:14px;color:rgba(255,255,255,0.7);">Mon–Thu: 8:30am – 6:00pm &nbsp;·&nbsp; Fri: 8:30am – 4:00pm</p>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#0D0D0D;padding:20px 32px;border-top:1px solid rgba(255,255,255,0.06);">
              <p style="margin:0;font-family:'DM Sans',Arial,sans-serif;font-size:11px;color:rgba(255,255,255,0.25);">© The Garage Clydebank · You're receiving this because you submitted a booking request on our website.</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}