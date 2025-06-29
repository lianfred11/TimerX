import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { Bot } from "grammy";

// Toggle analytics on/off
const ANALYTICS_ENABLED = false; // Set to false to disable analytics

async function handleAnalytics(request: NextRequest) {
  // Early return if analytics is disabled
  if (!ANALYTICS_ENABLED) {
    return;
  }

  const bot = new Bot(process.env.BOT_TOKEN!);
  const ip = request.headers.get("x-forwarded-for") ?? "127.0.0.1";
  const headers: { [key: string]: string } = {};

  for (const [key, value] of request.headers.entries()) {
    headers[key] = value;
  }

  try {
    const data = await getIp(ip);
    const body = await request.text();
    const message = `
New Request (Method: \`${request.method}\`) (URL: \`${request.nextUrl.pathname}\`)
IP: \`${ip}\`, Country: \`${data.country}\`, ISP: \`${data.isp}\`
Headers: \`${JSON.stringify(headers)}\`
Body: ${body.length > 1000 ? "Body size is too large" : `\`${body}\``}
    `;
    console.log(message);
    await bot.api.sendMessage(process.env.CHAT_ID!, message, {
      parse_mode: "Markdown",
      link_preview_options: { is_disabled: true }
    });
  } catch (error) {
    console.log(error);
  }
}

async function getIp(ip: string) {
  const response = await fetch(`http://ip-api.com/json/${ip}`);
  if (!response.ok) throw new Error(`Status: ${response.status}`);
  return await response.json();
}

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  handleAnalytics(request);
  // return NextResponse.redirect(new URL('/', request.url))
}