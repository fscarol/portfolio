import Header from '@/components/Header';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <main className="flex flex-col gap-[32px] row-start-2 items-center text-center">
        <h1>Hi, I&apos;m Caroline and this is my portfolio.</h1>

        <p>
          Well, not exactly my work portfolio because of all NDA&apos;s and
          everything we are aware of but a I&apos;m creating this space so I can
          showcase my abilities with the &quot;new&quot; technologies such as
          React, Typescript, Next and Tailwind.
        </p>

        <p>Now, a little bit about me...</p>

        <p>
          I’m passionate about staying ahead of the curve with emerging
          technologies and continuously sharpening my skills. My background in
          both front-end development and client communication allows me to drive
          projects forward and bridge the gap between technical execution and
          business needs.
        </p>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
