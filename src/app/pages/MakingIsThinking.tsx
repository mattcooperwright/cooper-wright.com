import { useEffect, useState } from 'react';
import { motion, useScroll } from 'motion/react';

export function MakingIsThinking() {
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-white text-black font-light" style={{ fontFamily: 'Sofia Sans, sans-serif' }}>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative px-6 md:px-12 lg:px-24 overflow-hidden">
        <div className="max-w-7xl relative z-10">
          <h1 className="text-[20vw] md:text-[18vw] lg:text-[15rem] leading-[0.8] tracking-tight" style={{ fontFamily: 'Gasoek One, sans-serif' }}>
            Making Is<br />Thinking
          </h1>
        </div>

        {/* Giant typographic marks */}
        <div className="absolute top-[-10%] right-[-5%] text-[45vw] opacity-[0.03] pointer-events-none font-serif select-none">
          "
        </div>
        <div className="absolute bottom-[5%] left-[-8%] text-[40vw] opacity-[0.04] pointer-events-none select-none rotate-[-15deg]">
          *
        </div>
        <div className="absolute top-[40%] right-[15%] text-[30vw] opacity-[0.02] pointer-events-none select-none">
          —
        </div>
      </section>

      {/* Opening paragraphs */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 relative">
        <div className="max-w-3xl">
          <p className="text-sm md:text-base lg:text-lg leading-relaxed mb-8 text-black">
            Every project I've worked on at IDEO has this moment. The team has been talking — mapping the problem, debating approaches, filling walls with post-its. The ideas feel coherent in the air. And then someone says the thing that unsticks everything: 'Let's just build something.'
          </p>

          <p className="text-sm md:text-base lg:text-lg leading-relaxed mb-8 text-black">
            Within an hour, the conversation changes completely. Not because people suddenly have new ideas, but because the act of making has forced their existing ideas into contact with reality. Constraints surface. Trade-offs become visible. Two people who thought they agreed discover they meant entirely different things.
          </p>
        </div>

        {/* Abstract marks */}
        <div className="absolute right-[-5%] top-[10%] text-[50vw] opacity-[0.02] pointer-events-none select-none rotate-[25deg]">
          &
        </div>
        <div className="absolute left-[60%] bottom-[-10%] text-[42vw] opacity-[0.03] pointer-events-none select-none">
          ?
        </div>
      </section>

      {/* First pull quote */}
      <section className="py-32 md:py-48 px-6 md:px-12 lg:px-24 relative">
        <div className="max-w-6xl relative z-10">
          <p className="text-[12vw] md:text-[10vw] lg:text-[8rem] leading-[0.95] tracking-tighter" style={{ fontFamily: 'Gasoek One, sans-serif' }}>
            The prototypes aren't outputs. They're thinking tools.
          </p>
        </div>

        {/* Massive symbols */}
        <div className="absolute top-[-15%] right-[10%] text-[55vw] opacity-[0.02] pointer-events-none select-none">
          .
        </div>
        <div className="absolute bottom-[-20%] left-[-10%] text-[60vw] opacity-[0.025] pointer-events-none select-none rotate-[90deg]">
          !
        </div>
      </section>

      {/* The Wrong Assumption */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 relative">
        <div className="max-w-3xl">
          <h2 className="text-6xl md:text-8xl lg:text-[10rem] mb-12 leading-[0.9] tracking-tighter" style={{ fontFamily: 'Gasoek One, sans-serif' }}>
            The wrong assumption
          </h2>

          <p className="text-sm md:text-base lg:text-lg leading-relaxed mb-8 text-black">
            There's a deeply held belief — in organisations, in consulting, in design education — that creative work is a two-phase process. First you think. Then you make.
          </p>

          <p className="text-sm md:text-base lg:text-lg leading-relaxed mb-8 italic text-black">
            The thinking is the clever bit. The making is just execution.
          </p>

          <p className="text-sm md:text-base lg:text-lg leading-relaxed text-black">
            This has always been wrong, but it was a manageable kind of wrong. When making took time and effort, the thinking happened inside it whether you intended it to or not. You couldn't avoid learning as you built, because building was slow and resistant and full of friction.
          </p>
        </div>

        {/* More symbols */}
        <div className="absolute left-[-12%] top-[25%] text-[52vw] opacity-[0.02] pointer-events-none select-none rotate-[45deg]">
          #
        </div>
        <div className="absolute right-[-8%] bottom-[10%] text-[48vw] opacity-[0.03] pointer-events-none select-none">
          @
        </div>
        <div className="absolute top-[-10%] right-[30%] text-[35vw] opacity-[0.015] pointer-events-none select-none">
          /
        </div>
      </section>

      {/* The Messy Middle */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 relative">
        <div className="max-w-3xl">
          <h2 className="text-6xl md:text-8xl lg:text-[10rem] mb-12 leading-[0.9] tracking-tighter" style={{ fontFamily: 'Gasoek One, sans-serif' }}>
            The messy middle
          </h2>

          <p className="text-sm md:text-base lg:text-lg leading-relaxed mb-8 text-black">
            AI tools — and I'm using them constantly, building with them, prototyping with them — have collapsed the distance between idea and output. You can move from a half-formed thought to a polished artefact in seconds. Tools like Claude don't just generate outputs from prompts — they reason through the detail for you, filling in the gaps between your intention and the finished thing.
          </p>

          <p className="text-sm md:text-base lg:text-lg leading-relaxed mb-8 text-black">
            This is genuinely useful. I've built research tools, analysis frameworks, working prototypes in hours that would have taken weeks. The speed is not the problem.
          </p>

          <p className="text-sm md:text-base lg:text-lg leading-relaxed mb-12 italic text-black">
            The problem is what gets skipped.
          </p>
        </div>

        {/* Giant abstract symbols */}
        <div className="absolute right-[-10%] top-[-5%] text-[58vw] opacity-[0.025] pointer-events-none select-none rotate-[-20deg]">
          ~
        </div>
        <div className="absolute left-[50%] bottom-[-15%] text-[50vw] opacity-[0.02] pointer-events-none select-none">
          %
        </div>
        <div className="absolute top-[50%] left-[-5%] text-[40vw] opacity-[0.03] pointer-events-none select-none rotate-[15deg]">
          +
        </div>
      </section>

      {/* Second pull quote */}
      <section className="py-32 md:py-48 px-6 md:px-12 lg:px-24 relative">
        <div className="max-w-6xl relative z-10">
          <p className="text-[10vw] md:text-[8vw] lg:text-[7rem] leading-[1.0] tracking-tighter" style={{ fontFamily: 'Gasoek One, sans-serif' }}>
            That middle bit — the messy, frustrating, iterative process of making — is where most of the actual thinking happens. It's not a cost to be optimised away.
          </p>
          <p className="text-[10vw] md:text-[8vw] lg:text-[7rem] leading-[1.0] tracking-tighter mt-8 italic" style={{ fontFamily: 'Gasoek One, sans-serif' }}>
            It's the point.
          </p>
        </div>

        {/* Overlapping giant symbols */}
        <div className="absolute top-[10%] right-[-8%] text-[65vw] opacity-[0.02] pointer-events-none select-none">
          (
        </div>
        <div className="absolute bottom-[5%] left-[-12%] text-[62vw] opacity-[0.02] pointer-events-none select-none">
          )
        </div>
        <div className="absolute top-[40%] right-[20%] text-[45vw] opacity-[0.015] pointer-events-none select-none rotate-[-25deg]">
          |
        </div>
      </section>

      {/* Tangible Thought */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 relative">
        <div className="max-w-3xl">
          <h2 className="text-6xl md:text-8xl lg:text-[10rem] mb-12 leading-[0.9] tracking-tighter" style={{ fontFamily: 'Gasoek One, sans-serif' }}>
            Tangible thought
          </h2>

          <p className="text-sm md:text-base lg:text-lg leading-relaxed mb-8 text-black">
            What do I actually mean by making?
          </p>

          <p className="text-sm md:text-base lg:text-lg leading-relaxed mb-8 text-black">
            I mean the act of a person using skills and craft and technique to build something — however rough — that externalises their thinking. At IDEO, we have teams of people with deep technical skills across a range of disciplines. When they're faced with a problem, they don't talk about the solution endlessly. They pick up the tools of their trade and begin building things. And in that building, they deepen their understanding of the problem in ways that conversation alone never achieves.
          </p>

          <p className="text-sm md:text-base lg:text-lg leading-relaxed mb-8 text-black">
            This happens from the very earliest stages — not just when a direction has been chosen, but when the team is still trying to figure out what the problem actually is. Making is how you define the problem, not just how you solve it.
          </p>
        </div>

        {/* Abstract typography */}
        <div className="absolute left-[-15%] top-[5%] text-[60vw] opacity-[0.02] pointer-events-none select-none rotate-[30deg]">
          ?
        </div>
        <div className="absolute right-[-5%] bottom-[-10%] text-[55vw] opacity-[0.025] pointer-events-none select-none rotate-[-40deg]">
          ;
        </div>
        <div className="absolute top-[60%] right-[25%] text-[42vw] opacity-[0.02] pointer-events-none select-none">
          :
        </div>
      </section>

      {/* A Borrowed Frame */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 relative">
        <div className="max-w-3xl">
          <h2 className="text-6xl md:text-8xl lg:text-[10rem] mb-12 leading-[0.9] tracking-tighter" style={{ fontFamily: 'Gasoek One, sans-serif' }}>
            A borrowed frame
          </h2>

          <p className="text-sm md:text-base lg:text-lg leading-relaxed mb-8 text-black">
            The composer Alvin Lucier made a piece in 1969 called <em>I Am Sitting in a Room</em>. He recorded himself speaking, then played the recording back into the room and re-recorded it. Again and again. Each iteration, the room's resonant frequencies amplified and the original speech degraded, until all that remained was the acoustic signature of the space itself. The human voice — gone.
          </p>

          <p className="text-sm md:text-base lg:text-lg leading-relaxed mb-8 text-black">
            I think about this when I think about AI and making. Each time you remove a layer of human friction from the creative process — each time you skip the making and go straight to the output — you lose some of the texture that came from the encounter between the person and the material. Do it enough times and you're left with something smooth and fluent that has lost the shape of the thinking that should have produced it.
          </p>

          <p className="text-sm md:text-base lg:text-lg leading-relaxed italic text-black">
            The output looks right. But the understanding isn't there.
          </p>
        </div>

        {/* More giant marks */}
        <div className="absolute right-[-10%] top-[15%] text-[55vw] opacity-[0.025] pointer-events-none select-none rotate-[12deg]">
          ~
        </div>
        <div className="absolute left-[-8%] bottom-[20%] text-[50vw] opacity-[0.02] pointer-events-none select-none">
          ^
        </div>
        <div className="absolute top-[-5%] left-[40%] text-[48vw] opacity-[0.02] pointer-events-none select-none rotate-[-18deg]">
          \
        </div>
      </section>

      {/* Flora Section */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 relative">
        <div className="max-w-3xl">
          <h2 className="text-6xl md:text-8xl lg:text-[10rem] mb-12 leading-[0.9] tracking-tighter" style={{ fontFamily: 'Gasoek One, sans-serif' }}>
            Flora
          </h2>

          <p className="text-sm md:text-base lg:text-lg leading-relaxed mb-8 text-black">
            A recent example. A team working on the future of commercial vehicles was thinking about new in-vehicle experiences — 3D concepts, spatial interfaces, physical-digital interactions. They used an AI tool called Flora.ai to rapidly generate and manipulate concepts together.
          </p>

          <p className="text-sm md:text-base lg:text-lg leading-relaxed mb-8 text-black">
            Here's what was interesting. The value didn't come from the outputs themselves. It came from the act of making together. As they built, shared, and shaped ideas in real time, the conversation flew. Unexpected details surfaced. One person's partial idea became another's starting point. The work evolved through interaction with the tool, with each other, and with the emerging artefacts.
          </p>

          <p className="text-sm md:text-base lg:text-lg leading-relaxed text-black">
            But — and this is the crucial bit — multiple members of that team had deep experience in industrial design. They knew 3D. They understood form, proportion, material. They were using an image generation tool with 3D prompts as input, not a 3D tool directly, but their craft instincts shaped every prompt, every reaction, every decision about what to keep and what to push further.
          </p>
        </div>

        {/* Dense typography */}
        <div className="absolute right-[-12%] top-[-10%] text-[62vw] opacity-[0.02] pointer-events-none select-none rotate-[22deg]">
          $
        </div>
        <div className="absolute left-[-10%] bottom-[-8%] text-[58vw] opacity-[0.025] pointer-events-none select-none rotate-[-35deg]">
          =
        </div>
        <div className="absolute top-[45%] right-[10%] text-[45vw] opacity-[0.02] pointer-events-none select-none">
          [
        </div>
      </section>

      {/* Third pull quote */}
      <section className="py-32 md:py-48 px-6 md:px-12 lg:px-24 relative">
        <div className="max-w-6xl relative z-10">
          <p className="text-[12vw] md:text-[10vw] lg:text-[8rem] leading-[0.95] tracking-tighter" style={{ fontFamily: 'Gasoek One, sans-serif' }}>
            Making forces precision. It forces choices.
          </p>
        </div>

        {/* Exclamation and more */}
        <div className="absolute right-[-8%] bottom-[-15%] text-[68vw] opacity-[0.02] pointer-events-none select-none rotate-[-25deg]">
          !
        </div>
        <div className="absolute left-[-5%] top-[10%] text-[55vw] opacity-[0.025] pointer-events-none select-none">
          ]
        </div>
        <div className="absolute top-[-10%] left-[35%] text-[50vw] opacity-[0.02] pointer-events-none select-none rotate-[40deg]">
          {'{'}
        </div>
      </section>

      {/* The Risk Underneath */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 relative">
        <div className="max-w-3xl">
          <h2 className="text-6xl md:text-8xl lg:text-[10rem] mb-12 leading-[0.9] tracking-tighter" style={{ fontFamily: 'Gasoek One, sans-serif' }}>
            The risk underneath
          </h2>

          <p className="text-sm md:text-base lg:text-lg leading-relaxed mb-8 text-black">
            Here's what I keep circling back to.
          </p>

          <p className="text-sm md:text-base lg:text-lg leading-relaxed mb-8 text-black">
            If making is how we think — and I believe it is — then anything that removes making from the process also removes a layer of thinking. Not immediately. Not obviously. But cumulatively.
          </p>

          <p className="text-sm md:text-base lg:text-lg leading-relaxed mb-8 text-black">
            AI systems are built on past work created by skilled practitioners. People who spent years learning materials, tools, constraints, affordances. If new generations skip the making because AI handles it, that foundation weakens. Not the AI outputs — those might stay good for a while, drawing on the existing corpus. But the human capacity to judge, to iterate, to know <em>why</em> something works and how to push it further — that erodes.
          </p>

          <p className="text-sm md:text-base lg:text-lg leading-relaxed italic text-black">
            The risk isn't just shallower outputs in the short term. It's a gradual narrowing of how we think.
          </p>
        </div>

        {/* Chaotic symbols */}
        <div className="absolute left-[-8%] top-[30%] text-[60vw] opacity-[0.02] pointer-events-none select-none rotate-[15deg]">
          {'}'}
        </div>
        <div className="absolute right-[-15%] bottom-[5%] text-[55vw] opacity-[0.025] pointer-events-none select-none rotate-[-50deg]">
          &lt;
        </div>
        <div className="absolute top-[-8%] right-[25%] text-[48vw] opacity-[0.02] pointer-events-none select-none">
          &gt;
        </div>
        <div className="absolute bottom-[40%] left-[60%] text-[40vw] opacity-[0.015] pointer-events-none select-none rotate-[28deg]">
          ×
        </div>
      </section>

      {/* Fourth pull quote */}
      <section className="py-32 md:py-48 px-6 md:px-12 lg:px-24 relative">
        <div className="max-w-6xl relative z-10">
          <p className="text-[12vw] md:text-[10vw] lg:text-[8rem] leading-[0.95] tracking-tighter" style={{ fontFamily: 'Gasoek One, sans-serif' }}>
            Making is not an output.
          </p>
          <p className="text-[12vw] md:text-[10vw] lg:text-[8rem] leading-[0.95] tracking-tighter mt-8" style={{ fontFamily: 'Gasoek One, sans-serif' }}>
            Making is an input to further thought.
          </p>
        </div>

        {/* Arrow and more symbols */}
        <div className="absolute right-[-10%] top-[20%] text-[62vw] opacity-[0.025] pointer-events-none select-none rotate-[10deg]">
          →
        </div>
        <div className="absolute left-[-12%] bottom-[-10%] text-[58vw] opacity-[0.02] pointer-events-none select-none rotate-[-20deg]">
          ←
        </div>
        <div className="absolute top-[-5%] left-[30%] text-[50vw] opacity-[0.02] pointer-events-none select-none">
          ↑
        </div>
      </section>

      {/* Making as Input */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 relative">
        <div className="max-w-3xl">
          <h2 className="text-6xl md:text-8xl lg:text-[10rem] mb-12 leading-[0.9] tracking-tighter" style={{ fontFamily: 'Gasoek One, sans-serif' }}>
            Making as input
          </h2>

          <p className="text-sm md:text-base lg:text-lg leading-relaxed mb-8 text-black">
            One of the most important reframes is this: making is not an output. Making is an input to further thought.
          </p>

          <p className="text-sm md:text-base lg:text-lg leading-relaxed mb-8 text-black">
            A rough prototype, a sketch, a model, a simple artefact — these aren't deliverables. They're thinking devices. They allow others to engage. They surface insight faster than conversation. They create shared understanding.
          </p>
        </div>

        {/* More abstract marks */}
        <div className="absolute right-[-8%] top-[10%] text-[60vw] opacity-[0.02] pointer-events-none select-none rotate-[35deg]">
          ↓
        </div>
        <div className="absolute left-[-10%] bottom-[15%] text-[55vw] opacity-[0.025] pointer-events-none select-none rotate-[-15deg]">
          ÷
        </div>
        <div className="absolute top-[50%] right-[20%] text-[45vw] opacity-[0.02] pointer-events-none select-none">
          ±
        </div>
      </section>

      {/* Still Working This Out */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 relative">
        <div className="max-w-3xl">
          <h2 className="text-6xl md:text-8xl lg:text-[10rem] mb-12 leading-[0.9] tracking-tighter" style={{ fontFamily: 'Gasoek One, sans-serif' }}>
            Still working this out
          </h2>

          <p className="text-sm md:text-base lg:text-lg leading-relaxed mb-8 text-black">
            I don't think the answer is to reject AI tools. I use them daily. They're extraordinary.
          </p>

          <p className="text-sm md:text-base lg:text-lg leading-relaxed mb-8 text-black">
            But I think we need to be deliberate about when we use them and how. There's a difference between using AI to accelerate the making — to iterate faster, to explore more possibilities, to test more variations — and using AI to replace the making entirely.
          </p>
        </div>

        {/* Plus and multiplication */}
        <div className="absolute left-[-12%] bottom-[20%] text-[65vw] opacity-[0.02] pointer-events-none select-none rotate-[45deg]">
          +
        </div>
        <div className="absolute right-[-10%] top-[-5%] text-[60vw] opacity-[0.025] pointer-events-none select-none rotate-[-30deg]">
          ×
        </div>
        <div className="absolute bottom-[-8%] left-[45%] text-[50vw] opacity-[0.02] pointer-events-none select-none">
          ≠
        </div>
      </section>

      {/* Final pull quote */}
      <section className="py-32 md:py-48 px-6 md:px-12 lg:px-24 relative">
        <div className="max-w-6xl relative z-10">
          <p className="text-[12vw] md:text-[10vw] lg:text-[8rem] leading-[0.95] tracking-tighter mb-12" style={{ fontFamily: 'Gasoek One, sans-serif' }}>
            The first extends your thinking.
          </p>
          <p className="text-[12vw] md:text-[10vw] lg:text-[8rem] leading-[0.95] tracking-tighter" style={{ fontFamily: 'Gasoek One, sans-serif' }}>
            The second outsources it.
          </p>
        </div>

        {/* More layered symbols */}
        <div className="absolute top-[5%] right-[-12%] text-[68vw] opacity-[0.02] pointer-events-none select-none rotate-[18deg]">
          ≈
        </div>
        <div className="absolute bottom-[-10%] left-[-8%] text-[60vw] opacity-[0.025] pointer-events-none select-none rotate-[-42deg]">
          §
        </div>
        <div className="absolute top-[50%] left-[30%] text-[45vw] opacity-[0.015] pointer-events-none select-none">
          ¶
        </div>
      </section>

      {/* Closing thoughts */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 relative">
        <div className="max-w-3xl">
          <p className="text-sm md:text-base lg:text-lg leading-relaxed mb-8 text-black">
            If we skip the messy middle — if we treat making as the thing that's easy to automate, the bit between the idea and the answer — our ideas are going to develop more slowly and they're not going to be as rich. And in the longer term, if we allow AI to do all these jobs without developing those slow-learned complex skills ourselves, the next generation of creatives will just have a smaller toolkit to work from.
          </p>

          <p className="text-sm md:text-base lg:text-lg leading-relaxed italic text-black">
            Our ideas will get narrower and narrower over time.
          </p>
        </div>

        {/* Closing giant quote */}
        <div className="absolute right-[-8%] bottom-[-8%] text-[60vw] opacity-[0.025] pointer-events-none select-none font-serif rotate-[12deg]">
          "
        </div>
        <div className="absolute left-[-10%] top-[15%] text-[55vw] opacity-[0.02] pointer-events-none select-none rotate-[-25deg]">
          •
        </div>
        <div className="absolute top-[-5%] left-[50%] text-[48vw] opacity-[0.02] pointer-events-none select-none">
          °
        </div>
      </section>

      {/* Final reflection */}
      <section className="min-h-screen flex items-center py-24 md:py-32 px-6 md:px-12 lg:px-24 relative">
        <div className="max-w-3xl relative z-10">
          <p className="text-sm md:text-base lg:text-lg leading-relaxed mb-8 text-black">
            I'm aware this piece is arguing for the importance of making — and I've written it entirely in words. There's an irony there that isn't lost on me. But writing is making too, in its way. I didn't start with this argument fully formed. I started with a feeling that something important was shifting, and the writing has been how I've figured out what I actually think about it.
          </p>

          <p className="text-sm md:text-base lg:text-lg leading-relaxed italic text-black">
            Which is, I suppose, the point.
          </p>
        </div>

        {/* Final massive period */}
        <div className="absolute bottom-[10%] left-[10%] text-[75vw] opacity-[0.015] pointer-events-none select-none">
          .
        </div>
        <div className="absolute top-[5%] right-[-15%] text-[65vw] opacity-[0.02] pointer-events-none select-none rotate-[30deg]">
          ‡
        </div>
        <div className="absolute bottom-[40%] right-[15%] text-[52vw] opacity-[0.02] pointer-events-none select-none rotate-[-15deg]">
          †
        </div>
        <div className="absolute top-[35%] left-[-8%] text-[58vw] opacity-[0.025] pointer-events-none select-none">
          ‰
        </div>
      </section>
    </div>
  );
}
