export interface BusinessMode {
  title: string
  desc: string
}

export interface Track {
  slug: string
  name: string
  icon: string
  description: string
  subtitle: string
  suitableFor: string[]
  businessModes: BusinessMode[]
  matchConfig: {
    resources: string[]
    directions: string[]
    stages: string[]
  }
}

export const tracks: Track[] = [
  {
    slug: 'planting',
    name: '种植业',
    icon: '🌾',
    description:
      '种植业是农业的基础赛道，涵盖粮食作物、经济作物、果蔬、中药材等品类。现代种植业已经从传统的"面朝黄土背朝天"发展为集智慧种植、品牌运营、三产融合为一体的综合产业。',
    subtitle: '从一粒种子到一个品牌，用科技和品牌思维重塑种植业价值',
    suitableFor: [
      '拥有耕地、林地等土地资源',
      '有农产品种植经验',
      '想打造特色农产品品牌',
      '关注智慧农业和精准种植',
      '希望通过电商拓展销售渠道',
    ],
    businessModes: [
      {
        title: '精品果园模式',
        desc: '种植高附加值水果（如阳光玫瑰葡萄、车厘子等），通过品质管理和品牌包装，实现高溢价销售',
      },
      {
        title: '有机蔬菜CSA模式',
        desc: '采用有机种植标准，通过社区支持农业（CSA）模式直供城市家庭，建立会员制稳定收入',
      },
      {
        title: '中药材种植+加工模式',
        desc: '种植道地中药材，延伸至初加工和品牌产品开发，对接药企或自建销售渠道',
      },
      {
        title: '智慧农场模式',
        desc: '运用物联网、大数据技术管理种植过程，实现精准施肥灌溉，提升产量和品质',
      },
    ],
    matchConfig: {
      resources: ['land', 'products', 'ai_skill', 'sales'],
      directions: ['branding', 'ecommerce', 'digital_agri'],
      stages: ['idea', 'has_product', 'has_customer', 'industry_base'],
    },
  },
  {
    slug: 'livestock',
    name: '畜牧业',
    icon: '🐄',
    description:
      '畜牧业涵盖猪、牛、羊、鸡、鸭等畜禽养殖。现代畜牧业已经从散养模式发展为规模化、标准化、品牌化经营，优质肉蛋奶产品具有广阔的市场空间。',
    subtitle: '从传统散养到现代养殖品牌，让安全优质的肉蛋奶走向千家万户',
    suitableFor: [
      '有养殖场地或养殖经验',
      '拥有乡村空间资源',
      '想打造绿色畜产品品牌',
      '关注生态养殖和动物福利',
      '希望建立可溯源的供应链',
    ],
    businessModes: [
      {
        title: '生态土鸡养殖模式',
        desc: '林下散养土鸡，主打"生态+健康"概念，通过短视频和社区团购建立品牌认知',
      },
      {
        title: '特色养殖+加工模式',
        desc: '养殖黑猪、藏香猪等特色品种，延伸至腊肉、香肠等加工产品，提升附加值',
      },
      {
        title: '循环农业模式',
        desc: '种养结合，畜禽粪便用于有机肥生产，反哺种植业，形成闭环生态链',
      },
      {
        title: '认养农业模式',
        desc: '消费者认养畜禽，通过数字化手段远程查看养殖过程，体验"云养殖"并获取产品',
      },
    ],
    matchConfig: {
      resources: ['land', 'livestock', 'rural_space', 'content'],
      directions: ['branding', 'breeding', 'ecommerce'],
      stages: ['idea', 'has_product', 'has_customer', 'industry_base'],
    },
  },
  {
    slug: 'forestry',
    name: '林业',
    icon: '🌲',
    description:
      '林业不仅包括传统的木材种植，更延伸至林下经济、森林康养、碳汇交易等新兴业态。森林资源的多元化开发为创业者提供了丰富的可能性。',
    subtitle: '从一片森林到多维价值，挖掘林下经济的无限潜力',
    suitableFor: [
      '拥有林地、山地资源',
      '关注林下种植和林下养殖',
      '想发展森林旅游和康养',
      '关注碳汇交易和生态价值',
      '有农产品和内容能力',
    ],
    businessModes: [
      {
        title: '林下经济模式',
        desc: '利用林下空间种植食用菌、中药材或养殖蜜蜂、家禽，实现森林资源的多维利用',
      },
      {
        title: '森林康养模式',
        desc: '依托森林生态环境，建设康养基地，提供森林浴、疗养、研学等体验服务',
      },
      {
        title: '经济林+加工模式',
        desc: '种植油茶、核桃、竹子等经济林，延伸至深加工产品，打造特色林产品品牌',
      },
      {
        title: '碳汇+生态经济模式',
        desc: '通过林业碳汇交易获取额外收益，同时开发生态旅游和自然教育项目',
      },
    ],
    matchConfig: {
      resources: ['land', 'rural_space', 'content', 'sales'],
      directions: ['branding', 'rural_experience', 'agri_service'],
      stages: ['idea', 'has_product', 'industry_base'],
    },
  },
  {
    slug: 'aquaculture',
    name: '水产养殖业',
    icon: '🐟',
    description:
      '水产养殖涵盖淡水养殖、海水养殖、稻渔综合种养等模式。随着消费者对优质水产品需求的增长，特色水产养殖和品牌化运营拥有巨大市场潜力。',
    subtitle: '从一池清水到品牌水产品，让优质鱼虾蟹走向更广阔的市场',
    suitableFor: [
      '拥有水面、池塘等水域资源',
      '有水产养殖经验或兴趣',
      '想发展稻渔综合种养',
      '关注特色水产品品牌化',
      '希望通过电商销售水产品',
    ],
    businessModes: [
      {
        title: '稻渔综合种养模式',
        desc: '稻田养鱼/虾/蟹，实现"一水两用、一田双收"，生态效益和经济效益兼顾',
      },
      {
        title: '特色水产养殖模式',
        desc: '养殖小龙虾、大闸蟹、鲈鱼等高价值水产品，通过品牌包装和电商渠道实现高溢价',
      },
      {
        title: '休闲渔业模式',
        desc: '结合垂钓、餐饮、观光，打造"渔旅融合"体验项目，提升综合收益',
      },
      {
        title: '工厂化循环水养殖模式',
        desc: '运用智能水处理技术，实现高密度、环保型工厂化养殖，适合科技型创业者',
      },
    ],
    matchConfig: {
      resources: ['land', 'livestock', 'sales', 'content'],
      directions: ['breeding', 'branding', 'ecommerce', 'rural_experience'],
      stages: ['idea', 'has_product', 'has_customer'],
    },
  },
  {
    slug: 'digital-agri',
    name: '数字农业',
    icon: '🤖',
    description:
      '数字农业是最具创新活力的赛道，涵盖智慧农业、农业大数据、AI应用、农业电商、数字乡村等领域。技术赋能农业，正在催生全新的创业机会和商业模式。',
    subtitle: '用代码和算法赋能传统农业，做新时代的"数字新农人"',
    suitableFor: [
      '掌握AI工具和数字技术',
      '有内容创作和电商运营能力',
      '关注农业科技和数字化转型',
      '想搭建农业服务平台',
      '有数据分析或软件开发背景',
    ],
    businessModes: [
      {
        title: 'AI+农业服务模式',
        desc: '利用AI工具为农户提供病虫害识别、产量预测、市场分析等智能化服务',
      },
      {
        title: '农业电商运营模式',
        desc: '通过直播带货、短视频内容、私域社群等方式，帮助农产品打开线上销路',
      },
      {
        title: '数字乡村内容模式',
        desc: '打造"新农人"IP，通过内容创作传播农业知识和乡村文化，实现知识变现',
      },
      {
        title: '智慧农业SaaS模式',
        desc: '开发面向农场/合作社的数字化管理工具，提供生产管理、溯源、营销一体化解决方案',
      },
    ],
    matchConfig: {
      resources: ['ai_skill', 'content', 'sales', 'products'],
      directions: ['digital_agri', 'ecommerce', 'branding', 'agri_service'],
      stages: ['idea', 'has_product', 'has_customer', 'industry_base'],
    },
  },
]

export function getTrackBySlug(slug: string): Track | undefined {
  return tracks.find((t) => t.slug === slug)
}
