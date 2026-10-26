// 《逻辑谜题的唯一解性》(Uniqueness in Logic Puzzles) C. Browne · 第1卷第1期 pp. 45–47(PDF 第 47–49 页)
(function () {
  const fig = (n, width, zh, en) => ({
    type: "figure", src: `articles/img/v1n1-06-fig${n}.png`, width, zh, en,
  });
  const ref = (t) => ({ type: "ref", zh: t, en: t });
  const box = (zh, en) => ({ type: "box", zh, en });

  window.GAPD_ARTICLE = {
    blocks: [
      {
        type: "lead",
        zh: "纯演绎谜题通常有一个唯一的解。然而，一些谜题出题者认为，有多个解的挑战也是有效的，只要它们可以通过排除导致模糊状态的选择来解出。本文考虑支持和反对这一立场的论据，并给出一个反例，展示用唯一性在多个解之间作决定的危险。",
        en: "Pure deduction puzzles typically have a single unique solution. However, some puzzle setters argue that challenges with multiple solutions are also valid, if they can be solved by eliminating choices that lead to ambiguous states. This paper considers the arguments for and against this position, and presents a counterexample that demonstrates the danger of using uniqueness to decide between multiple solutions.",
      },

      { type: "h2", zh: "1 引言", en: "1 Introduction" },
      {
        type: "p",
        zh: "纯演绎谜题（例如日本逻辑谜题）的一个特点是，每个挑战都有一个唯一的解。这使得这样的挑战可以通过推理而不是猜测来解出 [1]。",
        en: "A characteristic of pure deduction puzzles, such as Japanese logic puzzles, is that each challenge has a single unique solution. This allows such challenges to be solved by deduction rather than guesswork [1].",
      },
      {
        type: "p",
        zh: "因此，当我在一个像 The Guardian 这样受人尊敬的出版物中发现一个有多个解的 Kakuro 挑战时，我感到很惊讶 [2]。这是我第一次在印刷品中遇到这样的情况。Kakuro 的目标是在每个格子中填入一个 1–9 范围内的数字，使得每一个水平和垂直的连续段之和等于所示的提示总数，并且在每个连续段内没有数字重复 [3]。",
        en: "I was therefore surprised to find a Kakuro challenge with multiple solutions in a publication as respectable as The Guardian [2]. This was the first time that I had ever encountered such a case in print. The aim in Kakuro is to fill each cell with a digit in the range 1–9, such that each horizontal and vertical run adds to the hint total shown, and no digit is repeated within each run [3].",
      },
      {
        type: "p",
        zh: "图 22 展示了所讨论的 Kakuro 挑战的相关部分（所有其他的值都已被解出）。最后几个未解出的格子的可能值以小字显示，一个可能值为 4 或 5 的关键格子被圈出。这个挑战有三个可能的解，取决于这个关键格子取值 4 还是 5，如图所示。",
        en: "Figure 22 shows the relevant section of the Kakuro challenge in question (all other values have been resolved). Possible values for the final few unresolved cells are shown in small print, and a key cell with possible values 4 or 5 is circled. This challenge has three possible solutions, depending on whether this key cell takes the value 4 or 5, as shown.",
      },
      {
        type: "p",
        zh: "在提醒这个挑战的英国出题者注意这似乎是一个没有可推理出的解的有缺陷的设计之后，我也对他的回应感到惊讶。他坚持认为这个挑战确实是有效的，并且可以通过基于相对唯一性的推理来解出。",
        en: "After alerting the UK setter of this challenge to what appeared to be a flawed design with no deducible solution, I was also surprised by his response. He maintained that this challenge was indeed valid, and could be solved by deduction based on relative uniqueness.",
      },
      fig(1, 640, "图 1. 一个有三个解的 Kakuro 挑战。圈出的格子可以取值 4 或 5。", "Figure 1. A Kakuro challenge with three solutions. The circled cell can take the value 4 or 5."),
      fig(2, 640, "图 2. 一个 2×3 的 Slitherlink 挑战（左）及其三个解（a、b 和 c）。", "Figure 2. A 2×3 Slitherlink challenge (left) with three solutions (a, b and c)."),

      { type: "h2", zh: "2 支持模糊性的论据", en: "2 The Case For Ambiguity" },
      {
        type: "p",
        zh: "这个模糊的 Kakuro 挑战的出题者论证如下：",
        en: "The setter of the ambiguous Kakuro challenge argued as follows:",
      },
      box("任何导致多个解的走法 M 都可以被排除。 (1)", "Any move M that leads to multiple solutions can be eliminated. (1)"),
      {
        type: "p",
        zh: "例如，图 22 中圈出的格子的值不能是 4，因为这样的走法会允许多个解（上面一行）。因此，这个格子必须取值 5，产生唯一的「正确」解（下面一行）。",
        en: "For instance, the value of the circled cell in Figure 22 cannot be 4, as such a move would allow multiple solutions (top row). This cell must therefore take the value 5, producing the single ‘correct’ solution (bottom row).",
      },
      {
        type: "p",
        zh: "这种通过相对唯一性进行推理、以在多个解中作出选择的论证，乍一看似乎相当合理。它通过允许一种额外的解题策略，为 Kakuro 增加了一些急需的深度。它还通过允许传统出题者不会允许的有多个解的情况，增加了可以设计出的可能挑战的数量。",
        en: "This argument of deduction by relative uniqueness, for selecting among multiple solutions, seems fair enough at first glance. It adds some much-needed depth to Kakuro, by allowing an additional solution strategy. It also increases the number of possible challenges that can be devised, by allowing cases with multiple solutions that traditional setters would not allow.",
      },
      {
        type: "p",
        zh: "然而，日本出版商 Nikoli——Kakuro 的发明者和主要供应商——明确表示，不应以这种方式利用唯一性来解 Kakuro 或他们的任何其他纯演绎谜题。¹ 我们现在考虑支持绝对唯一性而非相对唯一性的论据。",
        en: "However, Japanese publisher Nikoli, the inventor and major supplier of Kakuro, categorically state that uniqueness should not be exploited in this way to solve Kakuro, or any of their other pure deduction puzzles.¹ We now consider the argument for absolute rather than relative uniqueness.",
      },

      { type: "h2", zh: "3 支持唯一性的论据", en: "3 The Case For Uniqueness" },
      {
        type: "p",
        zh: "通过相对唯一性进行推理的一个严重问题是，除非解题者也知道这条规则有效，否则它就不起作用，但对于这类谜题，唯一性通常是被假定的，而不是被明确陈述的。例如，The Guardian 提供的 Kakuro 规则根本没有提到唯一性，这使得那些规则不足以解出图 22 所示的模糊挑战 [2]。",
        en: "A serious problem with deduction by relative uniqueness is that it does not work unless the solver also knows that this rule is in force, but uniqueness is generally assumed for such puzzles rather than explicitly stated. For example, the Kakuro rules provided by The Guardian make no mention of uniqueness, making those rules insufficient to solve the ambiguous challenge shown in Figure 22 [2].",
      },
      {
        type: "p",
        zh: "此外，上面提出的论证（1）有一个明显的推论：",
        en: "Further, there is an obvious corollary to the argument (1) made above:",
      },
      box("因此，任何导向模糊走法 M 的走法也都可以被排除。 (2)", "Any move leading to ambiguous move M can therefore also be eliminated. (2)"),
      {
        type: "p",
        zh: "因此，从模糊走法 M 向后回溯，每一个先前的走法也都可以说导向了模糊性，因而都可以被排除，直到这个挑战没有任何有效的走法。或者真能这样吗？这个问题没有明确的答案，它取决于出题者和解题者的诠释。",
        en: "Hence, chaining backwards from ambiguous move M, every prior move can also be said to lead to ambiguity and hence be eliminated, until the challenge has no valid moves. Or can it? There is no clear answer to this question, which depends on the setter’s and solver’s interpretations.",
      },
      { type: "h3", zh: "3.1 反例", en: "3.1 Counterexample" },
      {
        type: "p",
        zh: "下面的反例展示了通过相对唯一性进行推理的危险。Slitherlink 是一种演绎谜题，其中必须穿过方格网格的正交顶点描出一条简单的闭合路径，以经过每个数字格上所标示数量的边 [4]。例如，图 2 展示了一个简单的 2×3 Slitherlink 挑战，它有三个有效的解：a、b 和 c。",
        en: "The following counterexample demonstrates the dangers of deduction by relative uniqueness. Slitherlink is a deduction puzzle in which a simple closed path must be traced through orthogonal vertices of a square grid, to visit the number of sides indicated on each numbered cell [4]. For example, Figure 2 shows a simple 2×3 Slitherlink challenge with three valid solutions: a, b and c.",
      },
      fig(3, 300, "图 3. 通过唯一性进行推理得出 c。", "Figure 3. Deduction by uniqueness yields c."),
      {
        type: "p",
        zh: "假定可以推理出图 3（上）所示的四条边，考虑由虚线指示的走法。如果这两个顶点之间没有边，那么就存在两个可能的解（左），因此这个走法必须是一条边，而 c 必须是「正确」的解（右）。",
        en: "Given that four edges can be deduced as shown in Figure 3 (top), consider the move indicated by the dotted line. If there is not an edge between these vertices then two possible solutions exist (left), hence this move must be an edge and c must be the ‘correct’ solution (right).",
      },
      {
        type: "p",
        zh: "然而，如果将同样的过程应用于图 4（上，虚线）中指示的走法，那么推理出的「正确」解就是 b（右）。",
        en: "However, if the same process is applied to the move indicated in Figure 4 (top, dotted), then b is deduced to be the ‘correct’ solution (right).",
      },
      fig(4, 300, "图 4. 通过唯一性进行推理得出 b。", "Figure 4. Deduction by uniqueness yields b."),
      {
        type: "p",
        zh: "因此，通过相对唯一性进行推理给出了两个相互冲突的「正确」解，b 和 c，取决于处理的顺序。为了得出与出题者相同的解，解题者将不得不以完全相同的顺序遵循相同的决策序列，但在实践中没有办法强制做到这一点。通过相对唯一性进行推理，并不能保证在所有情况下都从多个解中得出相同的解。",
        en: "Deduction by relative uniqueness therefore gives two conflicting ‘correct’ solutions, b and c, depending on processing order. To derive the same solution as the setter, the solver would have to follow the same sequence of decisions in the exact same order, but there is no way to enforce this in practice. Deduction by relative uniqueness is not guaranteed to yield the same solution from among multiple solutions in all cases.",
      },
      {
        type: "p",
        zh: "这个 Slitherlink 反例可以说有一个有效的解（取决于解题者作出推理的顺序）、两个同样有效的解（通过相对唯一性推理），或三个同样有效的解（它毕竟确实有三个——见图 2）。这显然是一种令人不满意的状况。但如果强制执行绝对唯一性，并避免这种有多个解的情况，那么所有这些问题就都会不复存在，而且没有任何实际代价。",
        en: "This Slitherlink counterexample could be said to have one valid solution (depending on the order in which the solver made their deductions), two equally valid solutions (through deduction by relative uniqueness) or three equally valid solutions (which it does, after all – see Figure 2). This is clearly an unsatisfactory state of affairs. But if absolute uniqueness is enforced, and such cases of multiple solutions avoided, then all of these problems simply go away, at no real cost.",
      },
      {
        type: "p",
        zh: "正如专家级谜题设计师 Hiroshi Higashida 所指出的：",
        en: "As expert puzzle designer Hiroshi Higashida points out:",
      },
      box("谜题的创作者，而不仅仅是解题者，也不得违反规则 [5, p216]。", "Puzzle creators, not only solvers, mustn’t defy rules, either [5, p216]."),

      { type: "h2", zh: "4 结论", en: "4 Conclusion" },
      {
        type: "p",
        zh: "纯演绎谜题具有单一唯一解的特点，不仅是优雅的，而且发挥着一种至关重要的实际作用。它保证了挑战可以仅通过推理来解出，没有猜测或模糊性，并意味着出题者和解题者都在使用同一套规则，而不需要对隐含的或隐藏的规则作出假设。此外，唯一性使挑战能够自我检验；如果玩家推理出了一个解，那么它必定是正确的那个。尽管放宽绝对唯一性这一约束、转而将相对唯一性作为一种解题策略加以利用可能很诱人，但在纯演绎谜题中最好避免这样做。",
        en: "The characteristic of pure deduction puzzles to have a single unique solution is not only elegant, but performs a vital practical function. It guarantees that challenges can be solved by deduction alone, without guesswork or ambiguity, and means that the setter and solver are both playing from the same rule set without the need to make assumptions about implied or hidden rules. Further, uniqueness makes challenges self-checking; if the player has deduced a solution, then it must be the correct one. As tempting as it may be to relax this constraint of absolute uniqueness and instead exploit relative uniqueness as a solution strategy, this is best avoided in pure deduction puzzles.",
      },

      { type: "h3", zh: "致谢", en: "Acknowledgements" },
      {
        type: "p",
        zh: "感谢 Jimmy Goto 澄清了 Nikoli 关于唯一性的立场。",
        en: "Thanks to Jimmy Goto for clarifying Nikoli’s position on uniqueness.",
      },

      { type: "h3", zh: "参考文献", en: "References" },
      ref("[1] Browne, C., ‘Deductive Search for Logic Puzzles’, Computational Intelligence and Games (CIG’13), IEEE Press, 2013, pp. 359–366."),
      ref("[2] Anonymous, ‘Kakuro’, The Guardian, 29 November 2013."),
      ref("[3] Kakuro 1, Tokyo, Nikoli, 1986."),
      ref("[4] The Times Japanese Logic Puzzles: Hitori, Hashi, Slitherlink and Mosaic, London, Harper Collins, 2006."),
      ref("[5] Higashida, H., ‘Machine-Made Puzzles and Hand-Made Puzzles’, IFIP Advances in Information and Communication Technology (AICT), vol. 333, 2010, pp. 214–222."),

      {
        type: "bio",
        zh: "Cameron Browne 是澳大利亚布里斯班 QUT 的校长高级研究员，其研究兴趣包括人工智能和自动化游戏设计。",
        en: "Cameron Browne is a Vice-Chancellor’s Senior Research Fellow at QUT, Brisbane, Australia, whose research interests include artificial intelligence and automated game design.",
      },
      {
        type: "bio",
        zh: "地址：School of EECS, Science and Engineering Faculty, QUT, Brisbane, 4001, Australia。",
        en: "Address: School of EECS, Science and Engineering Faculty, QUT, Brisbane, 4001, Australia.",
      },
      { type: "bio", zh: "电子邮件：c.browne@qut.edu.au", en: "Email: c.browne@qut.edu.au" },

      { type: "note", zh: "¹ 措辞强烈的私人通信。", en: "¹ Strongly worded personal correspondence." },
    ],
  };
})();
