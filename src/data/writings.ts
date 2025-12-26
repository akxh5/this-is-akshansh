export interface Writing {
  id: string;
  title: string;
  excerpt: string;
  cover: string;
  url: string;
  platform: 'Medium' | 'Substack' | 'Notion';
}

export const writings: Writing[] = [
  {
    id: "solana-mobile-revolution",
    title: "THE SOLANA MOBILE REVOLUTION: FROM PROMISE TO REALITY",
    excerpt: "Solana's push into mobile devices, examining the journey from initial promises to tangible real-world impact and future potential.",
    cover: "/writing-covers/solana-mobile-revolution.png",
    url: "https://www.notion.so/THE-SOLANA-MOBILE-REVOLUTION-FROM-PROMISE-TO-REALITY-22e0a783cf0780899a02cefc8b8efc5d",
    platform: "Notion"
  },
  {
    id: "dual-platform-virality",
    title: "The Dual-Platform Virality Nexus: AI’s Transformative Societal Impact on X and Medium",
    excerpt: "Examines how AI is shaping viral content distribution across X (formerly Twitter) and Medium, analyzing its profound societal impact.",
    cover: "/writing-covers/dual-platform-virality.png",
    url: "https://medium.com/@aksh11ansh/the-dual-platform-virality-nexus-ais-transformative-societal-impact-on-x-and-medium-c95fda8e0e8d",
    platform: "Medium"
  },
  {
    id: "inside-solana-ecosystem",
    title: "Inside the Solana Ecosystem: Why It’s More Than Just a Fast Chain",
    excerpt: "A deep dive into the Solana ecosystem, revealing its unique features and the innovations beyond its high transaction speed.",
    cover: "/writing-covers/inside-solana-ecosystem.png",
    url: "https://medium.com/@aksh11ansh/inside-the-solana-ecosystem-why-its-more-than-just-a-fast-chain-afcd41a38418",
    platform: "Medium"
  },
  {
    id: "monad-evm-speed",
    title: "How Monad Rebuilt the EVM for Speed",
    excerpt: "Explores Monad's groundbreaking approach to re-engineering the Ethereum Virtual Machine (EVM) for unparalleled speed and efficiency.",
    cover: "/writing-covers/monad-evm-speed.png",
    url: "https://open.substack.com/pub/elysiumre/p/how-monad-rebuilt-the-evm-for-speed",
    platform: "Substack"
  }
];