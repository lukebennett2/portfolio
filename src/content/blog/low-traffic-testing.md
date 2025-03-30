---
title: "Designing Experiments When You Don’t Have Enough Traffic"
date: "2025-03-18"
excerpt: "A practical guide to testing product ideas when your user base is too small for traditional A/B tests. Includes lessons from building Ogma Therapy and Rally."
category: "Experimentation"
slug: "low-traffic-testing"
image: "/lovable-uploads/Experimentation image.png"
---

One of the most common pieces of advice in product growth circles is: *“Just run an A/B test.”* 

But what happens when you don’t have enough users to get statistically significant results?

In early-stage products (and even niche verticals), you’re often working with tiny numbers. A few hundred MAUs. A dozen signups a week. Not nearly enough to run a standard test—but still enough to *learn*. In this post, I’ll share how I approach experimentation when traffic is low, using real examples from building **Ogma Therapy** (a clinical AI tool for speech therapists) and **Rally** (a lightweight social coordination app).

---

### The Core Problem: You Can’t Wait for Significance

Statistical significance is important. But early on, you often don’t have the luxury of 10,000 users per variant. And yet, you still need to make decisions. 

That means rethinking what you *define* as an experiment—and what kind of signals you’re willing to trust.

---

## 1. Start With the Right Question

Before any test, the most important thing is defining your question. In low-traffic contexts, you’re usually testing *directionally*—not validating a 3% lift, but seeing if something feels net-positive at all.

At Ogma, we wanted to understand:
> *“Will therapists trust an AI-generated clinical report enough to use it in practice?”*

That’s not something you can test with a button click or a pricing toggle. Instead, we ran shadow sessions with real clinicians and tracked what they edited in AI-generated drafts. The signal wasn’t in volume—it was in *depth* of feedback.

> ✅ Instead of CTR, we measured: edit rate, common rewrite patterns, and therapist confidence post-session (qualitatively).

---

## 2. Use High-Signal, Low-N Users

When your sample size is small, the *type* of user matters more than the number. Prioritize:

- **Power users** who understand the product deeply
- **First-time users** who can give you fresh onboarding signals
- **Customers in your ICP** (ideal customer profile)

For **Rally**, our early tests around casual meetup prompts (“Free now?” vs. “Want to rally?”) were run with just 8–10 friends. But they were the *right* 8–10—people who we knew were socially active, gave strong feedback, and matched our eventual target audience.

> ✅ What we learned: Simpler phrasing led to more invites sent, even with zero UI changes.

---

## 3. Prototype the Decision, Not the Feature

If you can’t test the full product, test the *intent* behind it. 

We used this approach at **Ogma** to validate whether parents would feel comfortable with therapists sharing AI-written notes. Rather than building a whole parent-facing portal, we faked it.

We created an email mockup of the kind of summary a parent might receive, and shared it during therapist interviews. Then we asked:
- Would you send this to a parent?
- What would you want to change?
- Does it feel safe/clear/helpful?

> ✅ We learned: Therapists wanted *less* detail, not more. The version we thought was “helpful” felt like oversharing.

---

## 4. Use Sequential Testing (Instead of A/B)

If you can’t split traffic, test *in time* instead.

For example, when testing Rally’s new “weekend window” feature (letting people mark themselves as free from Saturday 2pm onward), we:

- Launched it to *everyone*, but changed the default copy and trigger times week by week
- Compared usage rates + invite responses across time periods

This wasn’t a clean A/B test. But it gave us directional data—and paired with user feedback, it helped us settle on a specific default window.

> ✅ What mattered: Response rate from invites sent using the new flow

---

## 5. Pair Every Quant Test With a Qual Loop

In low traffic environments, *numbers alone aren’t enough.* Every test should be paired with:

- User interviews
- Open-ended feedback prompts
- Session recordings or screen shares

At Ogma, our most revealing insights came not from the analytics—but from watching a therapist pause mid-session and say:
> *“Oh wait, this is actually helpful.”*

---

## Final Thoughts

A/B testing is a powerful tool—but it's not the only way to learn. When you’re early, small, or niche, your best experiments are often scrappy, qualitative, and designed to reduce uncertainty—not prove perfection.

If you're building a product and feeling blocked by your sample size, remember: *you don’t need statistical significance to make progress. You need clarity.*

And the best way to get there? Test small. Learn fast. And talk to your users.
