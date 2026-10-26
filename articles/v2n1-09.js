// 《游戏与谜题设计中的图论》(Graph Theory in Game and Puzzle Design) D. Ashlock · 第2卷第1期 pp. 248–256(PDF 第 250–258 页)
(function () {
  const fig = (n, width, zh, en) => ({
    type: "figure", src: `articles/img/v2n1-09-fig${n}.png`, width, zh, en,
  });
  const ref = (t) => ({ type: "ref", zh: t, en: t });
  const note = (zh, en) => ({ type: "note", zh, en: en ?? zh });
  const li = (zh, en) => ({ type: "li", zh, en });
  const box = (zh, en) => ({ type: "box", zh, en });

  window.GAPD_ARTICLE = {
    blocks: [
      {
        type: "lead",
        zh: "几乎任何在棋盘上进行的游戏或谜题都涉及一个或多个抽象的组合图。本专栏介绍了图论中的一些基本术语和直觉，并描述了一些基于图的谜题和游戏。文章通过若干例子概述了游戏与图之间的关系，并讨论了使用图算法来辅助游戏设计。",
        en: "Almost any game or puzzle played on a board involves one or more abstract combinatorial graphs. This column introduces some basic terminology and intuition from graph theory, and describes some graph-based puzzles and games. The relationship between games and graphs is outlined with several examples, and the use of graph algorithms to aid in game design is discussed.",
      },

      { type: "h2", zh: "1 引言", en: "1 Introduction" },
      {
        type: "p",
        zh: "图论在历史上一直是数学中一个孤儿般的继子，一个几乎没有受到尊重的领域。图论的大量进展是由业余的、而非职业的数学家做出的，这更加深了人们认为它不严肃的感觉。",
        en: "Graph theory has historically been an orphan step-child of mathematics, a field that has received very little respect. A good deal of the progress in graph theory has been made by recreational, as opposed to professional, mathematicians, adding to the feeling it was not serious.",
      },
      {
        type: "p",
        zh: "然而，随着计算机时代的到来，图论已被证明非常有用，图充当了设计和讨论计算机网络、交通网络，甚至诸如食物网和生物分子相互作用模式等生物网络的语言。图论如今已成为数学中一个受人尊敬且实用的分支。",
        en: "However, with the advent of the computer age, graph theory has proven most useful, with graphs serving as a language for designing and discussing computer networks, transportation networks, and even biological networks such as food webs and interaction patterns of biomolecules. Graph theory has now become a respected and practical branch of mathematics.",
      },
      {
        type: "p",
        zh: "图论与游戏和谜题有什么关系？几乎任何在棋盘上进行的游戏或谜题都隐含地涉及至少一个抽象的组合图，这个术语指的是游戏中位置、物体、概念和行动之间的关系。本文旨在作为对这类图的介绍，它们常常被编织进游戏的结构之中。¹ 我们将通过仔细审视从 1736 年至今的谜题和游戏来探索图论，并且我们将看到，认识并使用这一理论作为工具，可以如何有助于一个更彻底、更仔细的设计过程，以及更平衡、更有意图的设计。",
        en: "What is the relevance of graph theory to games and puzzles? Almost any game or puzzle played on a board implicitly involves at least one abstract combinatorial graph, which is a term that refers to the relationships between locations, objects, concepts and actions in the game. This article is intended to serve as an introduction to such graphs, which are often woven into the fabric of the game.¹ We will explore graph theory by scrutinising puzzles and games from 1736 to the present, and we will see how recognising and using this theory as a tool can aid in a more thorough and careful design process, as well as more balanced and intentional designs.",
      },

      { type: "h2", zh: "2 参考游戏", en: "2 Reference Games" },
      {
        type: "p",
        zh: "在本节中，我们介绍图论在一个谜题和一个游戏中的两个历史例子。",
        en: "In this section, we introduce two historical examples of graph theory in a puzzle and in a game.",
      },
      { type: "h3", zh: "2.1 哥尼斯堡的桥", en: "2.1 The Bridges of Königsberg" },
      {
        type: "p",
        zh: "在哥尼斯堡城（对应于今天的加里宁格勒），市民们有一项晚饭后的活动。一条带有一个大岛的河流穿城而过，七座桥连接着北岸、岛屿、南岸，以及河流两条支流之间的上游夹角地带。这项活动的目标是每座桥恰好走过一次并回到起点。这个问题在图 1 中以图形方式展示。",
        en: "In the city of Königsberg, corresponding to modern day Kaliningrad, the citizens had an after-dinner activity. A river with a substantial island runs through the city and seven bridges joined the north shore, the island, the south shore, and the upstream angle between two branches of the river. The goal of the activity was to cross each bridge exactly once and return to start. This problem is shown graphically in Figure 1.",
      },
      fig(1, 360, "图 1. 哥尼斯堡七桥。", "Figure 1. The Seven Bridges of Königsberg."),
      {
        type: "p",
        zh: "伟大的数学家欧拉证明了这个问题没有解 [3]。他的解法包含了一种快速判定一整类谜题是否可解的技术，以及一种构造解的有效技术的种子。这一技术和这类问题将在第 4 节中进一步描述。",
        en: "The great mathematician Euler proved that this problem has no solution [3]. His solution contained the seeds to a rapid technique for establishing the solvability of a whole class of puzzles and an effective technique for constructing solutions. This technique and the class of problems are described further in Section 4.",
      },
      { type: "h3", zh: "2.2 Icosian", en: "2.2 Icosian" },
      {
        type: "p",
        zh: "数学家 William Rowan Hamilton 设计了游戏 Icosian，² 如图 2 所示。",
        en: "Mathematician William Rowan Hamilton devised the game Icosian,² shown in Figure 2.",
      },
      fig(2, 360, "图 2. 原版的 Icosian 棋盘（图片来自爱尔兰皇家学院图书馆）。", "Figure 2. The original Icosian board (picture from the Library of the Royal Irish Academy)."),
      {
        type: "p",
        zh: "Icosian 棋盘是一个正十二面体的展平表示，³ 目标是将编号的木钉放进棋盘孔中，沿着线条按数字顺序形成一条闭合路径。Icosian 在商业上并不成功；它既有些令人生畏，而一旦学会之后又太容易。在介绍了一些来自 [4] 的基本图论术语之后，我们很快会回到 Icosian。",
        en: "The Icosian board is a flattened representation of a dodecahedron,³ and the aim is to place numbered pegs in the board holes to form a closed path in numerical order, along the lines. Icosian was not a commercial success; it was both somewhat intimidating and also, once learnt, too easy. We will get back to Icosian shortly, after introducing some basic graph theory terminology, from [4].",
      },

      { type: "h2", zh: "3 一些图论术语", en: "3 Some Graph Theory Terms" },
      li("一个组合图，或简称图，由一个顶点集和一个边集定义。", "A combinatorial graph, or simply graph, is defined by a set of vertices and a set of edges."),
      li("一条边两头的两个顶点被称为它的端点。", "The two vertices at either end of an edge are called its ends."),
      li("一条边的两个端点被称为相邻的或互为邻居。", "The ends of an edge are said to be adjacent or neighbours."),
      li("一个顶点的度是以该顶点为端点的边的数量。", "The degree of a vertex is the number of edges that end at that vertex."),
      li("如果 v 是一个顶点，那么它的所有邻居的集合记作 Γ(v)，并被称为 v 的邻域。", "If v is a vertex then the set of all its neighbours is written Γ(v) and called the neighbourhood of v."),
      li("一条途径是一个顶点列表，其中列表中相邻的元素互为邻居。", "A walk is a list of vertices in which adjacent elements of the list are neighbours."),
      li("一条路径是不重复任何顶点的途径。", "A path is a walk that does not repeat any vertex."),
      li("如果任意两个顶点之间都有一条路径，那么这个图是连通的。", "A graph is connected if there is a path between any two vertices."),
      li("回路类似于途径，但重复一个顶点；第一个和最后一个顶点必须相同。", "A circuit is like a walk but repeats one vertex; the first and last vertices must be the same."),
      li("圈是重复一个顶点的路径；即第一个和最后一个。图 4 中图外围的五边形是一个长度为 5 的圈。", "A cycle is a path that repeats one vertex; the first and last. The pentagon around the outside of the graph in Figure 4 is a cycle of length 5."),
      li("一个可以在平面上画出且没有任何边彼此交叉的图被称为平面图。当然，边允许在顶点处相交。", "A graph that can be drawn in the plane without any of its edges crossing one another is called a planar graph. Edges are permitted to meet at vertices, of course."),
      li("欧拉圈或欧拉回路是一条恰好包含每条边一次、并在同一个顶点开始和结束的途径。注意，尽管名称如此，这实际上并不是一个圈。", "An Euler cycle or Eulerian circuit is a walk that includes every edge exactly once, and begins and ends at the same vertex. Note that this is not actually a cycle, despite the name."),
      li("哈密顿圈是包含图中每个顶点的圈。", "A Hamilton cycle is a cycle that includes every vertex in the graph."),
      {
        type: "p",
        zh: "将这些概念映射到我们的参考游戏上，七桥问题中的顶点是代表四块陆地的 {A, B, C, D}，边是连接它们的桥。Icosian 中的顶点是可以放置木钉的 20 个位置，边是显示钉孔相邻关系的棋盘凹槽。",
        en: "Mapping these concepts to our reference games, the vertices in the seven bridges problem are {A, B, C, D} representing the four land masses, and the edges are the bridges connecting them. The vertices in Icosian are the 20 places where pegs may be placed, and the edges are the board grooves showing peg hole adjacency.",
      },
      {
        type: "p",
        zh: "图可以经济地描绘出来，把顶点显示为点，把边显示为连接它们的线或弧。例如，图 3 展示了表示为一个抽象图的哥尼斯堡七桥问题，其中顶点对应于四块陆地，边对应于桥，而 4 展示了 Icosian 棋盘的抽象图。",
        en: "Graphs can be depicted economically by showing vertices as dots and edges as lines or arcs connecting them. For example, Figure 3 shows the Bridges of Königsberg problem represented as an abstract graph, in which the vertices correspond to the four land masses and the edges correspond to the bridges, and 4 shows the abstract graph of the Icosian board.",
      },
      fig(3, 240, "图 3. 哥尼斯堡七桥的图。", "Figure 3. Graph for the Bridges of Königsberg."),
      {
        type: "p",
        zh: "一个具有顶点集 V 和边集 E 的图 G 通常写作 G(V, E)，从而给了我们一种将全部三种对象（图、它的顶点和边）一起定义的紧凑方式。形式上，一条边被记作它被认为连接的两个顶点所组成的集合，并且在画图时，每条边通常被描绘为它的端点之间的一段弧或一条线。",
        en: "A graph G with a set of vertices V and a set of edges E is often written G(V, E) to give us a compact way of defining all three types of objects (the graph, its vertices and edges) together. Formally, an edge is denoted as the set of the two vertices it is thought of as joining, and each edge is usually depicted as an arc or line between its ends when drawing the graph.",
      },
      fig(4, 330, "图 4. Icosian 棋盘的抽象图。", "Figure 4. Abstract graph of the Icosian board."),
      {
        type: "p",
        zh: "有了这些术语，我们可以重新表述七桥问题和 Icosian 游戏。七桥问题涉及在图 3 所示的图中找到一条欧拉回路，而 Icosian 的目标是在图 4 所示的图中找到一个哈密顿圈。",
        en: "With this terminology, we can rephrase the seven bridges problem and the Icosian game. The seven bridges problem involves finding an Eulerian circuit in the graph shown in Figure 3, and the goal of Icosian is to find a Hamilton cycle in the graph shown in Figure 4.",
      },
      { type: "h3", zh: "3.1 画图", en: "3.1 Drawing Graphs" },
      {
        type: "p",
        zh: "从抽象的数学观点来看，一个图如何被画出来是无关紧要的。但从人体工学和美学的观点来看，图的物理布局非常重要。因此，下面这个由 Tutte [5] 提出的、被用来生成图 4 中 Icosian 棋盘画法的算法，对于直观地呈现图是有用的。",
        en: "From an abstract mathematical point of view, it is irrelevant how a graph is drawn. But from ergonomic and aesthetic viewpoints, the physical layout of graphs matter a great deal. The following algorithm by Tutte [5], used to produce the drawing of the Icosian board given in Figure 4, is therefore useful for visually presenting graphs.",
      },
      {
        type: "p",
        zh: "给定一个连通的平面图 G(V, E)，找到并以正多边形显示图中的一个圈，这个圈的顶点被移除后不会使图断开。冻结这个圈的顶点，对于所有其他顶点，求解由「我的位置是我的邻居位置的平均值」这一原则给出的线性方程组。这将产生允许所有边被画成线段而没有任何交叉的顶点位置。",
        en: "Given a connected planar graph G(V, E), find and display, as a regular polygon, a cycle of the graph that will not disconnect the graph if its vertices are removed. Freeze the vertices of this cycle, and for all other vertices, solve the system of linear equations given by the principle ‘my position is the average of my neighbour’s positions’. This will produce vertex positions permitting all edges to be drawn as line segments without any crossings.",
      },
      {
        type: "p",
        zh: "对于不想求解大型方程组的设计者，有一种更慢但更容易的近似方法：反复选择一个不在冻结圈中的顶点，并将它移动到其邻居当前位置的平均值处。这个迭代过程会收敛到 Tutte 算法的结果。",
        en: "For designers who do not want to solve large systems of equations, there is a slower but easier approximation: repeatedly select a vertex not in the frozen cycle and move it to the average of its neighbour’s current positions. This iterative process converges to the result of Tutte’s algorithm.",
      },
      { type: "h3", zh: "3.2 Icosian 还是 Dodecian？", en: "3.2 Icosian or Dodecian?" },
      {
        type: "p",
        zh: "Icosian 棋盘可以被看作十二个五边形，表示一个展平的正十二面体，所以人们可能会想知道「Icosian」这个名字——它暗示着正二十面体⁴——是怎么来的。这很可能源于关于柏拉图立体的一个有趣事实，⁵ 柏拉图立体即所有面都是同一正多边形实例的立体，这个事实就是正十二面体是正二十面体的对偶。",
        en: "The Icosian board can be viewed as twelve pentagons, representing a flattened dodecahedron, so one may wonder how the name ‘Icosian’ – which suggests an icosahedron⁴ – came about. This probably arose from an interesting fact about Platonic solids,⁵ i.e. solids in which all faces are instances of the same regular polygon, in that a dodecahedron is the dual of an icosahedron.",
      },
      {
        type: "p",
        zh: "正十二面体有十二个五边形面和二十个顶点，每个顶点处有三个面相交。正二十面体有二十个三角形面和十二个顶点，每个顶点处有五个面相交。利用平面对偶 [4]，我们可以交换面和顶点的角色，将正十二面体和正二十面体相互转换。",
        en: "A dodecahedron has twelve pentagonal faces and twenty vertices, with three faces meeting at each vertex. An icosahedron has twenty triangular faces and twelve vertices, with five faces meeting at each vertex. Using planar duality [4], we may exchange the role of faces and vertices to transform a dodecahedron and icosahedron into one another.",
      },
      {
        type: "p",
        zh: "原形状中的两个顶点位于一条边的两端，而对偶立体中的两个面如果共享一条边、各自以那条边作为它们的一条边，它们就是相邻的。共享的边构成了面之间相邻关系的基础。立方体和正八面体有类似的关系，而正四面体与其自身对偶。在平面形式中也可以看到类似的对偶性，因为平面的正三角形铺砌和正六边形铺砌是彼此的变换，而正方形铺砌变换为其自身。",
        en: "Two vertices in the original shape are at the ends of an edge, while two faces in the dual solid are adjacent if the share an edge, each having that edge as one of their sides. Shared edges form the basis of the adjacency relationship between faces. A cube and octahedron have a similar relationship, and a tetrahedron is dual with itself. Similar dualities can be seen in planar forms, as the regular triangular and hexagonal tilings of the plane are transformations of each other, and the regular square tiling transforms into itself.",
      },
      {
        type: "p",
        zh: "我们可以推测，由于它们的对偶性，Rowan Hamilton 认为他游戏中的图无论被看作正十二面体还是正二十面体都同样有效，并且他选择了更优雅的名字「Icosian」，而不是「Dodecian」或相当笨拙的「Dodecahedrian」。",
        en: "We can speculate that Rowan Hamilton considered the graph in his game to be equally valid when viewed as a dodecahedron or icosahedron, thanks to their duality, and that he chose the more elegant name ‘Icosian’ over ‘Dodecian’ or the rather awkward ‘Dodecahedrian’.",
      },

      { type: "h2", zh: "4 哥尼斯堡的无解", en: "4 Non-Solution of Königsberg" },
      {
        type: "p",
        zh: "七桥问题是不可解的。当一位市民进入一块陆地时，他们会过一座桥。当他们离开它时，也会过一座桥。这意味着每次穿越一块陆地都会用掉两座桥。为了回到起点，一位市民必须通过一座桥离开它，并通过另一座桥返回。这意味着每块陆地上的桥的数量必须是偶数，因为它们是成对被用掉的。北岸、南岸和上游夹角各有三座桥以其为终点；岛屿有五座。这种情况——所有陆地都有奇数座桥以其为终点——真是糟得不能再糟了。这一结果可以形式化地表述如下：",
        en: "The seven bridges problem is unsolvable. When a citizen enters a land mass, they cross a bridge. When they leave it, they also cross a bridge. This means each traversal of a land mass uses up two bridges. In order to return to the starting point, a citizen must leave it by one bridge and return by another. This means that the number of bridges at each land mass must be even, because they are used up in pairs. The north shore, south shore, and upstream angle each have three bridges ending at them; the island has five. The situation – all land masses having an odd number of bridges ending there – could really not be worse. This result can be stated formally as follows:",
      },
      box("定理：一个连通图有欧拉回路，当且仅当它的所有顶点都是偶数度。", "Theorem: A connected graph has an Eulerian circuit if and only if all of its vertices are of even degree."),
      {
        type: "p",
        zh: "本节第一段中的论证表明了偶数度是必需的，但我们仍然需要证明如果度数都是偶数，那么欧拉回路就存在。为了证明这一点，让我们将七桥问题推广到一个著名的画图问题。",
        en: "The argument in the first paragraph of this section shows that even degrees are needed, but we still need to show that if there are even degrees then an Eulerian circuit exists. To demonstrate this, let us generalise the seven bridges problem to a well-known drawing problem.",
      },
      fig(5, 300, "图 5. 这个图可以不抬笔画出，例如 ABCDGCFBEHGFEAHDA。", "Figure 5. This graph can be drawn without lifting the pencil, e.g. ABCDGCFBEHGFEAHDA."),
      {
        type: "p",
        zh: "一类著名的谜题是判断一个形状，例如图 5 所示的那个，是否可以不抬笔画出来。如果我们把三条或更多条线相交的地方看作顶点，把这些交汇处之间的线看作边，那么我们就会看到这个谜题就是找到一条欧拉回路。",
        en: "A well-known type of puzzle is to determine whether a shape, such as the one shown in Figure 5, can be drawn without lifting the pencil. If we consider the places where three or more lines meet as vertices, and the lines between these meeting places as edges, then we see that this puzzle consists of finding an Eulerian circuit.",
      },
      { type: "h3", zh: "4.1 欧拉的构造", en: "4.1 Euler’s Construction" },
      {
        type: "p",
        zh: "考虑一个所有顶点都是偶数度的连通图。思路是反复识别回路并将它们拼接在一起，直到所有的边都被用过。",
        en: "Consider a connected graph in which all vertices have even degree. The idea is to repeatedly identify circuits and splice them together until all edges have been used.",
      },
      {
        type: "p",
        zh: "从任意一个顶点出发，沿着一条回路走，不使用任何一条边两次，直到无法再走任何一步。由于所有顶点都是偶数度，能够到达某个给定的顶点就意味着还有另一条边可用于离开，直到回到起始顶点。如果我们回到起始顶点并且得到了一条欧拉回路，那么我们就完成了，否则我们把用过的边从考虑中移除；由于移除的是一条回路，所有剩余的边都将是偶数度。重复这个发现回路的过程，并在新的起点处将新回路拼接进旧回路。每次迭代之后都有一条回路，所以最终所有的边都会被用上。",
        en: "Starting at any vertex, follow a circuit without using any edge twice, until no more steps are possible. Since all vertices have even degree, the ability to reach a given vertex means there is another edge available for escape until returning to the starting vertex. If we return to the start vertex and have an Eulerian circuit, then we are done, otherwise we remove the used edges from consideration; since a circuit was removed, all remaining edges will have even degree. Repeat the circuit-discovery procedure and splice in the new circuit to the old one at the new starting point. After every iteration there is a circuit, so eventually all edges will be used.",
      },
      { type: "h4", zh: "4.1.1 应用示例", en: "4.1.1 Example Application" },
      {
        type: "p",
        zh: "为了解决图 5 中的谜题，从正方形 ABCDA 开始。现在，再次从 A 出发，描出回路 AHDGCFBEA，并将它拼接进现有的正方形中，得到：",
        en: "To solve the puzzle in Figure 5, start with the square ABCDA. Now, starting again at A, trace out the circuit AHDGCFBEA and splice this into the existing square as:",
      },
      box("ABCD-AHDGCFBEA。", "ABCD-AHDGCFBEA."),
      {
        type: "p",
        zh: "拼接将末尾的 A 替换为 AHDGCFBEA。还剩下什么？",
        en: "Splicing replaces the terminal A with AHDGCFBEA. What is left?",
      },
      { type: "p", zh: "内部的正方形 EFGHE。", en: "The inner square EFGHE." },
      {
        type: "p",
        zh: "在 E 处将它拼接进不断增长的回路中：ABCD-AHDGCFB-EFGHE-A，去掉拼接用的连接符，我们现在就得到了一条顶点列表为 ABCDAHDGCFBEFGHEA 的欧拉回路。注意，这个解与图 5 图注中给出的解不同；可以生成许多不同的构造。",
        en: "Splice this into the growing circuit at E: ABCD-AHDGCFB-EFGHE-A, remove the splicing connectors, and we now have an Eulerian circuit with vertex list ABCDAHDGCFBEFGHEA. Note that this solution is different to the one given in the caption of Figure 5; many different constructions can be generated.",
      },
      {
        type: "p",
        zh: "如果不要求在同一个顶点开始和结束，那么就有更多的形状可以不抬笔画出来，这些将是只有两个奇数度顶点的形状。考虑图 6 所示的形状；左边的图有两个奇数度的顶点（高亮显示）。如果我们离开这样一个顶点并且再也不回来，那么它可以有奇数度。类似地，如果最后一个顶点有奇数度，并且不是起始顶点，那么它也可以是奇数度的。左边的图可以不抬笔画出来，但右边的图不行。",
        en: "If it is not required to start and end at the same vertex, then more shapes can be drawn without lifting the pencil, and these will be shapes with only two vertices of odd degree. Consider the shapes shown in Figure 6; the graph on the left has two vertices of odd degree (highlighted). If we leave such a vertex and never return, then it can have an odd degree. Similarly, if the final vertex has odd degree, and is not the starting vertex, then it can be of odd degree as well. The graph on the left can be drawn without lifting the pencil, but the graph on the right cannot.",
      },
      {
        type: "p",
        zh: "这种用完所有边的方式被称为欧拉途径。因此，我们在欧拉回路定理之外加上下面的欧拉途径定理：",
        en: "This way of using up all the edges is called an Euler walk. We thus add to the Eulerian circuit theorem the following Euler walk theorem:",
      },
      box("定理：一个恰好有两个奇数度顶点的连通图有一条在这两个奇数度顶点处开始和结束的欧拉途径。", "Theorem: A connected graph with exactly two vertices of odd degree has an Euler walk beginning and ending at the vertices of odd degree."),
      fig(6, 360, "图 6. 这些可以一次画完吗？", "Figure 6. Can these be drawn in one pass?"),
      {
        type: "p",
        zh: "这就完成了对可以不抬笔画出的形状的描述。欧拉回路和欧拉途径都覆盖了一个形状中的所有线条。注意，两个定理中的约束——图是连通的——是避免抬笔所必需的。",
        en: "This completes the description of shapes that can be drawn without lifting the pencil. Both an Eulerian circuit and an Euler walk cover all lines in a shape. Note that the constraint in both theorems – that the graph is connected – is needed to avoid lifting the pencil.",
      },

      { type: "h2", zh: "5 Icosian 及其推广", en: "5 Icosian and its Generalisation" },
      {
        type: "p",
        zh: "找到一条欧拉途径或回路——或者证明它不存在——的问题已被完全解决，并且在实践中很快。哈密顿圈则是另一回事。",
        en: "The problem of finding an Euler walk or circuit – or proving that one does not exist – is completely solved and fast in practice. Hamilton cycles are another kettle of fish.",
      },
      {
        type: "p",
        zh: "判定一个图是否有哈密顿圈被证明是 NP 完全的。⁶ 然而，在实践中，大多数图都有哈密顿圈，有时它们很容易找到。图论学者之间有一个笑话，说这个算法的一个简单近似就是连看都不看，直接说「是的，这个图有一个哈密顿圈」，这在大多数时候都会奏效。就 Icosian 而言，一位有经验的解谜者应该能够在几秒钟内找出一个哈密顿圈，例如图 7 所示的解。",
        en: "Determining whether a graph has a Hamilton cycle turns out to be NP-complete.⁶ In practice, however, most graphs have a Hamilton cycle, and sometimes they are easy to find. There is a joke among graph theorists that a simple approximation of this algorithm is to simply say ‘yes, this graph has a Hamilton cycle’ without even looking at it, which will work most of the time. In the case of Icosian, an experienced puzzle solver should be able to spot a Hamilton cycle in seconds, such as the solution shown in Figure 7.",
      },
      fig(7, 330, "图 7. 棋盘图中的一个哈密顿圈（阴影部分）提供了 Icosian 的一个解。", "Figure 7. A Hamilton cycle in the board graph (shaded) provides a solution to Icosian."),
      {
        type: "p",
        zh: "然而，Icosian 棋盘是一个绝妙的设计，可以用于其他更有趣的与图相关的游戏和谜题。一个例子是接下来描述的游戏 Graph Domination，它是在 Icosian 棋盘上开发的，但可以在各种棋盘上进行。",
        en: "However, the Icosian board is a wonderful design and can be used for other more interesting graph-related games and puzzles. One example is the game Graph Domination, described next, which was developed on the Icosian board but can be played on a variety of boards.",
      },

      { type: "h2", zh: "6 Graph Domination 游戏", en: "6 The Game of Graph Domination" },
      {
        type: "p",
        zh: "Graph Domination 是作者发明的一组游戏，它展示了基于一个图的游戏设计。",
        en: "Graph Domination is a collection of games, invented by the author, which demonstrates the design of a game based on a graph.",
      },
      { type: "h4", zh: "Graph Domination 的规则", en: "Rules for Graph Domination" },
      box("1. 双方协商指定一位玩家为红方，另一位为蓝方。蓝方先走，然后玩家轮流行动。", "1. One player is designated Red and the other is designated Blue by mutual agreement. Blue moves first, then players take turns moving."),
      box("2. 每位玩家都有一个自己颜色的入口点，如图 8 所示。", "2. Each player has an entry point for their colour, as shown Figure 8."),
      box("3. 棋盘由通过边连接起来的顶点（圆圈）组成。两个之间有一条边的顶点是相邻的。", "3. The board consists of vertices (circles) connected by edges. Two vertices with an edge between them are adjacent."),
      box("4. 在自己的回合中，玩家可以在自己的入口点为空时将自己的一枚棋子放到入口点上，或者将自己的一枚棋子从一个顶点移动到一个相邻的空顶点上，第 5 条规则规定的情况除外。", "4. On their turn, a player may either place one of their tokens onto their entry point, if it is empty, or move one of their tokens from a vertex to an empty adjacent vertex, except as specified in rule 5."),
      box("5. 任何玩家都不可以将棋子放置或移动到与对手棋子占据的顶点相邻的顶点上。", "5. No player may place or move a token on a vertex that is adjacent to a vertex occupied by an opponent’s tokens."),
      box("6. 如果可能，玩家必须放置或移动一枚棋子，否则他们必须跳过该回合。", "6. A player must place or move a token if possible, otherwise they must pass that turn."),
      box("7. 游戏持续进行，直到双方都无法行动。", "7. Play continues until neither player can move."),
      box("8. 一位玩家的得分是：自己棋子占据的每个顶点得 3 分，加上对于每个空顶点，与该顶点相邻的自己的每枚棋子得 1 分。", "8. A player’s score is 3 points for each vertex occupied by one of their tokens, plus, for each empty vertex, 1 point for each of their tokens adjacent to that vertex."),
      box("9. 得分最高的玩家获胜。如果得分相等，则游戏为平局。", "9. The player with the highest score wins. If scores are equal then the game is a tie."),
      box("10. 玩家可能希望进行两局游戏，各先手一次，并将两局的得分相加。", "10. Players may wish to play two games, starting once in each, and add their two scores."),
      {
        type: "p",
        zh: "第一个版本面向两位玩家，需要两种颜色的棋子，在图 8 所示的棋盘上进行，上面标出了两个（对称的）入口点。蓝方从上方的（蓝色）顶点进入，红方从下方的（红色）顶点进入。入口点可以被看作正十二面体的相对顶点，或者（等价地）正二十面体的相对面。",
        en: "The first version, for two players, requires tokens in two colours, and is played on the board shown in Figure 8, with two (symmetric) entry points indicated. Blue enters at the upper (blue) vertex, and Red enters at the lower (red) vertex. The entry points can be considered as opposite vertices of a dodecahedron, or (equivalently) opposite faces of an icosahedron.",
      },
      fig(8, 330, "图 8. 为 Graph Domination 修改的 Icosian 棋盘。", "Figure 8. The Icosian board modified for Graph Domination."),
      {
        type: "p",
        zh: "图 9 展示了一局 Graph Domination 的一个可能的最终局面。蓝方的得分（最上面的七个实心圆）是 3 × 7 + 7 = 28，即七个被占据的位置和七个相邻（其中一个空心圆有两枚蓝色棋子与之相邻）。红方的得分（最下面的七个实心圆）同样是 3 × 7 + 7 = 28，所以这局游戏是平局。",
        en: "Figure 9 shows a possible final position of a game of Graph Domination. Blue’s score (uppermost seven filled circles) is 3 × 7 + 7 = 28 for seven occupied spaces and seven adjacencies (one of the empty circles has two blue tokens adjacent to it). Red’s score (lowermost seven filled circles) is similarly 3 × 7 + 7 = 28, so the game is a tie.",
      },
      fig(9, 330, "图 9. 这局游戏是平局。", "Figure 9. This game is tied."),
      { type: "h3", zh: "6.1 棋盘公平吗？", en: "6.1 Is the Board Fair?" },
      {
        type: "p",
        zh: "如果将棋盘旋转 180°，并交换内外两个五边形以使它们的顶点对齐，那么这个变换保持了相邻关系，并交换了红蓝两个入口点。这是一个对称或图同构的例子，它证明了任何一方都没有位置上的优势。",
        en: "If the board is rotated 180°, and the inner and outer pentagons exchanged to match up their vertices, then this transformation preserves adjacencies and swaps the red and blue entry points. This is an example of a symmetry or graph isomorphism that demonstrates that there is no positional advantage to either player.",
      },
      {
        type: "p",
        zh: "注意，这并没有解决任何潜在的先手优势；目前还不知道在 Icosian 棋盘上进行的 Graph Domination 中是否有任何一方具有优势。第 10 条规则（每场比赛两局）就是为此而加入的。",
        en: "Note that this does not address any potential first move advantage; it is not yet known whether either player has an advantage in Graph Domination played on the Icosian board. Rule 10 (two games per match) was added for this purpose.",
      },
      {
        type: "p",
        zh: "任何保持边关系的图顶点的置换，都被称为图的一个对称或图同构。如果一个游戏的位置和走法对应于一个图的顶点和边，那么一个交换两位玩家起始位置的对称就清楚地表明，两个起始位置都不比对方有位置上的优势。这是图论可以用来帮助分析一个游戏设计的一种方式。",
        en: "Any permutation of a graph’s vertices which preserves the edge relations is called a symmetry of the graph or graph isomorphism. If the positions and moves of a game correspond to the vertices and edges of a graph, then a symmetry that exchanges the starting positions of two players clearly shows that neither starting position has a positional advantage over the other. This is one way that graph theory can be used to help analyse a game design.",
      },
      { type: "h3", zh: "6.2 更多的 Graph Domination 棋盘", en: "6.2 More Graph Domination Boards" },
      {
        type: "p",
        zh: "图 10 展示了一个有三个环、每环七个位置的 Graph Domination 棋盘，图 11 展示了一个有五个环、每环三个位置的棋盘。这些棋盘是一个无穷家族的一部分，这个家族有两个或更多的环、每环三个或更多的位置，它们使 Graph Domination 能变得要多复杂就有多复杂。",
        en: "Figure 10 shows a Graph Domination board with three rings of seven positions, and Figure 11 shows a board with five rings of three positions. These boards are parts of an infinite family with two or more rings and three or more positions per ring, which allow Graph Domination to become as complex as desired.",
      },
      fig(10, 330, "图 10. 三个环，每环七个位置。", "Figure 10. Three rings of seven positions."),
      fig(11, 330, "图 11. 五个环，每环三个位置。", "Figure 11. Five rings of three positions."),
      {
        type: "p",
        zh: "这些棋盘与 Icosian 棋盘共享这样一个属性：存在一个交换两个入口点的对称。这可以通过将棋盘想象为沿着一段管子向下看的内部视图来看出；转动管子以交换它的「近」端和「远」端，然后旋转它以重新对齐两个入口点。",
        en: "These boards share with the Icosian board the property that there is a symmetry that exchanges the two entry points. This can be seen by visualising the board as the interior view down a length of pipe; turn the pipe to swap its ‘near’ and ‘far’ ends, then rotate it to realign the two entry points.",
      },
      { type: "h3", zh: "6.3 关于策略的笔记", en: "6.3 Notes on Strategy" },
      {
        type: "p",
        zh: "Graph Domination 的第 5 条规则至关重要，它实现了控制区的概念，类似于战争游戏中的那些控制区。这种控制区的存在使策略更加复杂，并使 Graph Domination 成为一个更好的游戏设计教学工具。它曾被用作一项面向高中生的外展活动，学生们对策略做出了以下观察：",
        en: "Rule 5 of Graph Domination is critical, implementing the idea of zones of control, similar to those in war games. The presence of such zones of control makes the strategy more complex, and makes Graph Domination a better tool for teaching game design. It has been used as an outreach activity with high-school students, who made the following observations on strategy:",
      },
      li("• 不要让对手移动到与你的起点相邻的位置——或者更糟，移动到你的起点上——否则他们可以阻止你添加更多的棋子。", "• Do not let the opponent move adjacent to – or worse, on to – your starting point, or they can block you from adding further tokens."),
      li("• 在让许多棋子上到棋盘上与快速部署它们以阻挡对手的推进之间存在一种权衡。一旦形成一条边界，它的拥有者就可以毫无困难地在其后方填充。", "• There is a trade-off between getting many tokens on the board and deploying them quickly, in order to block the opponent’s advance. Once a frontier is formed, its owner can fill in behind it without difficulty."),
      li("• 不同的棋盘可能需要不同的策略。层数较少或环数较少的棋盘会带来较短的对局。", "• Different boards can require different strategies. Boards with fewer layers or fewer rings lead to shorter games."),
      li("• 比较在不同棋盘上进行的对局的得分是没有意义的。", "• It is not meaningful to compare the scores of games played on different boards."),
      {
        type: "p",
        zh: "通常，当向一个班级展示几个替代棋盘时，一些学生会立刻跑去发明更复杂的棋盘。本文中使用的棋盘都是平面图，并且避免给予任何玩家位置上的优势。还有许多其他类型的棋盘可以使用，例如由非平面图形成的棋盘，但我们将把这些留给以后的文章。学生们经常问这个游戏是否可以由两位以上的玩家进行；可以，如图 12 所示。",
        en: "Typically, when a class was shown a few alternate boards, some students would immediately go off and invent more complex boards. The boards used in this article are all planar graphs and avoid giving any player a positional advantage. There are many other types of boards that could be used, such as those formed by non-planar graphs, but we will leave those for future articles. Students often asked whether the game can be played with more than two players; it can be, as shown in Figure 12.",
      },
      {
        type: "p",
        zh: "图 12 所示的三人棋盘与两人游戏的不同之处在于每位玩家有两个入口点，但它同样有可证明的无位置优势。每位玩家成对的入口点解决了一个严重的问题，即当有另外两位玩家时，一位玩家的入口点有可能很快被阻挡。大多数学生不像喜欢两人版本那样喜欢这个游戏，因为玩起来破坏游戏比赢得游戏更容易。",
        en: "The three-player board shown in Figure 12 differs from the two player game in having two entry points per player, but also has a provable lack of positional advantage. The paired entry points for each player solve a serious problem with the potential to block a player’s entry point very quickly when there are two other players. A majority of students did not like this game as much as the two-player version, as it was easier to play to spoil the game than to win.",
      },
      fig(12, 330, "图 12. 三人游戏的布置。", "Figure 12. Setup for the three-player game."),

      { type: "h2", zh: "7 图与棋盘的对应", en: "7 Graph-Board Correspondence" },
      {
        type: "p",
        zh: "著名的四色问题 [6] 指出，如果我们给一张地图着色，使得共享边界的国家具有不同的颜色，那么所需的颜色不超过四种。这一证明涉及将一张地图转换为一个图。",
        en: "The famous four colour problem [6] states that, if we colour a map so that countries sharing a border have distinct colours, then no more than four colours are needed. This proof involves transforming a map into a graph.",
      },
      {
        type: "p",
        zh: "一张地图的图由对应于国家的顶点和对应于共享边界的边组成，如图 13 所示。一个更大的例子，显示了一个 Risk 棋盘的图，出现在 [7] 中。",
        en: "The graph of a map consists of vertices corresponding to the countries and edges corresponding to shared borders, as shown in Figure 13. A larger example, showing the graph of a Risk board, appears in [7].",
      },
      fig(13, 360, "图 13. 一张简单的地图及其图。", "Figure 13. A simple map and its graph."),
      {
        type: "p",
        zh: "这个简单的例子展示了将一张地图或棋盘转换为一个图的一些好处。例如，Pottsylvania 对应于度最高的顶点，这既暗示了潜在的经济实力，也暗示了拥有许多边境的战略问题。另一方面，Bluestonia 的度为一，这使它处于孤立状态。",
        en: "The simple example shows some of the benefits of transforming a map or board into a graph. Pottsylvania, for example, corresponds to the vertex with the highest degree, suggesting both potential economic power and a strategic problem with many frontiers. Bluestonia, on the other hand, has a degree of one, making it isolated.",
      },
      {
        type: "p",
        zh: "同样的地图-图对应可以用来转换诸如国际象棋、跳棋的棋盘，或者像数独这样基于规则网格的谜题。图 18 展示了两种最流行的棋盘网格类型——正方形和六边形。平面的这两种正则铺砌的部分在游戏和谜题中无处不在。",
        en: "This same map-graph correspondence can be used to transform game boards such as those for Chess, Checkers, or puzzles like Sudoku which are based on regular grids. The two most popular types of grids for game boards – square and hexagonal – are shown in Figure 18. Portions of these two regular tilings of the plane are ubiquitous in games and puzzles.",
      },
      fig(14, 360, "图 14. 正则铺砌是流行的游戏网格。", "Figure 14. Regular tilings are popular game grids."),
      {
        type: "p",
        zh: "许多游戏基于其他的正多边形阵列。例如，图 15 展示了基于正八边形和正方形的游戏网格（左），以及基于单一的不规则五边形的游戏网格（右）。",
        en: "Many games are based on other regular polygonal arrays. For example, Figure 15 shows game grids based on regular octagons and squares (left) and a single irregular pentagon (right).",
      },
      fig(15, 360, "图 15. 许多其他铺砌也被使用。", "Figure 15. Many other tilings are also used."),
      {
        type: "p",
        zh: "正多边形铺砌被称为网格，在许多游戏，尤其是战争游戏中，被用来帮助规范单位移动和距离测量。不那么规则的铺砌不能那样整齐地将移动和距离量化，但可以使其他有趣的游戏机制得以涌现。",
        en: "Regular polygonal tilings, called grids, are used to help regularise unit movement and distance measurements in many games, especially war games. Less regular tilings do not quantise movement and distance so neatly, but can enable other interesting game mechanisms to emerge.",
      },

      { type: "h2", zh: "8 其他基于图的游戏", en: "8 Other Graph-Based Games" },
      {
        type: "p",
        zh: "本节描述另外两个具有强烈底层图基础的数学游戏。",
        en: "This section describes two additional mathematical games with strong underlying graph bases.",
      },
      { type: "h3", zh: "8.1 Hex", en: "8.1 Hex" },
      {
        type: "p",
        zh: "Hex 游戏 [1, vol. 2] 在一个正六边形铺砌上进行，例如图 16 所示的那个。每局游戏恰好有一位玩家必定获胜。",
        en: "The game of Hex [1, vol. 2] is played on a regular hexagonal tiling such as that shown in Figure 16. Exactly one player must win each game.",
      },
      box("Hex：两位玩家轮流在一个空格上放置一枚自己颜色的棋子，通过用一条由自己颜色的棋子组成的连通链连接自己颜色的两边来获胜。", "Hex: Two players take turns placing a piece of their colour at an empty cell, and win by connecting the sides of their colour with a connected chain of pieces of their colour."),
      {
        type: "p",
        zh: "Hex 之所以有趣，部分原因在于它已被证明具有非常高的计算复杂度。它是一个具有强烈底层图性质 [8]、规则非常简单但策略复杂的游戏的好例子。",
        en: "Hex is interesting, in part, because it has been shown to have a very high computational complexity. It is a good example of a game with a strong underlying graph-based nature [8] with very simple rules but complex strategy.",
      },
      fig(16, 360, "图 16. 一个 7×7 的 Hex 棋盘。", "Figure 16. A 7×7 Hex board."),
      { type: "h3", zh: "8.2 Sprouts", en: "8.2 Sprouts" },
      {
        type: "p",
        zh: "Sprouts 游戏由数学家 John Conway 发明 [1, vol. 2]，在 1967 年 7 月那一期的 Mathematical Games（Scientific American 上的一个常设专栏）中得到普及。Sprouts 从一张画有给定数量的点的纸开始，按如下方式进行。",
        en: "The game of Sprouts, invented by mathematician John Conway [1, vol. 2], was popularised in the July 1967 edition of Mathematical Games, a regular column in Scientific American. Sprouts starts with a sheet of paper with a given number of dots drawn on it, and is played as follows.",
      },
      box("Sprouts：两位玩家轮流从一个点到另一个点（或从一个点到它自身）画一条曲线，使得：", "Sprouts: Two players takes turns drawing a curves from one dot to another (or from a dot to itself), such that:"),
      box("1.a) 没有一个点有超过三条与之相连的曲线。", "1.a) No dot has more than three incident curves."),
      box("1.b) 任何曲线都永不交叉。", "1.b) No curves ever cross."),
      box("2. 画完每条曲线后，行动方必须在其路径上添加一个新的点。", "2. After drawing each curve, the mover must add a new dot along its path."),
      box("3. 无路可走的玩家输。", "3. A player with no moves loses."),
      {
        type: "p",
        zh: "图 17 展示了一局从两个点开始的 Sprouts。Sprouts 已经受到了大量的分析，对于六个或更多的点，它涉及相当复杂的策略 [9]。它是一个构造（平面）图的游戏的例子。",
        en: "Figure 17 shows a game of Sprouts starting with two dots. Sprouts has been subjected to significant analysis, and for six or more dots involves reasonably complex strategy [9]. It is an example of a game that constructs a (planar) graph.",
      },

      { type: "h2", zh: "9 将游戏转换为图", en: "9 Transforming Games to Graphs" },
      {
        type: "p",
        zh: "将顶点之间的距离定义为这些顶点之间的最短路径——如果不存在路径，距离就是无穷大——是一种遵守平面或空间中距离的通常规则的数学度量。如果一个游戏或谜题被描述为一个以边表示可能走法的图，那么就很容易使用各种寻路算法，例如 Dijkstra 算法、A* 算法和其他形式的动态规划 [10]，来辅助游戏设计。图中的邻域代表游戏中的控制区，并且可以高效地计算和枚举到达目标的最短路径和替代路径。",
        en: "Defining the distance between vertices as the shortest path between those vertices – the distance is infinite if no path exists – is a mathematical metric that obeys the usual rules of distance in the plane or space. If a game or puzzle is described as a graph with edges representing possible moves, then it is easy to use various path finding algorithms such as Dijkstra’s algorithm, the A* algorithm, and other forms of dynamic programming [10] to assist game design. Neighbourhoods in the graph represent zones of control in the game, and it becomes possible to efficiently compute and enumerate the shortest and alternate paths to a goal.",
      },
      {
        type: "p",
        zh: "另一个问题是构建自动玩家，或者游戏的解，以解决诸如先手优势之类的问题。这需要更复杂的算法来搜索描述可能走法空间的博弈树。我们将在以后的文章中考察这些。",
        en: "Another issue is the construction of automated players, or the solutions of games, to resolve issues such as first player advantage. This requires more sophisticated algorithms to search the game trees that describe the space of possible moves. We will examine these in a future article.",
      },
      {
        type: "p",
        zh: "另一个有趣的应用是将谜题表示为图，其中顶点代表部分解（或当前状态），边代表走法，例如在数独中填一个数字，或在 Sokoban 或 Rush Hour 中滑动一个棋子。一步一步地解一个挑战于是就对应于在图中从一个顶点走到另一个顶点。这个图以一种简洁的形式捕捉了谜题的解空间。这为系统地、自动地回答诸如以下的问题打开了大门：这个谜题有唯一解吗？或者：解决这个挑战所需的最少步数是多少？",
        en: "Another interesting application is to represent puzzles as graphs in which vertices represent partial solutions (or the current state), and edges represent moves, such as filling in a digit in Sudoku or sliding a piece in Sokoban or Rush Hour. Solving a challenge step-by-step then corresponds to traversing the graph from vertex to vertex. The graph captures, in a concise form, the solution space of the puzzle. This opens the door to systematically and automatically answering questions such as: does this puzzle have a unique solution? or: what is the smallest number of moves to solve this challenge?",
      },

      { type: "h2", zh: "10 结论", en: "10 Conclusion" },
      {
        type: "p",
        zh: "对基本图论的理解使游戏设计者，或任何对谜题的算法求解感兴趣的人，能够抽象出棋盘、解空间甚至规则集的本质特征。这种抽象为游戏的某个方面提供了一种不同的、更简洁的视角。对于解决某个特定的设计问题，它可能不是更好的，但它是设计者的一个额外工具。",
        en: "An understanding of basic graph theory permits game designers, or anyone interested in the algorithmic solution of puzzles, to abstract the essential features of boards, solution spaces, or even rule sets. The abstraction gives a different, more concise, view of some aspect of a game. It may not be a better for addressing a particular design issue, but is an additional tool for the designer.",
      },
      {
        type: "p",
        zh: "本文既介绍了图论术语，也介绍了以根本性的方式融入图的游戏的例子。它涉及了对称、算法化的图分析、画图和平面对偶等概念。今后的工作将描述用于求解和设计谜题的基于图的算法，并附有例子。",
        en: "This article introduces both graph-theoretic terminology and examples of games that incorporate graphs in a fundamental way. It touches on concepts of symmetry, algorithmic graph analysis, graph drawing, and planar duality. Future work will describe graph-based algorithms for solving and designing puzzles, with examples.",
      },
      fig(17, 600, "图 17. 一局两点的 Sprouts，由做出最后一步可能走法的玩家 2（蓝方）获胜（来自 [9]）。", "Figure 17. A two-dot game of Sprouts, won by player 2 (Blue) who makes the last possible move (from [9])."),
      {
        type: "p",
        zh: "多年来，Graph Domination 游戏已被证明是一个有用的教学工具，无论是在图论课上还是在教育外展活动中。与游戏和谜题一样，图论是减少学生对数学和计算机科学的焦虑的一条自然途径。",
        en: "The game of Graph Domination has proven to be a useful teaching tool over the years, both in graph theory classes and in educational outreach activities. Like games and puzzles, graph theory is a natural path to reducing students’ anxiety about mathematics and computer science.",
      },

      { type: "h3", zh: "致谢", en: "Acknowledgements" },
      {
        type: "p",
        zh: "作者感谢加拿大自然科学与工程研究理事会和圭尔夫大学对这项工作的支持。",
        en: "The author thanks the Canadian Natural Sciences and Engineering Research Council and the University of Guelph for their support of this work.",
      },

      { type: "h3", zh: "参考文献", en: "References" },
      ref("[1] Berlekamp, E. R., Conway, J. H. and Guy, R. K., Winning Ways for your Mathematical Plays, London, Academic Press, 1982."),
      ref("[2] Guy, R. K., ‘Graphs and Games’, in Selected Topics in Graph Theory II, New York, Academic Press, 1983."),
      ref("[3] Euler, L., ‘Solutio Problematis ad Geometriam Situs Pertinentis’, Commentari Aicademiae Scientiarum Imperialis Petropolitanae, vol. 8, 1736, pp. 128–140 (in Latin)."),
      ref("[4] West, D. B., Introduction to Graph Theory, Upper Saddle River, Prentice Hall, 1996."),
      ref("[5] Tutte, W. T., ‘How to Draw a Graph’, Proceedings of the London Mathematical Society, vol. 13, 1963, pp. 743–767."),
      ref("[6] Appel, K. and Haken, W., ‘Solution of the Four Color Map Problem’, Scientific American, vol. 237, No. 4, 1977, pp. 108–121."),
      ref("[7] Ashlock, D. and Lee, C, ‘Influence Maps and New Versions of Risk’, Game and Puzzle Design, vol. 1, no. 1, 2015, pp. 38–43."),
      ref("[8] Browne, C., Connection Games: Variations on a Theme, Natick, AK Peters, 2005."),
      ref("[9] Browne, C., ‘Algorithms for Interactive Sprouts’, Theoretical Computer Science, special issue on Computer Games, 2016 (in print)."),
      ref("[10] Cormen, T. H., Leiserson, C. E., Rivest, R. L. and Stien, C., Introduction to Algorithms, Cambridge, MIT Press, 1990."),

      {
        type: "bio",
        zh: "Daniel Ashlock 是加拿大安大略省圭尔夫市圭尔夫大学的数学教授。他的研究兴趣包括计算智能在数学游戏和人们所玩的游戏中的应用。地址：Department of Mathematics and Statistics, University of Guelph, Ontario, N1G 2W1, Canada。电子邮件：dashlock@uoguelph.ca",
        en: "Daniel Ashlock is a Professor of Mathematics at the University of Guelph in Guelph, Ontario, Canada. His research interests include applications of computational intelligence to both mathematical games and games played by people. Address: Department of Mathematics and Statistics, University of Guelph, Ontario, N1G 2W1, Canada. Email: dashlock@uoguelph.ca",
      },

      note("¹ 关于这一主题在数学上更详细的论述，参见经典的 Winning Ways for your Mathematical Plays [1] 和 Richard Guy 的「Graphs and Games」[2, chap. 9]。", "¹ For more mathematically detailed coverage of this topic, see the classic Winning Ways for your Mathematical Plays [1] and Richard Guy’s ‘Graphs and Games’ [2, chap. 9]."),
      note("² https://www.ria.ie/library"),
      note("³ 正十二面体是一个有十二个五边形面的立体，许多读者会认出它就是 12 面骰子。", "³ A dodecahedron is a solid with twelve pentagonal faces, that many readers will recognise as a 12-sided die."),
      note("⁴ 正二十面体是一个有二十个三角形面的柏拉图立体，常被用作 20 面骰子。", "⁴ An icosahedron is a Platonic solid with twenty triangular faces, often used for a 20-sided die."),
      note("⁵ 见：http://mathworld.wolfram.com/PlatonicSolid.html", "⁵ see: http://mathworld.wolfram.com/PlatonicSolid.html"),
      note("⁶ 在计算机科学中，NP 完全问题在计算上是困难的，在最坏的情况下，已知最快的算法所需的时间仍然是输入规模的指数级。", "⁶ In computer science, NP-complete problems are computationally difficult, and, in the worst cases, the fastest known algorithms still require time exponential in the size of the input."),
    ],
  };
})();
