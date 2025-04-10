import Image from "next/image"
import { ChevronDown, Heart, Star, CheckCircle2, AlertTriangle, Info } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-white scroll-smooth">
      {/* 导航栏 */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/images/logo.png" alt="威神吹热风机" width={120} height={40} className="object-contain" />
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#benefits" className="text-lg font-medium hover:text-primary transition-colors">
              产品功效
            </a>
            <a href="#usage" className="text-lg font-medium hover:text-primary transition-colors">
              使用指南
            </a>
            <a href="#special" className="text-lg font-medium hover:text-primary transition-colors">
              特殊人群
            </a>
            <a href="#precautions" className="text-lg font-medium hover:text-primary transition-colors">
              注意事项
            </a>
          </nav>
          <Button variant="outline" size="icon" className="md:hidden">
            <span className="sr-only">打开菜单</span>
            <ChevronDown className="h-6 w-6" />
          </Button>
        </div>
      </header>

      {/* 英雄区域 */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-5"></div>
        <div className="container px-4 md:px-6 relative">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary-600 font-medium text-sm mb-2">
                健康生活新方式
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight">
                威神吹热风机
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-[600px] leading-relaxed">
                促进健康活力，改善血液循环，舒缓肌肉紧绷，提升生活品质
              </p>
            </div>
            <div className="flex justify-center animate-fade-in">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-radial from-primary-100 to-transparent rounded-full opacity-70 blur-xl"></div>
                <Image
                  src="/images/product-main.png"
                  alt="威神吹热风机产品图"
                  width={500}
                  height={500}
                  className="object-contain relative z-10 drop-shadow-xl animate-pulse-slow"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 产品功效 */}
      <section id="benefits" className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary-600 font-medium text-sm">
              全方位健康呵护
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">产品功效</h2>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">威神吹热风机带给您全方位的健康呵护</p>
            <div className="w-24 h-1 bg-primary rounded-full mt-2"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "促进健康活力", desc: "提升精神焕发，让您每天充满活力", icon: "✨" },
              { title: "提高血液循环", desc: "促进新陈代谢，改善身体健康状况", icon: "🔄" },
              { title: "焕采养颜", desc: "有益青春美丽，提升肌肤状态", icon: "✨" },
              { title: "舒缓肌肉紧绷", desc: "缓解疲痛，放松身心", icon: "💆" },
              { title: "增进局部循环", desc: "活络筋骨，改善身体机能", icon: "🌡️" },
              { title: "改善睡眠品质", desc: "稳定睡眠，让您拥有健康作息", icon: "💤" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-soft hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="text-5xl mb-6 bg-primary-50 w-16 h-16 flex items-center justify-center rounded-full">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 使用基本原则 */}
      <section className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-5"></div>
        <div className="container px-4 md:px-6 relative">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary-600 font-medium text-sm">
              正确使用方法
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">使用基本原则</h2>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">正确使用威神吹热风机，获得最佳效果</p>
            <div className="w-24 h-1 bg-primary rounded-full mt-2"></div>
          </div>
          <div className="grid gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-soft">
              <h3 className="text-2xl font-bold mb-6 text-red-600 flex items-center">
                <AlertTriangle className="mr-2 h-6 w-6" /> 使用前必读
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-6">
                  <div className="bg-red-100 text-red-800 p-3 rounded-full h-14 w-14 flex items-center justify-center font-bold text-xl shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">温水是成功关键</h4>
                    <p className="text-gray-600 text-lg">使用前必须饮用足量温水（不冷不热）</p>
                    <p className="text-gray-600 text-lg">准备两杯温水</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="bg-red-100 text-red-800 p-3 rounded-full h-14 w-14 flex items-center justify-center font-bold text-xl shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">选择适合强度</h4>
                    <p className="text-gray-600 text-lg">一档或二档，根据个人情况选择</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="bg-red-100 text-red-800 p-3 rounded-full h-14 w-14 flex items-center justify-center font-bold text-xl shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">完成基本程序</h4>
                    <p className="text-gray-600 text-lg">先完成基本程序后再针对特定问题</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-soft">
                <h3 className="text-2xl font-bold mb-6 flex items-center text-primary-600">
                  <Info className="mr-2 h-6 w-6" /> 穴位按摩时间
                </h3>
                <ul className="space-y-4 text-lg">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <span>每个穴位按摩2分钟</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <span>如身体承受不住，可缩短至1分钟</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <span>按摩手法：先逆时针后顺时针（如2分钟则各1分钟）</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-soft">
                <h3 className="text-2xl font-bold mb-6 flex items-center text-primary-600">
                  <Info className="mr-2 h-6 w-6" /> 基本使用顺序
                </h3>
                <p className="mb-6 text-lg">每个部位按照以下步骤使用2-3分钟：</p>
                <div className="grid grid-cols-2 gap-4 text-lg">
                  {[
                    "手掌心（涌泉穴）",
                    "足底",
                    "膝盖后面",
                    "腹股沟（大腿根部）",
                    "腋窝",
                    "耳后淋巴",
                    "上背",
                    "头部（百会穴）",
                    "臀部",
                    "向下吹（脊柱）",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="bg-primary text-white rounded-full h-8 w-8 flex items-center justify-center text-sm font-bold shrink-0">
                        {i + 1}
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 使用指南 */}
      <section id="usage" className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary-600 font-medium text-sm">
              详细步骤
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">使用指南</h2>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">详细的使用步骤，让您轻松掌握</p>
            <div className="w-24 h-1 bg-primary rounded-full mt-2"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <Image
                src="/images/usage-guide.png"
                alt="威神吹热风机使用指南"
                width={600}
                height={600}
                className="rounded-2xl shadow-soft"
              />
            </div>
            <div className="space-y-8 order-1 md:order-2">
              <div className="bg-primary-50 p-8 rounded-2xl border border-primary-100">
                <h3 className="text-2xl font-bold mb-6 text-primary-700">👤 面部护理方法</h3>
                <ul className="space-y-4 text-lg">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary-600 shrink-0 mt-0.5" />
                    <span>先做一侧，再做另一侧</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary-600 shrink-0 mt-0.5" />
                    <span>手法：先逆时针后顺时针</span>
                  </li>
                </ul>
                <h4 className="text-xl font-semibold mt-6 mb-4 text-primary-700">使用顺序：</h4>
                <div className="ml-2 space-y-3 text-lg">
                  {[
                    "吹腋下",
                    "吹耳后淋巴",
                    "吹百会穴",
                    "以下巴为中心向上提",
                    "嘴角向上提",
                    "鼻翼向上提",
                    "眼睛底部向上提",
                    "眼睛逆时针、顺时针吹",
                    "额头往发际线向上提",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="bg-white text-primary-600 rounded-full h-7 w-7 flex items-center justify-center text-sm font-bold border border-primary-200">
                        {i + 1}
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl shadow-soft">
                <h3 className="text-xl font-bold mb-4">风力选择：</h3>
                <ul className="space-y-3 text-lg">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <span>手掌心、腋下、百会穴：使用中风</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <span>耳后淋巴、面部：使用冷风（最小风力）</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <div className="bg-secondary-50 p-8 rounded-2xl shadow-soft border border-secondary-100">
              <h3 className="text-2xl font-bold mb-6 text-secondary-700 flex items-center">
                <Star className="mr-2 h-6 w-6 fill-secondary-300 stroke-secondary-700" /> 改善失眠问题
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-secondary-700">生活习惯调整</h4>
                  <ul className="space-y-3 text-lg">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-secondary-600 shrink-0 mt-0.5" />
                      <span>下午三点以后避免含咖啡因食物饮品</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-secondary-600 shrink-0 mt-0.5" />
                      <span>睡前避免思考困扰问题</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-secondary-600 shrink-0 mt-0.5" />
                      <span>睡前勿喝多水</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-secondary-600 shrink-0 mt-0.5" />
                      <span>睡前保持情绪放松</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-secondary-700">按摩步骤</h4>
                  <ol className="space-y-3 text-lg">
                    {[
                      "晚上吹大腿根（左右各一边，每个穴道2分钟）",
                      "从大腿根到膝盖部分（肾经，大腿内侧）",
                      "每个定点至少30秒，直到温暖",
                      "从膝盖往下吹小腿内侧，直到温暖",
                      "吹足底涌泉穴",
                      "吹脚背部分，尤其是拇指与第二指头中间凹陷处（太通穴）",
                      "可选：吹肝胆经",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="bg-white text-secondary-600 rounded-full h-7 w-7 flex items-center justify-center text-sm font-bold shrink-0 border border-secondary-200">
                          {i + 1}
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ol>
                  <p className="mt-4 text-lg font-medium text-secondary-700">整个过程约20分钟，完成后上厕所再入睡</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 特殊人群使用指南 */}
      <section id="special" className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-5"></div>
        <div className="container px-4 md:px-6 relative">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary-600 font-medium text-sm">
              专属建议
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">特殊人群使用指南</h2>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">针对不同人群的专属使用建议</p>
            <div className="w-24 h-1 bg-primary rounded-full mt-2"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-soft hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="text-5xl mb-6 bg-primary-50 w-16 h-16 flex items-center justify-center rounded-full">
                🤰
              </div>
              <h3 className="text-2xl font-bold mb-4">孕妇</h3>
              <ul className="space-y-4 text-lg">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <span>孕早期（3个月内）：不建议使用</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <span>孕晚期：可用于缓解脚部浮肿</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <span>避免直接对腹部使用</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-soft hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="text-5xl mb-6 bg-primary-50 w-16 h-16 flex items-center justify-center rounded-full">
                👩‍🍼
              </div>
              <h3 className="text-2xl font-bold mb-4">哺乳期妇女</h3>
              <ul className="space-y-4 text-lg">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <span>可以正常使用，无影响</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-soft hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="text-5xl mb-6 bg-primary-50 w-16 h-16 flex items-center justify-center rounded-full">
                👶
              </div>
              <h3 className="text-2xl font-bold mb-4">儿童</h3>
              <ul className="space-y-4 text-lg">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <span>小孩：可以正常使用全套程序</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <span>婴幼儿：建议使用一档</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <span>可隔着大人的手使用</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <span>或将吹风机拿高一些</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12">
            <div className="bg-white p-8 rounded-2xl shadow-soft">
              <h3 className="text-2xl font-bold mb-6 text-primary-700 flex items-center">
                <Heart className="mr-2 h-6 w-6 fill-primary-200 stroke-primary-700" /> 特殊问题使用方法
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="text-xl font-semibold mb-4 text-primary-700">静脉曲张/痛风</h4>
                  <ul className="space-y-3 text-lg">
                    <li className="flex items-start gap-3">
                      <span className="bg-white text-primary-600 rounded-full h-7 w-7 flex items-center justify-center text-sm font-bold shrink-0 border border-primary-200">
                        1
                      </span>
                      <span>先完成基本程序</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-white text-primary-600 rounded-full h-7 w-7 flex items-center justify-center text-sm font-bold shrink-0 border border-primary-200">
                        2
                      </span>
                      <span>重点吹以下部位（每点3分钟）：</span>
                    </li>
                    <ul className="ml-10 space-y-2 mt-2">
                      <li className="flex items-center gap-2">
                        <span className="h-2 w-2 bg-primary-500 rounded-full"></span>
                        <span>脚底涌泉穴</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-2 w-2 bg-primary-500 rounded-full"></span>
                        <span>膝盖后侧</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-2 w-2 bg-primary-500 rounded-full"></span>
                        <span>大腿根部束溪穴</span>
                      </li>
                    </ul>
                    <li className="flex items-start gap-3">
                      <span className="bg-white text-primary-600 rounded-full h-7 w-7 flex items-center justify-center text-sm font-bold shrink-0 border border-primary-200">
                        3
                      </span>
                      <span>静脉曲张不直接吹严重部位，从末端开始</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="text-xl font-semibold mb-4 text-primary-700">眼部问题</h4>
                  <ul className="space-y-3 text-lg">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary-600 shrink-0 mt-0.5" />
                      <span>使用一档，眼睛保持闭合</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary-600 shrink-0 mt-0.5" />
                      <span>重点吹周围穴位</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="text-xl font-semibold mb-4 text-primary-700">肾结石/胆结石</h4>
                  <ul className="space-y-3 text-lg">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary-600 shrink-0 mt-0.5" />
                      <span>按照失眠问题的按摩流程进行</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary-600 shrink-0 mt-0.5" />
                      <span>使用前后饮用温水</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary-600 shrink-0 mt-0.5" />
                      <span>按摩肾经和肝胆经</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 注意事项 */}
      <section id="precautions" className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary-600 font-medium text-sm">
              安全使用
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">注意事项</h2>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">安全使用威神吹热风机的重要提示</p>
            <div className="w-24 h-1 bg-primary rounded-full mt-2"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-red-50 p-8 rounded-2xl shadow-soft border border-red-100">
              <h3 className="text-2xl font-bold mb-6 text-red-700 flex items-center">
                <AlertTriangle className="mr-2 h-6 w-6" /> 安全使用提示
              </h3>
              <ul className="space-y-4 text-lg">
                <li className="flex items-start gap-3">
                  <span className="bg-white text-red-600 rounded-full h-7 w-7 flex items-center justify-center text-sm font-bold shrink-0 border border-red-200">
                    !
                  </span>
                  <span>使用后拔掉插头</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-white text-red-600 rounded-full h-7 w-7 flex items-center justify-center text-sm font-bold shrink-0 border border-red-200">
                    !
                  </span>
                  <span>不用时关闭电源</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-white text-red-600 rounded-full h-7 w-7 flex items-center justify-center text-sm font-bold shrink-0 border border-red-200">
                    !
                  </span>
                  <span>请勿摔打产品</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-white text-red-600 rounded-full h-7 w-7 flex items-center justify-center text-sm font-bold shrink-0 border border-red-200">
                    !
                  </span>
                  <span>建议使用公牛品牌英转中插头</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-white text-red-600 rounded-full h-7 w-7 flex items-center justify-center text-sm font-bold shrink-0 border border-red-200">
                    !
                  </span>
                  <span>敏感部位从相关联末端开始吹</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-white text-red-600 rounded-full h-7 w-7 flex items-center justify-center text-sm font-bold shrink-0 border border-red-200">
                    !
                  </span>
                  <span>可当普通吹风机使用，无辐射</span>
                </li>
              </ul>
            </div>

            <div className="bg-primary-50 p-8 rounded-2xl shadow-soft border border-primary-100">
              <h3 className="text-2xl font-bold mb-6 text-primary-700 flex items-center">
                <Info className="mr-2 h-6 w-6" /> 使用小贴士
              </h3>
              <h4 className="text-xl font-semibold mb-4 text-primary-700">记住关键点</h4>
              <div className="space-y-6">
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <p className="font-bold text-lg mb-3 text-primary-700">两大成功关键：</p>
                  <ul className="space-y-3 text-lg">
                    <li className="flex items-start gap-3">
                      <span className="bg-primary-100 text-primary-700 rounded-full h-7 w-7 flex items-center justify-center text-sm font-bold shrink-0">
                        1
                      </span>
                      <span>温水是关键（使用前必须喝足量温水）</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-primary-100 text-primary-700 rounded-full h-7 w-7 flex items-center justify-center text-sm font-bold shrink-0">
                        2
                      </span>
                      <span>基本程序是关键（先完成基本程序再针对特定问题）</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <p className="text-lg mb-2">按照图片上标示的穴位吹，可解决约50%的问题</p>
                  <p className="text-lg font-medium text-primary-700">每个部位吹2-3分钟，效果更佳</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="border-t bg-gray-50">
        <div className="container px-4 py-12 md:px-6 md:py-16">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-4">
              <Image src="/images/logo.png" alt="威神吹热风机" width={120} height={40} className="object-contain" />
              <p className="text-gray-600">威神吹热风机 - 您健康生活的好伙伴</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  <span className="sr-only">微信</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-wechat"
                  >
                    <path d="M9.5 9.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5h.5c1.1 0 2-.9 2-2s-.9-2-2-2H7.82C6.26 2.5 5 3.76 5 5.32V12c0 2.76 2.24 5 5 5h4c2.76 0 5-2.24 5-5v-2.08c0-1.24-1.01-2.25-2.25-2.25H16c-.41 0-.75.34-.75.75s.34.75.75.75h.17c.41 0 .75.34.75.75V12c0 1.66-1.34 3-3 3h-4c-1.66 0-3-1.34-3-3V5.32c0-.72.58-1.32 1.3-1.32H9c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5h-.5c-1.1 0-2 .9-2 2s.9 2 2 2h.5c.83 0 1.5.67 1.5 1.5z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  <span className="sr-only">微博</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-message-circle"
                  >
                    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  <span className="sr-only">抖音</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-music"
                  >
                    <path d="M9 18V5l12-2v13" />
                    <circle cx="6" cy="18" r="3" />
                    <circle cx="18" cy="16" r="3" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">快速链接</h3>
              <nav className="grid grid-cols-2 gap-2">
                <a href="#benefits" className="text-gray-600 hover:text-primary transition-colors">
                  产品功效
                </a>
                <a href="#usage" className="text-gray-600 hover:text-primary transition-colors">
                  使用指南
                </a>
                <a href="#special" className="text-gray-600 hover:text-primary transition-colors">
                  特殊人群
                </a>
                <a href="#precautions" className="text-gray-600 hover:text-primary transition-colors">
                  注意事项
                </a>
              </nav>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">联系我们</h3>
              <div className="space-y-2">
                <p className="text-gray-600 flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-phone"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  客服电话：400-123-4567
                </p>
                <p className="text-gray-600 flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-mail"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  邮箱：service@weishen.com
                </p>
                <p className="text-gray-600 flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-map-pin"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  地址：广州市天河区科技园
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center text-gray-600">
            <p>© 2025 威神吹热风机 版权所有</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
