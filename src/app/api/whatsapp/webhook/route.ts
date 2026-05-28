import { NextResponse } from 'next/server';

const GEMINI_API_KEY = process.env.GEMINI_API_KEY || "AIzaSyB44INmWLBLif1uPchJM4L_VQ27peKRChs";
const WHATSAPP_TOKEN = process.env.WHATSAPP_TOKEN;
const VERIFY_TOKEN = process.env.VERIFY_TOKEN || "KHUVO_VERIFY_123";

// Verification request from WhatsApp (GET)
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  
  const mode = searchParams.get("hub.mode");
  const token = searchParams.get("hub.verify_token");
  const challenge = searchParams.get("hub.challenge");

  if (mode === "subscribe" && token === VERIFY_TOKEN) {
    console.log("WEBHOOK_VERIFIED");
    return new NextResponse(challenge, { status: 200 });
  } else {
    return new NextResponse("Forbidden", { status: 403 });
  }
}

// Receive messages from WhatsApp (POST)
export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Check if it's a WhatsApp status update or message
    if (body.object === "whatsapp_business_account") {
      for (const entry of body.entry || []) {
        for (const change of entry.changes || []) {
          const value = change.value;
          
          if (value?.messages && value?.messages[0]) {
            const message = value.messages[0];
            const phoneNumberId = value.metadata.phone_number_id;
            const from = message.from; // Sender's phone number
            const msgBody = message.text?.body; // Message text

            if (msgBody) {
              console.log(`Received message from ${from}: ${msgBody}`);
              
              // 1. Get response from Gemini
              const geminiResponse = await getGeminiResponse(msgBody);
              
              // 2. Send reply back to WhatsApp
              await sendWhatsAppMessage(phoneNumberId, from, geminiResponse);
            }
          }
        }
      }
      return new NextResponse("EVENT_RECEIVED", { status: 200 });
    } else {
      return new NextResponse("Not Found", { status: 404 });
    }
  } catch (error) {
    console.error("Webhook POST Error:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

async function getGeminiResponse(userText: string): Promise<string> {
  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: `You are an AI assistant for Khuvo, a company providing Solar Panel cleaning, Water Tank cleaning, and Doorstep Vehicle Wash services. The official contact number is +91 94737 47808 and the website is khuvo.vercel.in. Answer politely and concisely.\n\nUser: ${userText}` }] }],
        }),
      }
    );

    const data = await response.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text || "I'm sorry, I couldn't process that request at this time.";
  } catch (error) {
    console.error("Error getting Gemini response:", error);
    return "I am currently experiencing technical difficulties. Please contact +91 94737 47808 directly.";
  }
}

async function sendWhatsAppMessage(phoneNumberId: string, to: string, message: string) {
  try {
    if (!WHATSAPP_TOKEN) {
      console.warn("WHATSAPP_TOKEN is not set. Simulating message send.");
      console.log(`To: ${to}, Message: ${message}`);
      return;
    }

    const response = await fetch(
      `https://graph.facebook.com/v18.0/${phoneNumberId}/messages`,
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${WHATSAPP_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messaging_product: "whatsapp",
          to: to,
          text: { body: message },
        }),
      }
    );

    if (!response.ok) {
      const errData = await response.json();
      console.error("Failed to send WhatsApp message:", errData);
    } else {
      console.log(`Message successfully sent to ${to}`);
    }
  } catch (error) {
    console.error("Error sending WhatsApp message:", error);
  }
}
