import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["GeistSans", "Arial", "sans-serif"],
        mono: ["GeistMono", "Courier", "monospace"],
      },
      screens: {
        xs: "320px", // Extra small devices
        sm: "640px", // Small devices
        md: "768px", // Medium devices
        lg: "1024px", // Large devices
        xl: "1280px", // Extra large devices
        "2xl": "1536px", // 2X large devices
      },
      fontSize: {
        "xs-mobile": "0.625rem", // Smallest mobile font size
        "sm-mobile": "0.75rem", // Small mobile font size
      },
    },
  },
  daisyui: {
    themes: [
      {
        teal: {
          // Base colors using the teal shades from the image
          "base-100": "#66b2b2", // Medium teal (#66b2b2)
          "base-200": "#008080", // Teal (#008080)
          "base-300": "#006666", // Dark teal (#006666)

          // Content colors with high contrast
          "base-content": "#ffffff", // White text for better readability

          // Primary colors
          primary: "#b2d8d8", // Light teal (#b2d8d8)
          "primary-content": "#004c4c", // Darkest teal for contrast

          // Secondary colors
          secondary: "#fea49f", // Salmon pink for accents
          "secondary-content": "#ffffff",

          // Accent colors
          accent: "#fbaf08", // Golden yellow
          "accent-content": "#000000",

          // Neutral colors
          neutral: "#004c4c", // Darkest teal (#004c4c)
          "neutral-content": "#ffffff",

          // State colors
          info: "#b2d8d8",
          "info-content": "#004c4c",
          success: "#007f4f", // Success green
          "success-content": "#ffffff",
          warning: "#fbaf08", // Warning yellow
          "warning-content": "#000000",
          error: "#fea49f", // Error pink
          "error-content": "#000000",
        },
      },
      {
        seafoam: {
          // Base colors from the palette
          "base-100": "#a3c1ad", // Light seafoam (#a3c1ad)
          "base-200": "#a0d6b4", // Mint green (#a0d6b4)
          "base-300": "#5f9ea0", // Teal blue (#5f9ea0)
          "base-400": "#317873", // Dark teal (#317873)
          "base-500": "#49796b", // Forest green (#49796b)
          "base-600": "#1a4741", // Very dark teal
          "base-700": "#0d3733", // Deeper teal
          "base-800": "#062825",

          // Primary colors with better contrast
          primary: "#317873", // Dark teal
          "primary-content": "#ffffff",

          // Secondary colors
          secondary: "#49796b", // Forest green
          "secondary-content": "#ffffff",

          // Accent with increased contrast
          accent: "#317873", // Darker teal for better readability
          "accent-content": "#ffffff",

          // Neutral shades
          neutral: "#317873", // Dark teal
          "neutral-content": "#ffffff",

          // Base content for better readability
          "base-content": "#1a4741", // Very dark teal for text

          // State colors
          info: "#5f9ea0",
          "info-content": "#ffffff",
          success: "#317873",
          "success-content": "#ffffff",
          warning: "#49796b",
          "warning-content": "#ffffff",
          error: "#49796b",
          "error-content": "#ffffff",

          // Theme variables
          "--rounded-box": "1rem",
          "--rounded-btn": "0.5rem",
          "--rounded-badge": "1.9rem",
          "--animation-btn": "0.25s",
          "--animation-input": "0.2s",
          "--btn-focus-scale": "0.95",
          "--border-btn": "1px",
          "--tab-border": "1px",
          "--tab-radius": "0.5rem",
        },
      },
      {
        navypink: {
          // Base colors
          "base-100": "#1A1B3B", // Navy background
          "base-200": "#252750", // Slightly lighter navy
          "base-300": "#2F325F", // Even lighter navy
          "base-content": "#ffffff", // White text

          // Primary colors
          primary: "#FF9BAB", // Salmon pink
          "primary-content": "#1A1B3B",

          // Secondary colors
          secondary: "#FF7A8A", // Darker pink
          "secondary-content": "#ffffff",

          // Accent colors
          accent: "#FFB4C0", // Light pink
          "accent-content": "#1A1B3B",

          // Neutral colors
          neutral: "#1A1B3B",
          "neutral-content": "#ffffff",

          // State colors
          info: "#7AA2F7",
          "info-content": "#ffffff",
          success: "#9ECE6A",
          "success-content": "#ffffff",
          warning: "#E0AF68",
          "warning-content": "#1A1B3B",
          error: "#F7768E",
          "error-content": "#ffffff",

          // Theme variables
          "--rounded-box": "1rem",
          "--rounded-btn": "0.5rem",
          "--rounded-badge": "1.9rem",
          "--animation-btn": "0.25s",
          "--animation-input": "0.2s",
          "--btn-focus-scale": "0.95",
          "--border-btn": "1px",
          "--tab-border": "1px",
          "--tab-radius": "0.5rem",
        },
      },
      {
        organic: {
          // Base colors
          "base-100": "#FFE4E4", // Light pink background
          "base-200": "#FFD4D4", // Slightly darker pink
          "base-300": "#FFC4C4", // Even darker pink
          "base-content": "#1A1B3B", // Dark text

          // Primary colors
          primary: "#FFB930", // Yellow blob
          "primary-content": "#1A1B3B",

          // Secondary colors
          secondary: "#24B47E", // Green blob
          "secondary-content": "#ffffff",

          // Accent colors
          accent: "#40C4E0", // Turquoise blob
          "accent-content": "#1A1B3B",

          // Neutral colors
          neutral: "#1A1B3B",
          "neutral-content": "#ffffff",

          // State colors
          info: "#40C4E0",
          "info-content": "#1A1B3B",
          success: "#24B47E",
          "success-content": "#ffffff",
          warning: "#FFB930",
          "warning-content": "#1A1B3B",
          error: "#FF6B6B",
          "error-content": "#ffffff",

          // Theme variables
          "--rounded-box": "1.5rem", // More rounded for organic feel
          "--rounded-btn": "1rem",
          "--rounded-badge": "2rem",
          "--animation-btn": "0.3s",
          "--animation-input": "0.2s",
          "--btn-focus-scale": "0.95",
          "--border-btn": "2px",
          "--tab-border": "2px",
          "--tab-radius": "1rem",
        },
      },
      {
        foundations: {
          // Base colors using the stepped blues from the image
          "base-100": "#EDE8F7", // Lightest lavender background
          "base-200": "#7091E6", // Mid blue (#7091E6)
          "base-300": "#3D52A0", // Navy blue (#3D52A0)
          "base-content": "#1A1B3B", // Dark text

          // Primary colors
          primary: "#3D52A0", // Navy blue
          "primary-content": "#ffffff",

          // Secondary colors
          secondary: "#7091E6", // Mid blue
          "secondary-content": "#ffffff",

          // Accent colors
          accent: "#8697C4", // Muted blue
          "accent-content": "#ffffff",

          // Neutral colors
          neutral: "#3D52A0",
          "neutral-content": "#ffffff",

          // State colors
          info: "#7091E6",
          "info-content": "#ffffff",
          success: "#ADBBDA",
          "success-content": "#1A1B3B",
          warning: "#EDE8F7",
          "warning-content": "#1A1B3B",
          error: "#FF6B6B",
          "error-content": "#ffffff",

          // Theme variables for modern tech feel
          "--rounded-box": "0.5rem",
          "--rounded-btn": "0.25rem",
          "--rounded-badge": "0.25rem",
          "--animation-btn": "0.2s",
          "--animation-input": "0.2s",
          "--btn-focus-scale": "0.98",
          "--border-btn": "1px",
          "--tab-border": "1px",
          "--tab-radius": "0.25rem",
        },
      },
      {
        steps: {
          // Base colors using the stepped layout from image
          "base-100": "#EDE8F7", // Lightest background
          "base-200": "#ADBBDA", // Light blue (#ADBBDA)
          "base-300": "#8697C4", // Mid blue (#8697C4)
          "base-400": "#7091E6", // Bright blue (#7091E6)
          "base-500": "#3D52A0", // Navy (#3D52A0)
          "base-content": "#1A1B3B", // Dark text

          // Primary colors
          primary: "#7091E6", // Bright blue
          "primary-content": "#ffffff",

          // Secondary colors
          secondary: "#3D52A0", // Navy
          "secondary-content": "#ffffff",

          // Accent colors
          accent: "#8697C4", // Mid blue
          "accent-content": "#ffffff",

          // Neutral colors
          neutral: "#3D52A0",
          "neutral-content": "#ffffff",

          // State colors
          info: "#7091E6",
          "info-content": "#ffffff",
          success: "#ADBBDA",
          "success-content": "#1A1B3B",
          warning: "#EDE8F7",
          "warning-content": "#1A1B3B",
          error: "#FF6B6B",
          "error-content": "#ffffff",

          // Theme variables for stepped/layered feel
          "--rounded-box": "0",
          "--rounded-btn": "0",
          "--rounded-badge": "0",
          "--animation-btn": "0.2s",
          "--animation-input": "0.2s",
          "--btn-focus-scale": "0.98",
          "--border-btn": "2px",
          "--tab-border": "2px",
          "--tab-radius": "0",
        },
      },
      {
        armchair: {
          // Base colors from the armchair image
          "base-100": "#EAE7DC", // Light cream background (#EAE7DC)
          "base-200": "#D8C3A5", // Beige (#D8C3A5)
          "base-300": "#8E8D8A", // Gray (#8E8D8A)
          "base-content": "#1A1B3B", // Dark text

          // Primary colors
          primary: "#E98074", // Coral pink (#E98074)
          "primary-content": "#ffffff",

          // Secondary colors
          secondary: "#E85A4F", // Darker coral (#E85A4F)
          "secondary-content": "#ffffff",

          // Accent colors
          accent: "#D8C3A5", // Beige accent
          "accent-content": "#1A1B3B",

          // Neutral colors
          neutral: "#8E8D8A",
          "neutral-content": "#ffffff",

          // State colors
          info: "#8E8D8A",
          "info-content": "#ffffff",
          success: "#D8C3A5",
          "success-content": "#1A1B3B",
          warning: "#E98074",
          "warning-content": "#ffffff",
          error: "#E85A4F",
          "error-content": "#ffffff",

          // Theme variables for vintage feel
          "--rounded-box": "0.5rem",
          "--rounded-btn": "0.25rem",
          "--rounded-badge": "0.25rem",
          "--animation-btn": "0.25s",
          "--animation-input": "0.2s",
          "--btn-focus-scale": "0.95",
          "--border-btn": "1px",
          "--tab-border": "1px",
          "--tab-radius": "0.25rem",
        },
      },

      {
        qed: {
          // Base colors from the QED Group image
          "base-100": "#026670", // Teal (#026670)
          "base-200": "#9FEDD7", // Mint green (#9FEDD7)
          "base-300": "#FEF9C7", // Light cream (#FEF9C7)
          "base-400": "#FCE181", // Yellow (#FCE181)
          "base-500": "#EDEAE5", // Light gray (#EDEAE5)

          primary: "#026670", // Teal
          "primary-content": "#ffffff",

          secondary: "#9FEDD7", // Mint green
          "secondary-content": "#026670",
        },
      },
      {
        terminology: {
          // Base colors from the typography terminology image
          "base-100": "#25274D", // Dark navy (#25274D)
          "base-200": "#464866", // Medium navy (#464866)
          "base-300": "#AAABB8", // Gray (#AAABB8)
          "base-400": "#2E9CCA", // Bright blue (#2E9CCA)
          "base-500": "#29648A", // Dark blue (#29648A)
          "base-content": "#ffffff", // White text

          // Primary colors
          primary: "#2E9CCA", // Bright blue
          "primary-content": "#ffffff",

          // Secondary colors
          secondary: "#29648A", // Dark blue
          "secondary-content": "#ffffff",

          // Accent colors
          accent: "#AAABB8", // Gray
          "accent-content": "#25274D",

          // Neutral colors
          neutral: "#464866",
          "neutral-content": "#ffffff",

          // State colors
          info: "#2E9CCA",
          "info-content": "#ffffff",
          success: "#29648A",
          "success-content": "#ffffff",
          warning: "#AAABB8",
          "warning-content": "#25274D",
          error: "#464866",
          "error-content": "#ffffff",

          // Theme variables for technical/typography feel
          "--rounded-box": "0",
          "--rounded-btn": "0",
          "--rounded-badge": "0",
          "--animation-btn": "0.2s",
          "--animation-input": "0.2s",
          "--btn-focus-scale": "0.98",
          "--border-btn": "1px",
          "--tab-border": "1px",
          "--tab-radius": "0",
        },
      },
      {
        chordsurfer: {
          // Base colors from the Chordsurfer image
          "base-100": "#EDC7B7", // Light pink (#EDC7B7)
          "base-200": "#EEE2DC", // Lighter pink (#EEE2DC)
          "base-300": "#BAB2B5", // Gray (#BAB2B5)
          "base-400": "#123C69", // Navy blue (#123C69)
          "base-500": "#AC3B61", // Dark pink (#AC3B61)
          "base-content": "#123C69", // Navy text for contrast

          // Primary colors
          primary: "#AC3B61", // Dark pink
          "primary-content": "#ffffff",

          // Secondary colors
          secondary: "#123C69", // Navy blue
          "secondary-content": "#ffffff",

          // Accent colors
          accent: "#BAB2B5", // Gray
          "accent-content": "#123C69",

          // Neutral colors
          neutral: "#123C69",
          "neutral-content": "#ffffff",

          // State colors
          info: "#123C69",
          "info-content": "#ffffff",
          success: "#AC3B61",
          "success-content": "#ffffff",
          warning: "#EDC7B7",
          "warning-content": "#123C69",
          error: "#AC3B61",
          "error-content": "#ffffff",

          // Theme variables for clean, modern feel
          "--rounded-box": "0.5rem",
          "--rounded-btn": "0.25rem",
          "--rounded-badge": "0.25rem",
          "--animation-btn": "0.2s",
          "--animation-input": "0.2s",
          "--btn-focus-scale": "0.98",
          "--border-btn": "1px",
          "--tab-border": "1px",
          "--tab-radius": "0.25rem",
        },
      },
    ],
    darkTheme: "teal",
  },
  plugins: [daisyui],
};

export default config;
