module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
 moduleNameMapper: {
  "\\.(css|less|scss)$": "identity-obj-proxy",
  "^.*lib/supabase$": "<rootDir>/__mocks__/supabase.ts",
  "^.*lib/n8n$": "<rootDir>/__mocks__/n8n.ts",  
},
  transform: {
    "^.+\\.(ts|tsx)$": ["ts-jest", {
      diagnostics: false,
      tsconfig: { jsx: "react-jsx" }
    }]
  }
};