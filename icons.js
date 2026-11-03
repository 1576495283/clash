// 图标  // 正则匹配设置代理组图标

const iconBaseURL =
  "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/";

const iconMap = [
  // 代理模式 / 功能组
  { reg: /一键代理/, url: iconBaseURL + "Proxy.png" },
  { reg: /手动/, url: iconBaseURL + "Static.png" },
  { reg: /自动/, url: iconBaseURL + "Auto.png" },
  { reg: /实验/, url: iconBaseURL + "Lab.png" },
  { reg: /穿透/, url: iconBaseURL + "Bypass.png" },
  { reg: /国内/, url: iconBaseURL + "China.png" },

  // AI 服务
  { reg: /ChatGPT/, url: iconBaseURL + "ChatGPT.png" },
  { reg: /Copilot/, url: iconBaseURL + "Copilot.png" },
  { reg: /Perplexity/, url: iconBaseURL + "Spark.png" },
  { reg: /Claude/, url: iconBaseURL + "Bot.png" },
  { reg: /Meta AI/, url: iconBaseURL + "Facebook.png" },
  { reg: /Grok/, url: iconBaseURL + "X.png" },
  { reg: /Groq/, url: iconBaseURL + "Lambda.png" },
  { reg: /Gemini/, url: iconBaseURL + "Google.png" },

  // 开发与通讯
  { reg: /GitHub/, url: iconBaseURL + "GitHub.png" },
  { reg: /Telegram/, url: iconBaseURL + "Telegram.png" },
  { reg: /WhatsApp/, url: iconBaseURL + "Line.png" },
  { reg: /Reddit/, url: iconBaseURL + "Media.png" },

  // 社交与流媒体
  { reg: /Instagram|instagram/, url: iconBaseURL + "Instagram.png" },
  { reg: /Facebook/, url: iconBaseURL + "Facebook.png" },
  { reg: /BiliBili/, url: iconBaseURL + "bilibili.png" },
  { reg: /YouTube/, url: iconBaseURL + "YouTube.png" },
  { reg: /TikTok/, url: iconBaseURL + "TikTok.png" },
  { reg: /Netflix/, url: iconBaseURL + "Netflix.png" },
  { reg: /HBO/, url: iconBaseURL + "HBO.png" },
  { reg: /Disney/, url: iconBaseURL + "Disney+.png" },
  { reg: /Amazon/, url: iconBaseURL + "Amazon.png" },
  { reg: /Crunchyroll/, url: iconBaseURL + "Streaming.png" },
  { reg: /Popcorn/, url: iconBaseURL + "ForeignMedia.png" },
  { reg: /Spotify/, url: iconBaseURL + "Spotify.png" },

  // 平台与服务
  { reg: /Nvidia|NVIDIA/, url: iconBaseURL + "Server.png" },
  { reg: /Crypto/, url: iconBaseURL + "Cryptocurrency.png" },
  { reg: /Block/, url: iconBaseURL + "Reject.png" },
  { reg: /Apple/, url: iconBaseURL + "Apple.png" },
  { reg: /Google/, url: iconBaseURL + "Google.png" },
  { reg: /Microsoft/, url: iconBaseURL + "Microsoft.png" },
  { reg: /CF|Cloudflare/, url: iconBaseURL + "Cloudflare.png" },

  // 游戏与测试
  { reg: /Steam/, url: iconBaseURL + "Steam.png" },
  { reg: /Games/, url: iconBaseURL + "Game.png" },
  { reg: /Test/, url: iconBaseURL + "Speedtest.png" },

  // 地区
  { reg: /香港/, url: iconBaseURL + "Hong_Kong.png" },
  { reg: /台湾/, url: iconBaseURL + "Taiwan.png" },
  { reg: /日本/, url: iconBaseURL + "Japan.png" },
  { reg: /新加坡/, url: iconBaseURL + "Singapore.png" },
  { reg: /韩国/, url: iconBaseURL + "Korea.png" },
  { reg: /美国/, url: iconBaseURL + "United_States.png" },
  { reg: /英国/, url: iconBaseURL + "United_Kingdom.png" },
  { reg: /印度/, url: iconBaseURL + "India.png" },

  // 兜底：其他国外 / 其他地区 / 未匹配组
  { reg: /国外|其他|其他地区/, url: iconBaseURL + "Global.png" },
  { reg: /.*/, url: iconBaseURL + "Global.png" },
];

const keepOrigin = true; // 是否保留配置中原本存在的图标

function main(config) {
  if (!config["proxy-groups"]) return config;

  for (let group of config["proxy-groups"]) {
    if (keepOrigin && group.icon) continue;

    for (let { reg, url } of iconMap) {
      if (group.name.match(reg)) {
        group.icon = url;
        break;
      }
    }
  }

  return config;
}