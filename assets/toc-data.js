// 期刊目录数据。每条文字都是 {zh, en} 双语对，页面按当前语言渲染。
// page 为期刊印刷页码；合订本 PDF 页码 = page + PDF_PAGE_OFFSET。
window.GAPD = (function () {
  // 直接双击打开时用相对路径找桌面上的 PDF;通过 serve.py 访问时由服务器提供
  const PDF_FILE = location.protocol === "file:"
    ? "../非常好期刊 使我设计赞赞.pdf"
    : "journal.pdf";
  const PDF_PAGE_OFFSET = 2;

  const SECTIONS = {
    editorial: { zh: "社论", en: "Editorial" },
    case: { zh: "案例研究", en: "Case Study" },
    nikoli: { zh: "Nikoli 逻辑谜题", en: "Nikoli Logic Puzzles" },
    article: { zh: "文章", en: "Article" },
    note: { zh: "短评", en: "Short Note" },
    newold: { zh: "旧中出新", en: "New from Old" },
    geometry: { zh: "游戏中的几何", en: "Geometry at Play" },
    patterns: { zh: "游戏设计模式", en: "Game Design Patterns" },
    gipf: { zh: "GIPF 项目", en: "Project GIPF" },
    archive: { zh: "档案回顾", en: "From the Archive" },
    maths: { zh: "游戏中的数学", en: "Maths in Games" },
  };

  const INFO = {
    title: { zh: "游戏与谜题设计", en: "Game & Puzzle Design" },
    subtitle: {
      zh: "合订本 · 收录前六期",
      en: "Compendium · Collecting the first six issues",
    },
    intro: {
      zh: "《游戏与谜题设计》（G&PD）是一本同行评审的研究期刊，发表涵盖游戏与谜题设计各方面的高质量成果。由 Lulu Press Inc. 出版。",
      en: "Game & Puzzle Design (G&PD) is a peer-reviewed research journal publishing high-quality work on all aspects of game and puzzle design. Published through Lulu Press Inc.",
    },
    people: [
      {
        role: { zh: "主编", en: "Editor-in-Chief" },
        name: "Cameron Browne",
        org: {
          zh: "荷兰马斯特里赫特大学知识工程系",
          en: "Department of Knowledge Engineering, Maastricht University, Netherlands",
        },
      },
      {
        role: { zh: "联络官", en: "Liaison Officer" },
        name: "Néstor Romeral Andrés",
        org: { zh: "Nestorgames，西班牙", en: "Nestorgames, Spain" },
      },
      {
        role: { zh: "文字编辑", en: "Copy Editor" },
        name: "Russ Williams",
        org: { zh: "Green Star，波兰", en: "Green Star, Poland" },
      },
    ],
  };

  // [栏目, 中文标题, 英文标题, 作者, 页码]
  const ISSUES = [
    {
      vol: 1, no: 1, year: 2015,
      items: [
        ["editorial", "欢迎来到《游戏与谜题设计》", "Welcome to Game & Puzzle Design", "C. Browne", 13],
        ["case", "Volo：游戏中的鸟类飞行", "Volo: Bird Flight in a Game", "D. Stein", 15],
        ["case", "Heptalion", "Heptalion", "N. Romeral Andrés", 21],
        ["nikoli", "Masyu", "Masyu", "J. Goto", 28],
        ["article", "谜题的本质", "The Nature of Puzzles", "C. Browne", 33],
        ["note", "逻辑谜题的唯一解性", "Uniqueness in Logic Puzzles", "C. Browne", 45],
        ["newold", "影响力地图与《风险》的新版本", "Influence Maps and New Versions of Risk", "D. Ashlock & C. Lee", 48],
        ["geometry", "对称五格骨牌对", "Symmetrical Pentomino Pairs", "K. Jones", 54],
        ["article", "论偏置获胜条件的影响", "On the Effects of Biasing Win Conditions", "I. Althöfer & M. Hartisch", 60],
        ["note", "游戏设计中的机缘巧合", "Serendipity in Game Design", "R. Peeters", 66],
        ["patterns", "将规则嵌入设计", "Embed the Rules", "C. Browne", 70],
        ["case", "Centipede：从街机游戏到桌游", "Centipede: From Arcade Game to Board Game", "B. Whitehill", 81],
        ["gipf", "GIPF 项目：设计与美学", "Project GIPF: Design and Aesthetics", "M. Thomashow", 85],
        ["note", "抽象游戏中的建筑", "Architecture in an Abstract Game", "K. Burm", 90],
        ["archive", "定义「抽象」", "Defining the Abstract", "J. M. Thompson", 93],
      ],
    },
    {
      vol: 1, no: 2, year: 2015,
      items: [
        ["editorial", "游戏的混合与修正", "Mixing and Fixing Games", "C. Browne", 101],
        ["case", "双圈真实 5×5×5", "The Double Circle Real 5×5×5", "C. Hoff", 103],
        ["case", "Tentai Show（天体秀）", "Tentai Show", "J. Goto", 113],
        ["case", "Try：一种混合谜题/游戏", "Try: A Hybrid Puzzle/Game", "C. Browne", 119],
        ["article", "Dameo：跳棋演化的新一步？", "Dameo: A New Step in the Evolution of Draughts?", "C. Freeling", 126],
        ["case", "Catch-Up：领先者交替变换的游戏", "Catch-Up: A Game in Which the Lead Alternates", "A. Isaksen et al.", 136],
        ["note", "通过强制背叛实现联盟控制", "Coalition Control Through Forced Betrayal", "C. Browne", 148],
        ["note", "从数学洞察到策略", "From Mathematical Insight to Strategy", "N. Romeral Andrés", 151],
        ["newold", "从数学游戏衍生纸牌游戏", "Deriving Card Games from Mathematical Games", "D. Ashlock & J. Schonfeld", 153],
        ["article", "限制游戏方式的游戏变异器", "Game Mutators for Restricting Play", "J. Neto & W. Taylor", 162],
        ["patterns", "探索设计空间", "Explore the Design Space", "C. Browne", 169],
        ["archive", "什么造就了好游戏？", "What Makes a Game Good?", "W. Kramer", 182, 184],
      ],
    },
    {
      vol: 2, no: 1, year: 2016,
      items: [
        ["editorial", "人工智能时代的游戏设计", "Game Design in the Age of AI", "C. Browne", 189],
        ["case", "Wrap O-round Weave Five（环绕编织五子）", "Wrap O-round Weave Five", "C. Hoff", 191],
        ["nikoli", "Shakashaka", "Shakashaka", "J. Goto & Y. Miyagi", 199],
        ["case", "环保型游戏设计", "Eco-Friendly Game Design", "N. Romeral Andrés & C. Browne", 203],
        ["article", "骰子游戏得分分布的特征刻画", "Characterising Score Distributions in Dice Games", "A. Isaksen et al.", 210],
        ["article", "角色扮演游戏的叙事推进特征", "Narrative Progression Traits for Role-Playing Games", "S. Samothrakis", 224],
        ["patterns", "是缺陷还是特性？", "Bug or Feature?", "C. Browne", 232],
        ["article", "战争游戏中的优雅战斗", "Elegant Combat in War Games", "F. M. Marqués", 240],
        ["maths", "游戏与谜题设计中的图论", "Graph Theory in Game and Puzzle Design", "D. Ashlock", 248],
        ["case", "用 Recycled Cardstock 进行自动化试玩测试", "Automated Playtesting with Recycled Cardstock", "C. Bell & M. Goadrich", 257],
        ["archive", "策略树之下", "Under the Strategy Tree", "R. Abbott", 270],
      ],
    },
    {
      vol: 2, no: 2, year: 2016,
      items: [
        ["editorial", "日光之下无新事", "Nothing New Under the Sun", "C. Browne", 277],
        ["note", "Diamond：对已知设计的改进", "Diamond: Improving on a Known Design", "L. Back", 279],
        ["case", "从计算机运算到机械谜题", "From Computer Operations to Mechanical Puzzles", "M. O. van Deventer & I. Kriz", 283],
        ["case", "作为游戏规则的物理定律", "Physics Laws as Game Rules", "F. M. Marqués", 291],
        ["patterns", "让设计发挥作用", "Make the Design do the Work", "C. Browne", 301],
        ["case", "如何制作更好的 3×3×3×3", "How to Make a Better 3×3×3×3", "C. Hoff", 315],
        ["article", "缓解非策略性联盟", "Mitigating Non-Strategic Coalitions", "C. Duncan", 329],
        ["note", "七巧板家族的发展", "The Development of a Tangram Family", "F. Horn", 336],
        ["maths", "基于图的游戏设计搜索", "Graph-Based Search for Game Design", "D. Ashlock & C. McGuinness", 342],
        ["note", "针对现实问题的游戏设计方法", "A Game Design Approach to a Real-World Problem", "C. Browne", 350],
        ["archive", "什么是 Ludeme（游戏基因）？", "What's a Ludeme?", "D. Parlett", 355],
      ],
    },
    {
      vol: 3, no: 1, year: 2017,
      items: [
        ["editorial", "谈谈别人的游戏", "Talking About Other People's Games", "C. Browne", 363],
        ["nikoli", "Herugolf", "Herugolf", "Y. Anpuku", 365],
        ["article", "视频游戏的语义哈希", "Semantic Hashing for Video Games", "A. Isaksen, C. Holmgård & J. Togelius", 370],
        ["maths", "为游戏限定棋盘", "Limping Boards for Games", "C. Browne", 377],
        ["case", "复杂的 3×3×3", "The Complex 3×3×3", "C. Hoff", 385],
        ["note", "从数学证明到谜题", "From Mathematical Proof to Puzzle", "N. Romeral Andrés", 399],
        ["maths", "CliqueR：一款图论游戏", "CliqueR: A Graph Theory Game", "D. Ashlock & A. McEachern", 402],
        ["patterns", "重新发明轮子", "Reinvent the Wheel", "C. Browne", 411],
        ["article", "三人游戏", "Games for Three Players", "J. Neto & W. Taylor", 423],
        ["archive", "关于机遇与技巧的一些随想", "Some Random Thoughts On Chance and Skill", "D. Parlett", 434],
      ],
    },
    {
      vol: 3, no: 2, year: 2017,
      items: [
        ["editorial", "回归基础", "Back to Basics", "C. Browne", 447],
        ["nikoli", "Stained Glass（彩色玻璃）", "Stained Glass", "Y. Anpuku", 449],
        ["case", "Disthex：Hex 棋的新变化", "Disthex: A New Twist on Hex", "R. Ishii & C. Browne", 454],
        ["maths", "圆圈谜题中的群", "Groups in Circle Puzzles", "W. Kretschmer", 459],
        ["case", "从 Untouchable 11 到 Hazmat Cargo", "From Untouchable 11 to Hazmat Cargo", "C. Hoff", 471],
        ["patterns", "Ludoku：一次游戏设计实验", "Ludoku: A Game Design Experiment", "C. Browne", 479],
        ["maths", "编辑游戏", "Edit Games", "D. Ashlock & A. McEachern", 491],
        ["article", "衡量《蛇梯棋》中的戏剧性", "Measuring Drama in Snakes & Ladders", "J. Neto & J. N. Silva", 500],
        ["article", "骰子设计值得探讨", "Dice Design Deserves Discourse", "S. Yermolaieva & J. A. Brown", 508],
        ["article", "谜题中的紧张感", "Tension in Puzzles", "C. Browne", 515],
        ["archive", "游戏与政治", "Games and Politics", "R. Garfield", 523],
      ],
    },
  ];

  // 展开为便于查找的结构,文章 id 形如 v1n1-05
  const issues = ISSUES.map((iss) => {
    const issueId = `v${iss.vol}n${iss.no}`;
    // 可选的第 6 项为结束页,用于每期最后一篇(无法从下一篇推算)
    const articles = iss.items.map(([sec, zh, en, authors, page, end], i) => {
      const next = iss.items[i + 1];
      return {
        id: `${issueId}-${String(i + 1).padStart(2, "0")}`,
        section: SECTIONS[sec],
        title: { zh, en },
        authors,
        page,
        endPage: end ?? (next ? next[4] - 1 : null),
      };
    });
    return {
      id: issueId,
      vol: iss.vol, no: iss.no, year: iss.year,
      label: {
        zh: `第${iss.vol}卷 第${iss.no}期`,
        en: `Vol. ${iss.vol}, no. ${iss.no}`,
      },
      articles,
    };
  });

  const byId = {};
  issues.forEach((iss) => iss.articles.forEach((a, i) => {
    byId[a.id] = { ...a, issue: iss, index: i };
  }));

  return {
    INFO,
    issues,
    byId,
    pdfHref: (page) => `${PDF_FILE}#page=${page + PDF_PAGE_OFFSET}`,
  };
})();
