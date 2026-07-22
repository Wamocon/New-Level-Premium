'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useChat } from '@ai-sdk/react';
import { DefaultChatTransport, type UIMessage } from 'ai';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import type { Locale } from '@/lib/types';
import { STARTERS } from '@/lib/ai/starters';
import { cn } from '@/lib/utils';
import { MessageCircle, X, ArrowUp, Sparkles } from 'lucide-react';

const textOf = (m: UIMessage) =>
  m.parts.map((p) => (p.type === 'text' ? p.text : '')).join('');

export function ChatWidget() {
  const t = useTranslations('chat');
  const locale = useLocale() as Locale;
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  const transport = useMemo(
    () => new DefaultChatTransport({ api: '/api/chat', body: { locale } }),
    [locale],
  );
  const { messages, sendMessage, status, error } = useChat({ transport });

  const busy = status === 'submitted' || status === 'streaming';

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, status, open]);

  function submit(text: string) {
    const value = text.trim();
    if (!value || busy) return;
    sendMessage({ text: value });
    setInput('');
  }

  return (
    <>
      {/* launcher */}
      <AnimatePresence>
        {!open && (
          <motion.button
            key="launcher"
            type="button"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            onClick={() => setOpen(true)}
            aria-label={t('open')}
            data-testid="chat-launcher"
            className="group fixed bottom-6 right-6 z-[80] flex size-14 items-center justify-center rounded-full bg-gradient-to-br from-gold-soft to-bronze text-obsidian shadow-[0_16px_50px_-12px_rgba(201,162,75,0.65)]"
          >
            <span className="absolute inset-0 animate-ping rounded-full bg-gold/40 [animation-duration:2.6s]" />
            <MessageCircle className="relative size-6" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 240, damping: 24 }}
            data-testid="chat-panel"
            className="glass fixed bottom-6 right-6 z-[80] flex h-[min(76vh,640px)] w-[min(92vw,400px)] flex-col overflow-hidden rounded-[1.75rem] border-white/10 shadow-2xl"
          >
            {/* header */}
            <div className="flex items-center gap-3 border-b border-white/8 bg-white/[0.03] px-5 py-4">
              <div className="flex size-10 items-center justify-center rounded-full bg-gradient-to-br from-gold-soft to-bronze text-obsidian">
                <Sparkles className="size-5" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="truncate font-display text-base font-semibold text-cloud">
                  {t('title')}
                </div>
                <div className="flex items-center gap-1.5 text-xs text-cloud/50">
                  <span className="size-1.5 rounded-full bg-emerald-400" />
                  {t('subtitle')}
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label={t('reset')}
                className="flex size-9 items-center justify-center rounded-full text-cloud/60 transition-colors hover:bg-white/5 hover:text-cloud"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* messages */}
            <div
              ref={scrollRef}
              data-lenis-prevent
              className="flex-1 space-y-4 overflow-y-auto px-5 py-5"
            >
              <Bubble role="assistant">{t('greeting')}</Bubble>

              {messages.map((m) => (
                <Bubble key={m.id} role={m.role === 'user' ? 'user' : 'assistant'}>
                  {textOf(m)}
                </Bubble>
              ))}

              {status === 'submitted' && <Typing />}

              {error && (
                <div className="rounded-2xl border border-red-500/20 bg-red-500/5 px-4 py-3 text-sm text-red-300/90">
                  {t('error')}
                </div>
              )}

              {messages.length === 0 && !error && (
                <div className="space-y-2 pt-1">
                  {STARTERS[locale].map((q) => (
                    <button
                      key={q}
                      type="button"
                      onClick={() => submit(q)}
                      className="block w-full rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-2.5 text-left text-sm text-cloud/75 transition-all hover:border-gold/40 hover:text-gold"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* input */}
            <div className="border-t border-white/8 bg-white/[0.02] px-4 pb-3 pt-3">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  submit(input);
                }}
                className="flex items-end gap-2"
              >
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      submit(input);
                    }
                  }}
                  rows={1}
                  placeholder={t('placeholder')}
                  className="max-h-28 flex-1 resize-none bg-transparent px-2 py-2 text-sm text-cloud placeholder-cloud/40 outline-none"
                />
                <button
                  type="submit"
                  disabled={busy || !input.trim()}
                  aria-label={t('send')}
                  className="flex size-9 shrink-0 items-center justify-center rounded-full bg-gold text-obsidian transition-all hover:bg-gold-soft disabled:opacity-40"
                >
                  <ArrowUp className="size-4" />
                </button>
              </form>
              <p className="mt-2 px-2 text-[0.65rem] leading-tight text-cloud/35">
                {t('disclaimer')}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Bubble({
  role,
  children,
}: {
  role: 'user' | 'assistant';
  children: React.ReactNode;
}) {
  return (
    <div className={cn('flex', role === 'user' ? 'justify-end' : 'justify-start')}>
      <div
        className={cn(
          'max-w-[85%] whitespace-pre-wrap rounded-2xl px-4 py-2.5 text-sm leading-relaxed',
          role === 'user'
            ? 'rounded-br-md bg-gold text-obsidian'
            : 'rounded-bl-md border border-white/8 bg-white/[0.04] text-cloud/90',
        )}
      >
        {children}
      </div>
    </div>
  );
}

function Typing() {
  return (
    <div className="flex justify-start">
      <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-md border border-white/8 bg-white/[0.04] px-4 py-3">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="size-1.5 animate-bounce rounded-full bg-gold/70"
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        ))}
      </div>
    </div>
  );
}
