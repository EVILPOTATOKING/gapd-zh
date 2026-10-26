// 《谜题的本质》(The Nature of Puzzles) C. Browne · 第1卷第1期 pp. 33–44(PDF 第 35–46 页)
(function () {
  const fig = (n, width, zh, en) => ({
    type: "figure", src: `articles/img/v1n1-05-fig${n}.png`, width, zh, en,
  });
  const ref = (t) => ({ type: "ref", zh: t, en: t });
  const note = (zh, en) => ({ type: "note", zh, en: en ?? zh });
  const li = (zh, en) => ({ type: "li", zh, en });
  const box = (zh, en) => ({ type: "box", zh, en });

  window.GAPD_ARTICLE = {
    blocks: [
      {
        type: "lead",
        zh: "本文探讨了谜题的底层本质，以及它们与游戏的关系。讨论集中于纯演绎谜题，但在适当的地方也会提及其他类型的谜题，并附有支持所提出概念的例子。这些概念包括：将谜题视为出题者与解题者之间的两人游戏、谜题的成瘾性，以及出题者可以施加作者控制、使挑战对解题者来说更有趣、更引人入胜的方式。",
        en: "This paper explores the underlying nature of puzzles, and how they relate to games. The discussion focuses on pure deduction puzzles, but with reference to other types of puzzles where appropriate, with examples to support the concepts put forward. These include the notion of puzzles as two-player games between the setter and the solver, the addictiveness of puzzles, and ways in which the setter can exert authorial control, to make challenges more interesting and engaging for the solver.",
      },

      { type: "h2", zh: "1 引言", en: "1 Introduction" },
      {
        type: "p",
        zh: "谜题有许多形式；有文字谜题、拼图谜题、逻辑谜题、灵巧谜题、实体谜题、基于物理的谜题，这里仅举几例。虽然大多数读者都会对「谜题」一词对他们意味着什么有一个理解，但尽管有许多尝试，这一类型作为一个整体至今仍无法被精确定义。不过，鉴于存在的谜题的多样性，一个精确的定义也许并不那么有用——甚至并不可能。在本文中，我将转而审视谜题的底层本质，而不是试图提供又一个定义。",
        en: "Puzzles come in many forms; there are word puzzles, jigsaw puzzles, logic puzzles, dexterity puzzles, physical puzzles, physics based puzzles, to name just a few. While most readers will have an understanding of what the term ‘puzzle’ means to them, the genre as a whole has so far defied exact definition, despite many attempts to do so. But perhaps a precise definition is not all that useful – or even possible – given the variety of puzzles that exist. In this paper, I will look instead at the underlying nature of puzzles rather than attempting to provide yet another definition.",
      },
      {
        type: "p",
        zh: "本文的中心论点是：大多数谜题都是在出题者与解题者之间进行的游戏，而且它们的内在本质允许出题者有足够的作者控制，从而将自己的个性赋予一个设计良好的挑战，以便向解题者发起挑战、逗弄解题者，并吸引解题者投入。为支持这一论点，本文给出了若干例子，它们大多取自被称为日本逻辑谜题的纯演绎谜题的实际例子 [6]。这类谜题的特点是规则简单、只有一个（可推理得出的）解，并且没有依赖语言的内容。它们不仅是我最喜欢的谜题类型，而且能尽可能清晰、简单地说明所讨论的原则。",
        en: "The central thesis of this paper is that most puzzles are games played between the setter and the solver, and that their inherent nature allows sufficient authorial control for the setter to impart their personality upon a well designed challenge, in order to challenge, tease and engage the solver. Several examples are presented in support of this argument, which are mostly taken from actual examples of pure deduction puzzles known as Japanese logic puzzles [6]. These are characterised by having simple rules, a single (deducible) solution, and no language-dependent content. They are not only my favourite type of puzzle, but also illustrate the principles being discussed as clearly and simply as possible.",
      },
      {
        type: "p",
        zh: "为了避免在下面的讨论中产生混淆，术语「谜题」将指谜题游戏本身，而呈现给解题者的谜题游戏的每一个实例将被称为一个「挑战」。",
        en: "To avoid confusion in the following discussion, the term puzzle will refer to the actual puzzle game itself, while each instance of a puzzle game presented to the solver will be called a challenge.",
      },

      { type: "h2", zh: "2 作为游戏的谜题", en: "2 Puzzles As Games" },
      {
        type: "p",
        zh: "谜题可以被简单地定义为一项有趣且有正确答案的任务 [2]，或者更精确地说：",
        en: "A puzzle can be defined simply as a task that is fun and has a right answer [2], or more precisely:",
      },
      box("一个向人们发起挑战让其解决的问题，需要人们基于其规则进行推理才能获胜，并且不依赖于运气或其他人的行动。[5]", "a question which challenges people to solve, requires their deduction based on its rules to win, and doesn’t depend on chance or other people’s action. [5]"),
      {
        type: "p",
        zh: "Schuh 提出了一个谜题分类方案，并观察到谜题可以仅凭纯粹的推理来解决，必须有一个完整的分析，并且归根结底你就是你自己的对手 [4]。虽然前两个观察在大多数情况下是正确的，并且与大多数其他关于谜题的定义一致，但我对第三个观察持有异议，即谜题是一种没有对手的独自进行的活动。",
        en: "Schuh presents a classification scheme for puzzles, and observes that puzzles can be solved by pure reasoning alone, must have a complete analysis and that you are your own opponent, in the end [4]. While the first two observations are true in most cases and they agree with most other definitions of puzzles, I take issue with the third observation that puzzles are a solitary pursuit undertaken without an opponent.",
      },
      {
        type: "p",
        zh: "在他的经典论文「Defining the Abstract」（在本期重新发表 [19]）中，Thompson 敏锐地观察到，两人抽象游戏可以被描述为玩家相互呈现给对方的一系列谜题。反过来，我相信一个谜题可以被描述为在出题者与解题者之间进行的一个两人游戏。出题者的任务是制作一个吸引解题者投入并使其愉悦的挑战，而解题者的任务是避开出题者设下的陷阱来完成这个挑战。",
        en: "In his classic paper ‘Defining the Abstract’ (republished in this issue [19]), Thompson makes the astute observation that two-player abstract games may be described as a series of puzzles that the players present to each other. Conversely, I believe that a puzzle may be described as a two-player game played between the setter and the solver. The task of the setter is to produce a challenge that engages and entertains the solver, while the task of the solver is to avoid the traps laid by the setter to complete the challenge.",
      },
      {
        type: "p",
        zh: "值得强调的是，与传统对抗性游戏中的玩家不同，出题者并不是在试图「战胜」解题者。他们而是在试图提供最有娱乐性的游戏体验，其角色与角色扮演游戏中的游戏主持人的角色并无不同。用博弈论的语言来说，这不是一个零和博弈，因为双方玩家都可以获胜。",
        en: "It is worth emphasising that, unlike a player in a traditional adversarial game, the setter is not trying to ‘win’ against the solver. They are instead trying to provide the most entertaining playing experience, in a role not dissimilar to that of the gamemaster in a role playing game. In the language of game theory, this is not a zero-sum game, as both players can win.",
      },
      {
        type: "p",
        zh: "在严格的数学意义上，谜题确实是独自进行的活动，因为解题者是唯一朝着解采取行动的主体。然而，从策略或对抗的视角来看，这些行动是由出题者编码在挑战中的信息所引导的，这些信息随着挑战的展开而被揭示。解题者在解一个挑战的过程中可能不是一个主动的玩家，但通过影响解题者的决定和行动而缺席地参与其中。",
        en: "Puzzles are indeed solitary pursuits in a strictly mathematical sense, as the solver is the only agent making actions towards a solution. However, from a strategic or adversarial viewpoint, these actions are directed by the information encoded in the challenge by the setter, which is revealed as the challenge unfolds. The solver may not be an active player during the solution of a challenge, but participates in absentia by influencing the solver’s decisions and actions.",
      },
      {
        type: "p",
        zh: "一个设计良好的挑战会包含出题者设下的陷阱和欺骗，解题者必须察觉并避开它们。为了看看这是如何运作的，让我们先来看看谜题设计中依赖性和作者控制的概念。",
        en: "A well designed challenge will include traps and deceptions posed by the setter, which the solver must detect and avoid. In order to see how this works, let’s first look at the concepts of dependency and authorial control in puzzle design.",
      },
      fig(1, 640, "图 1. 相互依赖的数独提示逐步揭示足够的信息以取得进一步进展。", "Figure 1. Dependent Sudoku hints progressively reveal enough information to make further progress."),
      { type: "h3", zh: "2.1 依赖性", en: "2.1 Dependency" },
      {
        type: "p",
        zh: "依赖性在这个语境中指的是解一个给定挑战所需的步骤依赖于先前步骤的程度。一个可以立即在棋盘上许多地方取得进展的挑战表现出低依赖性，而一个只暴露足够信息让解题者在某个特定点取得进展的挑战则表现出高依赖性。解题者利用那条信息……它揭示了更多的信息……它又揭示了更多的信息……直到得到解。",
        en: "Dependency in this context refers to the degree to which the steps required to solve a given challenge are dependent on prior steps. A challenge in which progress can immediately be made at many places on the board shows low dependency, while a challenge that only exposes enough information for the solver to make progress at one particular point shows high dependency. The solver exploits that piece of information... which reveals further information... which reveals further information... until the solution is reached.",
      },
      {
        type: "p",
        zh: "图 1 展示了这一过程在实际中的一个简单例子，基于 [6] 中的第 31 号数独挑战（我假定读者熟悉数独的规则）。1 提示提供了足够的信息，可以在第一行实例化另一个 1（a）。这一额外信息使得可以在同一行中实例化一个 5（b），而这又依次提供了足够的信息，使得可以在它旁边实例化一个 9（c）。",
        en: "Figure 1 shows a simple example of this process in action, based on Sudoku challenge #31 from [6] (I assume that readers are familiar with the rules of Sudoku). The 1-hints provide enough information to instantiate another 1 on the top row (a). This additional information allows a 5 to be instantiated in the same row (b), which in turn provides enough information to allow a 9 to be instantiated next to it (c).",
      },
      {
        type: "p",
        zh: "所需的信息是分期发放的，以一种自我延续的方式，使得每一个行动都揭示出更多可以据以行动的信息。我听说过这一过程被描述为出题者留下一串（信息的）面包屑供人追随。然而，我更愿意把这种情况想成一幅有一两根松散线头的挂毯，其中局面的大部分是无法穿透的，除了某些薄弱点，对这些薄弱点的利用会解开更多可以追随的薄弱点。",
        en: "The required information is meted out in installments, in a self-perpetuating manner such that each action reveals further information to be acted upon. I have heard this process described as the setter leaving a trail of (informational) bread crumbs to follow. However, I prefer to think of the situation as a tapestry with a loose thread or two, in which the majority of the position is impenetrable except for certain weak points, whose exercise unravels further weak points to follow.",
      },
      {
        type: "p",
        zh: "这个数独例子只提供了这一过程的一个肤浅实例，因为它是一个简单的挑战，有好几根松散的线头可以追随。例如，8 提示立即决定了中央格子必须取数字 8。图 2 展示了一个引人注目得多的例子，即 [6] 中的第 80 号 Slitherlink 挑战。",
        en: "This Sudoku example only provides a superficial instance of this process, as it is an easy challenge with several loose threads to follow. For example, the 8-hints immediately dictate that the central cell must take the number 8. Figure 2 shows a much more striking example, with Slitherlink challenge #80 from [6].",
      },
      fig(2, 640, "图 2. 一个 Slitherlink 挑战中有趣的一个部分。", "Figure 2. An interesting section of a Slitherlink challenge."),
      {
        type: "p",
        zh: "Slitherlink 是一种纯演绎谜题，其中必须穿过方格网格的正交顶点描出一条简单的闭合路径，以经过每个数字提示格上所标示数量的边 [6]。因此，每一对相邻的顶点构成一个走法，其值可以是一条边（| 或 –）或者没有边（×）。",
        en: "Slitherlink is a pure deduction puzzle in which a simple closed path must be traced through orthogonal vertices of a square grid, to visit the number of sides indicated on each numbered hint cell [6]. Each adjacent pair of vertices therefore constitutes a move whose value can either be an edge (| or –) or no edge (×).",
      },
      {
        type: "p",
        zh: "图 2（a）展示了初始挑战的左下角，（b）展示了在 3 提示与 0 提示相接处必定存在的三条边。由此开始的路径随后会从它遇到的 0 提示处弹开（因为路径永远不能经过零提示的边），并沿着墙移动，得到图 2（c）所示的局面。此时需要一个推理；虚线走法不能是一条边，因为那会导致路径以十字形过早闭合，所以它必须是没有边 ×（d）。这使得可以取得进一步的进展，直到在局面（e）处需要一个推理，这使得可以取得进一步的进展（f），直到在局面（g）处需要另一个推理，这导致完成这个部分，如图 2（h）所示。",
        en: "Figure 2 (a) shows the lower left corner of the initial challenge, and (b) shows three edges that must exist where a 3-hint meets a 0-hint. The path thus initiated then bounces off the 0-hints that it encounters (since the path can never visit the side of a zero hint) and moves along the wall to give the position shown in Figure 2 (c). A deduction is required at this point; the dotted move can not be an edge as that would cause the path to close prematurely in a cross shape, so it must be no edge × (d). This allows further progress until a deduction is required at position (e), which allows further progress (f) until another deduction is required at position (g), which leads to the completion of the section, as shown in Figure 2 (h).",
      },
      {
        type: "p",
        zh: "这些例子展示了谜题如何能把它们自己的解藏在显眼之处，仅以一种自我延续的方式根据需要揭示所需的信息。每个子问题都需要一个解，而这个解提供了下一个子问题，依此类推。在一个设计良好的谜题中，解题者几乎可以感觉到出题者的手在一点一点地给他们喂送信息，并牵着他们的鼻子沿着某些通往解的途径前进。",
        en: "These examples demonstrate how puzzles can hide their own solutions in plain sight, only revealing required information as needed in a self-perpetuating way. Each subproblem requires a solution that provides the next subproblem, and so on. In a well designed puzzle, the solver can almost feel the hand of the setter drip-feeding them information and leading them along by the nose along certain avenues to solution.",
      },
      {
        type: "p",
        zh: "Pelánek [8] 描述了将依赖性用作一种自动衡量数独挑战难度的度量，其依据是提示提供的信息足以并行地（即有多根松散线头可以追随）还是串行地（即一条由相互依赖的松散线头组成的窄链）解这个挑战。我相信依赖性是设计良好的谜题的一个基本属性，它的意义比仅仅影响难度更深，因为它允许出题者对他们构建的挑战施加作者控制。",
        en: "Pelánek [8] describes the use of dependency as a metric for automatically measuring the difficulty of Sudoku challenges, based on whether the hints provide enough information to solve the challenge in parallel (i.e. multiple loose threads to follow) or in series (i.e. narrow chain of dependent loose threads). I believe that dependency is a fundamental property of well designed puzzles that runs deeper than just affecting difficulty, as it allows the setter to exert authorial control over the challenges they construct.",
      },
      { type: "h3", zh: "2.2 作者控制", en: "2.2 Authorial Control" },
      {
        type: "p",
        zh: "作者控制指的是出题者能够影响解题者在一个给定挑战中的进展、并缺席地操纵他们的走法选择的程度。正是这一属性使出题者成为第二位玩家，与解题者对立。",
        en: "Authorial control refers to the degree to which the setter can influence the solver’s progress through a given challenge, and manipulate their move choices in absentia. This is the property that makes the setter a second player, in opposition to the solver.",
      },
      {
        type: "p",
        zh: "考虑图 3 所示的杀手数独例子 [9]。杀手数独按照数独的规则进行，不同的是一开始不提供任何提示，只有带阴影的子区域，每个子区域的组成数字之和必须等于其上显示的值。",
        en: "Consider the Killer Sudoku example shown in Figure 3 [9]. Killer Sudoku is played according to the rules of Sudoku, except that no hints are provided initially apart from shaded subregions whose component digits must sum to the value shown on each.",
      },
      {
        type: "p",
        zh: "从（a）中最右边的一列开始，16 区域只能包含 {7, 9}，4 区域只能包含 {1, 3}。后者意味着 8 区域必须包含 {2, 6}，如（b）所示。于是满足 13 区域的唯一组合是 {1, 4, 8}，因此右下角 3×3 子网格最后剩下的两个格子必须取值 3 和 5（c）。5 不能出现在 9 区域的下方格子中，因为这个区域唯一可能的补全 {1, 3} 会与它正上方垂直的 {1, 3} 冲突，因此这个格子必须解为 3，它的邻居解为 5（d）。",
        en: "Starting with the rightmost column in (a), the 16-region can only contain {7, 9} and the 4-region can only contain {1, 3}. The latter implies that the 8-region must contain {2, 6}, as shown (b). The only combination that satisfies the 13-region is then {1, 4, 8}, hence the last two remaining cells of the lower right 3×3 subgrid must have values 3 and 5 (c). The 5 cannot occur in the lower cell of the 9-region, since the only possible completion of this region {1, 3} would conflict with the vertical {1, 3} just above it, hence this cell must resolve to 3 and its neighbour to 5 (d).",
      },
      {
        type: "p",
        zh: "这个例子右下角的 3×3 子网格巧妙而高效地自行解开，使用了最少量的信息，这些信息以自我参照的方式建立在先前步骤释放的信息之上。这种模式不太可能是偶然出现的，解题者会强烈地感觉到它的设计背后有一只智慧的手。",
        en: "The lower right 3×3 subgrid of this example resolves itself neatly and efficiently, using a minimum amount of information that self-referentially builds upon information released by prior steps. This pattern is unlikely to have occurred by chance, and the solver has the strong sense of an intelligent hand behind its design.",
      },
      fig(3, 640, "图 3. 一个暗示了作者控制的高效杀手数独序列。", "Figure 3. An efficient Killer Sudoku sequence that suggests authorial control."),
      fig(4, 640, "图 4. 计算机生成的 6×6 Slitherlink 挑战，显示了简化和通往解的路径。", "Figure 4. Computer-generated 6×6 Slitherlink challenge, showing simplifications and paths to solution."),
      {
        type: "p",
        zh: "专家级的数独玩家通常能分辨出一个给定的挑战是由人类设计者手工制作的，还是由计算机算法生成的。日本出版商 Nikoli 的总编辑 Nobuhiko Kanamoto 观察到：",
        en: "Expert Sudoku players can generally tell whether a given challenge is handcrafted by a human designer or generated by a computer algorithm. Nobuhiko Kanamoto, Chief Editor for Japanese publisher Nikoli, observes that:",
      },
      box("计算机生成的数独谜题缺乏一种让谜题令人愉悦的重要成分——解题者与作者之间的交流感。[14]", "Computer-generated Sudoku puzzles are lacking a vital ingredient that makes puzzles enjoyable – the sense of communication between solver and author. [14]"),
      {
        type: "p",
        zh: "Nikoli 的政策是对其广受欢迎的日本逻辑谜题系列只出版手工制作的挑战，并且对计算机生成的内容持怀疑态度，因为它有可能以劣质的批量产品充斥市场。挑战可以由业余爱好者或有经验的设计者提交，但所有挑战在被批准出版之前都要经过人工测试 [11, p. 2]。",
        en: "Nikoli have a policy of only publishing handcrafted challenges for their popular line of Japanese logic puzzles, and are sceptical of computer-generated content due to its potential to flood the market with inferior mass product. Challenges may be submitted by amateur fans or experienced designers, but all are hand tested before being approved for publication [11, p. 2].",
      },
      {
        type: "p",
        zh: "出题者与解题者之间的这种交流，只有在出题者在其设计中施加强烈的作者控制时才能发生。例如，考虑图 4（a）所示的计算机生成的 6×6 Slitherlink 挑战。¹ 图 4（b）展示了一位有经验的玩家会立即发现并完成的明显简化，而（c）展示了由每个提示产生的明显简化的数量，（d）展示了这个挑战的这些自然的进展方向。这个例子有多个起点，并且没有聚焦的解路径。",
        en: "This communication between setter and solver can only occur if the setter exercises a strong sense of authorial control in their design. For example, consider the computer-generated 6×6 Slitherlink challenge shown in Figure 4 (a).¹ Figure 4 (b) shows obvious simplifications that an experienced player would immediately spot and complete, while (c) shows the number of obvious simplifications arising from each hint and (d) shows these natural directions of progress for this challenge. This example has multiple starting points and no focused solution path.",
      },
      {
        type: "p",
        zh: "将此与图 5（a）所示的手工制作的² 6×6 Slitherlink 挑战相比较。这个例子只有一个明显的起始简化（在两个 0 之间的 2 处），但它触发了一个由另外 84 个简化组成的连锁反应，这些简化沿着几个明确界定的进展方向（c）和（d）导向一个完整的解（b）。",
        en: "Compare this with the handcrafted² 6×6 Slitherlink challenge shown in Figure 5 (a). This example has only one obvious starting simplification (at the 2 between the two 0s), but it triggers a chain reaction of 84 further simplifications that lead to a complete solution (b) along a few strongly defined directions of progress (c) and (d).",
      },
      {
        type: "p",
        zh: "第一个挑战可能表面上很有趣，因为它的提示是旋转对称的，而且它是两者中更难的一个。然而，它缺乏任何底层的策略结构，导向其解的推理均匀地分布在整个棋盘上。",
        en: "The first challenge may be superficially interesting, as its hints are rotationally symmetrical and it is the more difficult of the two. However, it lacks any underlying strategic structure, and the deductions leading to its solution are homogenously spread across the board.",
      },
      {
        type: "p",
        zh: "另一方面，第二个挑战有一个高度结构化的解，它优雅地展开，每一个简化都延续着下一个。它不是对称的，也没有那么难解，但它表现出一种高度聚焦的作者控制感；解题者可以感觉到出题者的手，并欣赏设计的技艺。这种结构感在计算机生成的设计中往往是缺失的。",
        en: "The second challenge, on the other hand, has a highly structured solution that unfolds elegantly with each simplification perpetuating the next. It is not symmetrical, nor as difficult to solve, but exhibits a strongly focused sense of authorial control; the solver can feel the hand of the setter and appreciate the craft of the design. This sense of structure tends to be missing from computer-generated designs.",
      },
      fig(5, 640, "图 5. 手工制作的 6×6 Slitherlink 挑战，显示了简化和通往解的路径。", "Figure 5. Handcrafted 6×6 Slitherlink challenge, showing simplifications and paths to solution."),
      { type: "h3", zh: "2.3 成瘾性", en: "2.3 Addictiveness" },
      {
        type: "p",
        zh: "依赖性和作者控制的这些机制，可以在某种程度上解释为什么许多玩家觉得解谜题如此令人上瘾。以这种方式一点一点地向解题者喂送子问题，使挑战变得引人入胜、令人上瘾，因为解决每个子问题时感受到的满足感是一种奖励，它激励玩家继续去解下一个，而下一个本身又会创造出更多有待解决的子问题。",
        en: "These mechanisms of dependency and authorial control could go some way to explaining why many players find solving puzzles so addictive. Drip-feeding subproblems to the solver in this manner makes challenges engaging and addictive, as the satisfaction felt at solving each subproblem is a reward that spurs the player on to solve the next, which itself creates more subproblems to be solved.",
      },
      {
        type: "p",
        zh: "Stafford 结合视频谜题游戏 Tetris，用一种被称为 Ziegarnik 效应的心理现象来解释这一效果，该效应指的是人脑倾向于紧紧抓住未解决的问题直到它们被解决 [12]。诸如 Tetris 和 2048³ 等成功的视频谜题游戏，通常用这种挑战与奖励的循环来「钩住」玩家，因为玩家面对的是连续不断的有趣子问题序列，每一个都喂养着下一个，直到达成解。这一效果也可以用格式塔心理学来描述，即大脑在心理上补全不完整图案的自然倾向 [13]。",
        en: "Stafford explains this effect in terms of a psychological phenomenon known as the Ziegarnik Effect, which refers to the human brain’s tendency to latch onto unsolved problems until they are resolved, with respect to the video puzzle game Tetris [12]. Successful video puzzle games such as Tetris and 2048³ typically ‘hook’ the player with such cycles of challenge and reward, as they are presented with continuous sequences of interesting subproblems to solve, each of which feeds the next, until the solution is achieved. This effect may also be described in terms of Gestalt psychology, as the brain’s natural tendency to mentally complete incomplete patterns [13].",
      },
      {
        type: "p",
        zh: "在这两个游戏 Tetris 和 2048 中，棋子以一种非确定性的方式被添加到棋盘上，而玩家眼前的子问题是：在可用的有限移动选项下，把这些棋子放在哪里效果最好。这些游戏还利用了我们天生的押注和风险评估本能——如果我把那个棋子放在这里会发生什么？或者那里？——这建立起一种期待感，想看看下一个棋子是否会符合当前的计划。这给了玩家继续玩下去的双重激励；完成眼前子问题的满足感，以及下一条隐藏信息的揭晓。请注意，同样的成瘾原理是适用的，即使这些视频谜题游戏并不会收敛到一个「解」。",
        en: "In both of these games, Tetris and 2048, pieces are added to the board in a nondeterministic manner, and the players’ immediate subproblem is where to place those pieces to best effect, given the limited movement options available. These games also tap into our natural betting and risk assessment instincts – what happens if I put that piece here? or there? – which builds a sense of anticipation to see whether the next piece will fit the current plan. This gives players a double incentive to continue playing; the satisfaction of completing the immediate subproblem and the revelation of the next piece of hidden information. Note that the same addictive principle is relevant, even though these video puzzle games do not converge to a ‘solution’ as such.",
      },
      {
        type: "p",
        zh: "在日本逻辑谜题中，有待解决的子问题是必要的推理，而奖励是每个推理之后揭示新信息的简化。如果你对这类谜题实际上令人上瘾有任何怀疑，那么下次你解一道的时候，请注意那种想要再完成一项……然后再一项……然后再一项……的冲动。",
        en: "In Japanese logic puzzles, the subproblems to be solved are the necessary deductions, and the rewards are the simplifications that follow each deduction to reveal new information. If you have any doubt that such puzzles are in fact addictive, then next time you solve one, note the urge to complete just one more item... then one more item. . . then one more item. . .",
      },
      {
        type: "p",
        zh: "Andrews [14] 提出了一个更直接的因果解释，说明为什么人们常常觉得解谜题这项活动在情感上如此有回报。他解释说，MRI 脑部扫描表明，大脑中一个被称为纹状体的「满足中心」（它会被与奖励相关的刺激激活）与额叶皮层中涉及逻辑思维和朝向目标的规划的区域之间存在一种关系。他认为，正是「理智的」皮层与「情感的」纹状体之间的这种联系，让我们在解决问题时获得快乐，并驱使我们去寻找更多有待解决的问题。",
        en: "Andrews [14] suggests a more direct causal explanation of why people often find the activity of solving puzzles so emotionally rewarding. He explains that MRI brain scans indicate a relationship between a ‘satisfaction centre’ in the brain called the striatum, which is activated by stimuli associated with reward, and areas of the frontal cortex that are involved with logical thought and planning towards goals. He posits that it is this connection between the ‘intellectual’ cortex and the ‘emotional’ striatum that gives us pleasure in response to solving problems, and drives us on to seek further problems to solve.",
      },
      {
        type: "p",
        zh: "这种对解谜题的成瘾甚至可能不局限于人脑。英国 Whipsnade 动物园最近的研究 [15] 发现，被给予特定灵巧挑战的黑猩猩似乎「热衷于完成谜题」本身，而不管这些挑战是否与食物奖励相关联。",
        en: "This addiction for solving puzzles may not even be confined to the human brain. Recent research at the UK’s Whipsnade Zoo [15] found that chimpanzees given particular dexterity challenges appeared ‘keen to complete the puzzle’ for its own sake, regardless of whether those challenges were associated with a food reward or not.",
      },
      {
        type: "p",
        zh: "下一节探讨这些想法对谜题形式的影响。",
        en: "The following section explores the ramifications of these ideas on the form of puzzles.",
      },

      { type: "h2", zh: "3 形式", en: "3 Form" },
      {
        type: "p",
        zh: "在这个语境中，谜题的形式指的是出题者可以操纵的自由度，以使挑战对解题者来说更有趣、更引人入胜、在美学上更令人愉悦。谜题的功能指的是这些形式存在于其中的概念框架，即谜题得以运作所必需的条件。",
        en: "In this context, the form of a puzzle refers to the degrees of freedom that the setter can manipulate, in order to make challenges more interesting, engaging and aesthetically pleasing for the solver. The function of a puzzle refers to the conceptual framework within which such forms exist, i.e. conditions necessary for the puzzle to work.",
      },
      fig(6, 600, "图 6. 提示放置对称的 Slitherlink 例子。", "Figure 6. Slitherlink examples with symmetrical hint placement."),
      fig(7, 600, "图 7. 一个 Hour Maze 例子，其提示放置不对称（左）和对称（右）。", "Figure 7. An Hour Maze example with asymmetrical (left) and symmetrical (right) hint placement."),
      {
        type: "p",
        zh: "作者控制允许出题者赋予其设计以结构，以便将他们的一些个性赋予他们制作的挑战。本节考察谜题出题者可以操纵的形式的一些相关方面。",
        en: "Authorial control allows the setter to impart structure on their designs, in order to impart some of their personality on the challenges they produce. This section examines some relevant aspects of form that puzzle setters can manipulate.",
      },
      { type: "h3", zh: "3.1 对称", en: "3.1 Symmetry" },
      {
        type: "p",
        zh: "将结构注入设计的一个显而易见的方式是通过对称。然而，认识到视觉（表面的）对称与策略（底层的）对称之间的区别是很重要的。",
        en: "An obvious way to inject structure into a design is through symmetry. However, it is important to realise the difference between visual (superficial) and strategic (underlying) symmetry.",
      },
      { type: "h4", zh: "3.1.1 视觉对称", en: "3.1.1 Visual Symmetry" },
      {
        type: "p",
        zh: "视觉对称是通过对定义每个挑战的提示进行对称放置来实现的。例如，图 6 展示了两个提示放置旋转对称的 Slitherlink 挑战（[6] 中的第 6 号和第 21 号）。许多出版商，包括 Nikoli，都有一项政策，对于他们的大多数谜题只出版对称的挑战。",
        en: "Visual symmetry is achieved through the symmetrical placement of hints defining each challenge. For example, Figure 6 shows two Slitherlink challenges (#6 and #21 from [6]) with rotationally symmetric hint placement. Many publishers, including Nikoli, have a policy of only publishing symmetrical challenges for most of their puzzles.",
      },
      {
        type: "p",
        zh: "要看到这一要求的原因，考虑图 7 所示的一对挑战，它们来自最近一项关于自动化谜题设计的研究 [15]，涉及一个名为 Hour Maze 的新谜题游戏。⁴ 两个挑战都是由计算机生成的，并且都描述了在同一背景迷宫上的难度相近的有效挑战，但请注意右边的对称提示集如何强加了一种秩序感，暗示了非随机的生成。",
        en: "To see the reason for this requirement, consider the pair of challenges shown in Figure 7, from a recent study in automated puzzle design [15] involving a new puzzle game called Hour Maze.⁴ Both challenges were generated by computer, and both describe valid challenges of similar difficulty on the same background maze, but notice how the symmetrical hint set on the right imposes a sense of order that hints at nonrandom generation.",
      },
      {
        type: "p",
        zh: "视觉对称提供了结构的表面外观；对称的挑战看起来更整洁、更优雅，但解起来并不一定更有趣。然而，如果对称让出题者或解题者感到愉悦，并有助于将谜题设计提升为一种艺术形式，就没有理由排除将对称作为一种设计约束。",
        en: "Visual symmetry offers the superficial appearance of structure; symmetrical challenges look neater and more elegant but are not necessarily more interesting to solve. However, there is no reason to preclude symmetry as a design constraint, if it pleases the setter or solver, and helps elevate puzzle design to an art form.",
      },
      { type: "h4", zh: "3.1.2 策略对称", en: "3.1.2 Strategic Symmetry" },
      {
        type: "p",
        zh: "策略对称指的是解题过程本身固有的模式或重复。这通常比视觉对称更重要，因为它直接反映了解题过程，而且除非审慎使用，否则可能导致糟糕的设计。",
        en: "Strategic symmetry refers to pattern or repetition inherent in the solution process itself. This is typically more important than visual symmetry, as it reflects the solution process directly, and can lead to bad designs unless used judiciously.",
      },
      {
        type: "p",
        zh: "例如，图 8 所示的 Slitherlink 挑战在其视觉设计（a）和其解（b）上都高度对称，其解本质上是图案（c）的四次重复。这个挑战高度冗余且无聊；解题者通常希望在每个挑战中都面对新颖的子问题去解决。",
        en: "For example, the Slitherlink challenge shown in Figure 8 is highly symmetric both in its visual design (a) and in its solution (b), which is essentially a repetition of the pattern (c) four times. This challenge is highly redundant and boring; the solver typically wants to be presented with novel subproblems to solve within each challenge.",
      },
      fig(8, 600, "图 8. 策略对称使这个 Slitherlink 例子成为图案（c）的平凡重复。", "Figure 8. Strategic symmetry makes this Slitherlink example a trivial repetition of pattern (c)."),
      fig(9, 330, "图 9. Kakuro 挑战中冗余的策略对称。", "Figure 9. Redundant strategic symmetry in a Kakuro challenge."),
      {
        type: "p",
        zh: "类似地，考虑图 9 所示的 Kakuro 挑战 [17]。Kakuro 的目标是用数字 {1, 2, 3, ..., 9} 填满网格，使得每一个连续段的总和等于所示的数字，并且不包含重复。这个挑战表现出高度的策略对称，若干立即可得的简化（小字）以相同的组合被反映在网格的相对两侧，造成了高度的冗余。",
        en: "Similarly, consider the Kakuro challenge shown in Figure 9 [17]. The aim of Kakuro is to fill the grid with digits {1, 2, 3, ..., 9}, such that each consecutive run totals the number shown and does not contain duplicates. This challenge exhibits a high degree of strategic symmetry, with several immediate simplifications (small text) being reflected on opposite sides of the grid in the same combinations, creating a high degree of redundancy.",
      },
      {
        type: "p",
        zh: "出题者向设计中注入一些结构的这一尝试很可能会适得其反，除非解题者乐于在棋盘的不同部分重复相同的操作。事实上，Hour Maze 实验的参与者在墙的对称性与谜题乐趣之间表现出轻微的负相关 [15]，这也许是因为对称的迷宫倾向于产生策略上对称的（即冗余的）解。",
        en: "This attempt by the setter to inject some structure into the design may well backfire, unless the solver is happy repeating the same operations in different parts of the board. Indeed, participants in the Hour Maze experiment exhibited a slight negative correlation between wall symmetry and puzzle enjoyment [15], perhaps due to the fact that symmetrical mazes tend to produce strategically symmetric (i.e. redundant) solutions.",
      },
      {
        type: "p",
        zh: "另一方面，图 10 所示的来自 [18] 的第 19 号 Slitherlink 挑战展示了策略对称的一个正面例子。在完成了明显的简化之后，这个挑战的自然解路径如下：",
        en: "Slitherlink challenge #19 from [18] shown in Figure 10, on the other hand, demonstrates a positive example of strategic symmetry. The natural solution path for this challenge, once obvious simplifications have been performed, is as follows:",
      },
      li("1. 沿左侧向下的一个级联（a），", "1. a cascade down the left hand side (a),"),
      li("2. 沿右侧向上的一个级联（b），以及", "2. a cascade up the right hand side (b), and"),
      li("3. 沿中央向上将它们连接起来的一个级联（c）。", "3. a cascade up the centre connecting them (c)."),
      {
        type: "p",
        zh: "沿每一侧的长级联在全局意义上彼此旋转相似。然而，每一个在其传播过程中都涉及解决不同的局部子问题，从而在没有冗余的情况下赋予了解以结构。作为一条一般的经验法则，全局对称应当伴随着局部不对称，反之亦然。",
        en: "The long cascades along each side are rotationally similar to each other in a global sense. However, each involves the solution of different local subproblems during their propagation, imparting structure on the solution without redundancy. As a general rule of thumb, global symmetry should be accompanied by local asymmetry, and vice versa.",
      },
      {
        type: "p",
        zh: "这个挑战中相互较量的级联不太可能是偶然出现的，解题者会真切地感觉到设计中有一只智慧的手在起作用，这只手也许正在和他们开一点玩笑。这个挑战是作者控制在发挥作用的一个好例子。",
        en: "The duelling cascades in this challenge are unlikely to have occurred by chance, and the solver has a real feeling of an intelligent hand at work in the design, who is perhaps having a bit of fun with them. This challenge is a nice example of authorial control in action.",
      },
      fig(10, 640, "图 10. 具有旋转相似解路径的 Slitherlink 挑战。", "Figure 10. Slitherlink challenge with rotationally similar solution paths."),
      fig(11, 600, "图 11. 杀手数独中一个自行解开的「蜗牛」图案。", "Figure 11. A self-resolving ‘snail’ pattern in Killer Sudoku."),
      { type: "h3", zh: "3.2 图案", en: "3.2 Pattern" },
      {
        type: "p",
        zh: "手工制作的谜题挑战常常包含重复的图案或母题，作为出题者个性的一种表达。在诸如 Slitherlink 的空间谜题中，这样的母题可能包括：如图 10 所示的相匹配的级联；解路径中的字母、数字或动物形状；或任何其他有趣的非随机图案。事实上，另一种日本逻辑谜题 Nonograms，在网格格子根据某些规则被着色时，实际上会产生艺术作品（或者至少是图画）。⁵",
        en: "Handcrafted puzzle challenges often include repeated patterns or motifs as an expression of the setter’s personality. In spatial puzzles such as Slitherlink, such motifs might involve: matching cascades as shown in Figure 10; letter, number or animal shapes in the solution path; or any other interesting nonrandom patterns. In fact, Nonograms, another type of Japanese logic puzzle, actually produce works of art (or at least pictures) as grid cells are coloured according to certain rules.⁵",
      },
      {
        type: "p",
        zh: "母题也可能出现在数字谜题中，例如图 11 所示的杀手数独例子中的「蜗牛」图案 [19]。右上角的 3×3 子网格包含两个区域，总和分别为 38 和 14，其中 38 区域上的一个格子超出了子网格的边界（左）。这个越界的格子必须解为 7，这是两个区域之和（38+14 = 52）与这个 3×3 子网格必须达到的所有数字的不相交和（1+2+3+4+5+6+7+8+9 = 45）之间的差（右）。于是中央格子也可以解为一个 7，因为数字不能在任何行或区域中重复。",
        en: "Motifs may also occur in number puzzles, such as the ‘snail’ pattern in the Killer Sudoku example shown in Figure 11 [19]. The top right 3×3 subgrid contains two regions, totalling 38 and 14 respectively, with one cell on the 38-region exceeding the subgrid boundary (left). This rogue cell must resolve to 7, which is the difference between the sum of the two regions (38+14 = 52) and the disjoint sum of all digits (1+2+3+4+5+6+7+8+9 = 45) that the 3×3 subgrid must total (right). The central cell can then also be resolved to a 7, as digits cannot be repeated in any row or region.",
      },
      {
        type: "p",
        zh: "这个蜗牛图案为这个挑战提供了一个优雅的、自行解开的起点，这个挑战在每个角都包含一个旋转的变体，给人一种精心构建的设计的强烈印象。但同样，用图案取悦解题者与用冗余惹恼他们之间，可能只有一线之隔。",
        en: "This snail pattern provides an elegant self-resolving starting point for this challenge, which contains a rotated variation each corner, giving the strong impression of carefully structured design. But again, there can be a fine line between amusing the solver through pattern and annoying them through redundancy.",
      },
      { type: "h3", zh: "3.3 梯子", en: "3.3 Ladders" },
      {
        type: "p",
        zh: "梯子，即通常以重复的图案出现的强制走法序列，是作者控制的另一个标志。它们与上面描述的图案不同，因为它们隐含在设计中，并在解题过程中显现出来。",
        en: "Ladders, i.e. forced sequences of moves typically in a repeated pattern, are another indicator of authorial control. They are different to the patterns described above, as they are implicit in the design and manifest themselves during its solution.",
      },
      {
        type: "p",
        zh: "例如，考虑图 12（左）所示的一个假想 Slitherlink 挑战的一个部分。左上角的两个 0 提示决定了相邻的 2 提示的哪两条边是「开」的，这又依次决定了与之相邻的 2 提示的哪两条边是「开」的，依此类推。这是一个刻意构造的例子，但这样自我延续的梯子在实际的挑战中经常可以找到。",
        en: "For example, consider the section of a hypothetical Slitherlink challenge shown in Figure 12 (left). The two 0 hints at the top left dictate which two edges of the adjacent 2 hint are ‘on’, which in turn dictate which two edges of the adjacent 2 hint are ‘on’, and so on. This is a contrived example, but such self-perpetuating ladders are often found in actual challenges.",
      },
      fig(12, 330, "图 12. 一个自我延续的 Slitherlink 梯子。", "Figure 12. A self-perpetuating Slitherlink ladder."),
      {
        type: "p",
        zh: "图 13 展示了一个名为 Masyu 的日本逻辑谜题的一个部分，在这个谜题中，解题者必须画出一条穿过棋盘上每个圆圈的单一不自相交的路径，使得路径在每个黑色圆圈内转弯，但笔直地穿过每个白色圆圈。更多细节参见本期的「Masyu」一文（其中包括这个例子）[2]。在这个例子中，那一列黑点从左上角向内触发了一个自我延续的梯子 13（右）。",
        en: "Figure 13 shows a section of a Japanese logic puzzle called Masyu, in which the solver must draw a single non-self-intersecting path through every circle on the board, such that the path turns within each black circle but passes straight through each white circle. See the ‘Masyu’ article in this issue (which includes this example) for more details [2]. In this case, the line of black dots triggers a self-perpetuating ladder from the top left corner inwards 13 (right).",
      },
      fig(13, 330, "图 13. 一个 Masyu 梯子。", "Figure 13. A Masyu ladder."),
      {
        type: "p",
        zh: "图 14 展示了梯子的另一个例子，在来自 [2] 的另一个 Masyu 挑战中。在这个例子中，黑白圆圈交替的序列（上面一行）强制产生了所示的自我延续的边的梯子（下面一行），因为路径必须从每个黑色圆圈笔直延伸两格，并且还要笔直地穿过每个白色圆圈。",
        en: "Figure 14 shows another example of a ladder, in another Masyu challenge from [2]. In this case, the alternating sequence of black and white circles (top row) forces the self-perpetuating ladder of edges shown (bottom row), as the path must extend straight for two cells from each black circle and also pass straight through each white circle.",
      },
      fig(14, 330, "图 14. 另一个 Masyu 梯子。", "Figure 14. Another Masyu ladder."),
      {
        type: "p",
        zh: "这样的梯子也可以有策略价值，因为当它们被识别出来时，常常可以被归并为一个单一的信息单元，通过模块化 [21] 或组块化减轻解题者的脑力工作量。例如，如果一位 Slitherlink 解题者注意到一条如图 12 中那样的 2 的斜线，那么在这条线一端的一个推理的效果，常常可以立即在这条线的另一端看到，而不必考虑中间的项。",
        en: "Such ladders can also have strategic value, as they can often be clumped into a single unit of information when they are recognised, reducing the solver’s mental workload through modularity [21] or chunking. For example, if a Slitherlink solver notices a diagonal line of 2s as in Figure 12, then the effect of a deduction at one end of the line can often be seen immediately at the other end of the line, without having to think about the intervening items.",
      },
      { type: "h3", zh: "3.4 惊喜", en: "3.4 Surprise" },
      {
        type: "p",
        zh: "惊喜的元素可以使一个挑战保持有趣，并给人以作者控制的印象，通常的做法是在解题过程中建立一种模式，然后突然打破它。",
        en: "An element of surprise can keep a challenge interesting and impart the impression of authorial control, typically by establishing a pattern in the solution process and then suddenly disrupting it.",
      },
      {
        type: "p",
        zh: "图 15 展示了一个 Slitherlink 挑战，它明显的进展点在右上角的阴影区域上被圈出（左）。这个区域只能向下扩展，与它相邻的群组相连（右），但明显的进展点现在跳到了这个扩展后的群组的左侧（圈出）。解题者在沿着右侧追随一个有序的级联向下之后，必须突然切换到网格的另一侧。",
        en: "Figure 15 shows a Slitherlink challenge whose obvious progress point is circled on the shaded region in the top right corner (left). This region can only expand downwards, connecting to its neighbouring group (right), but the obvious progress point now jumps to the left side of this extended group (circled). The solver, after following an orderly cascade down the right hand side, must suddenly switch to the other side of the grid.",
      },
      {
        type: "p",
        zh: "虽然图中的阴影使这种不连续很容易被发现，但在更复杂的情况下，更大的跳跃可能会让解题者困惑。在网格的远处部分触发关键信息的推理，可能暗示着一位智慧的出题者在积极地试图让解题者保持警觉。",
        en: "While the shading in the figure makes this discontinuity easy to spot, larger jumps in more complex situations can be confusing for the solver. Deductions that trigger key information in distant parts of the grid can suggest an intelligent setter actively trying to keep the solver on their toes.",
      },
      {
        type: "p",
        zh: "著名的国际象棋谜题出题者 Sam Loyd 认识到了惊喜的重要性，他表示他的目标是创作这样的谜题：其解需要一个与 1,000 位玩家中有 999 位会提出的走法相反的第一步 [22]。",
        en: "Famous Chess puzzle setter Sam Loyd recognised the importance of surprise, stating that his goal was to compose puzzles whose solutions require a first move that is contrary to what 999 players out of 1,000 would propose [22].",
      },
      fig(15, 600, "图 15. 一次不连续的跳跃推进了这个 Slitherlink 的解。", "Figure 15. A discontinuous jump propagates this Slitherlink solution."),
      { type: "h3", zh: "3.5 刁钻", en: "3.5 Perversity" },
      {
        type: "p",
        zh: "当涉及表达个性时，很难有什么能胜过纯粹的刁钻。考虑图 16（a）所示的 Slitherlink 挑战。⁶ 这个挑战有一个显而易见的解（b），但对有经验的 Slitherlink 解题者来说，这可能很难发现。问题在于，两个相邻的 3 提示构成了一个常见的图案，在通常的语境中，它总是意味着三条平行的边（c）。",
        en: "When it comes to expressing personality, it is hard to beat sheer perversity. Consider the Slitherlink challenge shown in Figure 16 (a).⁶ This challenge has an obvious solution (b), but this can be difficult for experienced Slitherlink solvers to spot. The problem is that two adjacent 3-hints form a common pattern that invariably implies three parallel edges in a normal context (c).",
      },
      fig(16, 300, "图 16. 一个 Slitherlink 笑话。", "Figure 16. A Slitherlink joke."),
      {
        type: "p",
        zh: "有经验的解题者会执着于这个学来的图案，根本看不见那个显而易见的解；他们必须抛弃经过许多小时强化而根深蒂固的习惯。这种对传统的公然无视，让富有创新精神的出题者可以颠覆解题者的预期，来一点恶作剧。",
        en: "Experienced solvers will fixate on this learnt pattern and simply not see the obvious solution; they must unlearn habits ingrained over many hours of reinforcement. Such blatant disregard for tradition allows the innovative setter to subvert the solver’s expectations for a bit of mischief.",
      },
      {
        type: "p",
        zh: "图 17 所示的 [6] 中的第 99 号数独挑战，是另一个恰当的例子。从初始提示集中可以毫不费力地立即解出三个值（高亮显示），这让解题者以为这个挑战并不那么难。",
        en: "Sudoku challenge #99 from [6], shown in Figure 17, is another case in point. Three values can be immediately resolved from the initial hint set with little effort (highlighted), leading the solver to think that this challenge is not so difficult.",
      },
      fig(17, 300, "图 17. 一个简单的数独挑战……真的吗？", "Figure 17. An easy Sudoku challenge... or is it?"),
      {
        type: "p",
        zh: "然而，信息很快就枯竭了，它的真实难度变得显而易见；这实际上是它所在合集中最难的挑战。这样的欺骗在演绎谜题中很常见。如果一个挑战一开始就特别简单，那么解题者可能会被引入一种虚假的安全感，但可以预料前面会有艰难的时刻。⁷",
        en: "However, the information soon dries up and its true difficulty becomes apparent; this is actually the most difficult challenge in its collection. Such deception is common in deduction puzzles. If a challenge starts off as being particularly easy, then the solver may be lulled into a false sense of security, but can expect tough times ahead.⁷",
      },
      {
        type: "p",
        zh: "图 18 所示的杀手数独挑战 [23] 有两个有趣之处。首先，右上角的 3×3 子网格包含三个恰好位于子网格内的区域，而通常至少会有一个区域与它的边界重叠，以便为解题者提供一些信息；这几乎是一个标准的解图案，但又不完全是。",
        en: "The Killer Sudoku challenge shown in Figure 18 [23] has two points of interest. Firstly, the top right 3×3 subgrid contains three regions that fit exactly within the subgrid, whereas typically at least one region would overlap its boundary to provide some information for the solver; this is almost a standard solution pattern, but not quite.",
      },
      fig(18, 300, "图 18. 只产生很少信息的图案。", "Figure 18. Patterns that yield little information."),
      {
        type: "p",
        zh: "其次，沿着底行的阴影 23、11、14 和 7 区域之和为 23+11+14+7 = 55，因此两个圈出的格子之和必须为 10（因为底行的九个格子之和必须等于所有数字的不相交和 1+2+3+4+5+6+7+8+9 = 45）。然而，这两个格子可用的所有值，分别是 {6, 8, 9} 和 {1, 2, 4}，都有能凑成 10 的配对，因此一个都不能被排除，这条潜在的探索思路失败了。因此，一个通常很有成果的解图案出人意料地只产生了很少的信息。",
        en: "Secondly, the shaded 23, 11, 14 and 7-regions along the bottom row sum to 23+11+14+7 = 55, hence the two circled cells must sum to 10 (since the nine cells along the bottom row must add to the disjoint sum of all digits 1+2+3+4+5+6+7+8+9 = 45). However, all of the values available for these two cells, {6, 8, 9} and {1, 2, 4} respectively, all have pairings that yield 10, hence none can be eliminated and this potential line of enquiry fails. Hence, a normally fruitful solution pattern yields surprisingly little information.",
      },
      {
        type: "p",
        zh: "这个挑战立即以两种如此公然的方式挫败了一位有经验的解题者的预期，这一事实表明这个挑战是由一位想要逗弄解题者的设计者出的。图 19 所示的挑战 [24] 也展示了一些不寻常的设计特征：",
        en: "The fact that this challenge immediately thwarts an experienced solver’s expectations in two such blatant ways suggests that this challenge was set by a designer wanting to tease the solver. The challenge shown in Figure 19 [24] also demonstrates some unusual design features:",
      },
      li("• 提示子区域的布局是水平、垂直和旋转对称的。", "• The hint subregion layout is horizontally, vertically and rotationally symmetrical."),
      li("• 存在单格子区域，可以立即被实例化为它们所显示的值。", "• Single cell subregions exist, which can be immediately instantiated to their shown value."),
      li("• 每个 3×3 子网格都以一个将其各角分隔开的加号形子区域为主导。", "• Each 3×3 subgrid is dominated by a plus-shaped subregion separating its corners."),
      li("• 每个子区域要么是：1）一个角，2）一条边，3）一个加号形，要么是 4）一个 2×2 交汇处。", "• Every subregion is either: 1) a corner, 2) an edge, 3) a plus-shape, or 4) a 2×2 junction."),
      fig(19, 300, "图 19. 一个异常对称的挑战。", "Figure 19. An unusually symmetrical challenge."),
      {
        type: "p",
        zh: "杀手数独挑战通常涉及不对称的提示子区域布局——例如图 18——以实现最大的多样性和策略深度。在一个挑战中找到这些对称类型中的任何一种都是一个惊喜，但找到全部四种则说明这是一个非常古怪的设计，它把这个谜题的设计约束推到了极限。",
        en: "Killer Sudoku challenges typically involve asymmetrical hint subregion layouts – such as Figure 18 – to allow maximum diversity and strategic depth. To find any of these types of symmetry in a challenge is a surprise, but to find all four speaks of a very eccentric design that pushes this puzzle’s design constraints to the limit.",
      },
      {
        type: "p",
        zh: "特别是那些立即被实例化为所显示值的单格子区域，是不寻常的，违反了这个谜题的惯例。但这个挑战解起来也引人入胜且有趣，这表明这是一个由其出题者精心构建的一丝不苟的设计。",
        en: "The single cell subregions that immediately instantiate to their shown value, in particular, are unusual and violate the conventions of this puzzle. But this challenge is also engaging and interesting to solve, which indicates a meticulous design carefully constructed by its setter.",
      },

      { type: "h2", zh: "4 结论", en: "4 Conclusion" },
      {
        type: "p",
        zh: "虽然本文只涉及了少数几种谜题类型，大多是日本逻辑谜题，但我相信所描述的原则与一般的谜题设计都有关。最重要的是出题者可以对他们的设计施加作者控制的方式，以便赋予一些结构和个性——缺席地操纵解题者的行动——从而使挑战有趣、引人入胜、在美学上令人愉悦。",
        en: "While this paper only touches on a small number of puzzle types, mostly Japanese logic puzzles, I believe that the principles described have relevance to puzzle design in general. Most important is the way in which the setter can exert authorial control on their designs, in order to impart some structure and personality – manipulating the solver’s actions in absentia – to make challenges interesting, engaging and aesthetically pleasing.",
      },
      {
        type: "p",
        zh: "将谜题表述为在出题者与解题者之间进行的两人游戏有助于解释这些想法，但这并不是说谜题是零和博弈。⁸ 出题者不是通过尽可能频繁地击败解题者来获胜，而是通过尽可能频繁地提供最有趣、最引人入胜、在美学上最令人愉悦的挑战来获胜。如果出题者提供了有趣的挑战，而解题者乐于完成它们，那么双方都获胜。",
        en: "Phrasing puzzles as two-player games played between the setter and the solver helps explain these ideas, but this is not to say that puzzles are zero-sum games.⁸ The setter does not win by defeating the solver as often as possible, but by providing the most interesting, engaging and aesthetically pleasing challenges as often as possible. Both win if the setter provides interesting challenges and the solver enjoys completing them.",
      },
      {
        type: "p",
        zh: "我希望这一讨论对谜题出题者有用，对解题者有趣，并且也许能为提高计算机生成设计的质量提出具体的方法。",
        en: "I hope that this discussion is useful for puzzle setters, and interesting to solvers, and might suggest concrete approaches for improving the quality of computer-generated designs.",
      },

      { type: "h3", zh: "致谢", en: "Acknowledgements" },
      {
        type: "p",
        zh: "感谢 Raf Peeters 和 Stephen Tavener 关于谜题设计的讨论。还要感谢 Jimmy Goto 对 Nikoli 设计过程的见解，以及允许在本文中使用 Nikoli 的挑战。",
        en: "Thanks to Raf Peeters and Stephen Tavener for discussions on puzzle design. Thanks also to Jimmy Goto for insights into Nikoli’s design process, and permission to use Nikoli challenges in this article.",
      },

      { type: "h3", zh: "参考文献", en: "References" },
      ref("[1] The Times Japanese Logic Puzzles: Hitori, Hashi, Slitherlink and Mosaic, London, Harper Collins, 2006."),
      ref("[2] Kim, S., ‘What is a Puzzle?’, 2008. http://www.scottkim.com.previewc40.carrierzone.com/webgames.html"),
      ref("[3] Higashida, H., ‘Machine-Made Puzzles and Hand-Made Puzzles’, in IFIP Advances in Information and Communication Technology (AICT), vol. 333, 2010, pp. 214–222."),
      ref("[4] Schuh, F., The Master Book of Mathematical Recreations, New York, Dover, 1968."),
      ref("[5] Thompson, M. J., ‘Defining the Abstract’, Game & Puzzle Design, vol. 1, no. 1, 2015, pp. 83–86."),
      ref("[6] Sudoku 1, Tokyo, Nikoli, 1988."),
      ref("[7] Fresh Slitherlink 3, Tokyo, Nikoli, 2012."),
      ref("[8] Pelánek, R., ‘Difficulty Rating of Sudoku Puzzles: An Overview and Evaluation’, arXiv, 2014. http://arxiv.org/abs/1403.7373"),
      ref("[9] Anonymous, ‘Killer Sudoku’, The Observer, 11 August 2013."),
      ref("[10] Kanamoto, N., ‘A well-made Sudoku is a pleasure to solve’, Nikoli, 2001. http://www.nikoli.co.jp/en/puzzles/why_hand_made.html"),
      ref("[11] The Nikoli Times, 26 July 2013."),
      ref("[12] Stafford, T., ‘The Psychology of Tetris’, BBC Future, 23 October 2012."),
      ref("[13] Humphrey, G., ‘The Psychology of the Gestalt’, Journal of Educational Psychology, vol. 15, no. 7, 1924, pp. 401–412."),
      ref("[14] Andrews, M., ‘Ask the Brains’, Scientific American: Mind, August/September, 2007, p. 86."),
      ref("[15] Clark, F. E. and Smith, L. J., ‘Effect of a Cognitive Challenge Device Containing Food and Non-Food Rewards on Chimpanzee Well-Being’, American Journal of Primatology, vol. 75, no. 8, 2007, pp. 807–816."),
      ref("[16] Browne, C., ‘Metrics for Better Puzzles’, in El-Nasr, M. S., Drachen, A., Canossa, A. and Isbister, K. (eds.), Game Analytics: Maximizing the Value of Player Data, Berlin, Springer, 2013, pp. 769–800."),
      ref("[17] Anonymous, ‘Kakuro’, The Guardian, 9 August 2013."),
      ref("[18] Fresh Slitherlink 2, Tokyo, Nikoli, 2011."),
      ref("[19] Anonymous, ‘Killer Sudoku’, The Observer, 17 November 2013."),
      ref("[20] Goto, J., ‘Masyu’, Game & Puzzle Design, vol. 1, no. 1, 2015, pp. 19–23."),
      ref("[21] Karmiloff-Smith, A., Beyond Modularity, Massachusetts, MIT Press, 1992."),
      ref("[22] Hayward, R. and Van Rijswijck, J., ‘Hex and Combinatorics’, Discrete Math, no. 306, 2006, pp. 2515–2528."),
      ref("[23] Anonymous, ‘Killer Sudoku’, The Guardian, 31 August 2013."),
      ref("[24] Anonymous, ‘Killer Sudoku’, The Observer, 5 January 2014."),

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

      note("¹ 来自：http://www.conceptispuzzles.com/ja/index.aspx?uri=puzzle/slitherlink", "¹ From: http://www.conceptispuzzles.com/ja/index.aspx?uri=puzzle/slitherlink"),
      note("² 由作者手工制作，用以说明这一特定观点。", "² Handcrafted by the author to illustrate this particular point."),
      note("³ http://gabrielecirulli.github.io/2048"),
      note("⁴ Hour Maze 的目标是用彩色的数字组 1–12 填满网格，使得相邻的数字相差 ±1。", "⁴ The aim in Hour Maze is to fill the grid with coloured number sets 1–12, such that adjacent numbers differ by ±1."),
      note("⁵ http://www.nonograms.org"),
      note("⁶ 由 Nikoli 的 Jimmy Goto 提供。", "⁶ Provided by Jimmy Goto from Nikoli."),
      note("⁷ 当然，除非这个挑战实际上被评为「简单」。", "⁷ Unless, of course, the challenge is actually rated as ‘easy’."),
      note("⁸ 零和博弈是指一方玩家的获胜意味着其他参与者失败的博弈。", "⁸ A zero-sum game is one in which a win for one player implies a loss for the other participant(s)."),
    ],
  };
})();
