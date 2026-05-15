---
title: "Tech Talk Collections"
date: 2026-05-15
draft: false
---

A running collection of tech talks I've watched and what I took away from them.

---

## [Andrej Karpathy — Deep Dive into LLMs](https://www.youtube.com/watch?v=7xTGNNLPyMI)

Key takeaways:

- What the pre-training stage looks like — training on massive text corpora to predict the next token
- Pre-training produces essentially a **token simulator**: the model learns to mimic text distributions, not to reason or follow instructions
- What the post-training stage looks like — fine-tuning with RLHF, instruction tuning, and alignment techniques
- How post-training handles many hard problems: reducing hallucinations, giving the model a consistent character and persona
- The difference between a **base model** (raw token predictor from pre-training) and a **post-trained model** (aligned, instruction-following assistant)
- The model's **context window** is like working memory — precise and temporary, only what's in the current prompt
- The model's **training data** is like internet history — a vague, compressed recollection baked into weights, not directly retrievable
- The fundamental distinction between **context window** (what the model actively sees right now) and **training data** (what shaped its weights during learning)
