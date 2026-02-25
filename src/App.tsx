/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { 
  Video, 
  TrendingUp, 
  Fingerprint, 
  Share2, 
  Zap, 
  Clock, 
  Cpu,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  Check,
  Search,
  FileText,
  Target,
  Rocket,
  BarChart,
  ArrowRight,
  ChevronUp,
  Facebook,
  MessageCircle,
  Mail,
  Phone,
  MapPin
} from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "bg-black/60 backdrop-blur-xl border-b border-white/5 py-4" : "bg-transparent py-8"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center group cursor-pointer">
          <img 
            src="https://ik.imagekit.io/39wvgoqre/VDC/logo.png" 
            alt="Z LIFE Logo" 
            className="h-[90px] w-auto object-contain group-hover:scale-110 transition-transform"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {["Dịch vụ", "Sản phẩm", "Quy trình", "Tại sao chọn Z LIFE"].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-sm font-semibold text-white/60 hover:text-white transition-all hover:translate-y-[-1px]">
              {item}
            </a>
          ))}
          <button className="px-6 py-2.5 bg-white text-black rounded-full text-sm font-bold hover:bg-cyan-400 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-white/5">
            Nhận mẫu Video AI
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white p-2 hover:bg-white/5 rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-6 md:hidden"
        >
          {["Dịch vụ", "Quy trình", "Tại sao chọn Z LIFE", "Liên hệ"].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-lg font-medium text-white/70" onClick={() => setIsMobileMenuOpen(false)}>
              {item}
            </a>
          ))}
          <button className="w-full py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-bold">
            Nhận mẫu Video AI
          </button>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 400], [1, 0.9]);

  const text = "Tạo ra tăng trưởng thật sự bằng AI.";
  const words = text.split(" ");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Aurora Background Effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-500/15 blur-[120px] rounded-full animate-aurora" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-cyan-600/15 blur-[150px] rounded-full animate-aurora delay-700" />
        <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] bg-blue-400/5 blur-[100px] rounded-full animate-aurora delay-1000" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          style={{ y, opacity, scale }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-xs font-bold tracking-[0.2em] uppercase mb-8 backdrop-blur-sm">
            AI Marketing Evolution
          </span>
          
          <h1 className="text-6xl md:text-9xl font-bold text-white tracking-tighter leading-[0.85] mb-10 perspective-1000">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20, rotateX: -40 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="inline-block mr-[0.2em] last:mr-0"
              >
                {word === "tăng" || word === "trưởng" ? (
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 animate-pulse">
                    {word}
                  </span>
                ) : word === "AI." ? (
                  <span className="relative inline-block group cursor-default">
                    <span className="relative z-10 text-cyan-400 group-hover:text-white transition-colors duration-300">{word}</span>
                    <span className="absolute inset-0 text-red-500 opacity-0 group-hover:opacity-70 animate-glitch pointer-events-none">{word}</span>
                    <span className="absolute inset-0 text-blue-500 opacity-0 group-hover:opacity-70 animate-glitch pointer-events-none [animation-delay:0.1s]">{word}</span>
                    <span className="absolute inset-0 bg-cyan-400/20 blur-lg rounded-full scale-0 group-hover:scale-150 transition-transform duration-500" />
                  </span>
                ) : (
                  word
                )}
              </motion.span>
            ))}
          </h1>

          <p className="text-lg md:text-2xl text-white/50 max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
            Chúng tôi xây dựng hệ sinh thái Digital Marketing kết hợp AI để giúp doanh nghiệp sản xuất nhanh hơn, tối ưu tốt hơn và chuyển đổi hiệu quả hơn.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="group px-10 py-5 bg-white text-black rounded-full font-bold flex items-center gap-3 hover:bg-cyan-400 transition-all transform hover:scale-105 shadow-2xl shadow-white/10">
              Gửi video gốc để tối ưu bằng AI
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-full font-bold hover:bg-white/10 transition-all backdrop-blur-sm">
              Nhận mẫu Video AI cho ngành của bạn
            </button>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-24 left-12 hidden lg:block"
      >
        <div className="p-5 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center">
              <TrendingUp className="text-cyan-400 w-6 h-6" />
            </div>
            <div>
              <div className="text-white font-bold text-base">+142% Growth</div>
              <div className="text-white/40 text-xs font-medium tracking-wide">AI Optimized Campaign</div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const ServiceCard = ({ icon: Icon, title, subtitle, description, index }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, ease: "easeOut" }}
      className="group relative p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-blue-500/30 transition-all duration-500 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-blue-500/10 transition-all duration-500">
          <Icon className="w-8 h-8 text-cyan-400" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{title}</h3>
        <div className="text-cyan-400 font-semibold text-sm mb-5 italic tracking-wide">{subtitle}</div>
        <p className="text-white/40 leading-relaxed text-base font-medium">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const services = [
    {
      icon: Video,
      title: "AI Video Solutions",
      subtitle: "Biến video thành lợi thế cạnh tranh",
      description: "Không cần quay lại từ đầu. Z LIFE giúp bạn sản xuất mới hoặc chỉnh sửa trực tiếp video gốc bằng AI — từ voice, màu sắc đến bối cảnh — nhanh, linh hoạt và tiết kiệm chi phí."
    },
    {
      icon: TrendingUp,
      title: "Growth Marketing",
      subtitle: "Tăng trưởng dựa trên dữ liệu",
      description: "Chúng tôi tạo ra nhiều biến thể video AI để thử nghiệm liên tục, từ đó tìm ra nội dung có tỷ lệ chuyển đổi cao nhất và tối ưu ngân sách quảng cáo theo thời gian thực."
    },
    {
      icon: Fingerprint,
      title: "Branding & AI Identity",
      subtitle: "Thương hiệu hiện đại hơn",
      description: "Từ video cinematic đến AI avatar đại diện thương hiệu, Z LIFE giúp cá nhân và doanh nghiệp xuất hiện chuyên nghiệp trên mọi nền tảng mà không cần dành quá nhiều thời gian quay dựng."
    },
    {
      icon: Share2,
      title: "Social Management",
      subtitle: "Nội dung đều đặn — ổn định",
      description: "TikTok, Reels hay Short Video không còn là áp lực về tần suất. Với AI Content Production, bạn có thể duy trì lịch đăng bài liên tục mà vẫn giữ được chất lượng."
    },
  ];

  return (
    <section id="dịch-vụ" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">Dịch vụ của Z LIFE</h2>
          <p className="text-xl text-white/50 max-w-2xl">
            AI Marketing không chỉ là sản xuất nội dung — mà là tạo ra tăng trưởng thật sự.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <ServiceCard key={idx} {...service} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Học và thấu hiểu SP/DV",
      icon: Search,
      yOffset: "-translate-y-8"
    },
    {
      number: "02",
      title: "Phân tích đánh giá",
      icon: Fingerprint,
      yOffset: "translate-y-8"
    },
    {
      number: "03",
      title: "Lập kế hoạch",
      icon: FileText,
      yOffset: "-translate-y-8"
    },
    {
      number: "04",
      title: "Chốt KPI đo lường",
      icon: Target,
      yOffset: "translate-y-8"
    },
    {
      number: "05",
      title: "Thực thi marketing thực tế",
      icon: Rocket,
      yOffset: "-translate-y-8"
    },
    {
      number: "06",
      title: "Đo lường báo cáo tối ưu",
      icon: BarChart,
      yOffset: "translate-y-8"
    }
  ];

  return (
    <section id="quy-trình" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Luôn hướng đến <span className="text-cyan-400">hiệu quả chuyển đổi</span> KHÁCH HÀNG
            </h2>
            <p className="text-white/40 text-lg font-medium">
              Với mỗi dự án chúng tôi đều có quy trình <span className="text-cyan-400/60">"cá nhân hóa"</span> để đảm bảo vận hành hiệu quả nhất
            </p>
          </motion.div>
        </div>

        {/* Desktop Process Flow */}
        <div className="hidden lg:block relative">
          {/* Connecting Line/Wave */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2" />
          
          <div className="grid grid-cols-6 gap-4 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`flex flex-col items-center ${step.yOffset}`}
              >
                <div className="relative mb-6">
                  {/* Step Number */}
                  <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-4xl font-black italic text-white/10 group-hover:text-cyan-400/20 transition-colors">
                    {step.number}
                  </span>
                  
                  {/* Icon Container (Diamond Style) */}
                  <div className="w-24 h-24 relative group">
                    <div className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="w-full h-full bg-white/[0.03] border border-white/10 rounded-2xl rotate-45 flex items-center justify-center group-hover:border-cyan-400/50 group-hover:bg-white/[0.05] transition-all duration-500 shadow-2xl">
                      <div className="-rotate-45">
                        <step.icon className="w-8 h-8 text-cyan-400" />
                      </div>
                    </div>
                  </div>

                  {/* Connecting Arrow */}
                  {idx < steps.length - 1 && (
                    <div className={`absolute top-1/2 -right-8 -translate-y-1/2 ${idx % 2 === 0 ? 'rotate-[20deg]' : '-rotate-[20deg]'}`}>
                      <ArrowRight className="w-4 h-4 text-white/10" />
                    </div>
                  )}
                </div>

                <h4 className="text-center text-sm font-bold text-white/80 max-w-[120px] leading-snug group-hover:text-white transition-colors">
                  {step.title}
                </h4>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Process Flow */}
        <div className="lg:hidden space-y-12">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-8"
            >
              <div className="relative shrink-0">
                <span className="absolute -top-4 -left-4 text-3xl font-black italic text-white/10">
                  {step.number}
                </span>
                <div className="w-16 h-16 bg-white/[0.03] border border-white/10 rounded-xl rotate-45 flex items-center justify-center">
                  <div className="-rotate-45">
                    <step.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                </div>
              </div>
              <h4 className="text-lg font-bold text-white/80">
                {step.title}
              </h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const growthMarketingData = [
  {
    client: "IKIGAI SUSHI",
    role: "Facebook Ads Specialist",
    image: "https://ik.imagekit.io/39wvgoqre/VDC/1.png",
    sow: [
      "Lên kế hoạch ngân sách hàng tháng & campaign extra, khai trương",
      "Tối ưu quảng cáo dựa trên các chỉ số trả về",
      "Phối hợp với team content để sản xuất các content quảng cáo"
    ],
    results: [
      "Đạt mốc 2 tỷ doanh thu với 4 Chi Nhánh/ tháng",
      "Thu thập ~600 tin nhắn khách hàng mới/ tháng",
      "Triển khai nhanh chóng các chiến dịch quảng cáo digital cho các sự kiện"
    ]
  },
  {
    client: "KING OF SUSHI VIETNAM",
    role: "Marketing Strategy & Operations Consultant",
    image: "https://ik.imagekit.io/39wvgoqre/VDC/2.png",
    sow: [
      "Set up các campaign quảng cáo, tối ưu chỉ số từ quảng cáo",
      "Tư vấn tổng thể các chiến lược marketing, vận hành và hướng phát triển",
      "Quản lý và đánh giá chất lượng nội dung từ team content",
      "Phối hợp và làm việc với KOC / KOL / Tiktoker"
    ],
    results: [
      "Khâu vận hành nhà hàng có quy chuẩn, hệ thống hơn sau 1.5 tháng",
      "Doanh thu tăng từ 100tr lên 418tr/tháng",
      "Duy trì mức doanh thu >400tr/tháng ổn định"
    ]
  },
  {
    client: "JD TIM",
    role: "Make up Studio",
    image: "https://ik.imagekit.io/39wvgoqre/VDC/3.png?updatedAt=1771995175460",
    sow: [
      "Đề xuất content, key message hỗ trợ quảng cáo hiệu quả",
      "Triển khai chiến dịch quảng cáo theo tháng, quý, năm",
      "Tối ưu các chỉ số quảng cáo trả về",
      "Phân tích ngành hàng để bổ trợ chiến dịch khuyến mãi"
    ],
    results: [
      "Đỉnh điểm có khoảng 115 cô dâu đặt lịch makeup vào 2 tháng cuối năm 2022"
    ]
  },
  {
    client: "MỘC THẢO CAFE",
    role: "Cafe Strategy",
    image: "https://ik.imagekit.io/39wvgoqre/VDC/4.png?updatedAt=1771995175730",
    sow: [
      "Lên kế hoạch ngân sách hàng tháng & campaign extra",
      "Tối ưu quảng cáo dựa trên các chỉ số trả về",
      "Phối hợp với team content sản xuất nội dung quảng cáo"
    ],
    results: [
      "Doanh thu tăng từ 32-35tr/tháng lên 45-55-62tr trong các giai đoạn cao điểm"
    ]
  }
];

const GrowthMarketing = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 500 : -500,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = growthMarketingData.length - 1;
      if (nextIndex >= growthMarketingData.length) nextIndex = 0;
      return nextIndex;
    });
  };

  const current = growthMarketingData[currentIndex];

  return (
    <section id="growth-marketing" className="py-32 relative overflow-hidden bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-cyan-400 text-xs font-black tracking-[0.3em] uppercase mb-4 block">Case Studies</span>
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-6">Growth <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Marketing.</span></h2>
            <p className="text-white/40 max-w-2xl mx-auto text-lg font-medium">
              Thực thi chiến lược tăng trưởng đa kênh, tối ưu hóa chuyển đổi và doanh thu thực tế cho doanh nghiệp.
            </p>
          </motion.div>
        </div>

        <div className="relative min-h-[600px] flex items-center">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.3 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="w-full grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Left: Info */}
              <div className="space-y-10">
                <div>
                  <div className="text-cyan-400 font-black text-sm tracking-widest uppercase mb-2">{current.role}</div>
                  <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-none mb-6">{current.client}</h3>
                </div>

                <div className="space-y-8">
                  <div>
                    <h4 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                      <Zap className="w-5 h-5 text-cyan-400" />
                      Phạm vi công việc (SOW)
                    </h4>
                    <ul className="space-y-3">
                      {current.sow.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-white/50 text-sm font-medium">
                          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-cyan-400" />
                      Kết quả đạt được
                    </h4>
                    <ul className="space-y-3">
                      {current.results.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-cyan-400 text-sm font-bold">
                          <Check className="w-4 h-4 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Right: Image */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-blue-500/10 blur-2xl rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 aspect-[4/5] lg:aspect-square">
                  <img 
                    src={current.image} 
                    alt={current.client}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="absolute -bottom-16 left-0 flex gap-4 z-20">
            <button 
              onClick={() => paginate(-1)}
              className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:border-cyan-400/50 transition-all group"
            >
              <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => paginate(1)}
              className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:border-cyan-400/50 transition-all group"
            >
              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Indicators */}
          <div className="absolute -bottom-12 right-0 flex gap-2">
            {growthMarketingData.map((_, i) => (
              <div 
                key={i}
                className={`h-1 transition-all duration-500 rounded-full ${i === currentIndex ? 'w-12 bg-cyan-400' : 'w-4 bg-white/10'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  return (
    <section id="tại-sao-chọn-z-life" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">Tại sao chọn Z LIFE?</h2>
          <p className="text-2xl text-blue-400 font-medium italic">Nhanh hơn. Linh hoạt hơn. Tối ưu hơn.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Tốc độ vượt trội",
              desc: "Sản xuất trong vài giờ thay vì vài tuần. Giúp bạn nắm bắt xu hướng ngay lập tức."
            },
            {
              title: "Linh hoạt tối đa",
              desc: "Chỉnh sửa trực tiếp trên video gốc mà không cần quay lại. Tiết kiệm 70% thời gian."
            },
            {
              title: "Chi phí tối ưu",
              desc: "Quy trình AI hóa giúp chi phí tối ưu nhưng vẫn giữ chất lượng chuyên nghiệp nhất."
            }
          ].map((item, i) => (
            <div key={i} className="p-10 rounded-3xl bg-white/[0.02] border border-white/10 hover:bg-white/[0.05] transition-all">
              <h4 className="text-2xl font-bold text-white mb-4">{item.title}</h4>
              <p className="text-white/50 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const caseStudies = [
  {
    id: 'bds',
    category: 'TVC BẤT ĐỘNG SẢN',
    title: 'Dự án bất động sản Eco retreat',
    videoUrl: 'https://player.vimeo.com/video/1162937100?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479&controls=1',
    aspectRatio: 'aspect-[16/9]',
  },
  {
    id: 'honda',
    category: 'TVC Honda',
    title: 'TVC Honda CRV',
    videoUrl: 'https://player.vimeo.com/video/1162937143?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479&controls=1',
    aspectRatio: 'aspect-[16/9]',
  },
  {
    id: 'baotin',
    category: 'TVC FMCG',
    title: 'TVC Nutri FOOD',
    videoUrl: 'https://player.vimeo.com/video/1162939003?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479&controls=1',
    aspectRatio: 'aspect-[16/9]',
  },
  {
    id: 'vietjet',
    category: 'TVC HÀNG KHÔNG',
    title: 'TVC Vietjet',
    videoUrl: 'https://player.vimeo.com/video/1162938875?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479&controls=1',
    aspectRatio: 'aspect-[16/9]',
  },
];

const CaseStudies = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = caseStudies.length - 1;
      if (nextIndex >= caseStudies.length) nextIndex = 0;
      return nextIndex;
    });
  };

  const currentStudy = caseStudies[currentIndex];

  return (
    <section id="sản-phẩm" className="py-24 relative overflow-hidden">
      {/* Background LED Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none animate-led" />
      <div className="absolute top-1/3 right-0 w-[40%] h-[40%] bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none animate-aurora" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">AI Video Solutions</h2>
            <p className="text-xl text-white/50 max-w-2xl">
              Khám phá các sản phẩm truyền thông được tối ưu hóa bằng công nghệ AI đỉnh cao.
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={() => paginate(-1)}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:border-blue-500/50 transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={() => paginate(1)}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:border-blue-500/50 transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="relative h-[300px] md:h-[550px] lg:h-[650px] flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="absolute w-full h-full max-w-5xl rounded-[3rem] overflow-hidden bg-white/[0.02] border border-white/5 shadow-2xl shadow-blue-500/5"
            >
              <div className="relative w-full h-full overflow-hidden">
                <iframe
                  src={currentStudy.videoUrl}
                  className="absolute inset-0 w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title={currentStudy.title}
                />
                
                <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-black/95 via-black/40 to-transparent pointer-events-none">
                  <div className="text-cyan-400 text-sm font-bold tracking-[0.2em] uppercase mb-3">
                    {currentStudy.category}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                    {currentStudy.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-12">
          {caseStudies.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? "w-8 bg-cyan-400" : "w-2 bg-white/20"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const pricingPackages = [
  {
    title: 'Video Cơ Bản',
    subtitle: 'Không lời / Voiceover',
    price: 'Từ 2.000.000',
    priceSuffix: 'VNĐ',
    description: 'Lý tưởng cho các video sản phẩm, giới thiệu nhanh hoặc nội dung mạng xã hội không yêu cầu lời thoại phức tạp.',
    features: [
      'Tối ưu cho mạng xã hội',
      'Sản xuất nhanh chóng',
      'Chi phí AI hợp lý',
      'Phù hợp ngân sách nhỏ',
    ],
    isFeatured: false,
  },
  {
    title: 'Video Lời Thoại',
    subtitle: 'Đơn giản',
    price: 'Từ 2.500.000',
    priceSuffix: 'VNĐ',
    description: 'Phù hợp cho các video giải thích, phỏng vấn ngắn hoặc quảng cáo cần truyền tải thông điệp rõ ràng qua giọng nói.',
    features: [
      'Truyền tải thông điệp rõ ràng',
      'Quy trình sản xuất tinh gọn',
      'Giọng đọc AI chuyên nghiệp',
      'Nâng cao tính thuyết phục',
    ],
    isFeatured: false,
  },
  {
    title: 'Video TVC',
    subtitle: 'Storytelling',
    price: 'Từ 30.000.000',
    priceSuffix: 'VNĐ',
    description: 'Xây dựng câu chuyện thương hiệu hấp dẫn, tạo kết nối cảm xúc mạnh mẽ với khán giả qua kịch bản chuyên nghiệp.',
    features: [
      'Kịch bản & ý tưởng chuyên sâu',
      'Chất lượng sản xuất cao',
      'Tối ưu cho chiến dịch lớn',
      'Chi phí AI tùy theo kịch bản',
    ],
    isFeatured: true,
  },
   {
    title: 'Video TVC',
    subtitle: 'VFX & Hiệu Ứng',
    price: 'Từ 60.000.000',
    priceSuffix: 'VNĐ',
    description: 'Tạo ra những thước phim ấn tượng với hiệu ứng hình ảnh đỉnh cao, phù hợp cho các sản phẩm công nghệ, game, phim ảnh.',
    features: [
      'Kỹ xảo hình ảnh chuyên nghiệp',
      'Hậu kỳ & chỉnh màu cao cấp',
      'Tạo hình ảnh mãn nhãn',
      'Chi phí AI theo từng shot VFX',
    ],
    isFeatured: false,
  },
  {
    title: 'TVC Cao Cấp',
    subtitle: 'Storytelling & VFX',
    price: 'Từ 90.000.000',
    priceSuffix: 'VNĐ',
    description: 'Gói sản xuất toàn diện nhất, kết hợp giữa kịch bản sâu sắc và kỹ xảo điện ảnh để tạo ra một tác phẩm đỉnh cao.',
    features: [
      'Sản xuất ở cấp độ điện ảnh',
      'Sử dụng công nghệ Mocap',
      'Kịch bản và kỹ xảo phức tạp',
      'Gói sản xuất toàn diện nhất',
    ],
    isFeatured: false,
  },
  {
    title: 'Gói Tùy Chỉnh',
    subtitle: 'Giải Pháp Riêng Biệt',
    price: 'Liên Hệ',
    priceSuffix: '',
    description: 'Chúng tôi sẵn sàng xây dựng gói dịch vụ riêng, đáp ứng chính xác mục tiêu và ngân sách của dự án độc đáo của bạn.',
    features: [
        'Phân tích nhu cầu chuyên sâu',
        'Linh hoạt về quy mô',
        'Báo giá theo yêu cầu',
        'Tư vấn chiến lược miễn phí',
    ],
    isFeatured: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-cyan-400 text-xs font-black tracking-[0.3em] uppercase mb-4 block text-center">Bảng giá dịch vụ</span>
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-6">Đầu tư cho <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">tăng trưởng.</span></h2>
            <p className="text-white/40 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
              Các gói giải pháp linh hoạt, ứng dụng công nghệ AI tối tân để tối ưu chi phí và thời gian sản xuất cho doanh nghiệp.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPackages.map((pkg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative group p-10 rounded-[3rem] border transition-all duration-500 flex flex-col ${
                pkg.isFeatured 
                ? 'bg-blue-600/10 border-blue-500/50 shadow-2xl shadow-blue-500/20' 
                : 'bg-white/[0.02] border-white/5 hover:border-white/10'
              }`}
            >
              {pkg.isFeatured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full text-[10px] font-black text-white uppercase tracking-widest shadow-lg">
                  Phổ biến nhất
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-1">{pkg.title}</h3>
                <div className="text-cyan-400 text-sm font-bold tracking-wide mb-6">{pkg.subtitle}</div>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl font-black text-white tracking-tighter">{pkg.price}</span>
                  <span className="text-white/40 text-sm font-bold uppercase ml-1">{pkg.priceSuffix}</span>
                </div>
                <p className="text-white/40 text-sm leading-relaxed font-medium">
                  {pkg.description}
                </p>
              </div>

              <div className="space-y-4 mb-10 flex-grow">
                {pkg.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-cyan-400/10 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-cyan-400" />
                    </div>
                    <span className="text-white/60 text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 rounded-2xl font-bold transition-all ${
                pkg.isFeatured
                ? 'bg-white text-black hover:bg-cyan-400'
                : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
              }`}>
                Chọn gói này
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter leading-tight">
              Sẵn sàng để <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 animate-pulse">bứt phá?</span>
            </h2>
            <p className="text-xl text-white/50 mb-10 leading-relaxed max-w-lg font-medium">
              Để lại thông tin doanh nghiệp của bạn, đội ngũ chuyên gia của VDC sẽ liên hệ tư vấn giải pháp AI Marketing tối ưu nhất trong vòng 24h.
            </p>
            
            <div className="space-y-8">
              {[
                { icon: Zap, text: "Tư vấn chiến lược AI miễn phí", desc: "Phân tích hiện trạng và đề xuất lộ trình tối ưu." },
                { icon: Cpu, text: "Demo giải pháp video AI tự động", desc: "Trải nghiệm công nghệ sản xuất video hàng loạt." },
                { icon: TrendingUp, text: "Cam kết tăng trưởng chuyển đổi", desc: "Tập trung vào kết quả kinh doanh thực tế." }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-5 group">
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center shrink-0 group-hover:bg-blue-500/20 transition-colors">
                    <item.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg mb-1">{item.text}</div>
                    <div className="text-white/30 text-sm font-medium">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Background Glow */}
            <div className="absolute -inset-10 bg-blue-600/10 blur-[100px] rounded-full -z-10 animate-pulse" />
            
            <form className="bg-white/[0.02] backdrop-blur-3xl border border-white/5 p-8 md:p-12 rounded-[3.5rem] shadow-2xl space-y-8 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] ml-4">Doanh nghiệp</label>
                  <input 
                    type="text" 
                    placeholder="Tên công ty của bạn"
                    className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-5 text-white placeholder:text-white/10 focus:outline-none focus:border-cyan-400/30 focus:bg-white/[0.05] transition-all font-medium"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] ml-4">Người liên hệ</label>
                  <input 
                    type="text" 
                    placeholder="Họ và tên"
                    className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-5 text-white placeholder:text-white/10 focus:outline-none focus:border-cyan-400/30 focus:bg-white/[0.05] transition-all font-medium"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] ml-4">Số điện thoại</label>
                  <input 
                    type="tel" 
                    placeholder="090 123 4567"
                    className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-5 text-white placeholder:text-white/10 focus:outline-none focus:border-cyan-400/30 focus:bg-white/[0.05] transition-all font-medium"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] ml-4">Email</label>
                  <input 
                    type="email" 
                    placeholder="contact@company.com"
                    className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-5 text-white placeholder:text-white/10 focus:outline-none focus:border-cyan-400/30 focus:bg-white/[0.05] transition-all font-medium"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] ml-4">Nhu cầu của bạn</label>
                <textarea 
                  rows={4}
                  placeholder="Bạn đang quan tâm đến giải pháp nào? (AI Video, Marketing Strategy, Automation...)"
                  className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-5 text-white placeholder:text-white/10 focus:outline-none focus:border-cyan-400/30 focus:bg-white/[0.05] transition-all font-medium resize-none"
                />
              </div>

              <button className="w-full py-6 bg-white text-black rounded-2xl font-black text-lg hover:bg-cyan-400 transition-all shadow-2xl shadow-white/5 transform hover:-translate-y-1 active:translate-y-0">
                GỬI VIDEO GỐC ĐỂ TỐI ƯU BẰNG AI
              </button>
              
              <p className="text-center text-white/20 text-[10px] font-bold tracking-widest uppercase">
                Bảo mật thông tin 100% • Phản hồi trong 24h
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
const Footer = () => {
  return (
    <footer className="pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Column */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <img 
                src="https://ik.imagekit.io/39wvgoqre/VDC/logo.png" 
                alt="Z LIFE Logo" 
                className="h-14 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
              <span className="text-white font-bold tracking-tighter text-2xl">Z LIFE</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed font-medium">
              Tiên phong trong việc ứng dụng AI vào Digital Marketing, giúp doanh nghiệp tối ưu hóa quy trình sản xuất và bứt phá doanh thu.
            </p>
          </div>

          {/* Links Column 1 */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-sm uppercase tracking-[0.2em]">Giải pháp</h4>
            <ul className="space-y-4">
              {["AI Video Solutions", "Growth Marketing", "AI Video Recovery", "Social Management"].map(item => (
                <li key={item}>
                  <a href="#" className="text-white/40 hover:text-cyan-400 text-sm transition-colors font-medium">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-sm uppercase tracking-[0.2em]">Công ty</h4>
            <ul className="space-y-4">
              {["Về chúng tôi", "Quy trình làm việc", "Báo giá", "Liên hệ"].map(item => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-white/40 hover:text-cyan-400 text-sm transition-colors font-medium">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-sm uppercase tracking-[0.2em]">Liên hệ</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-white/40 text-sm font-medium">
                <Phone className="w-4 h-4 text-cyan-400" />
                090 123 4567
              </li>
              <li className="flex items-center gap-3 text-white/40 text-sm font-medium">
                <Mail className="w-4 h-4 text-cyan-400" />
                contact@zlife.vn
              </li>
              <li className="flex items-center gap-3 text-white/40 text-sm font-medium">
                <MapPin className="w-4 h-4 text-cyan-400" />
                TP. Hồ Chí Minh, Việt Nam
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-white/20 text-xs font-bold tracking-widest uppercase">
            © {new Date().getFullYear()} Z LIFE Creative Agency. All rights reserved.
          </div>
          
          {/* Social Media Logos - Bottom Right */}
          <div className="flex items-center gap-4">
            <a 
              href="#" 
              className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-blue-600/20 hover:border-blue-500/50 transition-all group"
              title="Facebook"
            >
              <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-cyan-600/20 hover:border-cyan-500/50 transition-all group"
              title="Zalo"
            >
              <div className="relative">
                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              </div>
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-purple-600/20 hover:border-purple-500/50 transition-all group"
              title="TikTok"
            >
              <svg className="w-5 h-5 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.03 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-1.13-.31-2.34-.25-3.41.33-.71.38-1.27 1.03-1.51 1.8-.31.82-.28 1.73.08 2.51.32.78.96 1.43 1.76 1.78 1.21.55 2.65.45 3.77-.24.77-.44 1.3-1.19 1.53-2.01.19-.7.2-1.44.2-2.15V.02z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const clientHeight = document.documentElement.clientHeight;
      
      // Show when scrolled more than 50% of the page
      if (scrollTop > (scrollHeight - clientHeight) / 2) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-[60] w-12 h-12 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:border-cyan-400/50 transition-all group shadow-2xl shadow-black"
        >
          <div className="absolute inset-0 bg-cyan-400/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          <ChevronUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform relative z-10" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-[#000000] selection:bg-cyan-500/30 selection:text-cyan-200 font-sans relative">
      {/* Grain Texture Overlay */}
      <div className="fixed inset-0 z-[1] bg-grain" />
      
      <Navbar />
      <main className="relative z-10">
        {/* Global LED Background Effects */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-blue-600/10 blur-[140px] rounded-full animate-aurora" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[80%] h-[80%] bg-cyan-600/10 blur-[160px] rounded-full animate-aurora delay-700" />
          <div className="absolute top-[30%] right-[20%] w-[40%] h-[40%] bg-blue-500/5 blur-[100px] rounded-full animate-led" />
        </div>

        <Hero />
        <Services />
        <CaseStudies />
        <GrowthMarketing />
        <Process />
        <WhyChooseUs />
        <Pricing />
        <ContactForm />
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  );
}
