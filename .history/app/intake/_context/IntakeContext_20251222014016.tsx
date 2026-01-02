"use client";

import { createContext, useContext, useState } from "react";

type IntakeData = {
  category?: string;
  city?: string;
  court?: string;
  language?: string;
  urgency?: string;
  hasDocuments?: boolean;
  description?: string;
};

type IntakeContextType = {
  data: IntakeData;
  update: (values: Partial<IntakeData>) => void;
};

const IntakeContext = createContext<IntakeContextType | null>(null);

export function IntakeProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<IntakeData>({});

  const update = (values: Partial<IntakeData>) => {
    setData((prev) => ({ ...prev, ...values }));
  };

  return (
    <IntakeContext.Provider value={{ data, update }}>
      {children}
    </IntakeContext.Provider>
  );
}

export function useIntake() {
  const ctx = useContext(IntakeContext);
  if (!ctx) {
    throw new Error("useIntake must be used within IntakeProvider");
  }
  return ctx;
}
