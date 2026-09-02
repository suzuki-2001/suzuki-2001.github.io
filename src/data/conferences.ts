export type Presentation = {
  title: string;
  note?: string;
  links?: { label: string; url: string }[];
};

export type Conference = {
  title: string;
  type: string | null;
  location: string;
  date: string;
  upcoming: boolean;
  presentations: Presentation[];
};

export const conferences: Conference[] = [
  {
    title: "BMB2026 - MBSJ / JBS Joint Meeting",
    type: null,
    location: "Yokohama, Japan",
    date: "Dec 2026",
    upcoming: true,
    presentations: [
      { title: "Generating diverse protein conformations by repulsion in the conditioning representation" }
    ]
  },
  {
    title: "ICBBS 2026 - 64th Annual Meeting of the BSJ",
    type: "Poster",
    location: "Busan, Korea",
    date: "Nov 2026",
    upcoming: true,
    presentations: [
      { title: "Surfacing the alternative conformations latent in deep-learning protein structure predictors" }
    ]
  },
  {
    title: "CBI Society Annual Meeting 2026",
    type: null,
    location: "Tokyo, Japan",
    date: "Oct 2026",
    upcoming: true,
    presentations: []
  },
  {
    title: "IIBMP 2026 - JSBi Annual Meeting",
    type: "Poster / Workshop",
    location: "Sagamihara, Japan",
    date: "Aug 2026",
    upcoming: false,
    presentations: [
      { title: "Expanding conformational sampling in diffusion-based protein structure prediction models at inference time" },
      {
        title: "ゲノム基盤モデルは雄性不稔を学んでいるか：Sparse Autoencoder による解釈",
        note: "Open-call workshop: 生命の理解と設計・制御を目指すバイオ生成AI",
        links: [
          { label: "Workshop", url: "https://www.jsbi.org/iibmp2026/program/workshops/#bio-genai" }
        ]
      }
    ]
  },
  {
    title: "The 66th Biophysics Summer School",
    type: "Hands-on / Poster",
    location: "Nagano, Japan",
    date: "Aug 2026",
    upcoming: false,
    presentations: [
      { title: "タンパク質構造予測のペア表現への推論時介入によるアンサンブル拡張" },
      {
        title: "ゲノム配列生成AIの仕組みと実践",
        note: "Teaching assistant for the hands-on lecture by Koichi Higashi (ROIS ALIS)",
        links: [
          { label: "Lecture", url: "https://bpwakate.net/summer2026/contents/lecture/32higashi/" },
          { label: "Materials", url: "https://github.com/GenAIBio/evo2-sae-handson" }
        ]
      }
    ]
  },
  {
    title: "Pacific Symposium on Biocomputing (PSB) 2026",
    type: "Poster",
    location: "Hawaii, USA",
    date: "Jan 2026",
    upcoming: false,
    presentations: [
      { title: "Predicting alternative protein conformations by perturbing pair representations" }
    ]
  },
  {
    title: "The 48th Annual Meeting of the Molecular Biology Society of Japan",
    type: "Poster / Forum",
    location: "Yokohama, Japan",
    date: "Dec 2025",
    upcoming: false,
    presentations: [
      { title: "Steering dynamic protein structures by latent space manipulation of deep generative models" }
    ]
  },
  {
    title: "The 143rd Meeting of the Japanese Society of Breeding",
    type: "Oral",
    location: "Shizuoka, Japan",
    date: "Mar 2023",
    upcoming: false,
    presentations: [
      { title: "Development of non-destructive, high-throughput metabolite measurement for a Micro-Tom mutant population" }
    ]
  }
];
