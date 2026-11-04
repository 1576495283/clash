const main = (config) => {

  // -------------------------
  // 1. Basic
  // -------------------------
  config["mixed-port"] = 7890;
  config["mode"] = "rule";
  config["unified-delay"] = true;
  config["tcp-concurrent"] = true;
  config["log-level"] = "error";
  config["ipv6"] = false;
  config["allow-lan"] = false;
  config["find-process-mode"] = "always";
  config["keep-alive-interval"] = 30;
  config["keep-alive-idle"] = 30;
  config["disable-keep-alive"] = false;

  // -------------------------
  // 2. Profile
  // -------------------------
  config["profile"] = {
    "store-selected": true,
    "store-fake-ip": true
  };

  // -------------------------
  // 3. DNS
  // -------------------------
  config["dns"] = {
    "enable": true,
    "listen": "0.0.0.0:53",
    "prefer-h3": false,
    "ipv6": false,
    "enhanced-mode": "fake-ip",
    "fake-ip-range": "172.19.0.1/16",

    "fake-ip-filter-mode": "blacklist",
    "fake-ip-filter": [
      "+.lan",
      "+.local",
      "+.localhost",
      "+.home.arpa",

      "geosite:cn",
      "rule-set:China / Domain",
      "rule-set:Direct / Domain",
      "rule-set:Private / Domain",

      "+.msftconnecttest.com",
      "+.msftncsi.com",
      "resolver1.opendns.com",
      "detectportal.firefox.com",
      "network-test.debian.org",

      "ani.sidestore.io",
      "ani.sidestore.app",
      "ani.sidestore.zip",
      "ani.846969.xyz",
      "ani.npeg",
      "sidestore.io",

      "time.*.com",
      "time.*.gov",
      "time.*.edu.cn",
      "time.*.apple.com",
      "ntp.*.com",
      "time1.cloud.tencent.com",
      "time-ios.apple.com",
      "pool.ntp.org",

      "mesu.apple.com",
      "swscan.apple.com",
      "swquery.apple.com",
      "swdownload.apple.com",
      "swcdn.apple.com",
      "swdist.apple.com",
      "+.push.apple.com",

      "music.163.com",
      "music.migu.cn",
      "y.qq.com",
      "+.qqmusic.qq.com",
      "songsearch.kugou.com",
      "trackercdn.kugou.com",
      "music.taihe.com",
      "musicapi.taihe.com",
      "api.joox.com",
      "joox.com",

      "+.qq.com",
      "+.tencent.com",

      "+.srv.nintendo.net",
      "+.cdn.nintendo.net",
      "+.battle.net",
      "+.battlenet.com.cn",
      "+.wargaming.net",
      "+.wotgame.cn",
      "+.wggames.cn",
      "+.wowsgame.cn",
      "xbox.*.microsoft.com",
      "xnotify.xboxlive.com",
      "+.stun.playstation.net",
      "+.stun.*",

      "lens.l.google.com",
      "stun.l.google.com",
      "+.services.googleapis.cn",
      "+.googleapis.cn",

      "+.nflxvideo.net",

      "heartbeat.belkin.com",

      "+.cmbchina.com",
      "+.cmbimg.com",
      "open.e.189.cn",
      "opencloud.wostore.cn",
      "id.mail.wo.cn",
      "mdn.open.wo.cn",
      "hmrz.wo.cn",
      "nishub1.10010.com",
      "enrichgw.10010.com",
      "+.pub.3gppnetwork.org",

      "+.highygt.us.kg",
      "highygt.us.kg",
      "ygtnas092052.fun",
      "nas.ygtnas092052.fun",
      "+.ygtnas092052.fun",
      "highygt.win",
      "+.highygt.win",

      "+.sandai.net",
      "+.uu.163.com",
      "ps.res.netease.com",
      "local.adguard.org",
      "injections.adguard.org",
      "+.media.dssott.com",
      "ff.dorado.sdo.com",
      "shark007.net",

      "+.ynhtbank.com",
      "+.qeayr.cn",
      "+.saojc.xyz",
      "+.sssyun.xyz",
      "+.dler.cloud",
      "+.0tk8a3a1q4t94dler.com",
      "+.aerianas.top",
      "+.gptacg.top",
      "+.wxda.net",
      "+.imacosx.cn",
      "imacosx.cn",
      "www.imacosx.cn"
    ],

    "default-nameserver": [
      "223.5.5.5",
      "119.29.29.29"
    ],

    "nameserver": [
      "https://dns.alidns.com/dns-query",
      "https://doh.pub/dns-query"
    ],

    "nameserver-policy": {
      "geosite:cn": [
        "https://dns.alidns.com/dns-query",
        "https://doh.pub/dns-query"
      ],
      "geosite:private": [
        "https://dns.alidns.com/dns-query",
        "https://doh.pub/dns-query"
      ],
      "geolocation-!cn": [
        "https://cloudflare-dns.com/dns-query",
        "https://dns.google/dns-query"
      ]
    },

    "proxy-server-nameserver": [
      "https://dns.alidns.com/dns-query",
      "https://doh.pub/dns-query"
    ],

    "direct-nameserver": [
      "https://dns.alidns.com/dns-query",
      "https://doh.pub/dns-query"
    ],

    "fallback": [
      "https://cloudflare-dns.com/dns-query",
      "https://dns.google/dns-query"
    ],

    "fallback-filter": {
      "geoip": true,
      "geoip-code": "CN",
      "geosite": ["gfw"],
      "domain": [
        "+.google.com",
        "+.googleapis.com",
        "+.googlevideo.com",
        "+.youtube.com",
        "+.github.com",
        "+.openai.com",
        "+.chatgpt.com",
        "+.anthropic.com",
        "+.claude.ai"
      ]
    }
  };

  // -------------------------
  // 4. TUN
  // -------------------------
  config["tun"] = {
    "enable": true,
    "device": "FlClash",
    "stack": "gvisor",
    "dns-hijack": ["0.0.0.0:53"],
    "auto-route": true,
    "auto-detect-interface": false,
    "strict-route": true,
    "mtu": 1400,
    "inet4-address": ["172.19.0.1/30"],
    "auto-redirect": false,
    "disable-icmp-forwarding": true
  };

  // -------------------------
  // 5. Sniffer
  // -------------------------
  config["sniffer"] = {
    "enable": true,
    "parse-pure-ip": true,
    "force-dns-mapping": true,
    "override-destination": true,

    "sniff": {
      "HTTP": {
        "ports": [80, "8080-8880"]
      },
      "TLS": {
        "ports": [443, 8443]
      },
      "QUIC": {
        "ports": [443, 8443]
      }
    },

    "force-domain": [
      "+.v2ex.com",
      "+.netflix.com",
      "+.nflxvideo.net",
      "+.amazonaws.com",
      "+.media.dssott.com",
      "+.keeflys.com",
      "emby.highygt.win",
      "sygswt.qinyunjiuye.cn",
      "ssc.mohrss.gov.cn",
      "checkcoverage.apple.com",
      "+.imacosx.cn",
      "imacosx.cn",
      "www.imacosx.cn"
    ],

    "skip-domain": [
      "+.highygt.win",
      "+.baidu.com",
      "+.apple.com",
      "Mijia Cloud",
      "dlg.io.mi.com",
      "+.oray.com",
      "+.sunlogin.net",
      "+.push.apple.com",
      "ygtnas092052.fun",
      "nas.ygtnas092052.fun",
      "+.ygtnas092052.fun",
      "+.highygt.us.kg",
      "hongxingyunmovievip.com",
      "+.mijia.cloud"
    ],

    "skip-dst-address": [
      "91.105.192.0/23",
      "91.108.4.0/22",
      "91.108.8.0/21",
      "91.108.16.0/21",
      "91.108.56.0/22",
      "95.161.64.0/20",
      "149.154.160.0/20",
      "185.76.151.0/24",
      "2001:67c:4e8::/48",
      "2001:b28:f23c::/47",
      "2001:b28:f23f::/48",
      "2a0a:f280:203::/48"
    ]
  };

  // -------------------------
  // 6. NTP
  // -------------------------
  config["ntp"] = {
    "enable": true,
    "write-to-system": false,
    "server": "time.apple.com",
    "port": 123,
    "interval": 30
  };

  // ================================================================
  // 7. 原机场节点
  // ================================================================
  const originalProxies = Array.isArray(config["proxies"])
    ? config["proxies"]
    : [];

  const proxyNames = originalProxies
    .filter(p => p && p.name)
    .map(p => String(p.name));

  // ================================================================
  // 8. 原机场已有策略组
  // ================================================================
  const originalGroups = Array.isArray(config["proxy-groups"])
    ? config["proxy-groups"]
    : [];

  const builtinTargets = {
    "DIRECT": true,
    "REJECT": true,
    "REJECT-DROP": true,
    "PASS": true,
    "COMPATIBLE": true,
    "GLOBAL": true
  };

  function isAutoSelectGroup(name) {
    return !!name && (
      /自动选择/i.test(name) ||
      /auto[\s_-]*select/i.test(name) ||
      /auto[\s_-]*test/i.test(name) ||
      /测速/i.test(name)
    );
  }

  function isFailoverGroup(name) {
    return !!name && (
      /故障转移/i.test(name) ||
      /failover/i.test(name) ||
      /fallback/i.test(name)
    );
  }

  function isAllNodeName(name) {
    return !!name && (
      /全部节点/i.test(name) ||
      /所有节点/i.test(name) ||
      /全部/i.test(name) ||
      /all[\s_-]*nodes?/i.test(name) ||
      /all[\s_-]*proxies?/i.test(name)
    );
  }

  function getComposition(group) {
    const r = { total: 0, nodes: 0, groups: 0, builtin: 0 };
    if (!group || !Array.isArray(group.proxies)) return r;

    r.total = group.proxies.length;

    group.proxies.forEach(item => {
      if (proxyNames.indexOf(item) !== -1) {
        r.nodes++;
      } else if (builtinTargets[item]) {
        r.builtin++;
      } else if (originalGroups.some(g => g && g.name === item)) {
        r.groups++;
      }
    });

    return r;
  }

  function isAllNodesGroup(group) {
    if (!group || !group.name) return false;

    if (isAllNodeName(String(group.name))) return true;

    const c = getComposition(group);
    if (c.total === 0 || c.nodes < 2) return false;
    if ((c.nodes / c.total) < 0.3) return false;

    if (c.groups > 0) return c.nodes >= 5;
    return true;
  }

  const managedNames = new Set([
    "一键代理", "国内", "国外", "其他",
    "ChatGPT", "Gemini", "Copilot", "Perplexity", "Claude",
    "Meta AI", "Grok", "Groq", "GitHub", "Reddit", "Telegram",
    "instagram", "Facebook", "BiliBili", "YouTube", "TikTok",
    "Netflix", "HBO", "WhatsApp", "Disney", "Amazon", "Crunchyroll",
    "Popcorn", "Spotify", "Nvidia", "Steam", "Games", "Crypto",
    "Apple", "Google", "Microsoft", "Test", "Block",
    "香港", "搬瓦工", "台湾", "日本", "新加坡", "韩国", "美国", "英国",
    "印度", "CF", "其他地区"
  ]);

  const preservedGroups = [];

  originalGroups.forEach(group => {
    if (!group || !group.name) return;
    if (managedNames.has(group.name)) return;

    if (
      isAutoSelectGroup(group.name) ||
      isFailoverGroup(group.name) ||
      isAllNodesGroup(group)
    ) {
      const copied = JSON.parse(JSON.stringify(group));
      delete copied.hidden;
      preservedGroups.push(copied);
    }
  });

  preservedGroups.forEach(group => {
    if (!isAutoSelectGroup(group.name)) return;

    group.type = "url-test";
    group.proxies = proxyNames.slice();
    group.url = "https://www.gstatic.com/generate_204";
    group.interval = 300;
    group.timeout = 5000;
    group.tolerance = 50;
    group.lazy = true;
    group["max-failed-times"] = 3;
    group["expected-status"] = 204;

    delete group["disable-udp"];
    delete group["strategy"];
  });

  // ================================================================
  // 9. 图标
  // ================================================================
  const iconBaseURL =
    "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/";

  const groupIcons = {
    // 代理模式 / 功能组
    "一键代理": "Proxy.png",
    "手动": "Static.png",
    "自动": "Auto.png",
    "实验": "Lab.png",
    "穿透": "Bypass.png",
    "国内": "China.png",
    "国外": "Global.png",
    "其他": "Global.png",
    "其他地区": "Global.png",

    // AI 服务
    "ChatGPT": "ChatGPT.png",
    "Copilot": "Copilot.png",
    "Perplexity": "Spark.png",
    "Claude": "Bot.png",
    "Meta AI": "Facebook.png",
    "Grok": "X.png",
    "Groq": "Lambda.png",
    "Gemini": "Google.png",

    // 开发与通讯
    "GitHub": "GitHub.png",
    "Telegram": "Telegram.png",
    "WhatsApp": "Line.png",
    "Reddit": "Media.png",

    // 社交与流媒体
    "instagram": "Instagram.png",
    "Instagram": "Instagram.png",
    "Facebook": "Facebook.png",
    "BiliBili": "bilibili.png",
    "YouTube": "YouTube.png",
    "TikTok": "TikTok.png",
    "Netflix": "Netflix.png",
    "HBO": "HBO.png",
    "Disney": "Disney+.png",
    "Amazon": "Amazon.png",
    "Crunchyroll": "Streaming.png",
    "Popcorn": "ForeignMedia.png",
    "Spotify": "Spotify.png",

    // 平台与服务
    "Nvidia": "Server.png",
    "NVIDIA": "Server.png",
    "Crypto": "Cryptocurrency.png",
    "Block": "Reject.png",
    "Apple": "Apple.png",
    "Google": "Google.png",
    "Microsoft": "Microsoft.png",
    "CF": "Cloudflare.png",
    "Cloudflare": "Cloudflare.png",

    // 游戏与测试
    "Steam": "Steam.png",
    "Games": "Game.png",
    "Test": "Speedtest.png",

    // 地区
    "香港": "Hong_Kong.png",
    "搬瓦工": "Global.png",
    "台湾": "Taiwan.png",
    "日本": "Japan.png",
    "新加坡": "Singapore.png",
    "韩国": "Korea.png",
    "美国": "United_States.png",
    "英国": "United_Kingdom.png",
    "印度": "India.png",

    // 兜底
    "默认": "Global.png"
  };

  function addIcon(group, name) {
    if (groupIcons[name]) {
      group.icon = iconBaseURL + groupIcons[name];
    } else {
      // 未匹配到具体名称时使用兜底图标
      group.icon = iconBaseURL + "Global.png";
    }
    return group;
  }

  // ================================================================
  // 10. 节点地区识别
  // ================================================================
  const regionPatterns = {
    "香港": [
      /香港/i, /\bHK\b/i, /HKG/i, /Hong\s*Kong/i, /HongKong/i,
      /广港/i
    ],
    "搬瓦工": [
      /JMS/i
    ],
    "台湾": [
      /台湾/i, /台灣/i, /\bTW\b/i, /TPE/i, /KHH/i, /TSA/i,
      /Taiwan/i, /TaiWan/i, /广台/i
    ],
    "日本": [
      /日本/i, /\bJP\b/i, /NRT/i, /HND/i, /KIX/i, /CTS/i, /FUK/i,
      /Japan/i, /Tokyo/i, /Osaka/i, /广日/i, /川日/i, /泉日/i,
      /埼玉/i, /沪日/i, /深日/i, /c86s4/i
    ],
    "新加坡": [
      /新加坡/i, /\bSG\b/i, /SIN/i, /XSP/i, /Singapore/i,
      /广新/i, /坡/i, /狮城/i
    ],
    "韩国": [
      /韩国/i, /韓國/i, /\bKR\b/i, /ICN/i, /GMP/i, /PUS/i,
      /Korea/i, /Seoul/i, /广韩/i, /首尔/i, /春川/i
    ],
    "美国": [
      /美国/i, /\bUS\b/i, /\bUSA\b/i, /LAX/i, /SFO/i, /JFK/i,
      /SJC/i, /United\s*States/i, /America/i, /Los\s*Angeles/i,
      /New\s*York/i, /广美/i, /纽约/i, /波特兰/i, /达拉斯/i,
      /俄勒/i, /凤凰城/i, /费利蒙/i, /洛杉/i, /圣何塞/i,
      /圣克拉/i, /西雅/i, /芝加/i, /c86s1/i, /c86s2/i, /c86s3/i, /c86s801/i
    ],
    "英国": [
      /英国/i, /\bUK\b/i, /United\s*Kingdom/i, /England/i,
      /London/i, /Manchester/i, /伦敦/i, /英/i, /c86s5/i
    ],
    "印度": [
      /India/i, /\bIN\b/i, /Mumbai/i, /Delhi/i,
      /^IN(?!DONESIA)/i, /(?<!印)印度(?!尼)/i,
      /孟买/i, /德里/i, /印度-西部/i, /其他-印度/i
    ]
  };

  function isCF(name) {
    return /CF|CF随机|CFnat/i.test(String(name || ""));
  }

  function detectRegions(proxyName) {
    const text = String(proxyName || "");
    const regions = [];

    if (isCF(text)) {
      regions.push("CF");
    }

    for (const region of [
      "香港", "搬瓦工", "台湾", "日本", "新加坡", "韩国",
      "美国", "英国", "印度"
    ]) {
      if (regionPatterns[region].some(p => p.test(text))) {
        regions.push(region);
      }
    }

    if (regions.length === 0) {
      regions.push("其他地区");
    }

    return regions;
  }

  const regionNodes = {
    "香港": [],
    "搬瓦工": [],
    "台湾": [],
    "日本": [],
    "新加坡": [],
    "韩国": [],
    "美国": [],
    "英国": [],
    "印度": [],
    "CF": [],
    "其他地区": []
  };

  originalProxies.forEach(proxy => {
    if (!proxy || !proxy.name) return;

    const regions = detectRegions(proxy.name);

    regions.forEach(region => {
      if (!regionNodes[region]) return;
      regionNodes[region].push(proxy.name);
    });
  });

  const regionOrder = [
    "香港", "搬瓦工", "台湾", "日本", "新加坡", "韩国",
    "美国", "英国", "印度", "CF", "其他地区"
  ];

  // ================================================================
  // 11. 地区组
  // ================================================================
  const regionGroups = [];

  regionOrder.forEach(region => {
    const nodes = regionNodes[region];
    if (!nodes || nodes.length === 0) return;

    const manual = addIcon({
      "name": region + "-手动",
      "type": "select",
      "proxies": nodes
    }, region);

    const auto = addIcon({
      "name": region + "-自动",
      "type": "url-test",
      "proxies": nodes,
      "url": "https://www.gstatic.com/generate_204",
      "interval": 300,
      "timeout": 5000,
      "tolerance": 50,
      "lazy": true,
      "max-failed-times": 3,
      "expected-status": 204
    }, region);

    const fallback = addIcon({
      "name": region + "-故转",
      "type": "fallback",
      "proxies": [
        region + "-手动",
        region + "-自动"
      ],
      "interval": 300,
      "lazy": false
    }, region);

    regionGroups.push(manual, auto, fallback);
  });

  const availableRegionFallbacks = regionOrder
    .filter(region => regionNodes[region].length > 0)
    .map(region => region + "-故转");

  // ================================================================
  // 12. 总节点组
  // ================================================================
  const allManual = addIcon({
    "name": "所有-手动",
    "type": "select",
    "proxies": proxyNames.length > 0
      ? proxyNames.slice()
      : ["DIRECT"]
  }, "其他地区");

  const allAuto = addIcon({
    "name": "所有-自动",
    "type": "url-test",
    "proxies": proxyNames.length > 0
      ? proxyNames.slice()
      : ["DIRECT"],
    "url": "https://www.gstatic.com/generate_204",
    "interval": 300,
    "timeout": 5000,
    "tolerance": 50,
    "lazy": true,
    "max-failed-times": 3,
    "expected-status": 204
  }, "其他地区");

  // ================================================================
  // 13. 业务组
  // ================================================================
  const defaultTargets = [
    "DIRECT",
    "所有-手动",
    "所有-自动"
  ].concat(availableRegionFallbacks).concat(["REJECT"]);

  function businessGroup(name) {
    return addIcon({
      "name": name,
      "type": "select",
      "proxies": defaultTargets.slice()
    }, name);
  }

  const businessNames = [
    "ChatGPT",
    "Gemini",
    "Copilot",
    "Perplexity",
    "Claude",
    "Meta AI",
    "Grok",
    "Groq",
    "GitHub",
    "Reddit",
    "Telegram",
    "instagram",
    "Facebook",
    "BiliBili",
    "YouTube",
    "TikTok",
    "Netflix",
    "HBO",
    "WhatsApp",
    "Disney",
    "Amazon",
    "Crunchyroll",
    "Popcorn",
    "Spotify",
    "Nvidia",
    "Steam",
    "Games",
    "Crypto",
    "Apple",
    "Google",
    "Microsoft",
    "Test",
    "Block",
    "国外",
    "国内",
    "其他"
  ];

  const businessGroups = businessNames.map(businessGroup);

  const oneClick = addIcon({
    "name": "一键代理",
    "type": "select",
    "proxies": ["所有-手动", "所有-自动"]
      .concat(availableRegionFallbacks)
      .concat(["DIRECT", "REJECT"])
  }, "一键代理");

  // ================================================================
  // 14. 最终 proxy-groups
  // ================================================================
  config["proxy-groups"] = []
    .concat(preservedGroups)
    .concat([allManual, allAuto])
    .concat(businessGroups)
    .concat(regionGroups)
    .concat([oneClick]);

  // ================================================================
  // 15. Rule Providers
  // ================================================================
  function provider(url, behavior, format) {
    return {
      "type": "http",
      "interval": 86400,
      "behavior": behavior,
      "format": format,
      "url": url
    };
  }

  config["rule-providers"] = {
    "TEST / Domain": provider(
      "https://gh-proxy.com/raw.githubusercontent.com/liandu2024/clash/refs/heads/main/list/Check.list",
      "classical", "text"
    ),

    "ChatGPT / Domain": provider(
      "https://gh-proxy.com/github.com/metacubex/meta-rules-dat/raw/refs/heads/meta/geo/geosite/openai.mrs",
      "domain", "mrs"
    ),
    "Claude / Domain": provider(
      "https://gh-proxy.com/raw.githubusercontent.com/blackmatrix7/ios_rule_script/refs/heads/master/rule/Clash/Claude/Claude.list",
      "classical", "text"
    ),
    "Meta AI / Domain": provider(
      "https://gh-proxy.com/raw.githubusercontent.com/liandu2024/clash/refs/heads/main/list/MetaAi.list",
      "classical", "text"
    ),
    "Perplexity / Domain": provider(
      "https://gh-proxy.com/github.com/metacubex/meta-rules-dat/raw/refs/heads/meta/geo/geosite/perplexity.mrs",
      "domain", "mrs"
    ),
    "Copilot / Domain": provider(
      "https://gh-proxy.com/raw.githubusercontent.com/liandu2024/clash/refs/heads/main/list/Copilot.list",
      "classical", "text"
    ),
    "Gemini / Domain": provider(
      "https://gh-proxy.com/raw.githubusercontent.com/liandu2024/clash/refs/heads/main/list/Gemini.list",
      "classical", "text"
    ),
    "GitHub / Domain": provider(
      "https://gh-proxy.com/github.com/metacubex/meta-rules-dat/raw/refs/heads/meta/geo/geosite/github.mrs",
      "domain", "mrs"
    ),
    "Telegram / Domain": provider(
      "https://gh-proxy.com/github.com/metacubex/meta-rules-dat/raw/refs/heads/meta/geo/geosite/telegram.mrs",
      "domain", "mrs"
    ),
    "Telegram / IP": provider(
      "https://gh-proxy.com/github.com/metacubex/meta-rules-dat/raw/refs/heads/meta/geo/geoip/telegram.mrs",
      "ipcidr", "mrs"
    ),
    "Twitter / Domain": provider(
      "https://gh-proxy.com/github.com/metacubex/meta-rules-dat/raw/refs/heads/meta/geo/geosite/x.mrs",
      "domain", "mrs"
    ),
    "WhatsApp / Domain": provider(
      "https://gh-proxy.com/raw.githubusercontent.com/blackmatrix7/ios_rule_script/refs/heads/master/rule/Clash/Whatsapp/Whatsapp.list",
      "classical", "text"
    ),
    "Facebook / Domain": provider(
      "https://gh-proxy.com/github.com/metacubex/meta-rules-dat/raw/refs/heads/meta/geo/geosite/facebook.mrs",
      "domain", "mrs"
    ),
    "Amazon / Domain": provider(
      "https://gh-proxy.com/github.com/metacubex/meta-rules-dat/raw/refs/heads/meta/geo/geosite/amazon.mrs",
      "domain", "mrs"
    ),
    "Apple-CN / Domain": provider(
      "https://gh-proxy.com/github.com/metacubex/meta-rules-dat/raw/refs/heads/meta/geo/geosite/apple-cn.mrs",
      "domain", "mrs"
    ),
    "Apple / Domain": provider(
      "https://gh-proxy.com/github.com/metacubex/meta-rules-dat/raw/refs/heads/meta/geo/geosite/apple.mrs",
      "domain", "mrs"
    ),
    "Apple-Custome / Domain": provider(
      "https://gh-proxy.com/raw.githubusercontent.com/liandu2024/clash/refs/heads/main/list/Apple.list",
      "classical", "text"
    ),
    "Microsoft / Domain": provider(
      "https://gh-proxy.com/github.com/metacubex/meta-rules-dat/raw/refs/heads/meta/geo/geosite/microsoft.mrs",
      "domain", "mrs"
    ),
    "OKX / Domain": provider(
      "https://gh-proxy.com/github.com/metacubex/meta-rules-dat/raw/refs/heads/meta/geo/geosite/okx.mrs",
      "domain", "mrs"
    ),
    "Bybit / Domain": provider(
      "https://gh-proxy.com/github.com/metacubex/meta-rules-dat/raw/refs/heads/meta/geo/geosite/bybit.mrs",
      "domain", "mrs"
    ),
    "Binance / Domain": provider(
      "https://gh-proxy.com/github.com/metacubex/meta-rules-dat/raw/refs/heads/meta/geo/geosite/binance.mrs",
      "domain", "mrs"
    ),
    "TikTok / Domain": provider(
      "https://gh-proxy.com/github.com/metacubex/meta-rules-dat/raw/refs/heads/meta/geo/geosite/tiktok.mrs",
      "domain", "mrs"
    ),
    "Netflix / Domain": provider(
      "https://gh-proxy.com/github.com/metacubex/meta-rules-dat/raw/refs/heads/meta/geo/geosite/netflix.mrs",
      "domain", "mrs"
    ),
    "Netflix / IP": provider(
      "https://gh-proxy.com/github.com/metacubex/meta-rules-dat/raw/refs/heads/meta/geo/geoip/netflix.mrs",
      "ipcidr", "mrs"
    ),
    "Disney / Domain": provider(
      "https://gh-proxy.com/github.com/metacubex/meta-rules-dat/raw/refs/heads/meta/geo/geosite/disney.mrs",
      "domain", "mrs"
    ),
    "HBO / Domain": provider(
      "https://gh-proxy.com/github.com/metacubex/meta-rules-dat/raw/refs/heads/meta/geo/geosite/hbo.mrs",
      "domain", "mrs"
    ),
    "instagram / Domain": provider(
      "https://gh-proxy.com/github.com/metacubex/meta-rules-dat/raw/refs/heads/meta/geo/geosite/instagram.mrs",
      "domain", "mrs"
    ),
    "Spotify / Domain": provider(
      "https://gh-proxy.com/github.com/metacubex/meta-rules-dat/raw/refs/heads/meta/geo/geosite/spotify.mrs",
      "domain", "mrs"
    ),
    "Steam / Domain": provider(
      "https://gh-proxy.com/github.com/metacubex/meta-rules-dat/raw/refs/heads/meta/geo/geosite/steam.mrs",
      "domain", "mrs"
    ),
    "Epic / Domain": provider(
      "https://gh-proxy.com/raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Epic/Epic.list",
      "classical", "text"
    ),
    "EA / Domain": provider(
      "https://gh-proxy.com/raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/EA/EA.list",
      "classical", "text"
    ),
    "Blizzard / Domain": provider(
      "https://gh-proxy.com/raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Blizzard/Blizzard.list",
      "classical", "text"
    ),
    "UBI / Domain": provider(
      "https://gh-proxy.com/raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/UBI/UBI.list",
      "classical", "text"
    ),
    "PlayStation / Domain": provider(
      "https://gh-proxy.com/raw.githubusercontent.com/blackmatrix7/ios_rule_script/refs/heads/master/rule/Clash/PlayStation/PlayStation.list",
      "classical", "text"
    ),
    "Nintend / Domain": provider(
      "https://gh-proxy.com/raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Nintendo/Nintendo.list",
      "classical", "text"
    ),
    "Proxy / Domain": provider(
      "https://gh-proxy.com/raw.githubusercontent.com/liandu2024/clash/refs/heads/main/list/Proxy.list",
      "classical", "text"
    ),
    "Globe / Domain": provider(
      "https://gh-proxy.com/raw.githubusercontent.com/blackmatrix7/ios_rule_script/refs/heads/master/rule/Clash/Global/Global.list",
      "classical", "text"
    ),
    "Block / Domain": provider(
      "https://gh-proxy.com/raw.githubusercontent.com/liandu2024/clash/refs/heads/main/list/Block.list",
      "classical", "text"
    ),
    "Nvidia / Domain": provider(
      "https://gh-proxy.com/raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Nvidia/Nvidia.list",
      "classical", "text"
    ),
    "Crunchyroll / Domain": provider(
      "https://gh-proxy.com/raw.githubusercontent.com/liandu2024/clash/refs/heads/main/list/Crunchyroll.list",
      "classical", "text"
    ),
    "Reddit / Domain": provider(
      "https://gh-proxy.com/github.com/metacubex/meta-rules-dat/raw/refs/heads/meta/geo/geosite/reddit.mrs",
      "domain", "mrs"
    ),
    "Groq / Domain": provider(
      "https://gh-proxy.com/github.com/metacubex/meta-rules-dat/raw/refs/heads/meta/geo/geosite/groq.mrs",
      "domain", "mrs"
    ),
    "Grok / Domain": provider(
      "https://gh-proxy.com/raw.githubusercontent.com/liandu2024/clash/refs/heads/main/list/Grok.list",
      "classical", "text"
    ),
    "Popcorn / Domain": provider(
      "https://gh-proxy.com/raw.githubusercontent.com/liandu2024/clash/refs/heads/main/list/Popcorn.list",
      "classical", "text"
    ),
    "Direct / Domain": provider(
      "https://gh-proxy.com/raw.githubusercontent.com/liandu2024/clash/refs/heads/main/list/Direct.list",
      "classical", "text"
    ),
    "Private / Domain": provider(
      "https://gh-proxy.com/github.com/metacubex/meta-rules-dat/raw/refs/heads/meta/geo/geosite/private.mrs",
      "domain", "mrs"
    ),
    "China / Domain": provider(
      "https://gh-proxy.com/github.com/metacubex/meta-rules-dat/raw/refs/heads/meta/geo/geosite/cn.mrs",
      "domain", "mrs"
    ),
    "China / IP": provider(
      "https://gh-proxy.com/github.com/metacubex/meta-rules-dat/raw/refs/heads/meta/geo/geoip/cn.mrs",
      "ipcidr", "mrs"
    ),
    "Youtube / Domain": provider(
      "https://gh-proxy.com/github.com/metacubex/meta-rules-dat/raw/refs/heads/meta/geo/geosite/youtube.mrs",
      "domain", "mrs"
    ),
    "Google / Domain": provider(
      "https://gh-proxy.com/github.com/metacubex/meta-rules-dat/raw/refs/heads/meta/geo/geosite/google.mrs",
      "domain", "mrs"
    ),
    "Google / IP": provider(
      "https://gh-proxy.com/github.com/metacubex/meta-rules-dat/raw/refs/heads/meta/geo/geoip/google.mrs",
      "ipcidr", "mrs"
    ),
    "BiliBili / Domain": provider(
      "https://gh-proxy.com/github.com/metacubex/meta-rules-dat/raw/refs/heads/meta/geo/geosite/bilibili.mrs",
      "domain", "mrs"
    ),
    "Emby": provider(
      "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/refs/heads/master/rule/Clash/Emby/Emby.list",
      "classical", "text"
    ),
    "Emotnstore": provider(
      "https://raw.githubusercontent.com/1576495283/clash/refs/heads/list/emotnstore.list",
      "classical", "text"
    )
  };

  // ================================================================
  // 16. Rules
  // ================================================================
  config["rules"] = [
    // 自定义 / 本地
    "DOMAIN-SUFFIX,highygt.win,DIRECT",
    "DOMAIN-SUFFIX,ygtnas092052.fun,DIRECT",
    "DOMAIN-KEYWORD,newtv,DIRECT",
    "DOMAIN-KEYWORD,qq,DIRECT",
    "DOMAIN-SUFFIX,chronodivide.com,DIRECT",
    "DOMAIN-SUFFIX,qinyunjiuye,DIRECT",
    "DOMAIN-SUFFIX,mohrss,DIRECT",
    "SRC-IP-CIDR,172.18.20.10/32,DIRECT",

    // 内网
    "IP-CIDR,192.168.2.0/24,DIRECT,no-resolve",
    "IP-CIDR,172.16.0.0/12,DIRECT,no-resolve",
    "IP-CIDR,198.41.0.0/12,DIRECT,no-resolve",
    "IP-CIDR,10.0.0.0/8,DIRECT,no-resolve",
    "IP-CIDR,172.28.0.0/16,DIRECT,no-resolve",
    "IP-CIDR,125.76.184.114/32,DIRECT,no-resolve",
    "DOMAIN-SUFFIX,gov.cn,DIRECT",

    // 特殊站点
    "DOMAIN-KEYWORD,bilibili,所有-手动",
    "DOMAIN-KEYWORD,hdhive,所有-手动",
    "DOMAIN-SUFFIX,hongxingyunmovie.vip,所有-手动",
    "DOMAIN-SUFFIX,keeflys.com,所有-手动",
    "DOMAIN-SUFFIX,dangsfly.com,所有-手动",
    "DOMAIN-SUFFIX,imacosx.cn,DIRECT",
    "DOMAIN,imacosx.cn,DIRECT",

    // 测试 / 屏蔽
    "RULE-SET,TEST / Domain,Test",
    "RULE-SET,Block / Domain,Block",

    // AI
    "RULE-SET,ChatGPT / Domain,ChatGPT",
    "RULE-SET,Claude / Domain,Claude",
    "RULE-SET,Meta AI / Domain,Meta AI",
    "RULE-SET,Perplexity / Domain,Perplexity",
    "RULE-SET,Copilot / Domain,Copilot",
    "RULE-SET,Gemini / Domain,Gemini",
    "RULE-SET,Groq / Domain,Groq",
    "RULE-SET,Grok / Domain,Grok",

    // 社交 / 通讯
    "RULE-SET,Reddit / Domain,Reddit",
    "RULE-SET,GitHub / Domain,GitHub",
    "RULE-SET,Telegram / Domain,Telegram",
    "RULE-SET,Telegram / IP,Telegram",
    "RULE-SET,WhatsApp / Domain,WhatsApp",
    "RULE-SET,Facebook / Domain,Facebook",
    "RULE-SET,instagram / Domain,instagram",

    // Apple / Microsoft
    "RULE-SET,Apple / Domain,Apple",
    "RULE-SET,Apple-CN / Domain,Apple",
    "RULE-SET,Apple-Custome / Domain,Apple",
    "RULE-SET,Microsoft / Domain,Microsoft",

    // 加密货币
    "RULE-SET,OKX / Domain,Crypto",
    "RULE-SET,Bybit / Domain,Crypto",
    "RULE-SET,Binance / Domain,Crypto",

    // 视频 / 媒体
    "RULE-SET,BiliBili / Domain,BiliBili",
    "RULE-SET,Youtube / Domain,YouTube",
    "RULE-SET,TikTok / Domain,TikTok",
    "RULE-SET,Netflix / Domain,Netflix",
    "RULE-SET,Netflix / IP,Netflix,no-resolve",
    "RULE-SET,Disney / Domain,Disney",
    "RULE-SET,Amazon / Domain,Amazon",
    "RULE-SET,Crunchyroll / Domain,Crunchyroll",
    "RULE-SET,Popcorn / Domain,Popcorn",
    "RULE-SET,HBO / Domain,HBO",
    "RULE-SET,Spotify / Domain,Spotify",

    // 游戏
    "RULE-SET,Steam / Domain,Steam",
    "RULE-SET,Epic / Domain,Games",
    "RULE-SET,EA / Domain,Games",
    "RULE-SET,Blizzard / Domain,Games",
    "RULE-SET,UBI / Domain,Games",
    "RULE-SET,PlayStation / Domain,Games",
    "RULE-SET,Nintend / Domain,Games",

    // Google / Nvidia
    "RULE-SET,Google / Domain,Google",
    "RULE-SET,Google / IP,Google,no-resolve",
    "RULE-SET,Nvidia / Domain,Nvidia",

    // 自用服务
    "RULE-SET,Emby,所有-手动",
    "RULE-SET,Emotnstore,所有-手动",

    // 通用国外 / 国内
    "RULE-SET,Proxy / Domain,国外",
    "RULE-SET,Globe / Domain,国外",
    "RULE-SET,Direct / Domain,国内",
    "RULE-SET,China / Domain,国内",
    "RULE-SET,China / IP,国内,no-resolve",
    "RULE-SET,Private / Domain,国内",

    // 最终
    "MATCH,其他"
  ];

  return config;
};
