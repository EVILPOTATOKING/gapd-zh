// 《将规则嵌入设计》(Embed the Rules) C. Browne · 第1卷第1期 pp. 70–80(PDF 第 72–82 页)
(function () {
  const fig = (n, width, zh, en) => ({
    type: "figure", src: `articles/img/v1n1-11-fig${n}.png`, width, zh, en,
  });
  const ref = (t) => ({ type: "ref", zh: t, en: t });

  window.GAPD_ARTICLE = {
    blocks: [
      {
        type: "lead",
        zh: "本文考察将游戏规则嵌入其器材中的概念，将其作为良好游戏设计的一个一般模式。若干例子展示了这样做的好处。文章将其与制造设计中的日本概念 poka-yoke，即防错，进行了类比。",
        en: "This article examines the concept of embedding the rules of a game in its equipment, as a general pattern for good game design. Several examples demonstrate the benefits of doing so. An analogy is drawn with the Japanese concept of poka-yoke, or mistake-proofing, in manufacturing design.",
      },

      { type: "h2", zh: "1 引言", en: "1 Introduction" },
      {
        type: "p",
        zh: "这个关于游戏设计模式的系列旨在探索促成良好游戏设计的基本原则。虽然这个术语让人联想到同名书籍 [1] 中所描述的「游戏编程模式」，但它在那里指的是视频游戏开发中的软件编程实践，而这里的「游戏设计模式」指的是任何促成游戏和谜题中良好设计的实践。¹ 这个系列的第一篇着眼于将规则嵌入器材的概念。",
        en: "This series on Game Design Patterns aims to explore fundamental principles that encourage good game designs. While this term is reminiscent of the ‘game programming patterns’ described in the book of the same name [1], its use there refers to software programming practices in video game development, whereas a ‘game design pattern’ here refers to any practice that encourages good designs in games and puzzles.¹ This first installment in the series looks at the concept of embedding the rules in the equipment.",
      },
      {
        type: "p",
        zh: "「嵌入规则」是指利用游戏实体组件（棋盘、棋子、环境等）的相关特征，来强制执行隐含的规则，这些规则因而不需要向玩家明确陈述。这也可以被描述为「将规则隐藏在器材中」，或者表述为一句格言：把森林藏在树木之中。²",
        en: "To ‘embed the rules’ means to use relevant features of the game’s physical components (board, pieces, environment, etc.), to enforce implicit rules which then do not need to be explicitly stated to players. This might also be described as ‘hiding the rules in the equipment’, or phrased as an aphorism: hide the forest in the trees.²",
      },
      {
        type: "p",
        zh: "这种方法在设计游戏时可以带来显著的好处，包括：简化规则集；最大限度地减少玩家错误；处理退化的几何情形；允许隐含策略的涌现；为玩家提供教学帮助；等等。这些好处将在以下各节中加以考察。",
        en: "This approach can have significant benefits when designing games, including: simplifying rule sets; minimising player error; handling degenerate geometric cases; allowing the emergence of implicit strategies; providing tutorial assistance to players; and so on. These benefits are examined in the following sections.",
      },

      { type: "h2", zh: "2 Poka-Yoke", en: "2 Poka-Yoke" },
      {
        type: "p",
        zh: "更简单的规则集通常会减少玩家误解或出错的发生——前提是没有关键信息被简化掉！——并带来概念上更优雅的游戏 [2]。更简单的规则集还有一个显著的好处，就是给玩家更少需要记住的信息，让他们能够转而专注于战略规划和真正地玩游戏，而不是计算哪些走法合法与否这种平凡的记账工作。诀窍在于尽可能地简化规则，同时确保游戏仍然足够复杂，从而有趣。",
        en: "Simpler rule sets generally reduce the incidence of player misinterpretation or error – provided that no crucial information is simplified out! – and lead to more conceptually elegant games [2]. Simpler rule sets also have the significant benefit of giving the player less information to remember, allowing them to concentrate instead on strategic planning and actually playing the game, rather than the mundane bookkeeping of calculating which moves are legal or not. The trick is to simplify the rules as much as possible, while ensuring that the game remains complex enough to be interesting.",
      },
      {
        type: "p",
        zh: "例如，考虑图 5 所示的 Heptalion 谜题，其目标是放置五块各显示一对符号的板块，以恰好覆盖左侧那组相匹配的符号 [3]。这些规则简单得微不足道，并且一看就懂；任何玩过这个游戏的玩家都不应再需要重读它们。",
        en: "For example, consider the Heptalion puzzle shown in Figure 5, in which the aim is to place the five tiles, each showing a pair of symbols, to exactly cover the set of matching symbols on the left [3]. These rules are trivially simple and instantly intuitive; no player who has played the game should ever need to reread them.",
      },
      fig(1, 330, "图 1. 一个 Heptalion 挑战及其棋子。", "Figure 1. A Heptalion challenge and pieces."),
      {
        type: "p",
        zh: "尽管简单，Heptalion 实际上是其设计者 Néstor Romeral Andrés 经过大量思考和努力的结果，正如本期第 11–17 页的文章《Heptalion》中所描述的。这是一个将规则嵌入组件的例子（即每块板块上的两个图案必须作为一对来放置，符号必须与相同的符号相匹配，等等），它使游戏如此直观，以至于误解和错误几乎不可能发生。",
        en: "Despite its simplicity, Heptalion is actually the result of considerable thought and effort by its designer Néstor Romeral Andrés, as described in the article ‘Heptalion’ on pages 11–17 in this issue. This is a case of embedding the rules in the components (i.e. the two patterns on each tile must be played as a pair, symbols must match identical symbols, etc.), making the game so intuitive that misinterpretations and mistakes are almost impossible.",
      },
      {
        type: "p",
        zh: "Romeral Andrés 敏锐地观察到，这种防错的过程是 poka-yoke 的一个实例。³ 这是一个日语术语，指的是制造过程中任何通过在人为错误发生时引起对它们的注意，来帮助设备操作者避免（yokeru）错误（poka）的机制 [4]。",
        en: "Romeral Andrés makes the astute observation that this process of mistake-proofing is an instance of poka-yoke.³ This is a Japanese term that refers to any mechanism in a manufacturing process that helps an equipment operator avoid (yokeru) mistakes (poka), by drawing attention to human errors as they occur [4].",
      },
      {
        type: "p",
        zh: "在游戏设计的语境中，poka-yoke 可以被看作是减少玩家错误的概念，方法就是让器材从一开始就不允许这样的错误发生，无论是明确地，还是通过其设计隐含地。",
        en: "In the context of game design, poka-yoke can be seen as the concept of reducing player error, by simply making the equipment not allow such mistakes to occur in the first place, either explicitly or implicitly through its design.",
      },

      { type: "h3", zh: "2.1 显式嵌入", en: "2.1 Explicit Embeddings" },
      {
        type: "p",
        zh: "规则可以被显式地嵌入器材中，以实现 poka-yoke（防错）。考虑图 2 所示的 Ploy，它是一个来自 1970 年的早期例子 [4]。每个棋子上的标记充当指示，表明移动的方向和距离；每个棋子可以朝其中一个标记的方向移动，格数最多为其标记的总数。",
        en: "Rules can be explicitly embedded in the equipment to achieve poka-yoke (mistake-proofing). Consider Ploy, shown in Figure 2, which is an early example from 1970 [4]. The markings on each piece act as instructions that indicate direction and distance of travel; each piece can move in the direction of one of its markings, a number of cells up to its total number of markings.",
      },
      fig(2, 330, "图 2. 一局即将开始的 Ploy。", "Figure 2. A game of Ploy about to start."),
      {
        type: "p",
        zh: "从那以后，这样的视觉提示已被嵌入许多游戏的棋子中。Mijnlieff⁴ 棋子上的图案（如图 3 所示）直观地表明下一位玩家必须相对于刚放下的棋子在哪里落子：正交成一线、斜向成一线、相邻，或不相邻。",
        en: "Such visual cues have been embedded in the pieces of many games since then. The designs on the Mijnlieff⁴ pieces, shown in Figure 3, intuitively indicate where the next player must move relative to the piece just placed: orthogonally in line, diagonally in line, adjacent, or nonadjacent.",
      },
      fig(3, 360, "图 3. 四种 Mijnlieff 棋子图案。", "Figure 3. The four Mijnlieff piece designs."),
      {
        type: "p",
        zh: "嵌入在 The Duke⁵ 棋子中的 5×5 图标网格（如图 4 所示）明确地向玩家展示每个棋子可以执行什么动作，以及在哪里执行。Navia Dratp [6]⁶ 使用了类似的机制，而 Confusion: Espionage and Deception in the Cold War [6] 则颠覆了这一想法，它在棋子上显示移动规则，这些规则最初只有对手可见，并且必须通过游戏过程推断出来。",
        en: "The 5×5 icon grid embedded in pieces of The Duke,⁵ shown in Figure 4, explicitly show the player what actions each piece can perform, and where. Navia Dratp [6]⁶ uses a similar mechanism, while Confusion: Espionage and Deception in the Cold War [6] subverts this idea by showing movement rules on the pieces, which are initially visible only to the opponent, and which must be deduced through play.",
      },
      fig(4, 200, "图 4. The Duke 中一个棋子上的视觉提示。", "Figure 4. Visual cues on a piece from The Duke."),
      {
        type: "p",
        zh: "视觉提示也可以被嵌入棋盘中，以直观地约束棋子的移动。例如，儿童棋盘游戏 Smess: The Ninny’s Chess [7] 中的每个方格都标有箭头，显示有效的移动方向。",
        en: "Visual cues may also be embedded in the board, to constrain piece movement intuitively. For example, each square in the child’s board game Smess: The Ninny’s Chess [7] is marked with arrows showing valid directions of travel.",
      },
      {
        type: "p",
        zh: "类似地，1972 年的游戏 Trippples [6] 包含 64 块各显示三个移动方向的板块（图 5），玩家轮流将它们放置在一个 8×8 的方格网格中，为每局游戏组成棋盘。然而，玩家的移动不是由他们自己棋子下方的箭头决定的，而是由对手棋子下方的箭头决定的，这一转折同时既是 poka-yoke 的，又是反直觉的。",
        en: "Similarly, the 1972 game Trippples [6] involves 64 tiles each showing three directions of travel (Figure 5), which the players alternately place in an 8×8 square grid to form the board for each game. However, players’ movements are not decided by the arrows under their own pieces but under their opponent’s pieces instead, in a twist that is both poka-yoke and counterintuitive at the same time.",
      },
      fig(5, 360, "图 5. Trippples 棋盘的方向板块。", "Figure 5. Directional tiles of the Trippples board."),
      {
        type: "p",
        zh: "涉及移动以外概念的抽象规则也可以在语义上被嵌入器材中，例如通过将它们写在纸牌上。在诸如 Magic: The Gathering [6] 和 Dominion [6]（图 6）等流行纸牌游戏中有许多这样的例子，其中卡牌描述了玩家可用的行动。甚至 Monopoly [6] 中的 Chance 和 Community Chest 卡牌也为玩家明确陈述了指示，玩家在每张卡牌被抽到之前，不需要记住它们——甚至不需要为它们操心。",
        en: "Abstract rules involving concepts other than movement can also be semantically embedded in the equipment, e.g. by stating them on playing cards. There are many examples of this in popular card games such as Magic: The Gathering [6] and Dominion [6] (Figure 6), in which the cards describe the actions available to players. Even the Chance and Community Chest cards in Monopoly [6] explicitly state instructions for the players, which they do not need to memorise – or even worry about – until each card is drawn.",
      },
      fig(6, 300, "图 6. Matthias Catrein 创作的 Dominion 卡牌「Witch」，©2008 Rio Grande。", "Figure 6. Dominion card ‘Witch’ by Matthias Catrein, ©2008 Rio Grande."),
      {
        type: "p",
        zh: "标准的 52 张扑克牌也在其旋转对称的图案中展示了防错。无论被抽到时是什么方向，玩家手中的牌总是正面朝上的，否则许多牌在被抽到时会是上下颠倒的。",
        en: "The standard deck of 52 playing cards also demonstrate mistake-proofing in their rotationally symmetrical illustrations. Players’ cards are always the right way up in their hands regardless of what orientation they were drawn in, otherwise many would be upside down when drawn.",
      },
      {
        type: "p",
        zh: "一个绝佳的 poka-yoke 例子可以在谜题游戏 Tantrix⁷ 中找到。Tantrix 套装由 56 块六边形板块组成，展示了板块各边可以由四种颜色的路径连接起来的所有方式，使得每块板块都包含三种不同颜色的路径（除了三条连接相对边的直线）。",
        en: "A superb example of poka-yoke can be found in the puzzle game Tantrix.⁷ The Tantrix set consists of 56 hexagonal tiles showing all ways in which the tile sides can be joined by paths of four colours, such that each tile includes paths of three different colours (except for three straight lines connecting opposite sides).",
      },
      {
        type: "p",
        zh: "Tantrix 板块编号为 1 到 56，使得每块板块背面都有一个以其中一种路径颜色显示的数字（图 7，上）。这使得这些板块除了标准游戏之外，还可以用于许多谜题挑战。从前三块板块开始，数字 3 是黄色的，所以玩家的第一个挑战是用这三块板块形成一个闭合的黄色环路（图 7，下）。然后下一个数字 4 是红色的，所以玩家的下一个挑战是用这四块板块形成一个闭合的红色环路，依此类推，直到 10 号板块。",
        en: "The Tantrix tiles are numbered 1 to 56, such that each tile has a number on its back in one of the path colours (Figure 7, top). This allows the tiles to be used for a number of puzzle challenges, in addition to the standard game. Starting with the first three tiles, the number 3 is yellow, so the player’s first challenge is to form a closed yellow loop with those three tiles (Figure 7, bottom). Then the next number 4 is red, so the player’s next challenge is to form a closed red loop with those four tiles, and so on, up to tile number 10.",
      },
      {
        type: "p",
        zh: "因此，Tantrix 套装通过对组件棋子进行明智的编号和标记，在其器材中嵌入了一组谜题挑战。此外，每个挑战都是防错的，不需要明确的附加规则，因为描述每个挑战的那块棋子显示了所需板块的数量和目标路径的颜色。",
        en: "The Tantrix set therefore embeds a set of puzzle challenges within its equipment, by judicious numbering and labelling of the component pieces. Further, each challenge is mistake-proof, without the need for explicit additional rules, as the piece describing each challenge shows the number of tiles required and the colour of the target path.",
      },
      fig(7, 360, "图 7. 前四块 Tantrix 板块的背面（上）以及前两个谜题挑战（下）。", "Figure 7. The backs of the first four Tantrix tiles (top) and the first two puzzle challenges (bottom)."),

      { type: "h3", zh: "2.2 隐式嵌入", en: "2.2 Implicit Embeddings" },
      {
        type: "p",
        zh: "规则也可以被隐式地嵌入器材中以实现 poka-yoke，通常是通过棋盘和棋子的形状，而不需要进一步的视觉装饰。",
        en: "Rules can also be implicitly embedded in the equipment to achieve poka-yoke, typically by the shape of the board and pieces, without the need for further visual decoration.",
      },
      {
        type: "p",
        zh: "图 8 展示了一局进行中的 Tixel⁸。Tixel 棋子被设计为一侧带有圆形凹陷，使得一些棋子可以以 45 度为增量原地旋转，而另一些则被阻止旋转，这取决于周围棋子的放置和朝向。这一机制简化了规则集，并以清晰、直观的方式强制执行了这个可能令人困惑的约束。",
        en: "Figure 8 shows a game of Tixel⁸ in progress. Tixel pieces are designed with a circular concavity on one side, so that some can rotate in-place in 45 degree increments while others are blocked from rotating, depending on the placement and orientation of the surrounding pieces. This mechanism simplifies the rule set and enforces this potentially confusing constraint in a clear, intuitive way.",
      },
      fig(8, 360, "图 8. 一局进行中的 Tixel 游戏。", "Figure 8. A Tixel game in progress."),
      {
        type: "p",
        zh: "Christian Freeling 于 1983 年推出的 Loonybird Chess [7] 展示了如何利用现有的套路来创造具有隐式定义的移动方式的新型混合棋子。Loonybird Chess 套装中的主要棋子由两部分组成，上部的猎手和下部的载体，并分别根据它们是在移动还是在吃子来承担每个部分的角色。",
        en: "Christian Freeling’s Loonybird Chess, from 1983 [7], shows how existing tropes can be exploited to create new hybrid pieces with implicitly defined movements. The cardinal pieces in the Loonybird Chess set consist of two parts, an upper hunter and a lower carrier, and take on the role of each part depending on whether they are moving or capturing, respectively.",
      },
      {
        type: "p",
        zh: "图 9 展示了一个白色的「马-车」，它像马一样移动但像车一样吃子，以及一个黑色的「马-象」，它像马一样移动但像象一样吃子。熟悉国际象棋的玩家会立刻理解这些不寻常棋子的移动方式，尽管以前没有见过它们，也不必记住新规则（除了上/下的区分之外）。",
        en: "Figure 9 shows a white ‘knight-rook’, which moves like a knight but captures like a rook, and a black ‘knight-bishop’, which moves like a knight but captures like a bishop. Players familiar with Chess will immediately understand the movements of these unusual pieces, despite not having seen them before, without having to memorise new rules (beyond the upper/lower distinction).",
      },
      fig(9, 330, "图 9. 两枚 Loonybird Chess 棋子（照片由 Christian Freeling 拍摄）。", "Figure 9. Two Loonybird Chess pieces (photo by Christian Freeling)."),
      {
        type: "p",
        zh: "棋子大小是另一个用于将规则隐式嵌入器材的属性。它决定了：Alapo [6] 中的移动；Oshi [6] 中的力量；Gobblet [6] 中的吃子；以及许多可以用 Looney pyramids⁹ 玩的游戏中的各种属性。",
        en: "Piece size is another property used for implicitly embedding rules in the equipment. It dictates: movement in Alapo [6]; power in Oshi [6]; capture in Gobblet [6]; and various properties in many games playable with Looney pyramids.⁹",
      },
      {
        type: "p",
        zh: "图 10 所示的游戏 Terrace [8] 隐式地利用了棋盘和棋子两者，从而允许相对简单和直观的规则。棋子大小决定吃子的方向（创造出不对称吃子这一吸引人的属性），而阶梯状棋盘的轮廓则约束移动。Terrace 在 1991 年发行时被认为是创新且「未来主义」的，作为一件常见的道具出现在电视剧 Star Trek: The Next Generation 中。想象一下，如果它在 1950 年首次被发明时就发行，会产生怎样的影响。",
        en: "The game Terrace [8], shown in Figure 10, implicitly exploits both board and pieces, allowing relatively simple and intuitive rules. Piece size dictates direction of capture (creating the attractive property of asymmetric capture), while the contours of the terraced board constrain movement. Terrace was considered innovative and ‘futuristic’ when it was released in 1991, appearing as a frequent prop on the television series Star Trek: The Next Generation. Imagine its impact if it had been released when first invented in 1950.",
      },
      fig(10, 360, "图 10. 一局准备开始的 Terrace（照片由 Geni Palladin 拍摄 [6]）。", "Figure 10. A game of Terrace ready to start (photo by Geni Palladin [6])."),
      {
        type: "p",
        zh: "隐式规则也可以被委托给外部来源，例如文字游戏 Scrabble [9]（它本身的规则已经足够多）借助玩家关于语言的文化知识，来定义哪些字母组合是有效的、哪些不是。这种将规则外包给外部权威的做法给游戏带来了巨大的丰富性，但也带来了模糊性，这取决于玩家的语言、词汇水平、所使用的词典、竞技水平等，因而有必要为正式比赛制定明确的单词列表。",
        en: "Implicit rules may also be delegated to external sources, such as the word game Scrabble [9] (which has enough rules of its own) tapping the players’ cultural knowledge of language to define which letter combinations are valid and which are not. This outsourcing of rules to an external authority brings a huge richness but also ambiguity to the game, depending on the players’ language, level of vocabulary, dictionary being used, level of competition, etc., necessitating the creation of explicit word lists for official play.",
      },
      {
        type: "p",
        zh: "角色扮演游戏是规则委托的另一个例子，但这次是委托给玩家自己的想象力。给定一个基本前提和一些在其中运作的基本规则，玩家通过他们对假想游戏世界的理解，以及他们自己对在其中哪些行动可以和不可以合法（且合理）地执行的诠释，来控制游戏的方向。¹⁰",
        en: "Roleplaying games are another example of the delegation of rules, but this time to the imaginations of the players themselves. Given a basic premise and some fundamental rules to work within, the players control the direction of play through their understanding of the hypothetical game world, and their own interpretations of what actions can and cannot be legally (and sensibly) performed therein.¹⁰",
      },

      { type: "h2", zh: "3 教学帮助", en: "3 Tutorial Help" },
      {
        type: "p",
        zh: "将规则嵌入器材的另一个好处是作为玩家的教学工具。考虑图 11 所示的古老日本游戏将棋 [10]，它对新玩家而言的入门门槛是出了名地高。",
        en: "Another benefit of embedding the rules in the equipment is as a tutorial device for players. Consider the ancient Japanese game of Shogi [10], shown in Figure 11, which has a notoriously high barrier to entry for new players.",
      },
      fig(11, 600, "图 11. 将棋棋子（Ishi Press International 版，照片由 Michael Kandrac 拍摄）。", "Figure 11. Shogi pieces (Ishi Press International Edition, photo by Michael Kandrac)."),
      {
        type: "p",
        zh: "将棋棋子在设计上展现了一定程度的防错，因为它们呈五边形，有一个指向对手的尖端，以表明哪些棋子是谁的。但玩家必须认出每个棋子上的汉字并记住其相关的移动方式，还必须应对被吃掉的棋子会作为对手的棋子重新进入棋盘这一事实。",
        en: "Shogi pieces exhibit some degree of mistake-proofing in their design, as they are pentagonal in shape with an apex that points towards the opponent, to clarify whose pieces are whose. But players must recognise the kanji characters on each piece and remember their associated movements, and must deal with the fact that captured pieces are reentered onto the board as the opponent’s.",
      },
      {
        type: "p",
        zh: "许多出版商试图通过在棋子本身上直观地显示棋子的移动来降低这一学习曲线，例如图 12 所示的 Kumon「Study Shogi」套装。请注意，这些棋子仍然显示它们原来的汉字字形，因此主要是教学辅助工具。",
        en: "A number of publishers have sought to reduce this learning curve by showing piece movement visually on the pieces themselves, such as the Kumon ‘Study Shogi’ set shown in Figure 12. Note that these pieces still show their original kanji glyphs, so are primarily tutorial aids.",
      },
      fig(12, 330, "图 12. Kumon「Study Shogi」套装（照片由 Mike Fogus 拍摄）。", "Figure 12. Kumon ‘Study Shogi’ set (photo by Mike Fogus)."),
      {
        type: "p",
        zh: "图 13 展示了另一种帮助新玩家学习将棋的方法，它通过已知的图像符号，而不是明确的指示。棋子在可能的情况下显示熟悉的国际象棋棋子的图标，而更奇特的棋子（将棋特有的）则由风格相协调的图标来表示，这对国际象棋玩家来说应该不难学。",
        en: "Figure 13 shows another approach to helping new players learn Shogi, through known iconography rather than explicit instruction. Pieces show icons of familiar Chess pieces where possible, with the more exotic pieces (specific to Shogi) represented by icons in a compatible aesthetic style, that should not be hard for a Chess player to learn.",
      },
      fig(13, 330, "图 13. 来自 Nekomado 的 Hidetchi 国际化棋子套装（照片由 Russ Williams 拍摄）。", "Figure 13. Hidetchi’s Internationalised Piece Set from Nekomado (photo by Russ Williams)."),
      {
        type: "p",
        zh: "类似地，难以记住 Robert Abbott 流行的国际象棋变体 Ultima [7] 中移动规则的玩家，可以使用一套教学套装来玩，其中每个棋子显示其最接近的国际象棋对应棋子的图标，并根据需要装饰有附加的提示。图 14 展示了 Fergus Duniho 制作的这样一套象形棋子。¹¹",
        en: "Similarly, players who have trouble remembering the movement rules in Robert Abbott’s popular Chess variant Ultima [7] can play with a tutorial set, in which each piece shows an icon of its closest Chess equivalent, decorated with additional cues as needed. Figure 14 shows such a pictographic piece set by Fergus Duniho.¹¹",
      },
      fig(14, 300, "图 14. Ultima 棋子的象形版本，©2001–2014 Fergus Duniho。", "Figure 14. Pictographic version of Ultima pieces, ©2001–2014 Fergus Duniho."),

      { type: "h2", zh: "4 涌现策略", en: "4 Emergent Strategies" },
      {
        type: "p",
        zh: "如果涌现策略在游戏中作为器材之间相互作用的副作用出现，而不是由于明确陈述的规则，那么对设计者——以及玩家！——来说这是一个自然的额外收获。",
        en: "It is a natural bonus for the designer – and players! – if emergent strategies occur in a game, as a side effect of the interplay between the equipment, rather than due to explicitly stated rules.",
      },
      fig(15, 640, "图 15. 一个 Trax 局面，显示了保证黑方获胜的强制走法 f。", "Figure 15. A Trax position, showing forced move f that guarantees a win for Black."),
      {
        type: "p",
        zh: "考虑图 15 所示的 Trax¹² 局面。Trax 已经是一个优雅且 poka-yoke 的游戏，因为两位玩家共用单一一种板块类型，它有两个不同的面，上面的彩色路径直观地定义了每位玩家的连通性。然而，这种板块设计的几何形状造成了一个问题，因为四面都被板块包围的空洞，如果那四条边上没有每种颜色各两个路径端点，就太容易变得无法放置。",
        en: "Consider the Trax¹² position shown in Figure 15. Trax is already an elegant and poka-yoke game, as both players share a single tile type, with two distinct sides, on which coloured paths visually define the connectivity for each player. However, the geometry of this tile design created a problem, as holes surrounded by tiles on all four sides could too easily become unplayable, if those four sides did not have two path ends of each colour.",
      },
      {
        type: "p",
        zh: "为了解决这个问题，游戏的设计者 David Smith 引入了一条强制走法规则，结果增加了一个新的策略维度。¹³ 考虑图 15（中）所示的走法，它创造了一个三面的空隙 f。只有一种板块朝向能与三个暴露的路径端点相匹配，因此作为这一步的一部分，必须在那里放置该朝向的板块（右）。这样的强制走法可以触发其他强制走法，依此类推，以单一一步实现复杂而有趣的结果。",
        en: "To fix this problem, the game’s designer, David Smith, introduced a forced move rule that ended up adding a new dimension of strategy.¹³ Consider the move shown in Figure 15 (middle), which creates a three-sided gap f. There is only one tile orientation that will match the three exposed path ends, so that tile orientation must be played there as part of the move (right). Such forced moves can trigger other forced moves, and so on, to achieve complex and interesting results with a single move.",
      },
      {
        type: "p",
        zh: "Smith 并没有专门为这种策略而设计，它是作为游戏几何形状的自然结果而涌现的。但一旦玩家知道了这条规则，那么就是器材本身明确地定义了这样的强制走法。",
        en: "Smith did not specifically design for this strategy, it emerged as a natural consequence of the game’s geometry. But once players know this rule, it is then the equipment itself that explicitly defines such forced moves.",
      },
      {
        type: "p",
        zh: "Trax 的有趣之处还在于，它既有一个直观的「形成一个闭合环路」的目标，也有一个更为任意的「连接一个虚拟 8×8 网格的相对两边」的目标。直观的目标几乎是防错的，而任意的目标可能会让玩家困惑，因为它依赖于器材之外的外部规则。",
        en: "Trax is also interesting in that it has both an intuitive ‘form a closed loop’ goal, as well as a more arbitrary ‘connect opposite sides of a virtual 8×8 grid’ goal. The intuitive goal is almost mistake-proof, while the arbitrary goal can be confusing for players, as it relies on external rules outside the equipment.",
      },
      fig(16, 640, "图 16. 一个部分解出的 Slitherlink 挑战（左）在进行区域着色（右）之后更容易理解。", "Figure 16. A partially solved Slitherlink challenge (left) is more comprehensible after region colouring (right)."),
      {
        type: "p",
        zh: "图 16 展示了另一个策略从游戏的固有几何形状中涌现的例子。这个例子涉及演绎谜题 Slitherlink，其中解题者必须穿过方格网格的正交顶点描出一条简单的（即闭合且不自相交的）路径，以经过每个数字格上所标示数量的边。这个例子是 [6] 中的第 57 号挑战。",
        en: "Figure 16 shows another case of a strategy emerging from the inherent geometry of a game. This case involves the deduction puzzle Slitherlink, in which the solver must trace a simple (i.e. closed and non-self-intersecting) path through the orthogonal vertices of a square grid, to visit the number of sides indicated on each numbered cell. This example is challenge #57 from [6].",
      },
      {
        type: "p",
        zh: "图 16（左）展示了大部分已完成的挑战，带有一些松散的路径端点，但对于没有 Slitherlink 经验的读者来说，推断从这里该往哪里继续可能会令人困惑。然而，我们可以求助于数学，利用若尔当曲线定理来获得对这个问题的一些洞察。这个定理指出，任何简单曲线都有一个内部和一个外部，任何完全穿过它的截面都会与其边界相交偶数次 [12]。",
        en: "Figure 16 (left) shows the challenge mostly completed, with a few loose path ends, but it may be confusing for readers not experienced with Slitherlink to deduce where to proceed from here. However, we can turn to mathematics and exploit the Jordan Curve Theorem to give some insight into the problem. This theorem states that any simple curve has an inside and an outside, and any cross-section completely through it will cross its boundary an even number of times [12].",
      },
      {
        type: "p",
        zh: "因此，我们可以对网格中必须位于最终路径内部的区域进行着色，如图 16（右）所示，这立即给出了下一步要走的棋；被圈出的路径端点必须彼此偏离而不连接，否则着色区域会被非法地切断。从若尔当曲线定理得出的另一个策略是，任何穿过网格的水平或垂直线都必须与偶数条边段相交，这在解复杂挑战时可以提供关键的额外信息。",
        en: "We can, therefore, colour regions of the grid that must lie inside the final path, as shown in Figure 16 (right), which immediately provides the next move to make; the circled path ends must deviate away from each other and not join, otherwise the coloured region would be illegally cut off. Another strategy that follows from the Jordan Curve Theorem is that any horizontal or vertical line through the grid must intersect an even number of edge segments, which can provide crucial additional information when solving complex challenges.",
      },
      fig(17, 600, "图 17. 一局由黑方获胜的 Hex，黑方用一条黑色棋子链连接了黑色的两边。", "Figure 17. A game of Hex won by Black, who has connected the black sides with a chain of black pieces."),
      {
        type: "p",
        zh: "数学，尤其是几何，是将隐式规则和约束嵌入器材的一个丰富来源。考虑图 16 所示的连接游戏 Hex，其中玩家轮流将一枚自己颜色的棋子加到一个空格上，目标是用一条自己棋子的链连接棋盘上属于自己的两边 [3]。",
        en: "Mathematics, and geometry in particular, is a rich source for embedding implicit rules and constraints into equipment. Consider the connection game, Hex, shown in Figure 16, in which players take turns adding a piece of their colour to an empty cell, and aim to connect their sides of the board with a chain of their pieces [3].",
      },
      {
        type: "p",
        zh: "这个简单的规则集掩盖了 Hex 的策略深度，因为仅仅是「连通性」概念的加入，就带来了一大堆的含义。正如软件工程师 Phil Bordelon 所说：这就像你免费得到了额外的规则 [3, p. 347]。",
        en: "This simple rule set belies the strategic depth of Hex, as the mere inclusion of the concept of ‘connectivity’ brings with it a whole slew of implications. As software engineer Phil Bordelon says: it’s like you get extra rules for free [3, p. 347].",
      },
      {
        type: "p",
        zh: "然而，通过对棋盘设计的轻微改变，可以实现一个更加简单、深度却相当的规则集。在 20 世纪 50 年代初，计算机先驱 Claude Shannon 提出了图 1 所示的游戏 Y，其中玩家的目标是用一条自己棋子的链连接一个由六边形组成的三角形网格的全部三条边 [3]。",
        en: "However, it is possible to achieve an even simpler rule set, with comparable depth, through a slight change in board design. In the early 1950s, computer pioneer Claude Shannon proposed the game of Y, shown in Figure 1, in which players aim to connect all three sides of a triangular grid of hexagons with a chain of their pieces [3].",
      },
      fig(18, 330, "图 18. 一局由白方获胜的 Y。", "Figure 18. A game of Y won by White."),
      {
        type: "p",
        zh: "Y 简化了 Hex 的器材，它不再需要给棋盘边缘着色，也不再需要每位玩家都有一个规定的方向（在 Hex 对局中，我有多少次弄混了哪个方向是我的，打乱了我的计划？）。然而，Hex 仍然是策略上更纯粹的游戏，因为玩家可以相当确定地专注于他们单一的连接线，而 Y 中发散的连接威胁很快就会变得相当复杂。可以说 Y 从设计的角度来看更清晰，而 Hex 从策略的角度来看更清晰。",
        en: "Y simplifies the Hex equipment by removing the need for the board edges to be coloured and for players to each have a defined direction (how many times have I confused which direction is mine in a game of Hex, upsetting my plans?). However, Hex is still the more strategically pure game, as players can focus on their single line of connection with considerable certainty, while the divergent connection threats in Y can soon get quite complex. Y could be described as clearer from a design perspective, while Hex is clearer from a strategic perspective.",
      },

      { type: "h2", zh: "5 利用几何", en: "5 Exploit the Geometry" },
      {
        type: "p",
        zh: "本节描述可以利用器材几何形状的方式，以隐式地强制执行规则，并帮助使游戏更加防错、清晰和优雅。",
        en: "This section describes ways in which the geometry of the equipment can be exploited, to implicitly enforce rules and help make games more mistake-proof, clear and elegant.",
      },

      { type: "h3", zh: "5.1 僵局", en: "5.1 Deadlocks" },
      {
        type: "p",
        zh: "上面描述的两个连接游戏 Hex 和 Y 都在六边形基础上进行，这并非巧合。六边形网格是三价的，即在任何交点周围相交的格子不超过三个，这带来了一个美妙的属性：恰好有一位玩家必定会形成获胜的连接，任何一局都不可能陷入平局的僵局。棋盘几何本身就避免了对明确的平局决胜规则的需要，因此许多连接游戏都有一个六边形——或者至少是三价的——基础。关于这一点的更多细节，参见 [3]。",
        en: "It is no coincidence that the two connection games described above, Hex and Y, are played on a hexagonal basis. The hexagonal grid is trivalent, i.e. no more than three cells meet around any intersection, which allows the beautiful property that exactly one player must make a winning connection, and no game can ever be deadlocked for a tie. The board geometry itself avoids the need for an explicit tiebreaker rule, hence many connection games have a hexagonal – or at least trivalent – basis. See [3] for more details on this point.",
      },
      {
        type: "p",
        zh: "相比之下，考虑图 19 所示的假想游戏，它与 Hex 完全相同，但在方格（即非三价）网格上进行。这个例子显示白色和黑色路径在中心点周围陷入僵局，现在这局游戏任何一位玩家都无法获胜。事实上，任何一位玩家都不太可能赢得这个游戏，这对玩它是一个巨大的抑制因素。",
        en: "By contrast, consider the hypothetical game shown in Figure 19, which is identical to Hex but played on a square (i.e. nontrivalent) grid. This example shows the white and black paths deadlocked around the central point, and this game cannot now be won by either player. In fact, neither player is ever likely to win this game, which is a huge disincentive to play it.",
      },
      fig(19, 240, "图 19. 方格网格上陷入僵局的路径。", "Figure 19. Deadlocked paths on the square grid."),
      {
        type: "p",
        zh: "为方格网格设计的连接游戏通常包含某种机制来超越几何并避免这样的僵局。例如，游戏 Quax¹⁴ 通过引入一种替代的走法类型来避免这个问题，在这种走法中，如果不会穿过任何已有的桥，玩家可以在斜向分隔的棋子之间架桥。图 20 展示了一座为白方赢得游戏的桥。",
        en: "Connection games designed for the square grid typically involve some mechanism to transcend the geometry and avoid such deadlocks. For example, the game Quax¹⁴ avoids this problem by introducing an alternative move type, in which players can bridge across diagonally separated pieces, if such a move would not cross any existing bridge. Figure 20 shows a bridge that wins the game for White.",
      },
      fig(20, 240, "图 20. 在 Quax 中解决僵局。", "Figure 20. Resolving deadlocks in Quax."),
      {
        type: "p",
        zh: "这种架桥机制巧妙地解决了问题，并允许一些新的、有趣的策略。诚然，它确实引入了一条新的移动规则，但它仍然是 poka-yoke 的，因为它通过利用几何，使游戏能以尽可能少的规则进行。",
        en: "This bridging mechanism solves the problem neatly, and allows some new and interesting strategies. Admittedly, it does introduce a new movement rule, but it is still poka-yoke in that it makes the game playable with as few rules as possible by exploiting the geometry.",
      },
      {
        type: "p",
        zh: "游戏 Gonnect [28] 提供了另一个在简化规则集的同时，利用几何来解决潜在僵局问题的例子。Gonnect 是 Hex 和围棋的混合，其中两位玩家试图用一条自己棋子的链连接方格网格上属于自己的两边，但同时也使用围棋中的包围吃子、劫和禁止自杀规则。然而，它去掉了围棋中的一条重要规则，因为玩家不能停一手。¹⁵",
        en: "The game Gonnect [28] provides another example of simplifying a rule set, while exploiting the geometry to solve a potential deadlock problem at the same time. Gonnect is a blend of Hex and Go, in which two players try to connect their sides of a square grid with a chain of their pieces, but also play with the surround capture, ko, and no-suicide rules from Go. However, it eliminates an important rule in Go, as players cannot pass.¹⁵",
      },
      fig(21, 240, "图 21. 一个冷的 Gonnect 局面。", "Figure 21. A cold Gonnect position."),
      {
        type: "p",
        zh: "为了看到这对游戏产生的影响，考虑图 19 所示的局面。这个局面看起来可能正走向僵持，但它不仅仅是冷的——这是组合博弈论中的一个术语，意思是行棋方可用的唯一走法都是不利的——它是冰冻的，因为下一位行棋的玩家将会输。",
        en: "To see the effect that this has on the game, consider the position shown in Figure 19. This position may appear to be heading for a stalemate, but it is not just cold – a term from combinatorial game theory meaning that the only moves available to the mover are disadvantageous – it is freezing, as the next player to move will lose.",
      },
      {
        type: "p",
        zh: "棋盘上的四块棋各有两只眼（内部的空洞），这在围棋中会使它们免受敌方入侵，因为对手无法在同一步中填满两个空洞来吃掉这块棋。但由于在 Gonnect 中不允许停一手，也不允许自杀走法，下一位行棋的玩家被迫在自己的一只赋予生命的眼中落子，从而让对手可以在下一步于另一只眼中落子吃掉那块棋，并获得致胜的优势。去掉停一手的规则不仅简化了规则集，而且优雅地解决了暂时僵局的问题。",
        en: "Each of the four groups on the board have two eyes (internal holes) which in Go would make them safe from enemy intrusion, as the opponent cannot fill both holes to capture the group in the same move. But since passing is not allowed in Gonnect, and suicide moves are not allowed, the next player to move is forced to play in one of their own life-giving eyes, allowing the opponent to play in the other eye to capture that group next move and achieve a winning advantage. Removing the passing rule not only simplified the rule set but elegantly solved the problem of temporary deadlocks.",
      },

      { type: "h3", zh: "5.2 循环", en: "5.2 Cycles" },
      {
        type: "p",
        zh: "围棋中的劫规则规定，玩家不能重复上一回合的棋盘局面，这对于避免对局的循环是必要的。图 22 展示了一个经典的劫的情形，其中白方吃掉一枚黑子，但黑方不能在下一回合立即把它吃回来。这条规则可以被描述为一个在几千年间变成了「特性」的「缺陷」，如今有整卷整卷的著作和整个学派致力于劫的分析。",
        en: "The ko rule from Go states that a player cannot repeat the board position from the previous turn, and is necessary to avoid loops of play. Figure 22 shows a classic ko situation, in which White captures a black piece, but Black cannot immediately recapture it back on the next turn. This rule could be described as a ‘bug’ that has become a ‘feature’ over the millennia, and entire volumes and schools of thought are now devoted to ko analysis.",
      },
      fig(22, 330, "图 22. 劫规则：黑方不能回提。", "Figure 22. The ko rule: Black cannot recapture."),
      {
        type: "p",
        zh: "因此，当计算机程序 LUDI [12] 产生出游戏 Ndengrod¹⁶ 时，这是一个惊喜。在这个游戏中，两位玩家在六边形网格上竞相用自己的五枚棋子连成一线，同时使用围棋中的包围吃子和禁止自杀规则，但不使用劫规则！尽管缺少这条看似关键的规则，这个游戏玩起来很好，也没有遇到任何循环的问题。",
        en: "It was therefore a surprise when the computer program LUDI [12] produced the game Ndengrod,¹⁶ in which two players compete to make a line of five of their pieces on a hexagonal grid, while using the surround capture and no-suicide rules from Go but not the ko rule! The game played well and did not suffer any problems with cycles, despite the lack of this apparently crucial rule.",
      },
      {
        type: "p",
        zh: "分析很快揭示了围棋研究者中早已知道的事情：将包围吃子机制从方格基础移到六边形基础，就消除了对劫规则的需要。图 23 说明了这一点，其中白方刚刚用走法 c 吃掉了一枚黑子，但没有立即被回提的危险，因此不需要劫。这本质上是由于六边形网格中缺少斜向连接；更多细节参见 [4]。LUDI 无意中选择了一种避免循环问题的几何，简化了规则集。",
        en: "Analysis soon revealed what was already known among Go researchers, that moving the surround capture mechanism from a square basis to a hexagonal basis removes the need for the ko rule. This is illustrated in Figure 23, where White has just captured a black piece with move c, but there is no danger of an immediate return capture and hence no need for ko. This is essentially due to the lack of diagonal connections in the hexagonal grid; see [4] for more details. LUDI had inadvertently chosen a geometry that avoided the problem of cycles, simplifying the rule set.",
      },
      fig(23, 330, "图 23. 在六边形网格上不需要劫。", "Figure 23. Ko is not needed on the hexagonal grid."),

      { type: "h3", zh: "5.3 堆叠", en: "5.3 Stacking" },
      {
        type: "p",
        zh: "对于棋子相互堆叠的游戏来说，底层几何显然是根本性的。在这里，错误的几何选择可能导致严重的问题，需要额外的规则来修正——如果它们还能被修正的话——而正确的选择则可以用更少的规则产生优雅的解决方案。考虑图 24 和图 25 所示的假想弹珠堆叠游戏，其中白方铺设了一个由白色弹珠组成的六边形平台，黑方在其上堆叠了一颗黑色弹珠。",
        en: "The underlying geometry is obviously fundamental to games in which pieces stack on each other. The wrong choice of geometry here can cause serious problems that require additional rules to fix – if they can be fixed at all – while the right choice can produce elegant solutions with fewer rules. Consider the hypothetical marble stacking game, shown in Figures 24 and 25, in which White has laid a hexagonal platform of white marbles, upon which Black has stacked a single black marble.",
      },
      fig(24, 330, "图 24. 在相位 I 中的堆叠成功。", "Figure 24. Stacking in phase I succeeds."),
      {
        type: "p",
        zh: "在图 24 中，红方在黑色弹珠旁边堆叠两颗弹珠，然后在顶部再加一颗弹珠，实现完整的堆积。这个例子中的所有弹珠都可以被描述为存在于同一个相位中，我们称之为「相位 I」。",
        en: "In Figure 24, Red stacks two marbles adjacent to the black marble, then adds a further marble on top to achieve a complete packing. All marbles in this example can be described as existing in the same phase, let’s call it ‘phase I’.",
      },
      fig(25, 330, "图 25. 相位 II 破坏了堆叠。", "Figure 25. Phase II spoils the stacking."),
      {
        type: "p",
        zh: "图 25 展示了玩家可用的另一个选项，即在黑色弹珠的对面堆叠一颗弹珠，使其不接触黑色弹珠。黑色弹珠仍处于相位 I，但新弹珠处于相位 II，这破坏了堆积，因为在这个例子中现在无法再堆叠更多的弹珠。",
        en: "Figure 25 shows the other option available to the player, which is to stack a marble across from the black marble so as not to touch it. The black marble is still in phase I, but the new marble is in phase II, ruining the packing as no further marbles can now be stacked in this example.",
      },
      {
        type: "p",
        zh: "像这样混合相位不仅会破坏堆叠，还可能对使用这种几何进行的连接游戏产生严重的影响。由于棋子群之间很容易产生空隙，游戏可能变得无法获胜；或者由于潜在的阻挡走法很容易被破坏，游戏可能变得轻而易举就能获胜。",
        en: "Mixing phases like this not only ruins the stacking, but can have serious implications for connection games played using this geometry. Games may become unwinnable due to the ease with which gaps can be created between groups of pieces, or games may become trivially winnable due to the ease with which potential blocking moves can be spoiled.",
      },
      {
        type: "p",
        zh: "设计者可以通过引入一条规定所有弹珠必须在同一相位中放置的规则来解决这个问题。但这个解决方案并不优雅：它难以解释，难以强制执行，并且容易出错。它依赖于玩家理解这个问题，并正确地识别每个潜在走法的相位，这对于大尺寸棋盘来说是繁重且不现实的；玩家将把大部分时间花在仅仅弄清楚哪些走法是合法的上面。",
        en: "The designer can address this problem by introducing a rule that all marbles must be played in the same phase. But this solution is inelegant: it is hard to explain, hard to enforce, and error prone. It relies on players understanding the problem and correctly recognising the phase of each potential move, which is onerous and unrealistic for large board sizes; the players will spend most of their time just working out which moves are legal.",
      },
      {
        type: "p",
        zh: "David Bush 在他的游戏 Lazo [3] 中为这个问题提供了一个更 poka-yoke 的解决方案。这是一个使用在六边形基础内堆叠的棋子进行的连接游戏，它通过图 26 所示的形状巧妙的棋子避免了相位问题。",
        en: "David Bush offers a more poka-yoke solution to this problem in his game Lazo [3]. This is a connection game played with pieces that stack within a hexagonal basis, which avoids the phase problem through the cleverly shaped pieces shown in Figure 26.",
      },
      fig(26, 330, "图 26. Lazo 棋子强制了堆叠朝向。", "Figure 26. Lazo pieces force stacking orientation."),
      {
        type: "p",
        zh: "每个棋子底部都有一个三角形的栓，当插入棋盘孔中时，它迫使棋子朝向一个特定的方向。然后每当三个相邻的棋子在一个空隙周围相接时（图 26，左），这个空隙也会是三角形的并朝向同一个方向。因此，任何堆叠上去的棋子都由于其三角形的栓而被迫朝向同一个方向，确保所有棋子都保持在同一相位中（图 26，右）。",
        en: "Each piece has a triangular peg on the bottom, which forces it to face in a particular direction when slotted into a board hole. Then whenever three adjacent pieces meet around a gap (Figure 26, left), that gap will also be triangular and facing in the same direction. Any piece that stacks is therefore forced to face in the same direction, due to its triangular peg, ensuring that all pieces remain in the same phase (Figure 26, right).",
      },
      {
        type: "p",
        zh: "这是利用几何来隐藏冗余规则并减少玩家错误的另一个例子。Lazo 的发明者此后重新设计了棋子的形状，使间隙更大，以便玩家能更容易地看到下面棋子的颜色，通过器材使游戏进一步防错。",
        en: "This is another example of exploiting the geometry to hide redundant rules and reduce player error. The inventor of Lazo has since reshaped the pieces to make the interstitial gap larger, so that players can see the colour of the piece underneath more easily, mistake-proofing the game even further through the equipment.",
      },
      {
        type: "p",
        zh: "解决相位问题的另一个办法是完全选择一种不同的几何。例如，图 27 表明，使用方格基础的弹珠堆叠不会受到这样的相位问题的影响。这就是为什么我自己的弹珠堆叠游戏，例如 Akron [3]、Margo [17] 和 Shibumi 套装 [18]，都使用方格基础。",
        en: "Another solution to the phase problem is to choose a different geometry altogether. For example, Figure 27 shows that marble stacking is not subject to such phase problems using a square basis. This is the reason that my own marble-stacking games, such as Akron [3], Margo [17] and the Shibumi set [18], all use a square basis.",
      },
      fig(27, 330, "图 27. 方格堆叠中没有相位问题。", "Figure 27. No phase problems in square stacking."),
      {
        type: "p",
        zh: "但第 5.1 节中描述的方格网格上的僵局问题又如何呢？事实证明，由于一个意想不到的涌现属性，方格网格上的堆叠游戏超越了这个问题。",
        en: "But what about the problem with deadlocks on the square grid, described in Section 5.1? It turns out that stacking games on the square grid transcend this problem, due to an unexpected emergent property.",
      },
      {
        type: "p",
        zh: "图 28（左）展示了一个图，其顶点是完整方格堆积中可见弹珠的中心，其边对应于相互接触的弹珠对。这个图的对偶图（右）是三价的，这是无僵局连接的必要条件；¹⁷ 在这个网格上的完整堆积保证会在相对的两边之间产生连接。",
        en: "Figure 28 (left) shows a graph in which the vertices are the centres of the visible marbles in a complete square packing, and the edges correspond to pairs of touching marbles. The dual of this graph (right) is trivalent, which is the necessary condition for deadlock-free connection;¹⁷ a complete packing on this grid is guaranteed to produce a connection between opposite sides.",
      },
      fig(28, 330, "图 28. 有保证的三价连接。", "Figure 28. Guaranteed trivalent connection."),
      {
        type: "p",
        zh: "这一几何上的幸运特性使方格基础适用于诸如 Akron 这样的弹珠堆积连接游戏，而不需要额外的避免僵局的规则。此外，Akron 还有一个下落机制，在某些情况下可以移除弹珠，让更高处被支撑的弹珠落下来。这是利用可用的几何（在这个例子中还有重力）来隐式地强制执行不需要向玩家陈述的物理规则的另一个例子。著名的 Connect Four [6] 是另一个利用重力来强制执行一条规则的游戏例子，即让棋子落下，停在所选那一列的最高空槽上。",
        en: "This fortuitous quirk of geometry makes the square basis suitable for marble packing connection games, such as Akron, without the need for additional deadlock avoidance rules. Further, Akron also has a drop mechanism, in which marbles can be removed under some circumstances to let higher supported marbles drop down. This is another case of exploiting the available geometry (and in this case gravity) to implicitly enforce physical rules that do not need to be stated to the player. The well known Connect Four [6] is another example of a game that exploits gravity to enforce a rule, namely dropping pieces to land on the highest empty slot of a chosen stack.",
      },

      { type: "h2", zh: "6 结论", en: "6 Conclusion" },
      {
        type: "p",
        zh: "上面的例子展示了将规则嵌入游戏器材的好处。这些好处的范围从防止玩家错误（poka-yoke），到更微妙的考虑，例如设计的优雅、提高清晰度，以及为玩家提供教学帮助。这当然是我在自己的设计中所追求的：将尽可能多的游戏移入器材之中。",
        en: "The examples above demonstrate the benefits of embedding the rules in the equipment of a game. Such benefits range from proofing against player mistakes (poka-yoke), to more subtle considerations such as design elegance, improving clarity, and tutorial assistance for players. This is certainly what I aim for in my own designs: to move as much of the game into the equipment as possible.",
      },
      {
        type: "p",
        zh: "假定将规则嵌入器材总体上是好的，那么问题仍然在于将它们移入器材的哪一（些）部分。例如，游戏 For the Crown [6] 是国际象棋和 Dominion 的结合，带有标记的棋子和显示相关指示及合法走法的卡牌（与之相对的是 The Duke，其中移动规则刻在棋子本身上）。这种将棋子与其相关信息分离的做法，使得替换信息卡牌变得容易且便宜，从而允许为游戏推出新的选项和扩展包。¹⁸",
        en: "Assuming that it is generally good to embed the rules in the equipment, the question remains which part(s) of the equipment to move them into. For example, the game For the Crown [6] is a marriage of Chess and Dominion, with labelled pieces and cards that show relevant instructions and legal moves (as opposed to The Duke, in which the movement rules are inscribed on the pieces themselves). This separation of pieces from their relevant information makes it easy and cheap to replace the information cards, to allow new options and expansion packs for the game.¹⁸",
      },
      {
        type: "p",
        zh: "本文的讨论集中在抽象棋盘游戏，特别是连接游戏上，因为在这些领域中嵌入规则有明显的好处。虽然我将此作为良好游戏设计的一个一般模式提出，但当然会有例外：在战争游戏中，研读 100 页的规则书是进入详细模拟体验的必要入场代价；在基于叙事的游戏中，增加的复杂性丰富了游戏的氛围，带来更强的玩家沉浸感；等等。",
        en: "This discussion has focused on abstract board games, and connection games in particular, as these are domains in which embedding the rules has obvious benefits. While I propose this as a general pattern for good game design, there will of course be exceptions: war games in which studying 100-page rule books is a necessary price of admission to the detailed simulation experience; narrative-based games in which added complexity enriches the atmosphere of the game for greater player immersion; and so on.",
      },

      { type: "h3", zh: "致谢", en: "Acknowledgements" },
      {
        type: "p",
        zh: "感谢：Richard Reilly、Russ Williams、Mike Fogus、Néstor Romeral Andrés 和 Stephen Tavener 参与讨论；Christian Freeling、Mike Fogus、Geni Palladin、Michael Kandrac 和 Jay Tummelson 提供图片许可；以及审稿人提出的建议。这项工作得到了 QUT 校长研究奖学金的支持。",
        en: "Thanks to: Richard Reilly, Russ Williams, Mike Fogus, Néstor Romeral Andrés and Stephen Tavener for discussions; Christian Freeling, Mike Fogus, Geni Palladin, Michael Kandrac and Jay Tummelson for image permissions; and the reviewers for their suggestions. This work was supported by a QUT Vice-Chancellor’s Research Fellowship.",
      },

      { type: "h3", zh: "参考文献", en: "References" },
      ref("[1] Nystrom, R., Game Programming Patterns, New York, Geneva Benning, 2014."),
      ref("[2] Browne, C., ‘Elegance in Game Design’, IEEE Transactions of Computational Intelligence and AI in Games, vol. 4, no. 3, 2012, pp. 229–240."),
      ref("[3] Romeral Andrés, N., ‘Heptalion’, Game & Puzzle Design, vol. 1, no. 1, 2015, pp. 11–17."),
      ref("[4] Nikkan Kogyo Shimbun Ltd., Poka-Yoke: Improving Product Quality by Preventing Defects, New York, Productivity Press, 1988."),
      ref("[5] Freeman, J., The Playboy Winner’s Guide to Board Games, New York, Playboy Press, 1979."),
      ref("[6] Alden, S., BoardGameGeek: Gaming Unplugged, online database, 2000. https://www.boardgamegeek.com"),
      ref("[7] Bodlaender, H., The Chess Variant Pages, 1995. http://www.chessvariants.org"),
      ref("[8] Mott, P., ‘Terrace: The Next Generation’, Los Angeles Times, 16 September 1993."),
      ref("[9] Hinch, D., The Scrabble Book, London, Pan, 1976."),
      ref("[10] Leggett, T., Shogi: Japan’s Game of Strategy, North Clarendon, Tuttle Publishing, 1993."),
      ref("[11] Fresh Slitherlink 3, Tokyo, Nikoli, 2012."),
      ref("[12] Spanier, E., Algebraic Topology, New York, McGraw-Hill, 1966."),
      ref("[13] Browne, C., Connection Games: Variations on a Theme, Wellesley, AK Peters, 2005."),
      ref("[14] Browne, C., ‘Gonnect: The Best of Go and Hex’, Abstract Games Magazine, vol. 1, no. 6, 2001, pp. 12–21."),
      ref("[15] Browne, C., Evolutionary Game Design, Berlin, Springer, 2011."),
      ref("[16] Browne, C., ‘Go Without Ko on Hexagonal Grids’, ICGA Journal, vol. 35, no. 1, 2012, pp. 37–40."),
      ref("[17] Browne, C., Margo Basics, Raleigh, Lulu Press Inc., 2013."),
      ref("[18] Browne, C. and Romeral Andrés, N., Shibumi Rule Book, Raleigh, Lulu Press Inc., 2012."),

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

      { type: "note", zh: "¹ 「设计模式」的概念由 Christopher Alexander 于 1977 年在建筑学的语境中提出。", en: "¹ The concept of ‘design patterns’ was introduced in 1977 by Christopher Alexander in the context of architecture." },
      { type: "note", zh: "² 由 Richard Reilly 提出，私人通信，2015 年 6 月 12 日。", en: "² Proposed by Richard Reilly, personal correspondence, 12 June 2015." },
      { type: "note", zh: "³ Romeral Andrés 第一次接触 poka-yoke，是在研究 VGA 插头的不对称设计时，这一设计几乎消除了用户的错误插接。要是 USB 设计委员会从这个教训中学到了东西就好了！", en: "³ Romeral Andrés first encountered poka-yoke when researching the asymmetric design of the VGA plug that virtually eliminated incorrect dockings by users. If only the USB design committee had learnt from this lesson!" },
      { type: "note", zh: "⁴ http://www.mijnlieffgame.com/welcome", en: "⁴ http://www.mijnlieffgame.com/welcome" },
      { type: "note", zh: "⁵ http://www.catalystgamelabs.com/casual-games/the-duke", en: "⁵ http://www.catalystgamelabs.com/casual-games/the-duke" },
      { type: "note", zh: "⁶ 我将使用 BoardGameGeek 在线数据库作为顺带提及的游戏的统一参考来源。", en: "⁶ I will use the BoardGameGeek online database as a catch-all reference for games mentioned in passing." },
      { type: "note", zh: "⁷ http://www.tantrix.com", en: "⁷ http://www.tantrix.com" },
      { type: "note", zh: "⁸ http://www.nestorgames.com/#tixel_detail", en: "⁸ http://www.nestorgames.com/#tixel_detail" },
      { type: "note", zh: "⁹ http://www.looneylabs.com/looney-pyramids", en: "⁹ http://www.looneylabs.com/looney-pyramids" },
      { type: "note", zh: "¹⁰ 基于 Richard Reilly 的一个观察，私人通信，2015/6/19。", en: "¹⁰ Based on an observation by Richard Reilly, personal correspondence, 19/6/2015." },
      { type: "note", zh: "¹¹ http://play.chessvariants.org/pbm/play.php", en: "¹¹ http://play.chessvariants.org/pbm/play.php" },
      { type: "note", zh: "¹² http://www.traxgame.com", en: "¹² http://www.traxgame.com" },
      { type: "note", zh: "¹³ 私人通信，2015 年 3 月 9 日。", en: "¹³ Personal correspondence, 9 March 2015." },
      { type: "note", zh: "¹⁴ http://www.di.fc.ul.pt/~jpn/gv/quax.htm", en: "¹⁴ http://www.di.fc.ul.pt/~jpn/gv/quax.htm" },
      { type: "note", zh: "¹⁵ 常被称为「Gandalf 规则」，源自 Tolkien 的 Fellowship of the Ring 中他那句「你不能通过！」的台词。", en: "¹⁵ Often called the ‘Gandalf rule’ after his ‘you cannot pass!’ line in Tolkien’s Fellowship of the Ring." },
      { type: "note", zh: "¹⁶ 后来以 Pentalath 之名上市：http://www.nestorgames.com/#pentalath_detail", en: "¹⁶ Later marketed as Pentalath: http://www.nestorgames.com/#pentalath_detail" },
      { type: "note", zh: "¹⁷ 德国设计师 Michail Antonow 在他出色的连接游戏 Conhex [3] 的棋盘上使用了与图 28（右）所示对偶图等价的铺砌，尽管他是从一个完全不同的途径得出他的设计的。", en: "¹⁷ German designer Michail Antonow used an equivalent tiling to the dual shown in Figure 28 (right) for the board of his excellent connection game Conhex [3], although arrived at his design from a totally different approach." },
      { type: "note", zh: "¹⁸ Nathan Morse 的观察，私人通信，2015 年 6 月 18 日。", en: "¹⁸ Observation by Nathan Morse, personal correspondence, 18 June 2015." },
    ],
  };
})();
