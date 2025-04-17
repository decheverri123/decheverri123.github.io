"use client";

import { useEffect, useState, useRef } from "react";
import Layout from "../../LayoutHeader";
import RNCVisualization from "@/components/RNCVisualization";

export default function RNC() {
  const excerptRef = useRef<HTMLDivElement | null>(null);
  const [memoryLayer, setMemoryLayer] = useState(0);
  const [showExcerpt, setShowExcerpt] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        setMemoryLayer((prev) => (prev + 1) % 3);
      }
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      <div className="min-h-screen w-full overflow-x-hidden bg-base-100 p-8 px-12 text-base-content">
        <h1
          className={`mb-8 flex flex-row items-center justify-center text-center text-4xl font-bold text-primary transition-opacity duration-1000 ${memoryLayer === 1 ? "opacity-90" : "opacity-100"}`}
        >
          Reconsolidative Narrative Collapse
        </h1>
        <p className="mb-8 text-center italic text-base-content">
          "Perception Horror: Where the act of remembering itself becomes
          dangerous"
        </p>

        <div className="mx-auto mb-12 grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-2">
          <div className="relative space-y-6">
            <div className="absolute -left-4 -top-4 h-16 w-16 border-l-4 border-t-4 border-primary opacity-30"></div>
            <div className="absolute -bottom-4 -right-4 h-16 w-16 border-b-4 border-r-4 border-secondary opacity-30"></div>

            <h2 className="text-2xl font-semibold text-secondary">
              Definition
            </h2>
            <p
              className={`text-lg text-base-content transition-all duration-700 ${memoryLayer === 2 ? "translate-x-1 blur-[0.3px]" : ""}`}
            >
              <strong className="text-accent">
                <em>Reconsolidative Narrative Collapse </em>
              </strong>
              is a storytelling lens in which memory retrieval becomes a core
              structural device for narrative disintegration. It draws from the
              neuroscience principle of memory reconsolidation—where recalling a
              memory renders it temporarily unstable and vulnerable to change.
              RNC applies this mechanism directly to how stories unfold, letting
              memory itself erode, revise, and destabilize the narrative.
            </p>
            <p
              className={`text-lg text-base-content transition-opacity duration-500 ${memoryLayer === 0 ? "opacity-100" : "opacity-80"}`}
            >
              While the idea that memory is unreliable isn't new, RNC aims to
              push it further—making memory not just a theme or motif but the
              architecture of narrative decay itself. It builds on traditions of
              nonlinear storytelling and unreliable narrators, but seeks to
              systematize a specific kind of narrative collapse rooted in trauma
              psychology and perceptual instability.
            </p>

            <h2 className="text-2xl font-semibold text-secondary">
              Note from the Author
            </h2>
            <p className="text-lg text-base-content">
              RNC is still an evolving framework, and <em>Blackport</em>—the
              novel it emerged from—is still being written. The ideas here
              aren’t presented as final or definitive. The website exists
              primarily to document the framework in case it proves useful to
              others, and to establish a record of its origin should it become
              part of larger literary conversations.
            </p>

            <h2 className="text-2xl font-semibold text-secondary">
              Literary Context & Comparisons
            </h2>
            <p className="text-lg text-base-content">
              RNC emerges from a long literary lineage of narrative
              experimentation. Writers like Faulkner fractured chronology to
              expose psychological depth; Proust explored involuntary memory as
              a gateway to the past; Borges built recursive metaphysics from
              linguistic loops. These works paved the way—but RNC diverges by
              making memory not just theme but architecture. Where others evoke
              memory, RNC mechanizes it.
            </p>
            <p className="text-lg text-base-content">
              It is often compared to nonlinear or memory-based narratives, yet
              its key innovation lies in how memory becomes the engine of
              narrative instability:
            </p>
            <ul className="list-inside list-disc space-y-6 text-lg text-base-content">
              <li>
                <strong className="text-primary">
                  Memento (Christopher Nolan):
                </strong>{" "}
                While <em>Memento</em> employs a reverse structure to echo
                memory loss, its timeline is static. RNC allows each memory to
                rewrite narrative reality. It's not about presentation—it's
                about mutation.
              </li>
              <li>
                <strong className="text-primary">
                  Eternal Sunshine of the Spotless Mind:
                </strong>{" "}
                Gondry explores erased memory; RNC explores corrupted memory.
                The former removes pain, the latter forces us to relive it
                inaccurately, shifting the narrative every time.
              </li>
              <li>
                <strong className="text-primary">
                  Slaughterhouse-Five (Vonnegut):
                </strong>{" "}
                Vonnegut uses disjunction as metaphor. RNC uses memory as formal
                device. In Vonnegut, we drift through time. In RNC, time drifts
                through us.
              </li>
              <li>
                <strong className="text-primary">
                  Unreliable Narrators (e.g., The Turn of the Screw, Fight
                  Club):
                </strong>{" "}
                Those works contain unreliable characters. RNC contains an
                unreliable world. The reader, like the character, is
                hallucinating structure.
              </li>
            </ul>
            <p className="text-lg text-base-content">
              In short: earlier traditions asked, "How do we tell stories about
              memory?" RNC asks, "What happens to story itself when memory can’t
              be trusted?"
            </p>
            <h2 className="mt-10 text-2xl font-semibold text-secondary">
              Origin & Development
            </h2>
            <p
              className={`text-lg text-base-content transition-all duration-500 ${memoryLayer === 2 ? "opacity-95 blur-[0.2px]" : ""}`}
            >
              Reconsolidative Narrative Collapse emerged from the intersection
              of neuroscience research on memory retrieval and literary
              explorations of trauma. The term was first developed during the
              writing of <em>Blackport</em>, my debut novel, which serves as the
              foundational text for this emerging literary framework.
            </p>
            <p className="text-lg text-base-content">
              RNC goes beyond unreliable narration or conventional flashbacks by
              creating perceptual slippage that mirrors how traumatic memory
              actually functions in the brain—not as distant recollection but as
              lived experience that temporarily overwrites present perception.
            </p>

            <h2 className="mt-10 text-2xl font-semibold text-secondary">
              Reader as Co-Conspirator
            </h2>
            <p className="text-lg text-base-content">
              RNC doesn’t just destabilize the character’s sense of reality—it
              destabilizes the reader’s. Memory transitions occur mid-line,
              flashbacks become moments of sensory entrapment, and familiar
              events contradict themselves on return. Readers begin to doubt
              what they remember from previous pages, realizing they’ve
              experienced the same collapse as the protagonist. The boundary
              between reader and character dissolves, making the act of reading
              complicit in the collapse itself.
            </p>

            <h2 className="mt-10 text-2xl font-semibold text-secondary">
              Perception Horror
            </h2>
            <p className="text-lg text-base-content">
              Perception Horror is a genre of horror storytelling defined not by
              what is seen, but by how perception itself becomes unreliable.
              Emerging through the framework of RNC, it thrives on emotional
              dread born from cognitive distortion. In these stories, the
              reader’s fear isn’t derived from external threats—but from the
              gradual realization that reality itself may no longer be stable.
              Flashbacks fracture identity, sensory cues become traps, and
              emotional truth overrules physical continuity. The scariest thing
              is not what happened, but how memory reassembles what happened.
            </p>

            <h2 className="mt-10 text-2xl font-semibold text-secondary">
              Blackport: A Case Study in Perceptual Horror
            </h2>
            <p className="text-lg text-base-content">
              <em>Blackport</em> is the debut novel that gave rise to the
              Reconsolidative Narrative Collapse framework. It follows Luke
              Hadaway, a grieving and recovering addict who arrives in the
              coastal town of Blackport searching for answers about his missing
              wife. What he finds instead is a purgatorial nightmare where
              memory fractures the moment it is accessed, and where perception
              itself becomes a terrain of horror. As Luke encounters twisted
              denizens, warped architecture, and echoes of his own past, he—and
              the reader—begin to question what is real, what is remembered, and
              what has already been lost to the recursive deterioration of
              trauma.
            </p>
            <p className="text-lg text-base-content">
              RNC is used extensively throughout <em>Blackport</em> to fragment
              the timeline, blur flashbacks into present action, and present
              trauma not as a past event but a looping, sensorial trap that
              rewrites itself mid-sentence. Scenes like the infamous "dessert
              collapse" are crafted to immerse the reader in the protagonist’s
              own psychological destabilization, collapsing memories of warmth
              into cold reconstructions that masquerade as tribute. By eschewing
              traditional transitions, the novel leverages RNC to make horror a
              function of memory itself. The horror is not what Luke
              encounters—it’s what he re-remembers.
            </p>

            <h2 className="mt-10 text-2xl font-semibold text-secondary">
              Visual Model
            </h2>
            <RNCVisualization />
            <p className="mt-8 text-lg text-base-content">
              Each memory loop fragments the timeline further, transforming the
              structure into emotional recursion instead of chronological
              sequence. Linear narrative dissolves into a recursive cycle of
              perception and rewriting.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="mt-10 text-2xl font-semibold text-secondary">
              Excerpt from <em>Blackport</em>
            </h2>
            <blockquote
              className={`border-l-4 pl-4 text-lg italic text-base-content transition-all duration-700 ${
                memoryLayer === 0 ? "border-primary" : "border-base-300"
              }`}
            >
              “And for dessert,” he announced, his accent somehow even more
              theatrically French than before, “we present Lait Brûlé de
              Famille—Helen’s favorite.”
              <br />
              <br />
              The name hung in the air like a held breath. I felt Marilyn
              stiffen beside me, her fork suspended midway to her mouth, then
              carefully placed against her plate with deliberate control.
              Jennifer's expression remained perfectly composed, though her eyes
              flicked briefly toward Marilyn, then away—a predator gauging the
              impact of a calculated strike.
              <br />
              <br />
              “We begin with Tahitian vanilla bean custard infused with lavender
              harvested from the estate gardens, layered with yuzu gelée for
              brightness. The caramel has been cold-smoked over white cedar—”
              <br />
              <br />
              Because nothing honors your dead wife like wood and gelée.
              <br />
              <br />
              {!showExcerpt && (
                <span
                  className="cursor-pointer text-accent underline"
                  onClick={() => setShowExcerpt(true)}
                >
                  Read more ↴
                </span>
              )}
              <div
                ref={excerptRef}
                className={`overflow-hidden transition-all duration-700 ease-in-out ${
                  showExcerpt
                    ? "max-h-[4000px] opacity-100"
                    : "max-h-0 opacity-0"
                } backdrop-blur-sm`}
              >
                <span>
                  The staff appeared with the synchronicity I'd come to
                  anticipate, each bearing a plate featuring an architectural
                  marvel of custard and sugar—impossibly precise layers arranged
                  in concentric circles beneath a dome of spun sugar that caught
                  the light like blown glass.
                  <br />
                  <br />
                  "The dish is finished with dehydrated hibiscus powder,
                  crystallized elder flowers, gold leaf, —“
                  <br />
                  <br />
                  —blueberries, flour, milk, egg, sugar, and that's it! Pretty
                  simple but I love it. We call it leche asada. Or ‘roasted
                  milk’ if you want to be a barbarian.“
                  <br />
                  <br />
                  Her voice—unguarded, warm, alive—cut through the room like
                  sunlight through the blinds of my Seattle apartment. Sunlight
                  blazed through half-drawn slats, striping the kitchen in pale
                  gold. Flour on the countertops. A crooked print above the
                  sink. Mismatched mugs. The stack of consulting reports I’d
                  abandoned on the coffee table.
                  <br />
                  <br />
                  Marilyn stood at the stove, hair piled atop her head and
                  secured with what appeared to be a pencil. A faded University
                  of Washington sweatshirt hung from her shoulders, sleeves
                  pushed carelessly up her forearms.
                  <br />
                  <br />
                  A cast-iron skillet sat on the burner, its surface blackened
                  by years of use. She'd brought it from her place, insisting
                  that proper leche asada required equally proper tools. "This
                  was my abuela's," she'd explained when she first carried it
                  into my kitchen. "Three generations of Chilean women have made
                  this recipe in this pan."
                  <br />
                  <br />
                  "My mother made this every summer," Marilyn said, cracking
                  eggs one-handed into a mixing bowl. "It was the one Chilean
                  dessert that survived my dad's menu planning. He thought most
                  of her family recipes were too ‘rustic’ for entertaining, but
                  this one was simple enough that even he couldn't object."
                  <br />
                  <br />
                  She laughed—a genuine sound that seemed to illuminate her from
                  within.
                  <br />
                  <br />
                  "Mama would teach me the names of everything in Spanish while
                  we cooked," she continued, whisking with practiced strokes.
                  "Huevo, azúcar, leche. Later I realized it was her way of
                  keeping her parents alive for me—I never got to meet them."
                  Her wrist moved in perfect circles, each rotation revealing
                  more of the woman I’d only known in snapshots of laughter and
                  light in Blackport.
                  <br />
                  <br />
                  “Jason never cared to learn,” she added, a shadow briefly
                  crossing her face. “Not the recipe, not the Spanish, not any
                  of it. He’d run off to play with whatever son had been dragged
                  along that week—the children of men as ephemeral as my
                  father’s whims. And sometimes, Jennifer’s. But I'd stay. I'd
                  help Mama count the eggs in Spanish, practice rolling my r's
                  while the custard baked."
                  <br />
                  <br />
                  She poured the batter into the waiting skillet, where it
                  spread in a perfect circle. “She’d tell the staff she needed
                  to supervise this personally and made them all leave—but
                  really, I think she just wanted ten minutes away from all the
                  performance. Father wasn’t too keen on her teaching me
                  Spanish, either. So this was our little place away from his
                  omnipresent glare.”
                  <br />
                  <br />
                  She glanced up with a smile that transformed her entire
                  face—the kind I’d come to know as uniquely Marilyn.
                  <br />
                  <br />
                  A glass slammed down beside my plate, liquid sloshing
                  dangerously close to the rim. My head jerked toward the sound.
                  A uniformed server withdrew his hand with uncharacteristic
                  haste, failing to meet my eyes as he retreated.
                  <br />
                  <br />
                  "—the finest example of culinary heritage preserved through
                  innovation," Bernard continued.
                  <br />
                  <br />
                  Before me sat an architectural marvel of custard and
                  sugar—impossibly precise layers arranged in concentric circles
                  beneath a spun sugar dome that caught the chandelier light and
                  fractured it into brittle rainbows, beautiful and cold.
                  Nothing remained of the humble dish I’d once watched Marilyn
                  prepare: no cast-iron skillet, no flour-dusted fingerprints,
                  no warmth. Just perfection, sterile and unshakable.
                  <br />
                  <br />
                  This wasn’t a tribute—it was PR erasure lacquered in sugar.
                  <br />
                  <br />
                  I glanced at Marilyn. Her face had returned to careful
                  neutrality, though a muscle worked silently along her jaw. Her
                  hands—perfectly manicured, ringless, unblemished—rested on
                  either side of her plate with deliberate stillness.
                  <br />
                  <br />
                  "A fitting tribute," Jennifer remarked, lifting her spoon with
                  choreographed grace. "We've preserved Helen's contribution to
                  the Wheeler tradition while elevating it to reflect our
                  current standards."
                  <br />
                  <br />
                  <span
                    className="cursor-pointer text-accent underline"
                    onClick={() => setShowExcerpt(false)}
                  >
                    Show less ▲
                  </span>
                </span>
              </div>
            </blockquote>

            <h2 className="text-2xl font-semibold text-secondary">
              Key Principles
            </h2>
            <ul className="list-inside list-disc space-y-6 text-lg text-base-content">
              <li>
                <strong className="text-primary">
                  Memory as Mechanism, Not Content:
                </strong>{" "}
                Memories are not presented as static backstory but as active,
                unstable agents in the narrative. Each recall subtly alters the
                present timeline, emotional context, or reader understanding.
              </li>
              <li>
                <strong className="text-primary">
                  Emotional Truth Over Objective Fact:
                </strong>{" "}
                The "truth" of a scene is not based on what objectively
                happened, but on how the character feels about what happened.
                The reader is encouraged to accept emotional resonance as
                narrative authority, even when it contradicts prior scenes.
              </li>
              <li>
                <strong className="text-primary">
                  Recursive Flashbacks Without Signposting:
                </strong>{" "}
                Transitions into memory are intentionally seamless, often using
                identical sensory cues or mirrored language to blur the border
                between past and present. These flashbacks function less as
                exposition and more as recursive emotional loops that
                recontextualize the present.
              </li>
              <li>
                <strong className="text-primary">
                  Perceptual Unreliability:
                </strong>{" "}
                The protagonist's perception of reality is fluid and emotionally
                reactive, but so is the reader's. The narrative destabilizes
                traditional reader trust by creating moments where both
                character and reader question the authenticity of shared events.
              </li>
              <li>
                <strong className="text-primary">
                  Co-hallucination Between Reader and Character:
                </strong>{" "}
                The story is designed to make the reader experience the
                protagonist's psychological state. As the protagonist's memory
                fractures, the reader's ability to orient themselves within the
                story does too.
              </li>
              <li>
                <strong className="text-primary">
                  Structural Glitches as Meaning:
                </strong>{" "}
                Repetition, recursion, or dialogue "errors" are not mistakes but
                intentional formal devices meant to simulate the recursive
                distortion of memory.
              </li>
              <li>
                <strong className="text-primary">
                  Emotionally Weighted Objects as Anchors:
                </strong>{" "}
                Specific objects serve as touchstones whose significance shifts
                over time. These objects reveal the instability of the story's
                timeline while providing emotional continuity.
              </li>
              <li>
                <strong className="text-primary">
                  Objects Corrupt When Recalled:
                </strong>{" "}
                The more a motif or object reappears, the more emotionally
                charged—and narratively corrupted—it becomes. Each reappearance
                is less innocent, more impossible.
              </li>
            </ul>

            <h2 className="mt-10 text-2xl font-semibold text-secondary">
              Narrative Rules
            </h2>
            <ul className="list-inside list-disc space-y-4 text-lg text-base-content">
              <li>
                <strong className="text-primary">
                  Anchor Before You Fracture:
                </strong>{" "}
                Establish emotional, temporal, and spatial "normalcy" before
                bending reality
              </li>
              <li>
                <strong className="text-primary">
                  Every Distortion Must Echo a Prior Beat:
                </strong>{" "}
                All glitches must trace back to something previously encountered
              </li>
              <li>
                <strong className="text-primary">
                  Time Can Warp—Emotion Cannot:
                </strong>{" "}
                The timeline may fracture, but character psychology remains
                emotionally consistent
              </li>
              <li>
                <strong className="text-primary">
                  Reader Realizes Collapse Mid-Fall:
                </strong>{" "}
                The transition should be seamless—but gut-punching in retrospect
              </li>
              <li>
                <strong className="text-primary">
                  The Reader Is a Co-Conspirator:
                </strong>{" "}
                Readers are participants who must reconcile, question, and
                sometimes betray their own memory of the text
              </li>
            </ul>

            <h2 className="mt-10 text-2xl font-semibold text-secondary">
              Beyond Horror: RNC Across Genres
            </h2>
            <p className="text-lg text-base-content">
              While RNC first emerged through the psychological tension of{" "}
              <em>perception horror</em>, its recursive structure and perceptual
              instability open new narrative territory across all genres.
            </p>

            <h3 className="mb-1 text-xl font-semibold text-primary">
              Literary Fiction
            </h3>
            <p className="text-lg text-base-content">
              RNC allows characters to evolve not by action alone, but by
              recursive reinterpretation of their own lives. The narrative
              becomes an unfolding self-dialogue, where memory does not reveal
              truth but mutates it. This approach opens deep psychological
              layers with minimal exposition.
            </p>

            <h3 className="mb-1 text-xl font-semibold text-primary">Romance</h3>
            <p className="text-lg text-base-content">
              In romance, RNC complicates nostalgia, longing, and emotional
              recollection. A relationship might feel perfect in memory—until
              the memory fractures mid-scene, revealing darker subtext.
              Emotional stakes increase as characters question not only what
              they felt, but whether it was ever truly felt at all.
            </p>

            <h3 className="mb-1 text-xl font-semibold text-primary">
              Mystery / Thriller
            </h3>
            <p className="text-lg text-base-content">
              Rather than solving a fixed puzzle, RNC mysteries constantly shift
              their own logic. The detective may re-remember a clue differently,
              and the truth may no longer exist in any stable form. The mystery
              becomes not "what happened," but "what am I still remembering
              wrong?"
            </p>

            <h3 className="mb-1 text-xl font-semibold text-primary">
              Science Fiction
            </h3>
            <p className="text-lg text-base-content">
              In speculative genres, RNC offers fertile ground for stories where
              memory is technology, consciousness is malleable, and timelines
              revise themselves. Sci-fi grounded in RNC becomes a mirror not of
              external progress—but of internal collapse, re-encoding trauma
              into tech, identity, and civilization.
            </p>

            <h2 className="mt-10 text-2xl font-semibold text-secondary">
              🧠 Section for Nerds: The Neuroscience Behind RNC
            </h2>
            <p className="text-lg text-base-content">
              Memory consolidation is not a singular process but a multi-phase
              biological phenomenon involving protein synthesis, neural tagging,
              and distributed reactivation. Two key studies form the backbone of
              this understanding:
            </p>

            <ul className="ml-6 mt-4 list-disc">
              <li>
                <a
                  className="text-accent underline"
                  href="https://pubmed.ncbi.nlm.nih.gov/10963596"
                  target="_blank"
                >
                  Nader, Schafe & LeDoux (2000) – Fear memories require protein
                  synthesis in the amygdala for reconsolidation after retrieval
                </a>
              </li>
              <li>
                <a
                  className="text-accent underline"
                  href="https://pubmed.ncbi.nlm.nih.gov/14744210/"
                  target="_blank"
                >
                  Dudai (2004) – The Neurobiology of Consolidations, or, How
                  Stable is the Engram?
                </a>
              </li>
            </ul>

            <h3 className="mt-6 text-xl font-semibold text-primary">
              🧬 Synaptic Consolidation
            </h3>
            <p className="text-lg text-base-content">
              Immediately after learning, calcium influx via NMDA and
              voltage-gated channels triggers kinase pathways (PKA, MAPK/ERK),
              activating CREB, a transcription factor that drives the expression
              of memory-related genes like zif268 and Arc. These genes initiate
              spine growth and receptor trafficking. “Synaptic tagging” ensures
              only recently activated synapses capture the protein synthesis
              that stabilizes the memory.
            </p>

            <h3 className="mt-6 text-xl font-semibold text-primary">
              🧠 System Consolidation
            </h3>
            <p className="text-lg text-base-content">
              Over days to years, hippocampal-cortical replay shifts memory
              reliance from the hippocampus to the neocortex.
              Reactivations—often during sleep—induce secondary rounds of local
              synaptic consolidation. Ultimately, long-term storage resides in
              distributed neocortical circuits.
            </p>

            <h3 className="mt-6 text-xl font-semibold text-primary">
              🔁 Reconsolidation
            </h3>
            <p className="text-lg text-base-content">
              Nader et al. demonstrated that retrieval reopens a memory trace
              and makes it labile. Unless re-stabilized by fresh protein
              synthesis in the amygdala, the memory degrades. Reconsolidation
              mimics the molecular cascade of initial encoding—CREB activation,
              immediate early genes, and new plasticity.
            </p>
            <p className="text-lg text-base-content">
              Dudai proposes reconsolidation exists to allow new learning to
              modify old memory. From an evolutionary standpoint, it's a
              compromise between stability and adaptability. But it means memory
              is inherently risky—the act of remembering is also the act of
              rewriting.
            </p>

            <h2 className="mt-10 text-2xl font-semibold text-secondary">
              The Ethical Question
            </h2>
            <p className="text-lg text-base-content">
              If memories are rewritten with every recall, what is truth? Is
              factual chronology more trustworthy than emotional resonance? RNC
              invites us to interrogate the narrative authority of
              recollection—and whether remembering itself can become a kind of
              harm.
            </p>
            <p className="text-lg text-base-content">
              Taken to its extreme, this paradigm questions the very foundation
              of identity. If the self is a product of memory, and memory is
              recursive and unstable, then who are we when the original memory
              has long since eroded—layered over by distortions masquerading as
              truth?
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
