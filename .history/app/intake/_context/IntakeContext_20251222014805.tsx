"use client";

import { createContext, useContext, useState } from "react";

export type IntakeData = {
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

const IntakeContext = createContext<IntakeContextType | undefined>(undefined);

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
  const context = useContext(IntakeContext);
  if (!context) {
    throw new Error("useIntake must be used within IntakeProvider");
  }
  return context;
}
