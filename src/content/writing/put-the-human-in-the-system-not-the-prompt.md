---
title: Put the human in the system, not the prompt
date: 2026-10-24
description: Why I stopped trying to make AI agents behave, and started deciding what they are allowed to do.
---

What would it take to trust an AI agent?

I started asking this because my own agents kept getting away from me. I'd give one a task. Its first step would be reasonable, and so would its second. A while later it would be doing something I never asked for, and when I went back to find out how, I couldn't. I could read every step of its reasoning, and every step made sense on its own. What I couldn't see was where the whole thing had started to go wrong.

That turned out to be the interesting part. Nothing had broken. Each decision was defensible. The failure was in the path, and nothing in my setup was looking at the path.

The obvious response is to make the agent better. Write a clearer prompt. Add a line in capitals saying never do this. Use a stronger model. If you're serious, put a second model in front of the first to check its actions before they run.

I think these all share a mistake. They treat the agent as a mind you can persuade. But a prompt is only a request. The model reads your request alongside everything else in its context, and a lot of that context was written by people you have never met: web pages, documents, the output of other tools. Usually your request wins. You can't know in advance when it won't. And adding a second model to judge the first doesn't change this. It means you now have two things you can't predict.

So suppose you gave up on persuading the agent. What would you do instead?

It helped me to notice that this problem isn't new. It just looks new because the actor is new. My day job is building payment systems for businesses, and payments has never trusted any single actor, people included. A business can't go live until its agreement is signed and its checks are done. A negotiation over rates gets a fixed number of rounds and a floor it can't go below. When an admin approves something, the approval is recorded, so that months later someone can answer who did what and when.

None of this assumes anyone is malicious. It assumes something more useful: that the people in the system will sometimes be wrong, and the system should be built so that being wrong is survivable. The trust lives in the structure, not in the actors.

When I looked at my agents that way, the problem was obvious. I had been trying to put the trust in the actor. The agent had no limits it couldn't talk its way past, no one reviewing what mattered, and no record I could use. I hadn't built a system. I'd built a very capable actor and hoped.

What would the system look like? The first thing I noticed is that an agent's actions aren't all the same kind. Most of what it does is cheap and reversible. It searches, reads, drafts, summarises. If it does those badly, you've wasted some time and money. A few of its actions are neither cheap nor reversible. It sends a message to a real person, or moves money, or deletes something.

Those two kinds of action want different treatment. The cheap ones don't need a human, they need limits: which tools, how many calls, how long, how much. And those limits have to live outside the agent, where its reasoning can't reach them. If an agent can be convinced to ignore a rule, it isn't a rule. The expensive actions need something limits can't give you, which is judgment about this particular case. That means a person.

I built an agent that researches companies and drafts outreach to them, which turned out to be a good test because its job contains both kinds of action. Searching the web is harmless. Emailing a stranger is not.

The searching gets limits. Thirty searches per run, because the search API's free tier allows a thousand a month, and a research loop that stops making progress will happily spend all of them in one session. Search results are marked as untrusted, because anyone who can rank for a query can put text in front of the model. These aren't suggestions in a prompt. They're enforced underneath the agent, and when it hits one the run stops and the reason is written down.

The emailing gets a person. There is a rule that refuses the send tool every time the agent asks for it. The agent researches, writes the drafts, and puts them in a queue. Someone reads each one and decides whether it goes out.

It's tempting to see the review step as training wheels, something to remove once the model is good enough. I don't think it is. The question was never whether the agent can write a good email. It often can. The question is who is accountable when an email shouldn't have been sent, and the answer has to be a person, because a person is who the recipient will hold responsible.

The software that enforces the limits is Nanny, and most of the work of building it was deciding what it should refuse to become. It doesn't read prompts. It doesn't try to understand the agent's reasoning, or judge whether an action looks sensible. It treats the agent as a process, the way an operating system treats a program it didn't write: here is what you're allowed to touch, and here is when you stop. The same configuration and the same inputs always produce the same behaviour. When it's unsure, it stops.

That sounds rigid, and it is. But think about which part of a system you most need to predict. Not the clever part. The part that enforces the rules. Everything above the boundary can change as models get better. The boundary itself should be the most boring code you own.

If I'm right, it changes the question people ask about agents. "How smart is this agent?" matters less than "where does the human sit, and what may the machine do without them?" That second question is a design question, and you can answer it before you write a single prompt. Draw the system. Mark every action the agent can take. For each one, decide whether it needs a limit, a person, or both, and what should be recorded when it happens.

Most of the lines are easy to draw. The hard cases are the valuable ones, because each of them marks a place where you'd been quietly trusting the agent to behave.

That kind of trust is what I gave up. Agents still wander. But now when one does, it stops where I decided it should, and I can see exactly where it was.
