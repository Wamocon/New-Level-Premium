import { streamText, convertToModelMessages, type UIMessage } from 'ai';
import { resolveModel, providerConfigured } from '@/lib/ai/provider';
import { buildSystemPrompt } from '@/lib/ai/prompt';
import { routing } from '@/i18n/routing';
import type { Locale } from '@/lib/types';

export const maxDuration = 30;

export async function POST(req: Request) {
  let body: { messages?: UIMessage[]; locale?: string };
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const messages = body.messages ?? [];
  const locale: Locale = (routing.locales as readonly string[]).includes(
    body.locale ?? '',
  )
    ? (body.locale as Locale)
    : 'en';

  if (!providerConfigured()) {
    return Response.json(
      {
        error:
          'The AI concierge is not configured yet. Add ANTHROPIC_API_KEY (or set AI_PROVIDER=openai and OPENAI_API_KEY) to .env.local.',
      },
      { status: 503 },
    );
  }

  const fallback: Record<Locale, string> = {
    en: 'Sorry, I could not reach the assistant just now. Please try again in a moment, or message us on WhatsApp and a human advisor will help right away.',
    ru: 'Извините, сейчас не удалось получить ответ ассистента. Попробуйте ещё раз через минуту или напишите нам в WhatsApp, и наш консультант сразу поможет.',
    tr: 'Üzgünüz, şu anda asistana ulaşılamadı. Lütfen birazdan tekrar deneyin veya WhatsApp’tan yazın; danışmanımız hemen yardımcı olur.',
  };

  const result = streamText({
    model: resolveModel(),
    system: buildSystemPrompt(locale),
    messages: await convertToModelMessages(messages),
    temperature: 0.4,
    // Don't hang forever if the upstream model stalls (flaky/throttled endpoint).
    abortSignal: AbortSignal.timeout(28_000),
    onError: ({ error }) => {
      console.error('[chat] stream error:', error);
    },
  });

  return result.toUIMessageStreamResponse({
    onError: () => fallback[locale],
  });
}
