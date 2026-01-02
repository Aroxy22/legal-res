"use client";

export default function WillDraft() {
  return (
    <div className="min-h-screen bg-white px-6 py-12">
      <div className="max-w-3xl mx-auto">
        {/* Banner */}
        <div className="mb-6 border border-yellow-300 bg-yellow-50 p-4 rounded-md">
          <p className="text-sm text-yellow-800">
            ⚠️ This is a preliminary draft generated for convenience only.
            It must be reviewed by a qualified lawyer before use or execution.
          </p>
        </div>

        <h2 className="text-3xl font-semibold text-textPrimary">
          Draft Will (For Review)
        </h2>

        <div className="mt-6 border border-borderSubtle rounded-md p-6 text-sm text-textSecondary whitespace-pre-line">
          {`I, [Full Name], residing at [City and State], being of sound mind,
do hereby declare this to be my last will and testament.

I direct that all my just debts and funeral expenses be paid as soon
as practicable after my demise.

I bequeath my assets, including but not limited to [Assets],
to the following beneficiaries: [Beneficiaries].

I appoint an executor to administer my estate in accordance
with applicable law.

Signed on this day in the presence of witnesses.`}
        </div>

        <div className="mt-8 flex gap-4">
          <button className="px-6 py-3 bg-primary text-white rounded-md">
            Share with lawyer
          </button>

          <button className="px-6 py-3 border border-borderSubtle rounded-md">
            Book review call
          </button>
        </div>
      </div>
    </div>
  );
}
