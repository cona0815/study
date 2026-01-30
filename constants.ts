import { AppSettings, Grade, LibraryItem, UserData } from "./types";

export const DEFAULT_ISLAND_LEVELS = [
  { level: 1, minExp: 0, title: "荒蕪小島", icon: "🏝️" },
  { level: 2, minExp: 100, title: "萌芽之島", icon: "🌱" },
  { level: 3, minExp: 300, title: "森林之島", icon: "🌲" },
  { level: 4, minExp: 600, title: "村落之島", icon: "⛺" },
  { level: 5, minExp: 1000, title: "繁榮城鎮", icon: "🏰" },
  { level: 6, minExp: 1500, title: "天空之城", icon: "☁️" },
  { level: 7, minExp: 2500, title: "星際基地", icon: "🚀" },
];

export const DEFAULT_SETTINGS: AppSettings = {
  passingScore: 80,
  expMemo: 10,
  expPractice: 5,
  expCorrect: 5,
  expScoreEntry: 10,
  expPass: 20,
  expPomodoro: 5,
  islandLevels: DEFAULT_ISLAND_LEVELS,
  appTitle: "Island Study Log",
  appSubtitle: "V7.0 Release",
  gasUrl: "",
  autoCloudSave: false,
  googleApiKey: ""
};

export const DEFAULT_USER_DATA: UserData = { exp: 0, logs: {} };

export const DEFAULT_LIBRARY: LibraryItem[] = [
  { id: 1, title: 'Google 翻譯', url: 'https://translate.google.com', category: '🛠️ 實用工具' },
  { id: 2, title: 'NotebookLM', url: 'https://notebooklm.google.com', category: '🤖 AI 助手' },
  { id: 3, title: 'Lofi Girl Music', url: 'https://lofigirl.com', category: '🎵 專注音樂' },
];

export const DEFAULT_CATEGORIES = ["📚 參考資料", "📺 影音教學", "🛠️ 實用工具", "🎵 專注音樂", "🤖 AI 助手"];

export const DEFAULT_GRADES: Grade[] = [{ 
    id: 'g_default', 
    name: '七年級', 
    subjects: [{ id: 'sub_default', name: '數學', rows: [] }] 
}];