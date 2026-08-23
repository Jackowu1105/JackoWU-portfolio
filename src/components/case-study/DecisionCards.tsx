'use client'

import { motion } from 'framer-motion'

export interface DecisionItem {
  /** Badge 文字：A / B / C、V1 / V2 / V3、Round 1 等 */
  tag: string
  title: string
  /** 呢個方案係咩 */
  summary: string
  /** 結局：點樣被否決／用戶反應／改進咗咩 */
  outcome: string
  /**
   * rejected — 被否決嘅方案（灰卡）
   * neutral  — 過程中嘅一步（灰卡）
   * final    — 最終揀咗／完成嘅方案（金框高亮）
   */
  status?: 'rejected' | 'neutral' | 'final'
}

interface DecisionCardsProps {
  items: DecisionItem[]
}

// 方案比較／版本迭代嘅決策卡片堆。
// 取代 markdown table：每個方案一張直排卡，最後採納嗰張金框高亮，
// 等讀者一眼睇到「探索咗咩、點解揀呢個」。
export function DecisionCards({ items }: DecisionCardsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, filter: 'blur(3px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className="my-6 space-y-3"
    >
      {items.map((item, i) => {
        const isFinal = item.status === 'final'
        const outcomeLabel =
          item.status === 'rejected'
            ? 'Rejected'
            : item.status === 'final'
              ? 'Chosen'
              : 'Improved'
        return (
          <div
            key={i}
            className={`flex gap-4 rounded-xl p-5 ${
              isFinal
                ? 'border-2 border-accent-gold/50 bg-accent-glow/40'
                : 'border border-black/5 bg-white/30'
            }`}
          >
            <span
              className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm font-semibold ${
                isFinal ? 'bg-accent-gold text-white font-bold' : 'bg-black/5 text-text-tertiary'
              }`}
            >
              {item.tag}
            </span>
            <div>
              <p className="font-semibold text-text-primary text-[15px] mb-1">
                {item.title}
                {isFinal && (
                  <span className="ml-2 align-middle text-[10px] font-medium uppercase tracking-wider px-2 py-0.5 rounded-full bg-accent-gold/20 text-accent-deep">
                    Final
                  </span>
                )}
              </p>
              <p className="text-sm text-text-secondary leading-relaxed mb-1">{item.summary}</p>
              <p className="text-sm text-text-secondary leading-relaxed">
                <strong className="text-text-primary">{outcomeLabel}</strong> — {item.outcome}
              </p>
            </div>
          </div>
        )
      })}
    </motion.div>
  )
}