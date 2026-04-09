export const siteConfig = {
  productName: '虾得乐',
  productSubtitle: '运行在飞书群聊中的 OpenClaw Bot',
  teamName: '一侠天開',
  tagline: '给工作场所里 i 人的一点低压力娱乐',
  description:
    '在工作场所里，很多群聊只在有任务时才活着。消息一停，气氛就断。虾得乐进入飞书群聊，用更低负担的方式把人重新带回互动现场。',
}

export const problems = [
  {
    id: 1,
    title: '工作群太功能化',
    description:
      '群聊主要服务于通知、协作和同步，一旦离开任务本身，互动就容易停住。',
  },
  {
    id: 2,
    title: '活跃气氛依赖少数人',
    description:
      '热场、接话、组织活动这些事，通常由少数外向者承担，但很难长期持续。',
  },
  {
    id: 3,
    title: 'i 人想参与，但不想高压社交',
    description:
      '很多人并不是不想加入，而是不想主动开口、不想被点名，也不想承担带节奏的压力。',
  },
]

export const solutions = [
  {
    id: 1,
    title: '低门槛接入',
    description:
      '直接在飞书群里使用，不切换平台，不打断现有协作场景。',
  },
  {
    id: 2,
    title: '低压力参与',
    description:
      '用户不需要成为气氛担当，也能被自然带入互动。',
  },
  {
    id: 3,
    title: '轻娱乐持续供给',
    description:
      '通过可切换、可扩展的互动机制，让轻松的群聊娱乐持续发生。',
  },
]

export const features = [
  {
    id: 1,
    title: '群聊氛围搭子',
    description:
      '持续接话、定时活跃、承接情绪，让群聊不再轻易冷场。',
    tags: ['接住冷场', '维持节奏', '降低开口门槛'],
    iconName: 'MessagesSquare',
  },
  {
    id: 2,
    title: 'AI 剧本杀 DM',
    description:
      '自动推进剧情、抛出线索、维持节奏，把群聊升级成轻剧情现场。',
    tags: ['自动控场', '剧情推进', '低门槛开局'],
    iconName: 'ScrollText',
  },
  {
    id: 3,
    title: '谁是卧底 DM',
    description:
      '自动发词、辅助投票、推进流程，让轻游戏互动在群里随时开始。',
    tags: ['轻游戏化', '即时参与', '活跃社群氛围'],
    iconName: 'ShieldQuestion',
  },
]

export const techBadges = [
  { label: 'OpenClaw-powered', desc: '基于 OpenClaw 构建的可运行智能体' },
  { label: 'Feishu-native', desc: '原生接入飞书群聊，无需切换平台' },
  { label: 'Live demo ready', desc: '现场可运行，非录屏非假交互' },
  { label: 'Modular & extensible', desc: '模块化工程结构，具备持续迭代基础' },
]

export const galleryImages: { src: string; alt: string; caption: string }[] = []
