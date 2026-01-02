// lib/willTemplate.ts

export type WillDraftInput = {
    fullName: string;
    cityAndState: string;
    assets: string;
    beneficiaries: string;
    executorName?: string;
    jurisdiction?: string;
    date?: string;
  };
  
  /**
   * Generates a conservative, review-ready will draft.
   * This function ONLY interpolates factual inputs.
   * Legal structure is fixed by design.
   */
  export function generateWillDraft(input: WillDraftInput): string {
    const {
      fullName,
      cityAndState,
      assets,
      beneficiaries,
      executorName,
      jurisdiction = "the applicable jurisdiction",
      date = "[Date]",
    } = input;
  
    return `
  LAST WILL AND TESTAMENT
  
  I, ${fullName}, residing at ${cityAndState}, being of sound mind and disposing
  capacity, do hereby declare this document to be my Last Will and Testament,
  made of my own free will and without any undue influence.
  
  1. REVOCATION OF PRIOR WILLS
  I hereby revoke all prior wills, codicils, and testamentary dispositions
  made by me at any time before the execution of this Will.
  
  2. PAYMENT OF DEBTS AND EXPENSES
  I direct that all my just debts, liabilities, and funeral expenses be paid
  as soon as practicable after my demise, in accordance with applicable law.
  
  3. DISTRIBUTION OF ASSETS
  I bequeath my movable and immovable assets, including but not limited to:
  ${assets}
  
  to the following beneficiaries:
  ${beneficiaries}
  
  The distribution of the above assets shall be carried out in accordance
  with applicable law and subject to review by a qualified legal professional.
  
  4. APPOINTMENT OF EXECUTOR
  I appoint ${
      executorName ?? "[Executor Name]"
    } as the Executor of this Will.
  If the appointed Executor is unable or unwilling to act, an alternate
  Executor may be appointed in accordance with applicable law.
  
  The Executor shall have all powers necessary to administer my estate
  lawfully and efficiently.
  
  5. GOVERNING LAW
  This Will shall be governed and interpreted in accordance with the laws
  applicable in ${jurisdiction}.
  
  IN WITNESS WHEREOF, I have signed this Will on ${date}, at ${cityAndState},
  in the presence of the undersigned witnesses, who have attested this Will
  in my presence and in the presence of each other.
  
  Signature of Testator: ______________________
  Name: ${fullName}
  Date: ${date}
  
  Witnesses:
  
  1. Witness Name: ______________________
     Address: ______________________
     Signature: ______________________
  
  2. Witness Name: ______________________
     Address: ______________________
     Signature: ______________________
  `;
  }
  